package org.pepstock.charba.showcase.j2cl.cases.extensions;

import org.pepstock.charba.client.PieChart;
import org.pepstock.charba.client.callbacks.ColorCallback;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.PieDataset;
import org.pepstock.charba.client.datalabels.DataLabelsContext;
import org.pepstock.charba.client.datalabels.DataLabelsOptions;
import org.pepstock.charba.client.datalabels.DataLabelsPlugin;
import org.pepstock.charba.client.datalabels.LabelItem;
import org.pepstock.charba.client.datalabels.callbacks.FormatterCallback;
import org.pepstock.charba.client.datalabels.callbacks.OpacityCallback;
import org.pepstock.charba.client.datalabels.enums.Align;
import org.pepstock.charba.client.datalabels.enums.Anchor;
import org.pepstock.charba.client.enums.DefaultPluginId;
import org.pepstock.charba.client.enums.Weight;
import org.pepstock.charba.client.items.DataItem;
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

		chart.getOptions().getPlugins().setEnabled(DefaultPluginId.LEGEND, false);
		chart.getOptions().getPlugins().setEnabled(DefaultPluginId.TITLE, false);

		PieDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");
		dataset1.setBackgroundColor(getSequenceColors(DATASET_NUMBER, 1));
		dataset1.setData(getRandomDigits(DATASET_NUMBER, false));

		DataLabelsOptions option1 = new DataLabelsOptions();

		LabelItem index = option1.getLabels().createLabel("index");
		index.setAlign(Align.END);
		index.setAnchor(Anchor.END);
		index.setDisplay(true);
		index.getFont().setSize(18);
		index.setColor(new ColorCallback<DataLabelsContext>() {

			@Override
			public Object invoke(DataLabelsContext context) {
				PieDataset ds = (PieDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				return ds.getBackgroundColorAsString().get(context.getDataIndex());
			}
		});
		index.setOffset(8);
		index.setFormatter(new FormatterCallback() {

			@Override
			public String invoke(DataLabelsContext context, DataItem dataItem) {
				return context.isActive() ? "index" : "#" + (context.getDataIndex() + 1);
			}
		});

		index.setOpacity(new OpacityCallback() {

			@Override
			public Double invoke(DataLabelsContext context) {
				return context.isActive() ? 1D : 0.5D;
			}
		});

		LabelItem name = option1.getLabels().createLabel("name");
		name.setAlign(Align.TOP);
		name.getFont().setSize(18);
		name.setDisplay(true);
		name.setFormatter(new FormatterCallback() {

			@Override
			public String invoke(DataLabelsContext context, DataItem dataItem) {
				return context.isActive() ? "name" : chart.getData().getLabels().getString(context.getDataIndex());
			}
		});

		LabelItem value = option1.getLabels().createLabel("value");
		value.setAlign(Align.BOTTOM);
		value.setBackgroundColor(new ColorCallback<DataLabelsContext>() {

			@Override
			public Object invoke(DataLabelsContext context) {
				PieDataset ds = (PieDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				double value = ds.getData().get(context.getDataIndex());
				IsColor color = ds.getBackgroundColor().get(context.getDataIndex());
				return value > 50 ? HtmlColor.WHITE : color;
			}
		});
		value.setBorderColor(HtmlColor.WHITE);
		value.setBorderWidth(2);
		value.setBorderRadius(4);
		value.setColor(new ColorCallback<DataLabelsContext>() {

			@Override
			public Object invoke(DataLabelsContext context) {
				PieDataset ds = (PieDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				double value = ds.getData().get(context.getDataIndex());
				return value > 50 ? HtmlColor.BLACK : HtmlColor.WHITE;
			}
		});
		value.setFormatter(new FormatterCallback() {

			@Override
			public String invoke(DataLabelsContext context, DataItem dataItem) {
				return context.isActive() ? "value" : String.valueOf(dataItem.getValue());
			}
		});
		value.getPadding().set(6);
		value.setDisplay(true);
		
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
