package org.pepstock.charba.showcase.j2cl.cases.extensions;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.callbacks.BackgroundColorCallback;
import org.pepstock.charba.client.callbacks.ScriptableContext;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.CartesianCategoryAxis;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.datalabels.DataLabelsOptions;
import org.pepstock.charba.client.datalabels.DataLabelsPlugin;
import org.pepstock.charba.client.datalabels.enums.Align;
import org.pepstock.charba.client.datalabels.enums.Anchor;
import org.pepstock.charba.client.datalabels.enums.Weight;
import org.pepstock.charba.client.dom.DOMBuilder;
import org.pepstock.charba.client.enums.DefaultPlugin;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.events.DatasetSelectionEvent;
import org.pepstock.charba.client.impl.callbacks.DataLabelsPointerHandler;
import org.pepstock.charba.client.items.DatasetItem;
import org.pepstock.charba.client.items.DatasetMetaItem;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.commons.LogView;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class DataLabelsListenersCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	private final LogView mylog = new LogView();

	public DataLabelsListenersCase() {
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
		chart.getOptions().setMaintainAspectRatio(true);
		chart.getOptions().setAspectRatio(3);
		chart.getOptions().getLegend().setDisplay(false);
		chart.getOptions().getTooltips().setEnabled(false);
		chart.getOptions().getLayout().getPadding().setTop(42);
		chart.getOptions().getLayout().getPadding().setRight(16);
		chart.getOptions().getLayout().getPadding().setBottom(32);
		chart.getOptions().getLayout().getPadding().setLeft(8);

		chart.getOptions().getPlugins().setEnabled(DefaultPlugin.LEGEND, false);
		chart.getOptions().getPlugins().setEnabled(DefaultPlugin.TITLE, false);

		LineDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		IsColor color1 = GoogleChartColor.values()[0];

		dataset1.setBackgroundColor(color1.toHex());
		dataset1.setBorderColor(color1.toHex());
		double[] values = getRandomDigits(months, false);
		dataset1.setData(values);
		dataset1.setFill(Fill.FALSE);

		DataLabelsOptions option1 = new DataLabelsOptions();
		option1.setAlign(Align.START);
		option1.setAnchor(Anchor.START);
		dataset1.setOptions(DataLabelsPlugin.ID, option1);

		LineDataset dataset2 = chart.newDataset();
		dataset2.setLabel("dataset 2");

		IsColor color2 = GoogleChartColor.values()[1];

		dataset2.setBackgroundColor(color2.toHex());
		dataset2.setBorderColor(color2.toHex());
		dataset2.setData(getRandomDigits(months, false));
		dataset2.setFill(Fill.FALSE);

		LineDataset dataset3 = chart.newDataset();
		dataset3.setLabel("dataset 2");

		IsColor color3 = GoogleChartColor.values()[2];

		dataset3.setBackgroundColor(color3.toHex());
		dataset3.setBorderColor(color3.toHex());
		dataset3.setData(getRandomDigits(months, false));
		dataset3.setFill(Fill.FALSE);

		DataLabelsOptions option3 = new DataLabelsOptions();
		option3.setAlign(Align.END);
		option3.setAnchor(Anchor.END);
		dataset3.setOptions(DataLabelsPlugin.ID, option3);

		CartesianCategoryAxis axis1 = new CartesianCategoryAxis(chart);
		axis1.setDisplay(true);
		axis1.getScaleLabel().setDisplay(true);
		axis1.getScaleLabel().setLabelString("Month");

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);
		axis2.getScaleLabel().setDisplay(true);
		axis2.getScaleLabel().setLabelString("Value");
		axis2.setStacked(true);

		chart.getOptions().getScales().setXAxes(axis1);
		chart.getOptions().getScales().setYAxes(axis2);

		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset1, dataset2, dataset3);

		DataLabelsOptions option = new DataLabelsOptions();
		option.setBackgroundColor(new BackgroundColorCallback() {

			@Override
			public String invoke(IsChart chart, ScriptableContext context) {
				if (context.isActive()) {
					return null;
				}
				LineDataset ds = (LineDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				return ds.getBackgroundColorAsString();
			}
		});
		option.setBorderRadius(4);
		option.setColor(HtmlColor.WHITE);
		option.getFont().setWeight(Weight.BOLD);

		MyListener listener = new MyListener();
		option.setListenersHandler(listener);

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
		
		// ----------------------------------------------
		// Log element
		// ----------------------------------------------
		
		HTMLTableRowElement logRow = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		logRow.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(logRow);

		HTMLTableCellElement logCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		logCol.style.width = WidthUnionType.of("100%");
		logCol.style.textAlign = "center";
		logCol.vAlign = "top";
		logRow.appendChild(logCol);
		logCol.appendChild(mylog.getElement());
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

	class MyListener extends DataLabelsPointerHandler {

		MyListener() {
			super();
		}

		@Override
		public boolean onLeave(IsChart chart, ScriptableContext context) {
			super.onLeave(chart, context);
			LineDataset ds = (LineDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
			mylog.addLogEvent("> LEAVE: Dataset index: " + context.getDatasetIndex() + ", data index: " + context.getIndex() + ", value(" + ds.getData().get(context.getIndex()) + ")");
			return true;
		}

		@Override
		public boolean onEnter(IsChart chart, ScriptableContext context) {
			super.onEnter(chart, context);
			LineDataset ds = (LineDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
			mylog.addLogEvent("> ENTER: Dataset index: " + context.getDatasetIndex() + ", data index: " + context.getIndex() + ", value(" + ds.getData().get(context.getIndex()) + ")");
			return true;
		}

		@Override
		public boolean onClick(IsChart chart, ScriptableContext context) {
			super.onClick(chart, context);
			LineDataset ds = (LineDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
			DatasetMetaItem meta = chart.getDatasetMeta(context.getDatasetIndex());
			DatasetItem item = meta.getDatasets().get(context.getIndex());
			mylog.addLogEvent("> CLICK: Dataset index: " + context.getDatasetIndex() + ", data index: " + context.getIndex() + ", value(" + ds.getData().get(context.getIndex()) + ")");
			chart.fireEvent(new DatasetSelectionEvent(DOMBuilder.get().createChangeEvent(), item));
			return true;
		}
	}
}
