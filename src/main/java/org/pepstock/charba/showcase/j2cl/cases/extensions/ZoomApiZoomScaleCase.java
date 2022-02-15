package org.pepstock.charba.showcase.j2cl.cases.extensions;

import org.pepstock.charba.client.ScatterChart;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.ScatterDataset;
import org.pepstock.charba.client.enums.DefaultScaleId;
import org.pepstock.charba.client.enums.DefaultTransitionKey;
import org.pepstock.charba.client.zoom.ScaleRange;
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

public class ZoomApiZoomScaleCase extends BaseComposite {

	private static final int AMOUNT_OF_POINTS = 120;

	private final HTMLTableElement mainPanel;

	private final ScatterChart chart = new ScatterChart();
	
	public ZoomApiZoomScaleCase() {
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
		chart.getOptions().getTitle().setText("Programmatically zoom on linear scale");

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
		options.getZoom().setMode(Mode.XY);
		options.getZoom().getWheel().setEnabled(true);
		
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

		HTMLButtonElement zoomScaleX = (HTMLButtonElement) DomGlobal.document.createElement("button");
		zoomScaleX.onclick = (p0) -> {
			handleZoomX();
			return null;
		};
		zoomScaleX.className = "gwt-Button";
		zoomScaleX.textContent = "Zoom scale x:0..-100";
		zoomScaleX.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(zoomScaleX);

		HTMLButtonElement zoomScaleY = (HTMLButtonElement) DomGlobal.document.createElement("button");
		zoomScaleY.onclick = (p0) -> {
			handleZoomY();
			return null;
		};
		zoomScaleY.className = "gwt-Button";
		zoomScaleY.textContent = "Zoom scale y:0..+100";
		zoomScaleY.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(zoomScaleY);

		HTMLButtonElement zoomScaleXY = (HTMLButtonElement) DomGlobal.document.createElement("button");
		zoomScaleXY.onclick = (p0) -> {
			handleZoomXY();
			return null;
		};
		zoomScaleXY.className = "gwt-Button";
		zoomScaleXY.textContent = "Zoom scale x:0..-100 and y:0..+100";
		zoomScaleXY.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(zoomScaleXY);

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
	
	protected void handleZoomX() {
		ScaleRange range = new ScaleRange();
		range.setMin(-100);
		range.setMax(0);
		ZoomPlugin.zoomScale(chart, DefaultScaleId.X, range, DefaultTransitionKey.DEFAULT);
	}
	
	protected void handleZoomY() {
		ScaleRange range = new ScaleRange();
		range.setMin(0);
		range.setMax(100);
		ZoomPlugin.zoomScale(chart, DefaultScaleId.Y, range, DefaultTransitionKey.DEFAULT);
	}

	protected void handleZoomXY() {
		handleZoomX();
		handleZoomY();
	}

}
