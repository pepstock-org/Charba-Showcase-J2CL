package org.pepstock.charba.showcase.j2cl.cases.extensions;

import org.pepstock.charba.client.ScatterChart;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.ScatterDataset;
import org.pepstock.charba.client.enums.DefaultTransitionKey;
import org.pepstock.charba.client.items.Undefined;
import org.pepstock.charba.client.zoom.Amount;
import org.pepstock.charba.client.zoom.ZoomOptions;
import org.pepstock.charba.client.zoom.ZoomPlugin;
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

public class ZoomApiPanCase extends BaseComposite {

	private static final int AMOUNT_OF_POINTS = 120;

	private final HTMLTableElement mainPanel;

	private final ScatterChart chart = new ScatterChart();
	
	public ZoomApiPanCase() {
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
		chart.getOptions().getTitle().setText("Programmatically pan on scatter chart");

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
		options.getPan().setEnabled(true);
		options.getZoom().getWheel().setEnabled(false);
		
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

		HTMLButtonElement panXplus100 = (HTMLButtonElement) DomGlobal.document.createElement("button");
		panXplus100.onclick = (p0) -> {
			handlePanXPlus100();
			return null;
		};
		panXplus100.className = "gwt-Button";
		panXplus100.textContent = "Pan x +100px";
		panXplus100.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(panXplus100);

		HTMLButtonElement panXminus100 = (HTMLButtonElement) DomGlobal.document.createElement("button");
		panXminus100.onclick = (p0) -> {
			handlePanXMinus100();
			return null;
		};
		panXminus100.className = "gwt-Button";
		panXminus100.textContent = "Pan x -100px";
		panXminus100.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(panXminus100);

		HTMLButtonElement panYplus100 = (HTMLButtonElement) DomGlobal.document.createElement("button");
		panYplus100.onclick = (p0) -> {
			handlePanYPlus100();
			return null;
		};
		panYplus100.className = "gwt-Button";
		panYplus100.textContent = "Pan y +100px";
		panYplus100.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(panYplus100);

		HTMLButtonElement panYminus100 = (HTMLButtonElement) DomGlobal.document.createElement("button");
		panYminus100.onclick = (p0) -> {
			handlePanYMinus100();
			return null;
		};
		panYminus100.className = "gwt-Button";
		panYminus100.textContent = "Pan y -100px";
		panYminus100.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(panYminus100);
		
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
	
	protected void handlePanXPlus100() {
		ZoomPlugin.pan(chart, new Amount(100), DefaultTransitionKey.DEFAULT);
	}
	
	protected void handlePanXMinus100() {
		ZoomPlugin.pan(chart, new Amount(-100), DefaultTransitionKey.DEFAULT);
	}

	protected void handlePanYPlus100() {
		ZoomPlugin.pan(chart, new Amount(Undefined.DOUBLE, 100), DefaultTransitionKey.DEFAULT);
	}
	
	protected void handlePanYMinus100() {
		ZoomPlugin.pan(chart, new Amount(Undefined.DOUBLE, -100), DefaultTransitionKey.DEFAULT);
	}

}
