package org.pepstock.charba.showcase.j2cl.cases.plugins;

import java.util.List;
import java.util.Random;

import org.pepstock.charba.client.BubbleChart;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.data.BubbleDataset;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.dom.elements.Div;
import org.pepstock.charba.client.dom.enums.IsKeyboardKey;
import org.pepstock.charba.client.dom.enums.KeyboardUiKey;
import org.pepstock.charba.client.events.DatasetRangeCleanSelectionEvent;
import org.pepstock.charba.client.events.DatasetRangeCleanSelectionEventHandler;
import org.pepstock.charba.client.events.DatasetRangeSelectionEvent;
import org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler;
import org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector;
import org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.commons.Toast;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class DatasetItemsSelectorBubbleCase extends BaseComposite {

	private final HTMLTableElement mainPanel;
	
	private final HTMLDivElement help = (HTMLDivElement) DomGlobal.document.createElement("div");

	private final BubbleChart chart = new BubbleChart();

	private static final int AMOUNT_OF_POINTS = 16;
	private static final int MIN_XY = -150;
	private static final int MAX_XY = 100;

	public DatasetItemsSelectorBubbleCase() {

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
		chart.getOptions().getTitle().setText("Dataset items selector plugin on bubble chart");

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
		
		DatasetsItemsSelectorOptions pOptions = new DatasetsItemsSelectorOptions();
		pOptions.setBorderWidth(2);
		pOptions.setBorderDash(6, 3, 6);
		pOptions.setBorderColor(HtmlColor.GREY);
		pOptions.getSelectionCleaner().setDisplay(false);
		pOptions.setColor(HtmlColor.LIGHT_PINK.alpha(DatasetsItemsSelectorOptions.DEFAULT_ALPHA));

		chart.getOptions().getPlugins().setOptions(DatasetsItemsSelector.ID, pOptions);
		chart.getPlugins().add(DatasetsItemsSelector.get());

		chart.addHandler(new DatasetRangeCleanSelectionEventHandler() {

			@Override
			public void onClean(DatasetRangeCleanSelectionEvent event) {
				StringBuilder sb = new StringBuilder();
				sb.append("<b>Clear selection event</b>");
				new Toast("Dataset Range Clean Selection!", sb.toString()).show();
			}
		}, DatasetRangeCleanSelectionEvent.TYPE);

		
		chart.addHandler(new DatasetRangeSelectionEventHandler() {

			@Override
			public void onSelect(DatasetRangeSelectionEvent event) {
				StringBuilder sb = new StringBuilder();
				sb.append("Dataset from: <b>").append(event.getFrom().getLabel()).append("</b><br>");
				sb.append("Dataset to: <b>").append(event.getTo().getLabel()).append("</b><br>");
				new Toast("Dataset Range Selected!", sb.toString()).show();
			}
		}, DatasetRangeSelectionEvent.TYPE);

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
		Div kkey = IsKeyboardKey.getElement(KeyboardUiKey.ESCAPE);
		help.innerHTML = "Press " + kkey.getInnerHTML() + " to clear selection";
		helpCol.appendChild(help);

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

	protected void handleAddDataset() {
		List<Dataset> datasets = chart.getData().getDatasets();
		BubbleDataset dataset = chart.newDataset();
		dataset.setLabel("dataset " + (datasets.size() + 1));

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
		dataset.setBackgroundColor(colors);
		dataset.setBorderColor(bcolors);
		dataset.setBorderWidth(bwidth);
		dataset.setHoverBackgroundColor(hcolors);
		dataset.setHoverBorderWidth(hbwidth);
		dataset.setDataPoints(dp1);

		datasets.add(dataset);

		chart.update();
	}

	protected void handleRemoveDataset() {
		removeDataset(chart);
	}

}
