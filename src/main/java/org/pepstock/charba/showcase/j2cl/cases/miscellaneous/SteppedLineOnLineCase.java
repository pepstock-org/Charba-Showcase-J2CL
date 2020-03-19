package org.pepstock.charba.showcase.j2cl.cases.miscellaneous;

import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.Position;
import org.pepstock.charba.client.enums.SteppedLine;
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

public class SteppedLineOnLineCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final LineChart chartNoStepped = new LineChart();

	private final LineChart chartStepped = new LineChart();

	private final LineChart chartBeforeStepped = new LineChart();

	private final LineChart chartAfterStepped = new LineChart();

	public SteppedLineOnLineCase() {
		// ----------------------------------------------
		// Main element
		// ----------------------------------------------

		mainPanel = (HTMLTableElement) DomGlobal.document.createElement("table");
		mainPanel.width = "100%";
		mainPanel.cellPadding = "12";

		HTMLTableRowElement chartRow1 = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		chartRow1.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(chartRow1);

		HTMLTableCellElement chartCol11 = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		chartCol11.style.width = WidthUnionType.of("50%");
		chartRow1.appendChild(chartCol11);

		HTMLTableCellElement chartCol12 = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		chartCol12.style.width = WidthUnionType.of("50%");
		chartRow1.appendChild(chartCol12);

		HTMLTableRowElement chartRow2 = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		chartRow2.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(chartRow2);

		HTMLTableCellElement chartCol21 = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		chartCol21.style.width = WidthUnionType.of("50%");
		chartRow2.appendChild(chartCol21);

		HTMLTableCellElement chartCol22 = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		chartCol22.style.width = WidthUnionType.of("50%");
		chartRow2.appendChild(chartCol22);

		// ----------------------------------------------
		// Chart
		// ----------------------------------------------

		chartNoStepped.getOptions().setResponsive(true);
		chartNoStepped.getOptions().getLegend().setPosition(Position.TOP);
		chartNoStepped.getOptions().getTitle().setDisplay(true);
		chartNoStepped.getOptions().getTitle().setText("NO Stepped line");

		LineDataset dataset1 = chartNoStepped.newDataset();
		dataset1.setLabel("No stepped");
		IsColor color1 = GoogleChartColor.values()[0];
		dataset1.setBorderColor(color1.toHex());
		dataset1.setData(getRandomDigits(months));
		dataset1.setFill(Fill.FALSE);
		dataset1.setSteppedLine(SteppedLine.FALSE);
		chartNoStepped.getData().setLabels(getLabels());
		chartNoStepped.getData().setDatasets(dataset1);

		chartStepped.getOptions().setResponsive(true);
		chartStepped.getOptions().getLegend().setPosition(Position.TOP);
		chartStepped.getOptions().getTitle().setDisplay(true);
		chartStepped.getOptions().getTitle().setText("Stepped line");

		LineDataset dataset2 = chartStepped.newDataset();
		dataset2.setLabel("Stepped");
		IsColor color2 = GoogleChartColor.values()[1];
		dataset2.setBorderColor(color2.toHex());
		dataset2.setData(getRandomDigits(months));
		dataset2.setFill(Fill.FALSE);
		dataset2.setSteppedLine(SteppedLine.BEFORE);
		chartStepped.getData().setLabels(getLabels());
		chartStepped.getData().setDatasets(dataset2);

		chartBeforeStepped.getOptions().setResponsive(true);
		chartBeforeStepped.getOptions().getLegend().setPosition(Position.TOP);
		chartBeforeStepped.getOptions().getTitle().setDisplay(true);
		chartBeforeStepped.getOptions().getTitle().setText("BEFORE stepped line");

		LineDataset dataset3 = chartBeforeStepped.newDataset();
		dataset3.setLabel("Before Stepped");
		IsColor color3 = GoogleChartColor.values()[2];
		dataset3.setBorderColor(color3.toHex());
		dataset3.setData(getRandomDigits(months));
		dataset3.setFill(Fill.FALSE);
		dataset3.setSteppedLine(SteppedLine.BEFORE);
		chartBeforeStepped.getData().setLabels(getLabels());
		chartBeforeStepped.getData().setDatasets(dataset3);

		chartAfterStepped.getOptions().setResponsive(true);
		chartAfterStepped.getOptions().getLegend().setPosition(Position.TOP);
		chartAfterStepped.getOptions().getTitle().setDisplay(true);
		chartAfterStepped.getOptions().getTitle().setText("AFTER stepped line");

		LineDataset dataset4 = chartAfterStepped.newDataset();
		dataset4.setLabel("After Stepped");
		IsColor color4 = GoogleChartColor.values()[3];
		dataset4.setBorderColor(color4.toHex());
		dataset4.setData(getRandomDigits(months));
		dataset4.setFill(Fill.FALSE);
		dataset4.setSteppedLine(SteppedLine.AFTER);
		chartAfterStepped.getData().setLabels(getLabels());
		chartAfterStepped.getData().setDatasets(dataset4);
		chartCol11.appendChild(chartStepped.getChartElement().as());
		chartCol12.appendChild(chartNoStepped.getChartElement().as());
		chartCol21.appendChild(chartBeforeStepped.getChartElement().as());
		chartCol22.appendChild(chartAfterStepped.getChartElement().as());

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
		actionsCol.setAttribute("colspan", "2");
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
		newData(chartNoStepped);
		newData(chartStepped);
		newData(chartBeforeStepped);
		newData(chartAfterStepped);
	}

	private void newData(LineChart chart) {
		for (Dataset dataset : chart.getData().getDatasets()) {
			dataset.setData(getRandomDigits(months));
		}
		chart.update();
	}
}
