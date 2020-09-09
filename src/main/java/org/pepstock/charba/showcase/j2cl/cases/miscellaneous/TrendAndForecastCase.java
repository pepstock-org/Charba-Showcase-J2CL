package org.pepstock.charba.showcase.j2cl.cases.miscellaneous;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.pepstock.charba.client.Defaults;
import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.adapters.DateAdapter;
import org.pepstock.charba.client.annotation.AnnotationOptions;
import org.pepstock.charba.client.annotation.AnnotationPlugin;
import org.pepstock.charba.client.annotation.LineAnnotation;
import org.pepstock.charba.client.annotation.enums.DrawTime;
import org.pepstock.charba.client.annotation.enums.LineLabelPosition;
import org.pepstock.charba.client.annotation.enums.LineMode;
import org.pepstock.charba.client.callbacks.AbstractTooltipTitleCallback;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.configuration.CartesianTimeAxis;
import org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.AxisKind;
import org.pepstock.charba.client.enums.DefaultScaleId;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.InteractionMode;
import org.pepstock.charba.client.enums.TickSource;
import org.pepstock.charba.client.enums.TimeUnit;
import org.pepstock.charba.client.events.LegendClickEvent;
import org.pepstock.charba.client.events.LegendClickEventHandler;
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

public class TrendAndForecastCase extends BaseComposite {

	private static final long DAY = 1000 * 60 * 60 * 24;

	private static final int AMOUNT_OF_POINTS = 60;

	private static final int PREVIOUS_PERIOD = 30;
	
	private static final String MY_SCALE_ID = "my";
	
	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	private final Date nowDate = new Date();

	private final LineDataset dataset;

	private final LineDataset trend;

	private final LineDataset forecast;

	private final CartesianTimeAxis axis;

	public TrendAndForecastCase() {
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

		DateAdapter adapter = new DateAdapter();

		chart.getOptions().setResponsive(true);

		chart.addHandler(new LegendClickEventHandler() {

			@Override
			public void onClick(LegendClickEvent event) {
				if (event.getItem().getDatasetIndex() == 2) {
					if (chart.isDatasetVisible(2)) {
						chart.getNode().getOptions().getScales().getAxis(MY_SCALE_ID).setMax(new Date((long) nowDate.getTime()));
						axis.setMax(new Date((long) nowDate.getTime()));
					} else {
						chart.getNode().getOptions().getScales().getAxis(MY_SCALE_ID).setMax((Date) null);
						axis.setMax((Date) null);
					}
				}
				Defaults.get().invokeLegendOnClick(event);
			}

		}, LegendClickEvent.TYPE);

		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Trend and forecast on timeseries chart");
		chart.getOptions().getTooltips().setTitleMarginBottom(10);
		chart.getOptions().getTooltips().setMode(InteractionMode.INDEX);
		chart.getOptions().getTooltips().getCallbacks().setTitleCallback(new AbstractTooltipTitleCallback() {

			@Override
			public List<String> onTitle(IsChart chart, List<TooltipItem> items) {
				TooltipItem item = items.iterator().next();
				LineDataset ds = (LineDataset) chart.getData().getDatasets().get(0);
				DataPoint dp = ds.getDataPoints().get(item.getDataIndex());
				return Arrays.asList(adapter.format(dp.getXAsDate(), TimeUnit.DAY));
			}

		});

		dataset = chart.newDataset();
		dataset.setLabel("Data");
		dataset.setFill(Fill.FALSE);
		IsColor color1 = GoogleChartColor.values()[0];
		dataset.setBackgroundColor(color1.toHex());
		dataset.setBorderColor(color1.toHex());

		trend = chart.newDataset();
		trend.setLabel("Trend");
		trend.setFill(Fill.FALSE);
		IsColor color2 = GoogleChartColor.values()[1];
		trend.setBackgroundColor(color2.toHex());
		trend.setBorderColor(color2.toHex());
		trend.setBorderDash(4, 4);
		trend.setPointRadius(trend.getBorderWidth() / 2);

		forecast = chart.newDataset();
		forecast.setLabel("Forecast");
		forecast.setFill(Fill.FALSE);
		IsColor color3 = GoogleChartColor.values()[2];
		forecast.setBackgroundColor(color3.toHex());
		forecast.setBorderColor(color3.toHex());
		forecast.setBorderDash(4, 4);
		forecast.setPointRadius(forecast.getBorderWidth() / 2);

		double time = nowDate.getTime() - PREVIOUS_PERIOD * DAY;

		double[] xs1 = getRandomDigits(AMOUNT_OF_POINTS, false);
		DataPoint[] dataDp = new DataPoint[AMOUNT_OF_POINTS];
		DataPoint[] trendDp = new DataPoint[AMOUNT_OF_POINTS];
		DataPoint[] forecastDp = new DataPoint[AMOUNT_OF_POINTS];
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			dataDp[i] = new DataPoint();
			trendDp[i] = new DataPoint();
			forecastDp[i] = new DataPoint();
			Date newDate = new Date((long) time);
			if (time < nowDate.getTime()) {
				dataDp[i].setY(xs1[i]);
				trendDp[i].setY(xs1[i] * 0.80D);
				forecastDp[i].setY(Double.NaN);
			} else if (time == nowDate.getTime()) {
				dataDp[i].setY(xs1[i]);
				trendDp[i].setY(xs1[i]);
				forecastDp[i].setY(xs1[i]);
			} else {
				dataDp[i].setY(Double.NaN);
				trendDp[i].setY(Double.NaN);
				forecastDp[i].setY(xs1[i]);
			}
			dataDp[i].setX(newDate);
			trendDp[i].setX(newDate);
			forecastDp[i].setX(newDate);
			time = time + DAY;

		}
		dataset.setDataPoints(dataDp);
		trend.setDataPoints(trendDp);
		forecast.setDataPoints(forecastDp);

