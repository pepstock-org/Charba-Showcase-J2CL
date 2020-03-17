package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.Random;

import org.pepstock.charba.client.BubbleChart;
import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.callbacks.ScriptableContext;
import org.pepstock.charba.client.data.BubbleDataset;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.datalabels.DataLabelsOptions;
import org.pepstock.charba.client.datalabels.DataLabelsPlugin;
import org.pepstock.charba.client.datalabels.callbacks.AlignCallback;
import org.pepstock.charba.client.datalabels.callbacks.AnchorCallback;
import org.pepstock.charba.client.datalabels.callbacks.ColorCallback;
import org.pepstock.charba.client.datalabels.enums.Align;
import org.pepstock.charba.client.datalabels.enums.Anchor;
import org.pepstock.charba.client.datalabels.enums.Weight;
import org.pepstock.charba.client.enums.DefaultPlugin;
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

public class DataLabelsBubbleCase extends BaseComposite {

	private static final int AMOUNT_OF_POINTS = 16;
	private static final int MIN_XY = -150;
	private static final int MAX_XY = 100;

	private final HTMLTableElement mainPanel;

	private final BubbleChart chart = new BubbleChart();
	
	public DataLabelsBubbleCase() {
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

		chart.getOptions().getPlugins().setEnabled(DefaultPlugin.LEGEND, false);
		chart.getOptions().getPlugins().setEnabled(DefaultPlugin.TITLE, false);

		BubbleDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		String[] colors = new String[AMOUNT_OF_POINTS];
		String[] hcolors = new String[AMOUNT_OF_POINTS];
		String[] bcolors = new String[AMOUNT_OF_POINTS];
		int[] bwidth = new int[AMOUNT_OF_POINTS];
		int[] hbwidth = new int[AMOUNT_OF_POINTS];

		DataPoint[] dp1 = new DataPoint[AMOUNT_OF_POINTS];
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			dp1[i] = new DataPoint();
			dp1[i].setX(getData());
			dp1[i].setY(getData());
			dp1[i].setR(getData(0, 50));
			colors[i] = colorize(false, dp1[i]);
			bcolors[i] = colorize(true, dp1[i]);
			bwidth[i] = Math.min(Math.max(1, i + 1), 5);
			hcolors[i] = "transparent";
			hbwidth[i] = (int) Math.round(8 * dp1[i].getR() / 1000);
		}
		dataset1.setBackgroundColor(colors);
		dataset1.setBorderColor(bcolors);
		dataset1.setBorderWidth(bwidth);
		dataset1.setHoverBackgroundColor(hcolors);
		dataset1.setHoverBorderWidth(hbwidth);
		dataset1.setDataPoints(dp1);

		chart.getData().setDatasets(dataset1);

		DataLabelsOptions option = new DataLabelsOptions();
		option.setAnchor(new AnchorCallback() {

			@Override
			public Anchor invoke(IsChart chart, ScriptableContext context) {
				BubbleDataset ds = (BubbleDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				DataPoint point = ds.getDataPoints().get(context.getIndex());
				return point.getR() < 20D ? Anchor.END : Anchor.CENTER;
			}

		});
		option.setAlign(new AlignCallback() {

			@Override
			public Align invoke(IsChart chart, ScriptableContext context) {
				BubbleDataset ds = (BubbleDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				DataPoint point = ds.getDataPoints().get(context.getIndex());
				return point.getR() < 20D ? Align.END : Align.CENTER;
			}
		});
		option.setColor(new ColorCallback() {

			@Override
			public String invoke(IsChart chart, ScriptableContext context) {
				BubbleDataset ds = (BubbleDataset) chart.getData().getDatasets().get(context.getDatasetIndex());
				return ds.getBorderColorAsString().get(context.getIndex());
			}

		});
		option.setOffset(2);
		option.getFont().setWeight(Weight.BOLD);
		option.getPadding().set(0);

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

	private String colorize(boolean opaque, DataPoint value) {
		double x = value.getX() / 100;
		double y = value.getY() / 100;
		int r = x < 0 && y < 0 ? 250 : x < 0 ? 150 : y < 0 ? 50 : 0;
		int g = x < 0 && y < 0 ? 0 : x < 0 ? 50 : y < 0 ? 150 : 250;
		int b = x < 0 && y < 0 ? 0 : x > 0 && y > 0 ? 250 : 150;
		double a = opaque ? 1 : 0.2 * value.getR() / 50;

		return "rgba(" + r + "," + g + "," + b + "," + a + ")";
	}

	protected void handleRandomize() {
		String[] colors = new String[AMOUNT_OF_POINTS];
		String[] bcolors = new String[AMOUNT_OF_POINTS];
		int[] bwidth = new int[AMOUNT_OF_POINTS];
		int[] hbwidth = new int[AMOUNT_OF_POINTS];

		for (Dataset dataset : chart.getData().getDatasets()) {
			BubbleDataset bDataset = (BubbleDataset) dataset;
			int i = 0;
			for (DataPoint dp : bDataset.getDataPoints()) {
				dp.setX(getData());
				dp.setY(getData());
				dp.setR(getData(0, 50));
				colors[i] = colorize(false, dp);
				bcolors[i] = colorize(true, dp);
				bwidth[i] = Math.min(Math.max(1, i + 1), 5);
				hbwidth[i] = (int) Math.round(8 * dp.getR() / 1000);
				i++;
			}
			bDataset.setBackgroundColor(colors);
			bDataset.setBorderColor(bcolors);
			bDataset.setBorderWidth(bwidth);
		}
		chart.update();
	}

}
