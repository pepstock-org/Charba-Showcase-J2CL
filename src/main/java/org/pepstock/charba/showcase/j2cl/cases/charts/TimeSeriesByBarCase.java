package org.pepstock.charba.showcase.j2cl.cases.charts;

import org.pepstock.charba.client.BarChart;
import org.pepstock.charba.client.adapters.DateAdapter;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.configuration.CartesianTimeAxis;
import org.pepstock.charba.client.data.BarDataset;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.enums.ScaleBounds;
import org.pepstock.charba.client.enums.ScaleDistribution;
import org.pepstock.charba.client.enums.TimeUnit;
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

public class TimeSeriesByBarCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final BarChart chart = new BarChart();

	private static final int AMOUNT_OF_POINTS = 15;

	private final long startingPoint = System.currentTimeMillis();

	public TimeSeriesByBarCase() {
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
		chart.getOptions().getTitle().setText("Timeseries by bar chart");

		BarDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");
		dataset1.setBackgroundColor(HtmlColor.GREEN);

		DateAdapter adapter = new DateAdapter();

		DataPoint[] points = new DataPoint[AMOUNT_OF_POINTS];
		DataPoint[] rainPoints = new DataPoint[AMOUNT_OF_POINTS];
		int idx = 0;
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			DataPoint dataPoint = new DataPoint();
			dataPoint.setT(adapter.add(startingPoint, i, TimeUnit.DAY));
			dataPoint.setX(100 * Math.random());
			points[idx] = dataPoint;

			DataPoint rainPoint = new DataPoint();
			rainPoint.setT(adapter.add(startingPoint, i, TimeUnit.DAY));
			rainPoint.setY(100 * Math.random());
			rainPoints[idx] = rainPoint;

			idx++;
		}
		dataset1.setDataPoints(rainPoints);

		BarDataset dataset2 = chart.newDataset();
		dataset2.setBackgroundColor(HtmlColor.ORANGE);
		dataset2.setLabel("dataset 2");

		DataPoint[] rainPoints2 = new DataPoint[AMOUNT_OF_POINTS];
		idx = 0;
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			DataPoint dataPoint = new DataPoint();
			dataPoint.setT(adapter.add(startingPoint, i, TimeUnit.DAY));
			dataPoint.setX(100 * Math.random());
			points[idx] = dataPoint;

			DataPoint rainPoint2 = new DataPoint();
			rainPoint2.setT(adapter.add(startingPoint, i, TimeUnit.DAY));
			rainPoint2.setY(100 * Math.random());
			rainPoints2[idx] = rainPoint2;

			idx++;
		}
		dataset2.setDataPoints(rainPoints2);

		CartesianTimeAxis axis = new CartesianTimeAxis(chart);
		axis.setDistribution(ScaleDistribution.SERIES);
		axis.setBounds(ScaleBounds.DATA);
		axis.getTime().setUnit(TimeUnit.DAY);
		axis.setOffset(true);

		chart.getData().setDatasets(dataset1, dataset2);
		chart.getOptions().getScales().setXAxes(axis);
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
			BarDataset scDataset = (BarDataset) dataset;
			for (DataPoint dp : scDataset.getDataPoints()) {
				dp.setY(getRandomDigit(false));
			}
		}
		chart.update();
	}

}
