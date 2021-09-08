package org.pepstock.charba.showcase.j2cl.cases.plugins;

import org.pepstock.charba.client.ScatterChart;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.ScatterDataset;
import org.pepstock.charba.client.enums.DefaultScaleId;
import org.pepstock.charba.client.events.DatasetRangeCleanSelectionEvent;
import org.pepstock.charba.client.events.DatasetRangeCleanSelectionEventHandler;
import org.pepstock.charba.client.events.DatasetRangeSelectionEvent;
import org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler;
import org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector;
import org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions;
import org.pepstock.charba.client.items.ScaleItem;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.commons.Toast;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class DatasetItemsSelectorApiLinearCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final ScatterChart chart = new ScatterChart();

	private static final int AMOUNT_OF_POINTS = 60;

	public DatasetItemsSelectorApiLinearCase() {

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
		chart.getOptions().getTitle().setText("Dataset items selector plugin API on linear axis");

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
		
		DatasetsItemsSelectorOptions pOptions = new DatasetsItemsSelectorOptions();
		pOptions.setBorderWidth(2);
		pOptions.setBorderDash(6, 3, 6);
		pOptions.setBorderColor(HtmlColor.GREY);
		pOptions.getSelectionCleaner().setDisplay(true);
		pOptions.getSelectionCleaner().setLabel("Reset selection");
		pOptions.getSelectionCleaner().setPadding(6);
		pOptions.getSelectionCleaner().getFont().setSize(16);
		pOptions.setColor(HtmlColor.AZURE.alpha(DatasetsItemsSelectorOptions.DEFAULT_ALPHA));

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

		HTMLButtonElement select = (HTMLButtonElement) DomGlobal.document.createElement("button");
		select.onclick = (p0) -> {
			handleSelect();
			return null;
		};
		select.className = "gwt-Button";
		select.textContent = "Select a random area";
		select.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(select);

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

	protected void handleSelect() {
		ScaleItem scaleItem = chart.getNode().getScales().getItems().get(DefaultScaleId.X.value());
		double from = getRandomDigit(scaleItem.getStart(), scaleItem.getEnd());
		double to = getRandomDigit(scaleItem.getStart(), scaleItem.getEnd());
		DatasetsItemsSelector.get().setSelection(chart, from, to);
	}

}
