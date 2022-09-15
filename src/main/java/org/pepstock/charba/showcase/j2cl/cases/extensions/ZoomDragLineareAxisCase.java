package org.pepstock.charba.showcase.j2cl.cases.extensions;

import org.pepstock.charba.client.ScatterChart;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.ScatterDataset;
import org.pepstock.charba.client.dom.elements.Div;
import org.pepstock.charba.client.dom.enums.IsKeyboardKey;
import org.pepstock.charba.client.enums.ModifierKey;
import org.pepstock.charba.client.zoom.ZoomOptions;
import org.pepstock.charba.client.zoom.ZoomPlugin;
import org.pepstock.charba.client.zoom.enums.Mode;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class ZoomDragLineareAxisCase extends BaseComposite {

	private static final int AMOUNT_OF_POINTS = 60;
	
	private final HTMLTableElement mainPanel;
	
	private final HTMLInputElement enableZoom = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final HTMLInputElement enablePan = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final HTMLDivElement help = (HTMLDivElement) DomGlobal.document.createElement("div");

	private final ScatterChart chart = new ScatterChart();

	public ZoomDragLineareAxisCase() {
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
		chart.getOptions().getTitle().setText("Drag to zoom on cartesian linear axis");

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
		options.getPan().setMode(Mode.XY);
		options.getPan().setModifierKey(ModifierKey.ALT);
		options.getZoom().setMode(Mode.XY);
		options.getZoom().getWheel().setEnabled(true);
		options.getZoom().getDrag().setEnabled(true);
		options.getZoom().getDrag().setBackgroundColor(HtmlColor.LIGHT_GREEN.alpha(0.2));
		options.getZoom().getDrag().setBorderColor(HtmlColor.LIGHT_GREEN.alpha(0.6));
		options.getZoom().getDrag().setBorderWidth(1);
		
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
		
		String zoomId = "zoom" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForZoom = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForZoom.htmlFor = zoomId;
		labelForZoom.appendChild(DomGlobal.document.createTextNode("Zoom enable"));
		actionsCol.appendChild(labelForZoom);

		enableZoom.id = zoomId;
		enableZoom.checked = true;
		enableZoom.onclick = (p0) -> {
			handleZoom();
			return null;
		};
		enableZoom.type = "checkbox";
		enableZoom.className = "gwt-CheckBox";
		enableZoom.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(enableZoom);

		String panId = "pan" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForPan = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForPan.htmlFor = panId;
		labelForPan.appendChild(DomGlobal.document.createTextNode("Pan enable"));
		actionsCol.appendChild(labelForPan);

		enablePan.id = panId;
		enablePan.checked = true;
		enablePan.onclick = (p0) -> {
			handlePan();
			return null;
		};
		enablePan.type = "checkbox";
		enablePan.className = "gwt-CheckBox";
		enablePan.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(enablePan);

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
		// help element
		// ----------------------------------------------

		HTMLTableRowElement helpRow = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		helpRow.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(helpRow);

		HTMLTableCellElement helpCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		helpCol.style.width = WidthUnionType.of("100%");
		helpCol.style.textAlign = "center";
		helpCol.vAlign = "top";
		helpRow.appendChild(helpCol);
		Div kkey = IsKeyboardKey.getElement(ModifierKey.ALT.getKeyboardKey());
		help.innerHTML = kkey.getInnerHTML() + " to pan";
		helpCol.appendChild(help);
		
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
	protected void handleZoom() {
		ZoomOptions options = chart.getOptions().getPlugins().getOptions(ZoomPlugin.FACTORY);
		options.getZoom().getWheel().setEnabled(enableZoom.checked);
		options.getZoom().getDrag().setEnabled(enableZoom.checked);
		chart.update();
	}
	
	protected void handlePan() {
		ZoomOptions options = chart.getOptions().getPlugins().getOptions(ZoomPlugin.FACTORY);
		options.getPan().setEnabled(enablePan.checked);
		chart.update();
	}

}
