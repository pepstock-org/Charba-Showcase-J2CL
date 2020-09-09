package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.List;

import org.pepstock.charba.client.DoughnutChart;
import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.callbacks.BackgroundColorCallback;
import org.pepstock.charba.client.callbacks.ScriptableContext;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.DoughnutDataset;
import org.pepstock.charba.client.datalabels.DataLabelsOptions;
import org.pepstock.charba.client.datalabels.DataLabelsPlugin;
import org.pepstock.charba.client.datalabels.callbacks.DisplayCallback;
import org.pepstock.charba.client.datalabels.callbacks.FormatterCallback;
import org.pepstock.charba.client.datalabels.enums.Anchor;
import org.pepstock.charba.client.enums.DefaultPluginId;
import org.pepstock.charba.client.enums.Display;
import org.pepstock.charba.client.enums.Weight;
import org.pepstock.charba.client.impl.callbacks.Percentage;
import org.pepstock.charba.client.items.DataItem;
import org.pepstock.charba.client.items.UndefinedValues;
import org.pepstock.charba.client.utils.Utilities;
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

public class DataLabelsDoughnutCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final DoughnutChart chart = new DoughnutChart();

	public DataLabelsDoughnutCase() {
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

		DoughnutDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");
		dataset1.setBackgroundColor(getSequenceColors(months, 1));
		dataset1.setData(getRandomDigits(months, false));

		DataLabelsOptions option1 = new DataLabelsOptions();
		option1.setAnchor(Anchor.END);
		dataset1.setOptions(DataLabelsPlugin.ID, option1);

		DoughnutDataset dataset2 = chart.newDataset();
		dataset2.setLabel("dataset 1");
		dataset2.setBackgroundColor(getSequenceColors(months, 1));
		dataset2.setData(getRandomDigits(months, false));

		DataLabelsOptions option2 = new DataLabelsOptions();
		option2.setAnchor(Anchor.CENTER);
		option2.setBackgroundColor(UndefinedValues.STRING);
		option2.setBorderWidth(0);
		dataset2.setOptions(DataLabelsPlugin.ID, option2);

		DoughnutDataset dataset3 = chart.newDataset();
		dataset3.setLabel("dataset 1");
		dataset3.setBackgroundColor(getSequenceColors(months, 1));
		dataset3.setData(getRandomDigits(months, false));

		DataLabelsOptions option3 = new DataLabelsOptions();
		option3.setAnchor(Anchor.START);
		dataset3.setOptions(DataLabelsPlugin.ID, option3);

		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset1, dataset2, dataset3);

		DataLabelsOptions option = new DataLabelsOptions();
		option.setBackgroundColor(new BackgroundColorCallback() {

			@Override
			public String invoke(IsChart chart, ScriptableContext context) {
				DoughnutDataset ds = (DoughnutDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				return ds.getBackgroundColorAsString().get(context.getIndex());
			}

		});
		option.setDisplay(new DisplayCallback() {

			@Override
			public Display invoke(IsChart chart, ScriptableContext context) {
				Dataset ds = chart.getData().getDatasets().get(context.getDatasetIndex());
				int count = ds.getData().size();
				double value = ds.getData().get(context.getIndex());
				return value > count * 1.5D ? Display.TRUE : Display.FALSE;
			}
		});
		option.setBorderColor(HtmlColor.WHITE);
		option.setBorderRadius(25);
		option.setBorderWidth(2);
		option.setColor(HtmlColor.WHITE);
		option.getFont().setWeight(Weight.BOLD);
		option.setFormatter(new FormatterCallback() {

			@Override
			public String invoke(IsChart chart, DataItem dataItem, ScriptableContext context) {
				double percentage = Percentage.compute(chart, dataItem.getValue(), context, false);
				return Utilities.applyPrecision(percentage * 100, 1) + "%";
			}

		});

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

		HTMLButtonElement addData = (HTMLButtonElement) DomGlobal.document.createElement("button");
		addData.onclick = (p0) -> {
			handleAddData();
			return null;
		};
		addData.className = "gwt-Button";
		addData.textContent = "Add data";
		addData.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(addData);

		HTMLButtonElement removeData = (HTMLButtonElement) DomGlobal.document.createElement("button");
		removeData.onclick = (p0) -> {
			handleRemoveData();
			return null;
		};
		removeData.className = "gwt-Button";
		removeData.textContent = "Remove data";
		removeData.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(removeData);

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
			dataset.setData(getRandomDigits(months, false));
		}
		chart.update();
	}

	protected void handleAddData() {
		if (months < 12) {
			chart.getData().getLabels().add(getLabel());
			months++;
			List<Dataset> datasets = chart.getData().getDatasets();
			for (Dataset ds : datasets) {
				DoughnutDataset pds = (DoughnutDataset) ds;
				pds.setBackgroundColor(getSequenceColors(months, 1));
				pds.getData().add(getRandomDigit(false));
			}
			chart.update();
		}
	}

	protected void handleRemoveData() {
		removeData(chart);
	}
}