		axis = new CartesianTimeSeriesAxis(chart, MY_SCALE_ID, AxisKind.X);
		axis.getTicks().setSource(TickSource.DATA);
		axis.getTime().setUnit(TimeUnit.DAY);

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);
		axis2.setBeginAtZero(true);

		chart.getOptions().getScales().setAxes(axis, axis2);
		chart.getData().setDatasets(dataset, trend, forecast);

		AnnotationOptions options = new AnnotationOptions();

		LineAnnotation line = new LineAnnotation();
		line.setDrawTime(DrawTime.BEFORE_DATASETS_DRAW);
		line.setMode(LineMode.VERTICAL);
		line.setScaleID(DefaultScaleId.X.value());
		line.setBorderColor(HtmlColor.DARK_GRAY);
		line.setBorderWidth(2);
		line.setValue(new Date((long) nowDate.getTime()));
		line.getLabel().setEnabled(true);
		line.getLabel().setContent("Now");
		line.getLabel().setPosition(LineLabelPosition.TOP);

		options.setAnnotations(line);

		chart.getOptions().getPlugins().setOptions(AnnotationPlugin.ID, options);

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
		actionsCol.setAttribute("colspan", "2");
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
		double time = nowDate.getTime() - PREVIOUS_PERIOD * DAY;

		double[] xs1 = getRandomDigits(AMOUNT_OF_POINTS, false);
		DataPoint[] dataDp = new DataPoint[AMOUNT_OF_POINTS];
		DataPoint[] trendDp = new DataPoint[AMOUNT_OF_POINTS];
		DataPoint[] forecastDp = new DataPoint[AMOUNT_OF_POINTS];
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			dataDp[i] = new DataPoint();
			trendDp[i] = new DataPoint();
			forecastDp[i] = new DataPoint();
			Date newDate = new Date((long) time);
			if (time < nowDate.getTime()) {
				dataDp[i].setY(xs1[i]);
				trendDp[i].setY(xs1[i] * 0.80D);
				forecastDp[i].setY(Double.NaN);
			} else if (time == nowDate.getTime()) {
				dataDp[i].setY(xs1[i]);
				trendDp[i].setY(xs1[i]);
				forecastDp[i].setY(xs1[i]);
			} else {
				dataDp[i].setY(Double.NaN);
				trendDp[i].setY(Double.NaN);
				forecastDp[i].setY(xs1[i]);
			}
			dataDp[i].setX(newDate);
			trendDp[i].setX(newDate);
			forecastDp[i].setX(newDate);
			time = time + DAY;

		}
		dataset.setDataPoints(dataDp);
		trend.setDataPoints(trendDp);
		forecast.setDataPoints(forecastDp);
		chart.update();
	}

}
