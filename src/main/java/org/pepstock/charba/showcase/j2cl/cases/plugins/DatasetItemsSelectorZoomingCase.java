package org.pepstock.charba.showcase.j2cl.cases.plugins;

import java.util.Arrays;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.adapters.DateAdapter;
import org.pepstock.charba.client.callbacks.MinMaxCallback;
import org.pepstock.charba.client.callbacks.ScaleContext;
import org.pepstock.charba.client.callbacks.TooltipTitleCallback;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.configuration.CartesianTimeAxis;
import org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.TickSource;
import org.pepstock.charba.client.enums.TimeUnit;
import org.pepstock.charba.client.events.DatasetRangeCleanSelectionEvent;
import org.pepstock.charba.client.events.DatasetRangeCleanSelectionEventHandler;
import org.pepstock.charba.client.events.DatasetRangeSelectionEvent;
import org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler;
import org.pepstock.charba.client.impl.plugins.ChartBackgroundColor;
import org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector;
import org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions;
import org.pepstock.charba.client.items.TooltipItem;
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

public class DatasetItemsSelectorZoomingCase extends BaseComposite {

	private static final long DAY = 1000 * 60 * 60 * 24;

	private static final int AMOUNT_OF_POINTS = 60;

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	private final LineChart small = new LineChart();

	private final DatasetsItemsSelector selector = DatasetsItemsSelector.get();
	
	private final LineDataset dataset1;

	private final DateAdapter adapter = new DateAdapter();
	
	private Date minDate = null;

	private Date maxDate = null;

	public DatasetItemsSelectorZoomingCase() {
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
		chart.getOptions().setMaintainAspectRatio(true);
		chart.getOptions().setAspectRatio(3);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Zooming dataset data on timeseries line chart");
		chart.getOptions().getTooltips().setTitleMarginBottom(10);
		chart.getOptions().getTooltips().getCallbacks().setTitleCallback(new TooltipTitleCallback() {

			@Override
			public List<String> onTitle(IsChart chart, List<TooltipItem> items) {
				TooltipItem item = items.iterator().next();
				LineDataset ds = (LineDataset) chart.getData().getDatasets().get(0);
				DataPoint dp = ds.getDataPoints().get(item.getDataIndex());
				return Arrays.asList(adapter.format(dp.getXAsDate(), TimeUnit.DAY));
			}

		});

		dataset1 = chart.newDataset();

		dataset1.setLabel("dataset 1");
		dataset1.setFill(Fill.ORIGIN);

		IsColor color1 = GoogleChartColor.values()[0];

		dataset1.setBackgroundColor(color1.toHex());
		dataset1.setBorderColor(color1.toHex());

		final LineDataset dataset2 = small.newDataset();

		long time = new Date().getTime();

		double[] xs1 = getRandomDigits(AMOUNT_OF_POINTS, false);
		DataPoint[] dp1 = new DataPoint[AMOUNT_OF_POINTS];
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			dp1[i] = new DataPoint();
			dp1[i].setY(xs1[i]);
			dp1[i].setX(new Date(time));
			time = time + DAY;
		}
		dataset2.setDataPoints(dp1);
		small.getData().setDatasets(dataset2);

		final CartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);
		axis.getTicks().setSource(TickSource.DATA);
		axis.getTime().setUnit(TimeUnit.DAY);
		axis.setMin(new MinMaxCallback<Object>() {
			
			@Override
			public Date invoke(ScaleContext context) {
				return minDate;
			}
		});
		axis.setMax(new MinMaxCallback<Object>() {
			
			@Override
			public Date invoke(ScaleContext context) {
				return maxDate;
			}
		});

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);
		axis2.setBeginAtZero(true);

		chart.getOptions().getScales().setAxes(axis, axis2);

		small.getOptions().getPlugins().setEnabled(ChartBackgroundColor.ID, false);

		small.getOptions().setResponsive(true);
		small.getOptions().setMaintainAspectRatio(true);
		small.getOptions().setAspectRatio(15);
		small.getOptions().getLegend().setDisplay(false);
		small.getOptions().getTitle().setDisplay(false);
		small.getOptions().getElements().getPoint().setRadius(0);

		CartesianTimeAxis axis1Small = new CartesianTimeAxis(small);
		axis1Small.setDisplay(false);

		small.getOptions().getScales().setAxes(axis1Small);

		DatasetsItemsSelectorOptions pOptions = new DatasetsItemsSelectorOptions();
		pOptions.setBorderWidth(5);
		pOptions.setBorderDash(6);

		small.getOptions().getPlugins().setOptions(DatasetsItemsSelector.ID, pOptions);
		small.getPlugins().add(selector);

		small.addHandler(new DatasetRangeCleanSelectionEventHandler() {

			@Override
			public void onClean(DatasetRangeCleanSelectionEvent event) {
				minDate = null;
				maxDate = null;
				dataset1.setDataPoints(new LinkedList<>());
				chart.getData().setDatasets(dataset1);
				chart.reconfigure();
			}
		}, DatasetRangeCleanSelectionEvent.TYPE);

		small.addHandler(new DatasetRangeSelectionEventHandler() {

			@Override
			public void onSelect(DatasetRangeSelectionEvent event) {
				List<DataPoint> newDataPoints = new LinkedList<>();
				for (DataPoint dp : dataset2.getDataPoints()) {
					newDataPoints.add(dp);
				}
				dataset1.setDataPoints(newDataPoints);
				chart.getData().setDatasets(dataset1);
				minDate = event.getFrom().getValueAsDate();
				maxDate = event.getTo().getValueAsDate();
				chart.reconfigure();
			}
		}, DatasetRangeSelectionEvent.TYPE);

		chartCol.appendChild(chart.getChartElement().as());
		chartCol.appendChild(small.getChartElement().as());

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
			handleReset();
			return null;
		};
		reset.className = "gwt-Button";
		reset.textContent = "Reset";
		reset.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(reset);

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
		List<DataPoint> newDataPoints = new LinkedList<>();
		for (Dataset dataset : small.getData().getDatasets()) {
			LineDataset scDataset = (LineDataset) dataset;
			for (DataPoint dp : scDataset.getDataPoints()) {
				dp.setY(getRandomDigit(false));
				newDataPoints.add(dp);
			}
		}
		small.update();
		if (!dataset1.getDataPoints().isEmpty()) {
			dataset1.setDataPoints(newDataPoints);
			chart.getData().setDatasets(dataset1);
			chart.update();
		}
	}

	protected void handleReset() {
		selector.cleanSelection(small);
	}
}
