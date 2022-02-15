package org.pepstock.charba.showcase.j2cl.cases.extensions;

import org.pepstock.charba.client.ScatterChart;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.ScatterDataset;
import org.pepstock.charba.client.enums.DefaultTransitionKey;
import org.pepstock.charba.client.zoom.Amount;
import org.pepstock.charba.client.zoom.ZoomOptions;
import org.pepstock.charba.client.zoom.ZoomPlugin;
import org.pepstock.charba.client.zoom.enums.Mode;
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

public class ZoomApiZoomCase extends BaseComposite {

	private static final int AMOUNT_OF_POINTS = 120;

	private final HTMLTableElement mainPanel;

	private final ScatterChart chart = new ScatterChart();
	
	public ZoomApiZoomCase() {
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
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Programmatically zoom on scatter chart");

		ScatterDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		IsColor color1 = GoogleChartColor.values()[0];

		dataset1.setBackgroundColor(color1.toHex());
		dataset1.setBorderColor(color1.toHex());

		double[] xs1 = getRandomDigits(AMOUNT_OF_POINTS);
		double[] ys1 = getRandomDigits(AMOUNT_OF_POINTS);
		DataPoint[] dp1 = new DataPoint[AMOUNT_OF_POINTS];
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			dp1[i] = new DataPoint();
			dp1[i].setX(xs1[i]);
			dp1[i].setY(ys1[i]);
		}
		dataset1.setDataPoints(dp1);

		ScatterDataset dataset2 = chart.newDataset();
		dataset2.setLabel("dataset 2");

		IsColor color2 = GoogleChartColor.values()[1];

		dataset2.setBackgroundColor(color2.toHex());
		dataset2.setBorderColor(color2.toHex());
		double[] xs2 = getRandomDigits(AMOUNT_OF_POINTS);
		double[] ys2 = getRandomDigits(AMOUNT_OF_POINTS);
		DataPoint[] dp2 = new DataPoint[AMOUNT_OF_POINTS];
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			dp2[i] = new DataPoint();
			dp2[i].setX(xs2[i]);
			dp2[i].setY(ys2[i]);
		}
		dataset2.setDataPoints(dp2);

		chart.getData().setDatasets(dataset1, dataset2);

		ZoomOptions options = new ZoomOptions();
		options.getPan().setEnabled(false);
		options.getZoom().getWheel().setEnabled(true);
		options.getZoom().setMode(Mode.XY);
		
		chart.getOptions().getPlugins().setOptions(ZoomPlugin.ID, options);

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

		HTMLButtonElement reset = (HTMLButtonElement) DomGlobal.document.createElement("button");
		reset.onclick = (p0) -> {
			handleResetZoom();
			return null;
		};
		reset.className = "gwt-Button";
		reset.textContent = "Reset zoom";
		reset.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(reset);

		HTMLButtonElement zoomPlus10 = (HTMLButtonElement) DomGlobal.document.createElement("button");
		zoomPlus10.onclick = (p0) -> {
			handleZoomPlus10();
			return null;
		};
		zoomPlus10.className = "gwt-Button";
		zoomPlus10.textContent = "Zoom +10%";
		zoomPlus10.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(zoomPlus10);

		HTMLButtonElement zoomMinus10 = (HTMLButtonElement) DomGlobal.document.createElement("button");
		zoomMinus10.onclick = (p0) -> {
			handleZoomMinus10();
			return null;
		};
		zoomMinus10.className = "gwt-Button";
		zoomMinus10.textContent = "Zoom -10%";
		zoomMinus10.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(zoomMinus10);

		HTMLButtonElement zoomXplus10 = (HTMLButtonElement) DomGlobal.document.createElement("button");
		zoomXplus10.onclick = (p0) -> {
			handleZoomXPlus10();
			return null;
		};
		zoomXplus10.className = "gwt-Button";
		zoomXplus10.textContent = "Zoom x +10%";
		zoomXplus10.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(zoomXplus10);

		HTMLButtonElement zoomXminus10 = (HTMLButtonElement) DomGlobal.document.createElement("button");
		zoomXminus10.onclick = (p0) -> {
			handleZoomXMinus10();
			return null;
		};
		zoomXminus10.className = "gwt-Button";
		zoomXminus10.textContent = "Zoom x .10%";
		zoomXminus10.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(zoomXminus10);
		
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
			ScatterDataset scDataset = (ScatterDataset) dataset;
			for (DataPoint dp : scDataset.getDataPoints()) {
				dp.setX(getRandomDigit());
				dp.setY(getRandomDigit());
			}
		}
		chart.update();
	}

	protected void handleResetZoom() {
		ZoomPlugin.reset(chart);
	}
	
	protected void handleZoomPlus10() {
		ZoomPlugin.zoom(chart, 1.1, DefaultTransitionKey.DEFAULT);
	}
	
	protected void handleZoomMinus10() {
		ZoomPlugin.zoom(chart, 0.9, DefaultTransitionKey.DEFAULT);
	}

	protected void handleZoomXPlus10() {
		ZoomPlugin.zoom(chart, new Amount(1.1), DefaultTransitionKey.DEFAULT);
	}
	
	protected void handleZoomXMinus10() {
		ZoomPlugin.zoom(chart, new Amount(0.9), DefaultTransitionKey.DEFAULT);
	}

}
