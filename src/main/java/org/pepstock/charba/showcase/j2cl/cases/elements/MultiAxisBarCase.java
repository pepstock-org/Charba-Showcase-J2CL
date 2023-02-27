package org.pepstock.charba.showcase.j2cl.cases.elements;

import org.pepstock.charba.client.BarChart;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.BarDataset;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.enums.AxisPosition;
import org.pepstock.charba.client.enums.DefaultInteractionMode;
import org.pepstock.charba.client.enums.Position;
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

public class MultiAxisBarCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final BarChart chart = new BarChart();

	public MultiAxisBarCase() {
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
		chart.getOptions().getLegend().setPosition(Position.TOP);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Multiple axes on bar chart");
		chart.getOptions().getTooltips().setMode(DefaultInteractionMode.INDEX);
		chart.getOptions().getTooltips().setIntersect(true);

		CartesianLinearAxis axis1 = new CartesianLinearAxis(chart, "y-axis-1");
		axis1.setPosition(AxisPosition.LEFT);
		axis1.setDisplay(true);

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart, "y-axis-2");
		axis2.setPosition(AxisPosition.RIGHT);
		axis2.setDisplay(true);
		axis2.getGrid().setDrawOnChartArea(false);

		chart.getOptions().getScales().setAxes(axis1, axis2);

		BarDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		dataset1.setBackgroundColor(getSequenceColors(months, 0.2));
		dataset1.setBorderColor(getSequenceColors(months, 1));
		dataset1.setBorderWidth(1);
		dataset1.setData(getRandomDigits(months));
		dataset1.setYAxisID("y-axis-1");

		BarDataset dataset2 = chart.newDataset();
		dataset2.setLabel("dataset 2");
		dataset2.setBorderWidth(1);
		dataset2.setData(getRandomDigits(months));
		dataset2.setYAxisID("y-axis-2");

		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset1, dataset2);

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
			dataset.setData(getRandomDigits(months));
		}
		chart.update();
	}

}
