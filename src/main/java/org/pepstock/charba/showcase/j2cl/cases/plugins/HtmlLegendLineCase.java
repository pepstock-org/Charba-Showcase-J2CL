package org.pepstock.charba.showcase.j2cl.cases.plugins;

import java.util.List;

import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.CartesianCategoryAxis;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.DefaultInteractionMode;
import org.pepstock.charba.client.impl.plugins.HtmlLegend;
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

public class HtmlLegendLineCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	public HtmlLegendLineCase() {
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
		chart.getOptions().getLegend().setDisplay(true);
		chart.getOptions().getLegend().setReverse(true);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("HTML legend with reverse on line chart");
		chart.getOptions().getTooltips().setMode(DefaultInteractionMode.INDEX);
		chart.getOptions().getTooltips().setIntersect(false);
		chart.getOptions().getHover().setMode(DefaultInteractionMode.NEAREST);
		chart.getOptions().getHover().setIntersect(true);

		List<Dataset> datasets = chart.getData().getDatasets(true);

		LineDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		IsColor color1 = GoogleChartColor.values()[0];

		dataset1.setBackgroundColor(color1.toHex());
		dataset1.setBorderColor(color1.toHex());
		dataset1.setFill(false);
		double[] values = getRandomDigits(months);
		List<Double> data = dataset1.getData(true);
		for (int i = 0; i < values.length; i++) {
			data.add(values[i]);
		}
		datasets.add(dataset1);

		LineDataset dataset2 = chart.newDataset();
		dataset2.setLabel("dataset 2");

		IsColor color2 = GoogleChartColor.values()[1];

		dataset2.setBackgroundColor(color2.toHex());
		dataset2.setBorderColor(color2.toHex());
		dataset2.setData(getRandomDigits(months));
		dataset2.setFill(false);
		datasets.add(dataset2);

		CartesianCategoryAxis axis1 = new CartesianCategoryAxis(chart);
		axis1.setDisplay(true);
		axis1.getTitle().setDisplay(true);
		axis1.getTitle().setText("Month");

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);
		axis2.getTitle().setDisplay(true);
		axis2.getTitle().setText("Value");

		chart.getOptions().getScales().setAxes(axis1, axis2);

		chart.getData().setLabels(getLabels());

		chart.getPlugins().add(HtmlLegend.get());

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

		HTMLButtonElement addDataset = (HTMLButtonElement) DomGlobal.document.createElement("button");
		addDataset.onclick = (p0) -> {
			handleAddDataset();
			return null;
		};
		addDataset.className = "gwt-Button";
		addDataset.textContent = "Add dataset";
		addDataset.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(addDataset);

		HTMLButtonElement removeDataset = (HTMLButtonElement) DomGlobal.document.createElement("button");
		removeDataset.onclick = (p0) -> {
			handleRemoveDataset();
			return null;
		};
		removeDataset.className = "gwt-Button";
		removeDataset.textContent = "Remove dataset";
		removeDataset.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(removeDataset);

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
			dataset.setData(getRandomDigits(months));
		}
		chart.update();
	}

	protected void handleAddDataset() {
		List<Dataset> datasets = chart.getData().getDatasets();
		LineDataset dataset = chart.newDataset();
		dataset.setLabel("dataset " + (datasets.size() + 1));
		IsColor color = GoogleChartColor.values()[datasets.size()];
		dataset.setBackgroundColor(color.toHex());
		dataset.setBorderColor(color.toHex());
		dataset.setData(getRandomDigits(months));
		dataset.setFill(false);
		datasets.add(dataset);
		chart.update();
	}

	protected void handleRemoveDataset() {
		removeDataset(chart);
	}

	protected void handleAddData() {
		addData(chart);
	}

	protected void handleRemoveData() {
		removeData(chart);
	}

}
