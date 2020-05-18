package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.Arrays;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.TimeSeriesLineChart;
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
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.data.TimeSeriesItem;
import org.pepstock.charba.client.data.TimeSeriesLineDataset;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.ScaleDistribution;
import org.pepstock.charba.client.enums.TickSource;
import org.pepstock.charba.client.enums.TimeUnit;
import org.pepstock.charba.client.items.TooltipItem;
import org.pepstock.charba.client.options.Scales;
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

public class AnnotationLineOnTimeSeriesLineCase extends BaseComposite {

	private static final int AMOUNT_OF_POINTS = 60;

	private final HTMLTableElement mainPanel;

	private final TimeSeriesLineChart chart = new TimeSeriesLineChart();

	private final LineAnnotation line1 = new LineAnnotation();

	private final TimeSeriesLineDataset dataset1;

	private final long startingPoint = System.currentTimeMillis();

	public AnnotationLineOnTimeSeriesLineCase() {
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
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Line annotation on timeseries line chart");
		chart.getOptions().getTooltips().setTitleMarginBottom(10);
		chart.getOptions().getTooltips().getCallbacks().setTitleCallback(new AbstractTooltipTitleCallback() {

			@Override
			public List<String> onTitle(IsChart chart, List<TooltipItem> items) {
				TooltipItem item = items.iterator().next();
				LineDataset ds = (LineDataset) chart.getData().getDatasets().get(0);
				DataPoint dp = ds.getDataPoints().get(item.getIndex());
				return Arrays.asList(adapter.format(dp.getXAsDate(), TimeUnit.DAY));
			}

		});

		dataset1 = chart.newDataset();

		dataset1.setLabel("dataset 1");
		dataset1.setFill(Fill.FALSE);

		IsColor color1 = GoogleChartColor.values()[0];

		dataset1.setBackgroundColor(color1.toHex());
		dataset1.setBorderColor(color1.toHex());

		final TimeSeriesLineDataset dataset2 = chart.newDataset();

		dataset2.setLabel("dataset 2");
		dataset2.setFill(Fill.FALSE);

		IsColor color2 = GoogleChartColor.values()[1];

		dataset2.setBackgroundColor(color2.toHex());
		dataset2.setBorderColor(color2.toHex());

		int gap = (int) (AMOUNT_OF_POINTS / 2);

		double[] xs1 = getRandomDigits(AMOUNT_OF_POINTS, false);
		double[] xs2 = getRandomDigits(AMOUNT_OF_POINTS, false);
		List<TimeSeriesItem> data = new LinkedList<>();
		List<TimeSeriesItem> data1 = new LinkedList<>();

		for (int i = AMOUNT_OF_POINTS - 1; i >= 0; i--) {
			data.add(new TimeSeriesItem(adapter.add(startingPoint, i - gap, TimeUnit.DAY), xs1[i]));
			data1.add(new TimeSeriesItem(adapter.add(startingPoint, i - gap, TimeUnit.DAY), xs2[i]));
		}
		dataset1.setTimeSeriesData(data);
		dataset2.setTimeSeriesData(data1);

		CartesianTimeAxis axis = chart.getOptions().getScales().getTimeAxis();
		axis.setDistribution(ScaleDistribution.SERIES);
		axis.getTicks().setSource(TickSource.DATA);
		axis.getTime().setUnit(TimeUnit.DAY);

		CartesianLinearAxis axis2 = chart.getOptions().getScales().getLinearAxis();
		axis2.setDisplay(true);
		axis2.getTicks().setBeginAtZero(true);
		axis2.setStacked(true);

		chart.getData().setDatasets(dataset1, dataset2);

		AnnotationOptions options = new AnnotationOptions();

		LineAnnotation line = new LineAnnotation();
		line.setDrawTime(DrawTime.AFTER_DRAW);
		line.setMode(LineMode.VERTICAL);
		line.setScaleID(Scales.DEFAULT_X_AXIS_ID);
		line.setBorderColor(HtmlColor.DARK_GRAY);
		line.setBorderWidth(2);
		line.setValue(new Date(startingPoint));
		line.getLabel().setEnabled(true);
		line.getLabel().setContent("Now");
		line.getLabel().setPosition(LineLabelPosition.TOP);

		line1.setDrawTime(DrawTime.AFTER_DRAW);
		line1.setMode(LineMode.HORIZONTAL);
		line1.setScaleID(Scales.DEFAULT_Y_AXIS_ID);
		line1.setBorderColor(HtmlColor.ORANGE);
		line1.setBorderWidth(4);
		line1.setBorderDash(4, 4);
		List<DataPoint> dataPoints = dataset1.getDataPoints();
		int size = dataPoints.size();
		double sum = 0D;
		for (DataPoint dp : dataPoints) {
			sum += dp.getY();
		}
		line1.setValue(sum / size);
		line1.getLabel().setEnabled(true);
		line1.getLabel().setContent("Average " + dataset1.getLabel());
		line1.getLabel().setPosition(LineLabelPosition.RIGHT);
		line1.getLabel().setBackgroundColor(HtmlColor.ORANGE);
		line1.getLabel().setFontColor(HtmlColor.BLACK);
		line1.getLabel().setFontSize(18);

		options.setAnnotations(line, line1);

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
			TimeSeriesLineDataset scDataset = (TimeSeriesLineDataset) dataset;
			for (TimeSeriesItem dp : scDataset.getTimeSeriesData()) {
				dp.setValue(getRandomDigit(false));
			}
		}
		List<DataPoint> dataPoints = dataset1.getDataPoints();
		int size = dataPoints.size();
		double sum = 0D;
		for (DataPoint dp : dataPoints) {
			sum += dp.getY();
		}
		line1.setValue((sum / size));
		chart.reconfigure();
	}
}
