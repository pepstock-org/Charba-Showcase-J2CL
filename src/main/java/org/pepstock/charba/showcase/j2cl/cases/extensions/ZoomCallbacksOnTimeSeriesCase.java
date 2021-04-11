package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.Arrays;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.TimeSeriesLineChart;
import org.pepstock.charba.client.adapters.DateAdapter;
import org.pepstock.charba.client.callbacks.AbstractTooltipTitleCallback;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.data.TimeSeriesItem;
import org.pepstock.charba.client.data.TimeSeriesLineDataset;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.InteractionAxis;
import org.pepstock.charba.client.enums.TickSource;
import org.pepstock.charba.client.enums.TimeUnit;
import org.pepstock.charba.client.items.TooltipItem;
import org.pepstock.charba.client.zoom.AbstractConfigurationItem;
import org.pepstock.charba.client.zoom.Drag;
import org.pepstock.charba.client.zoom.ZoomOptions;
import org.pepstock.charba.client.zoom.ZoomPlugin;
import org.pepstock.charba.client.zoom.callbacks.CompletedCallback;
import org.pepstock.charba.client.zoom.callbacks.ProgressCallback;
import org.pepstock.charba.client.zoom.callbacks.RejectedCallback;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.commons.LogView;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class ZoomCallbacksOnTimeSeriesCase extends BaseComposite {

	private static final long DAY = 1000 * 60 * 60 * 24;

	private static final int AMOUNT_OF_POINTS = 60;
	
	private final HTMLTableElement mainPanel;

	private final TimeSeriesLineChart chart = new TimeSeriesLineChart();

	private final LogView mylog = new LogView();

	private final HTMLInputElement dragging = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final Drag drag;
	
	private final CartesianTimeSeriesAxis axis;

	public ZoomCallbacksOnTimeSeriesCase() {
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
		chart.getOptions().getTitle().setText("Zoom callbacks on timeseries line chart");
		chart.getOptions().getTooltips().setTitleMarginBottom(10);
		chart.getOptions().getTooltips().getCallbacks().setTitleCallback(new AbstractTooltipTitleCallback() {

			@Override
			public List<String> onTitle(IsChart chart, List<TooltipItem> items) {
				TooltipItem item = items.iterator().next();
				LineDataset ds = (LineDataset) chart.getData().getDatasets().get(0);
				DataPoint dp = ds.getDataPoints().get(item.getDataIndex());
				DateAdapter adapter = axis.getAdapters().getDate().create();
				return Arrays.asList(adapter.format(dp.getXAsDate(), TimeUnit.DAY));
			}

		});

		final TimeSeriesLineDataset dataset1 = chart.newDataset();

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

		long time = new Date().getTime();

		double[] xs1 = getRandomDigits(AMOUNT_OF_POINTS, false);
		double[] xs2 = getRandomDigits(AMOUNT_OF_POINTS, false);
		List<TimeSeriesItem> data = new LinkedList<>();
		List<TimeSeriesItem> data1 = new LinkedList<>();

		time = time + DAY * AMOUNT_OF_POINTS;
		for (int i = AMOUNT_OF_POINTS - 1; i >= 0; i--) {
			data.add(new TimeSeriesItem(new Date(time), xs1[i]));
			data1.add(new TimeSeriesItem(new Date(time), xs2[i]));
			time = time - DAY;
		}
		dataset1.setTimeSeriesData(data);
		dataset2.setTimeSeriesData(data1);

		axis = chart.getOptions().getScales().getTimeAxis();
		axis.getTicks().setSource(TickSource.DATA);
		axis.getTime().setUnit(TimeUnit.DAY);

		CartesianLinearAxis axis2 = chart.getOptions().getScales().getLinearAxis();
		axis2.setDisplay(true);
		axis2.setBeginAtZero(true);
		axis2.setStacked(true);

		chart.getData().setDatasets(dataset1, dataset2);

		ZoomOptions options = new ZoomOptions();
		options.getZoom().setEnabled(true);
		options.getZoom().setMode(InteractionAxis.X);
		options.getZoom().setSpeed(0.05D);
		drag = ZoomPlugin.createDrag();
		drag.setAnimationDuration(1000);
		options.getZoom().setDrag(drag);
		options.getZoom().setCompletedCallback(new CompletedCallback() {

			@Override
			public void onCompleted(IsChart chart, AbstractConfigurationItem<?> item) {
				mylog.addLogEvent("> ZOOM COMPLETE on chart");
			}
		});

		options.getZoom().setProgressCallback(new ProgressCallback() {

			@Override
			public void onProgress(IsChart chart, AbstractConfigurationItem<?> item) {
				mylog.addLogEvent("> ZOOM in PROGRESS on chart");
			}
		});

		options.getZoom().setRejectedCallback(new RejectedCallback() {

			@Override
			public void onRejected(IsChart chart, AbstractConfigurationItem<?> item) {
				mylog.addLogEvent("> ZOOM REJECTED; press CTRL to zoom");
			}
		});

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

		String draggingId = "dragging" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForDragging = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForDragging.htmlFor = draggingId;
		labelForDragging.appendChild(DomGlobal.document.createTextNode("Dragging "));
		actionsCol.appendChild(labelForDragging);

		dragging.id = draggingId;
		dragging.checked = true;
		dragging.onclick = (p0) -> {
			handleDragging();
			return null;
		};
		dragging.type = "checkbox";
		dragging.className = "gwt-CheckBox";
		dragging.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(dragging);

		HTMLButtonElement reset = (HTMLButtonElement) DomGlobal.document.createElement("button");
		reset.onclick = (p0) -> {
			handleResetZoom();
			return null;
		};
		reset.className = "gwt-Button";
		reset.textContent = "Reset zoom";
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
		for (Dataset dataset : chart.getData().getDatasets()) {
			TimeSeriesLineDataset scDataset = (TimeSeriesLineDataset) dataset;
			for (TimeSeriesItem dp : scDataset.getTimeSeriesData()) {
				dp.setValue(getRandomDigit(false));
			}
		}
		chart.update();
	}

	protected void handleDragging() {
		ZoomOptions options = chart.getOptions().getPlugins().getOptions(ZoomPlugin.ID, ZoomPlugin.FACTORY);
		if (dragging.checked) {
			options.getZoom().setDrag(drag);
		} else {
			options.getZoom().setDrag(false);
		}
		chart.reconfigure();
	}

	protected void handleResetZoom() {
		ZoomPlugin.resetZoom(chart);
	}

}
