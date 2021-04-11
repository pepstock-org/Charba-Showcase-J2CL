package org.pepstock.charba.showcase.j2cl.cases.plugins;

import java.util.Date;

import org.pepstock.charba.client.BarChart;
import org.pepstock.charba.client.Defaults;
import org.pepstock.charba.client.adapters.DateAdapter;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis;
import org.pepstock.charba.client.data.BarDataset;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.enums.Bounds;
import org.pepstock.charba.client.enums.TimeUnit;
import org.pepstock.charba.client.events.DatasetRangeSelectionEvent;
import org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler;
import org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector;
import org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.commons.LogView;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class DatasetItemsSelectorTimeSeriesByBarCase extends BaseComposite {

	private static final long DAY = 1000 * 60 * 60 * 24;

	private static final int AMOUNT_OF_POINTS = 15;

	private final HTMLTableElement mainPanel;

	private final BarChart chart = new BarChart();

	private final LogView mylog = new LogView(4);

	public DatasetItemsSelectorTimeSeriesByBarCase() {
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
		
		DateAdapter adapter = new DateAdapter();
		long time = adapter.startOf(new Date(), TimeUnit.DAY).getTime();

		BarDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");
		dataset1.setBackgroundColor(HtmlColor.GREEN);

		DataPoint[] points = new DataPoint[AMOUNT_OF_POINTS];
		DataPoint[] rainPoints = new DataPoint[AMOUNT_OF_POINTS];
		int idx = 0;
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			DataPoint dataPoint = new DataPoint();
			dataPoint.setX(new Date(time));
			dataPoint.setX(100 * Math.random());
			points[idx] = dataPoint;

			DataPoint rainPoint = new DataPoint();
			rainPoint.setX(new Date(time));
			rainPoint.setY(100 * Math.random());
			rainPoints[idx] = rainPoint;

			idx++;
			time = time + DAY;
		}
		dataset1.setDataPoints(rainPoints);

		BarDataset dataset2 = chart.newDataset();
		dataset2.setBackgroundColor(HtmlColor.ORANGE);
		dataset2.setLabel("dataset 2");

		DataPoint[] rainPoints2 = new DataPoint[AMOUNT_OF_POINTS];
		time = adapter.startOf(new Date(), TimeUnit.DAY).getTime();;
		idx = 0;
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			DataPoint dataPoint = new DataPoint();
			dataPoint.setX(new Date(time));
			dataPoint.setX(100 * Math.random());
			points[idx] = dataPoint;

			DataPoint rainPoint2 = new DataPoint();
			rainPoint2.setX(new Date(time));
			rainPoint2.setY(100 * Math.random());
			rainPoints2[idx] = rainPoint2;

			idx++;
			time = time + DAY;
		}
		dataset2.setDataPoints(rainPoints2);

		CartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);
		axis.setBounds(Bounds.DATA);
		axis.getTime().setUnit(TimeUnit.DAY);
		axis.setOffset(true);

		chart.getData().setDatasets(dataset1, dataset2);
		chart.getOptions().getScales().setAxes(axis);

		DatasetsItemsSelectorOptions pOptions = new DatasetsItemsSelectorOptions();
		pOptions.setBorderWidth(2);
		pOptions.setBorderDash(6, 2);
		pOptions.setBorderColor(HtmlColor.GREY);
		pOptions.getClearSelection().setDisplay(true);
		pOptions.getClearSelection().setLabel("Reset selection");
		pOptions.getClearSelection().setFontSize(Defaults.get().getGlobal().getTitle().getFont().getSize());
		pOptions.setColor(HtmlColor.LIGHT_GREEN.alpha(DatasetsItemsSelectorOptions.DEFAULT_ALPHA));

		chart.getOptions().getPlugins().setOptions(DatasetsItemsSelector.ID, pOptions);
		chart.getPlugins().add(DatasetsItemsSelector.get());

		chart.addHandler(new DatasetRangeSelectionEventHandler() {

			@Override
			public void onSelect(DatasetRangeSelectionEvent event) {
				StringBuilder sb = new StringBuilder();
				sb.append("Dataset from: ").append(event.getFrom().getLabel()).append(" to: ").append(event.getTo().getLabel());
				mylog.addLogEvent(sb.toString());
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
		logCol.appendChild(mylog.getElement());
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
