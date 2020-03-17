package org.pepstock.charba.showcase.j2cl.cases.extensions;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.PieChart;
import org.pepstock.charba.client.callbacks.BackgroundColorCallback;
import org.pepstock.charba.client.callbacks.ScriptableContext;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.PieDataset;
import org.pepstock.charba.client.datalabels.DataLabelsOptions;
import org.pepstock.charba.client.datalabels.DataLabelsPlugin;
import org.pepstock.charba.client.datalabels.callbacks.ColorCallback;
import org.pepstock.charba.client.datalabels.callbacks.FormatterCallback;
import org.pepstock.charba.client.datalabels.callbacks.OpacityCallback;
import org.pepstock.charba.client.datalabels.enums.Align;
import org.pepstock.charba.client.datalabels.enums.Anchor;
import org.pepstock.charba.client.datalabels.enums.Weight;
import org.pepstock.charba.client.enums.DefaultPlugin;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class DataLabelsMultiLabelsCase extends BaseComposite {

	private static final int DATASET_NUMBER = 4;

	private final HTMLTableElement mainPanel;

	private final PieChart chart = new PieChart();

	public DataLabelsMultiLabelsCase() {
		// ----------------------------------------------
		// Main element
		// ----------------------------------------------

		mainPanel = (HTMLTableElement) DomGlobal.document.createElement("table");
		mainPanel.width = "100%";
		mainPanel.cellPadding = "12";

		HTMLTableRowElement chartRow = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		chartRow.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(chartRow);

		HTMLTableCellElement chartCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		chartCol.style.width = WidthUnionType.of("100%");
		chartRow.appendChild(chartCol);

		// ----------------------------------------------
		// Chart
		// ----------------------------------------------

		chart.getOptions().setResponsive(true);
		chart.getOptions().getLegend().setDisplay(false);
		chart.getOptions().getTooltips().setEnabled(false);
		chart.getOptions().getLayout().getPadding().setTop(42);
		chart.getOptions().getLayout().getPadding().setRight(16);
		chart.getOptions().getLayout().getPadding().setBottom(32);
		chart.getOptions().getLayout().getPadding().setLeft(8);

		chart.getOptions().getPlugins().setEnabled(DefaultPlugin.LEGEND, false);
		chart.getOptions().getPlugins().setEnabled(DefaultPlugin.TITLE, false);

		PieDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");
		dataset1.setBackgroundColor(getSequenceColors(DATASET_NUMBER, 1));
		dataset1.setData(getRandomDigits(DATASET_NUMBER, false));

		DataLabelsOptions option1 = new DataLabelsOptions();

		DataLabelsOptions index = new DataLabelsOptions();
		index.setAlign(Align.END);
		index.setAnchor(Anchor.END);
		index.setDisplay(true);
		index.setColor(new ColorCallback() {

			@Override
			public Object invoke(IsChart chart, ScriptableContext context) {
				PieDataset ds = (PieDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				return ds.getBackgroundColorAsString().get(context.getIndex());
			}
		});
		index.setOffset(8);
		index.setFormatter(new FormatterCallback() {

			@Override
			public String invoke(IsChart chart, double value, ScriptableContext context) {
				return context.isActive() ? "index" : "#" + (context.getIndex() + 1);
			}
		});

		index.setOpacity(new OpacityCallback() {

			@Override
			public Double invoke(IsChart chart, ScriptableContext context) {
				return context.isActive() ? 1D : 0.5D;
			}
		});
		option1.getLabels().setLabel("index", index);

		DataLabelsOptions name = new DataLabelsOptions();
		name.setAlign(Align.TOP);
		name.getFont().setSize(18);
		name.setDisplay(true);
		name.setFormatter(new FormatterCallback() {

			@Override
			public String invoke(IsChart chart, double value, ScriptableContext context) {
				return context.isActive() ? "name" : chart.getData().getLabels().getString(context.getIndex());
			}
		});
		option1.getLabels().setLabel("name", name);

		DataLabelsOptions value = new DataLabelsOptions();
		value.setAlign(Align.BOTTOM);
		value.setBackgroundColor(new BackgroundColorCallback() {

			@Override
			public Object invoke(IsChart chart, ScriptableContext context) {
				PieDataset ds = (PieDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				double value = ds.getData().get(context.getIndex());
				IsColor color = ds.getBackgroundColor().get(context.getIndex());
				return value > 50 ? HtmlColor.WHITE : color;
			}
		});
		value.setBorderColor(HtmlColor.WHITE);
		value.setBorderWidth(2);
		value.setBorderRadius(4);
		value.setColor(new ColorCallback() {

			@Override
			public Object invoke(IsChart chart, ScriptableContext context) {
				PieDataset ds = (PieDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				double value = ds.getData().get(context.getIndex());
				return value > 50 ? HtmlColor.BLACK : HtmlColor.WHITE;
			}
		});
		value.setFormatter(new FormatterCallback() {

			@Override
			public String invoke(IsChart chart, double value, ScriptableContext context) {
				return context.isActive() ? "value" : String.valueOf(value);
			}
		});
		value.getPadding().set(4);
		value.setDisplay(true);
		option1.getLabels().setLabel("value", value);

		dataset1.setOptions(DataLabelsPlugin.ID, option1);

		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset1);

		DataLabelsOptions option = new DataLabelsOptions();
		option.setColor(HtmlColor.WHITE);
		option.getFont().setWeight(Weight.BOLD);
		option.setDisplay(false);
		option.setOffset(0);
		option.getPadding().set(0);

		chart.getOptions().getPlugins().setOptions(DataLabelsPlugin.ID, option);

		DataLabelsOptions myOptions = dataset1.getOptions(DataLabelsPlugin.ID, DataLabelsPlugin.FACTORY);
		DataLabelsOptions index1 = myOptions.getLabels().getLabel("index");
		index1.getFont().setSize(18);
		chartCol.appendChild(chart.getChartElement().as());

		// ----------------------------------------------
		// Actions element
		// ----------------------------------------------
		
		HTMLTableRowElement actionsRow = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		actionsRow.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(actionsRow);

		HTMLTableCellElement actionsCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		actionsCol.style.width = WidthUnionType.of("100%");
		actionsCol.style.textAlign = "center";
		actionsCol.vAlign = "middle";
		actionsRow.appendChild(actionsCol);

		HTMLButtonElement randomize = (HTMLButtonElement) DomGlobal.document.createElement("button");
		randomize.onclick = (p0) -> {
			handleRandomize();
			return null;
		};
		randomize.className = "gwt-Button";
		randomize.textContent = "Randomize data";
		randomize.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(randomize);

		HTMLButtonElement github = (HTMLButtonElement) DomGlobal.document.createElement("button");
		github.onclick = (p0) -> {
			DomGlobal.window.open(getUrl(), "_blank", "");
			return null;
		};
		github.className = "gwt-Button";
		HTMLImageElement img = (HTMLImageElement) DomGlobal.document.createElement("img");
		img.src = "images/GitHub-Mark-32px.png";
		github.appendChild(img);
		actionsCol.appendChild(github);
	}

	@Override
	public HTMLElement getElement() {
		return mainPanel;
	}
	
	protected void handleRandomize() {
		for (Dataset dataset : chart.getData().getDatasets()) {
			dataset.setData(getRandomDigits(DATASET_NUMBER, false));
		}
		chart.update();
	}
}
