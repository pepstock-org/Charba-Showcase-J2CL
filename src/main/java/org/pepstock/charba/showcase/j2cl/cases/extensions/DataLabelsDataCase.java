package org.pepstock.charba.showcase.j2cl.cases.extensions;

import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.callbacks.ColorCallback;
import org.pepstock.charba.client.colors.Color;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.CartesianCategoryAxis;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.datalabels.DataLabelsContext;
import org.pepstock.charba.client.datalabels.DataLabelsOptions;
import org.pepstock.charba.client.datalabels.DataLabelsPlugin;
import org.pepstock.charba.client.datalabels.callbacks.AlignCallback;
import org.pepstock.charba.client.datalabels.callbacks.FormatterCallback;
import org.pepstock.charba.client.datalabels.enums.Align;
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

public class DataLabelsDataCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	public DataLabelsDataCase() {
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
		chart.getOptions().getLayout().getPadding().setTop(32);
		chart.getOptions().getLayout().getPadding().setRight(24);
		chart.getOptions().getLayout().getPadding().setBottom(32);
		chart.getOptions().getLayout().getPadding().setLeft(16);
		chart.getOptions().getElements().getLine().setFill(false);

		chart.getOptions().getPlugins().setEnabled(DefaultPluginId.LEGEND, false);
		chart.getOptions().getPlugins().setEnabled(DefaultPluginId.TITLE, false);


		LineDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		IsColor color1 = GoogleChartColor.values()[0];

		dataset1.setBackgroundColor(color1.toHex());
		dataset1.setBorderColor(color1.toHex());
		double[] values = getRandomDigits(months, false);
		dataset1.setData(values);

		CartesianCategoryAxis axis1 = new CartesianCategoryAxis(chart);
		axis1.setDisplay(true);
		axis1.getTitle().setDisplay(true);
		axis1.getTitle().setText("Month");

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);
		axis2.getTitle().setDisplay(true);
		axis2.getTitle().setText("Value");
		axis2.setStacked(true);

		chart.getOptions().getScales().setAxes(axis1, axis2);

		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset1);

		DataLabelsOptions option = new DataLabelsOptions();
		option.setBackgroundColor(new Color(255, 255, 255).alpha(0.7));
		option.setBorderColor(new Color(128, 128, 128).alpha(0.7));
		option.setBorderRadius(4);
		option.setBorderWidth(1);
		option.setOffset(8);
		option.getFont().setSize(11);
		option.getFont().setWeight(Weight.BOLD);
		option.setAlign(new AlignCallback() {

			@Override
			public Align invoke(DataLabelsContext context) {
				LineDataset ds = (LineDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				double curr = ds.getData().get(context.getDataIndex());
				double prev = context.getDataIndex() > 0 ? ds.getData().get(context.getDataIndex() - 1) : 0;
				double next = context.getDataIndex() < ds.getData().size() ? ds.getData().get(context.getDataIndex() + 1) : 0;
				return prev < curr && next < curr ? Align.END : prev > curr && next > curr ? Align.START : Align.CENTER;
			}

		});
		option.setColor(new ColorCallback<DataLabelsContext>() {

			@Override
			public IsColor invoke(DataLabelsContext context) {
				LineDataset ds = (LineDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				double value = ds.getData().get(context.getDataIndex());
				double diff = context.getDataIndex() > 0 ? value - ds.getData().get(context.getDataIndex() - 1) : 0;
				return diff < 0 ? HtmlColor.RED : diff > 0 ? HtmlColor.GREEN : HtmlColor.GRAY;
			}

		});
		option.setFormatter(new FormatterCallback() {

			@Override
			public String invoke(DataLabelsContext context, DataItem dataItem) {
				LineDataset ds = (LineDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				double diff = context.getDataIndex() > 0 ? dataItem.getValue() - ds.getData().get(context.getDataIndex() - 1) : 0;
				StringBuffer sb = new StringBuffer();
				sb.append(diff > 0 ? '\u25B2' : diff < 0 ? '\u25BC' : '\u25C6');
				return sb.append(" ").append(Math.round(dataItem.getValue())).toString();
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
		addData(chart, false);
	}

	protected void handleRemoveData() {
		removeData(chart);
	}

}
