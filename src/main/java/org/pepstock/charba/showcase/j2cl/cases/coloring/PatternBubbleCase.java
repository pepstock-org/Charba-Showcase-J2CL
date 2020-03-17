package org.pepstock.charba.showcase.j2cl.cases.coloring;

import java.util.Random;

import org.pepstock.charba.client.BubbleChart;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.colors.Pattern;
import org.pepstock.charba.client.data.BubbleDataset;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.dom.elements.CastHelper;
import org.pepstock.charba.client.enums.Position;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.commons.Images;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class PatternBubbleCase extends BaseComposite {

	private static final int AMOUNT_OF_POINTS = 8;
	private static final int MIN_XY = -150;
	private static final int MAX_XY = 100;

	private final HTMLTableElement mainPanel;

	private final BubbleChart chart = new BubbleChart();
	
	public PatternBubbleCase() {
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
		chart.getOptions().getTitle().setText("Applying a pattern on bubble chart dataset");

		Pattern pattern = new Pattern(CastHelper.toImg(Images.get().background));
		Pattern pattern2 = new Pattern(CastHelper.toImg(Images.get().patternHover));

		BubbleDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		Pattern[] patterns = new Pattern[AMOUNT_OF_POINTS];
		IsColor[] colors = new IsColor[AMOUNT_OF_POINTS];
		int[] bwidth = new int[AMOUNT_OF_POINTS];

		DataPoint[] dp1 = new DataPoint[AMOUNT_OF_POINTS];
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			dp1[i] = new DataPoint();
			dp1[i].setX(getData());
			dp1[i].setY(getData());
			dp1[i].setR(getData(0, 50));
			patterns[i] = pattern;
			colors[i] = HtmlColor.DARK_GREY;
			bwidth[i] = Math.min(Math.max(1, i + 1), 5);
		}
		dataset1.setBackgroundColor(patterns);
		dataset1.setBorderColor(colors);
		dataset1.setBorderWidth(bwidth);
		dataset1.setDataPoints(dp1);

		BubbleDataset dataset2 = chart.newDataset();
		dataset2.setLabel("dataset 2");

		Pattern[] patterns2 = new Pattern[AMOUNT_OF_POINTS];
		IsColor[] colors2 = new IsColor[AMOUNT_OF_POINTS];
		int[] bwidth2 = new int[AMOUNT_OF_POINTS];
		DataPoint[] dp12 = new DataPoint[AMOUNT_OF_POINTS];
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			dp12[i] = new DataPoint();
			dp12[i].setX(getData());
			dp12[i].setY(getData());
			dp12[i].setR(getData(0, 50));
			patterns2[i] = pattern2;
			colors2[i] = HtmlColor.BLACK;
			bwidth2[i] = Math.min(Math.max(1, i + 1), 5);
		}
		dataset2.setBackgroundColor(patterns2);
		dataset2.setBorderColor(colors2);
		dataset2.setBorderWidth(bwidth2);
		dataset2.setDataPoints(dp12);

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

	private int getData() {
		return getData(MIN_XY, MAX_XY);
	}

	private int getData(int min, int max) {
		Random random = new Random();
		return random.nextInt(max + 1 - min) + min;
	}

	protected void handleRandomize() {
		int[] bwidth = new int[AMOUNT_OF_POINTS];

		for (Dataset dataset : chart.getData().getDatasets()) {
			BubbleDataset bDataset = (BubbleDataset) dataset;
			int i = 0;
			for (DataPoint dp : bDataset.getDataPoints()) {
				dp.setX(getData());
				dp.setY(getData());
				dp.setR(getData(0, 50));
				bwidth[i] = Math.min(Math.max(1, i + 1), 5);
				i++;
			}
			bDataset.setBorderWidth(bwidth);
		}
		chart.update();
	}


}
