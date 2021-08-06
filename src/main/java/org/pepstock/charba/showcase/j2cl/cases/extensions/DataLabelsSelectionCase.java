package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.HashMap;
import java.util.Map;

import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.callbacks.ColorCallback;
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
import org.pepstock.charba.client.datalabels.enums.Align;
import org.pepstock.charba.client.datalabels.events.ClickEventHandler;
import org.pepstock.charba.client.enums.DefaultPluginId;
import org.pepstock.charba.client.enums.Weight;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.commons.Toast;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class DataLabelsSelectionCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	private final Map<Integer, SelectionItem> items = new HashMap<>();

	public DataLabelsSelectionCase() {
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

		DataLabelsOptions option1 = new DataLabelsOptions();
		option1.setAlign(Align.START);
		dataset1.setOptions(DataLabelsPlugin.ID, option1);

		LineDataset dataset2 = chart.newDataset();
		dataset2.setLabel("dataset 2");

		IsColor color2 = GoogleChartColor.values()[1];

		dataset2.setBackgroundColor(color2.toHex());
		dataset2.setBorderColor(color2.toHex());
		dataset2.setData(getRandomDigits(months, false));

		LineDataset dataset3 = chart.newDataset();
		dataset3.setLabel("dataset 2");

		IsColor color3 = GoogleChartColor.values()[2];

		dataset3.setBackgroundColor(color3.toHex());
		dataset3.setBorderColor(color3.toHex());
		dataset3.setData(getRandomDigits(months, false));

		DataLabelsOptions option3 = new DataLabelsOptions();
		option3.setAlign(Align.END);
		dataset3.setOptions(DataLabelsPlugin.ID, option3);

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
		chart.getData().setDatasets(dataset1, dataset2, dataset3);

		DataLabelsOptions option = new DataLabelsOptions();
		option.setBackgroundColor(new ColorCallback<DataLabelsContext>() {

			@Override
			public IsColor invoke(DataLabelsContext context) {
				LineDataset ds = (LineDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				int key = context.getDatasetIndex() * 1000 + context.getDataIndex();
				return items.containsKey(key) ? ds.getBackgroundColor() : HtmlColor.WHITE;
			}
		});
		option.setBorderColor(new ColorCallback<DataLabelsContext>() {

			@Override
			public IsColor invoke(DataLabelsContext context) {
				LineDataset ds = (LineDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				return ds.getBackgroundColor();
			}
		});
		option.setColor(new ColorCallback<DataLabelsContext>() {

			@Override
			public IsColor invoke(DataLabelsContext context) {
				LineDataset ds = (LineDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				int key = context.getDatasetIndex() * 1000 + context.getDataIndex();
				return !items.containsKey(key) ? ds.getBackgroundColor() : HtmlColor.WHITE;
			}
		});
		option.setBorderRadius(16);
		option.setBorderWidth(1);
		option.setOffset(8);
		option.getPadding().set(4);
		option.getFont().setWeight(Weight.BOLD);

		option.getListeners().setClickEventHandler(new ClickEventHandler() {

			@Override
			public boolean onClick(DataLabelsContext context) {
				int key = context.getDatasetIndex() * 1000 + context.getDataIndex();
				if (items.containsKey(key)) {
					items.remove(key);
				} else {
					LineDataset ds = (LineDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
					items.put(key, new SelectionItem(context.getDatasetIndex(), context.getDataIndex(), ds.getData().get(context.getDataIndex())));
				}
				if (!items.isEmpty()) {
					StringBuilder sb = new StringBuilder();
					for (SelectionItem item : items.values()) {
						sb.append("<b>").append(item.toString()).append("</b><br>");
					}
					new Toast("Dataset Selected!", sb.toString()).show();
				}
				return true;
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
		items.clear();
		chart.update();
	}

	protected void handleAddData() {
		addData(chart, false);
	}

	protected void handleRemoveData() {
		items.clear();
		removeData(chart);
	}

	static final class SelectionItem {

		private final int datasetIndex;

		private final int index;

		private final double value;

		SelectionItem(int datasetIndex, int index, double value) {
			super();
			this.datasetIndex = datasetIndex;
			this.index = index;
			this.value = value;
		}

		public int getDatasetIndex() {
			return datasetIndex;
		}

		public int getIndex() {
			return index;
		}

		public double getValue() {
			return value;
		}

		@Override
		public String toString() {
			return "SelectionItem [datasetIndex=" + datasetIndex + ", index=" + index + ", value=" + value + "]";
		}

	}
}
