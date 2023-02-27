package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.adapters.DateAdapter;
import org.pepstock.charba.client.callbacks.AbstractTooltipTitleCallback;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.commons.CallbackProxy;
import org.pepstock.charba.client.commons.JsHelper;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.configuration.CartesianTimeSeriesAxis;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.dom.BaseEventTarget.EventListenerCallback;
import org.pepstock.charba.client.dom.DOM;
import org.pepstock.charba.client.dom.elements.Div;
import org.pepstock.charba.client.dom.enums.IsKeyboardKey;
import org.pepstock.charba.client.dom.enums.KeyboardEventType;
import org.pepstock.charba.client.dom.enums.KeyboardUiKey;
import org.pepstock.charba.client.dom.events.NativeBaseEvent;
import org.pepstock.charba.client.enums.TickSource;
import org.pepstock.charba.client.enums.TimeUnit;
import org.pepstock.charba.client.items.ScaleItem;
import org.pepstock.charba.client.items.TooltipItem;
import org.pepstock.charba.client.zoom.ScaleRange;
import org.pepstock.charba.client.zoom.ZoomContext;
import org.pepstock.charba.client.zoom.ZoomOptions;
import org.pepstock.charba.client.zoom.ZoomPlugin;
import org.pepstock.charba.client.zoom.enums.Mode;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class ZoomGroupCase extends BaseComposite {

	private static final List<IsChart> CHARTS = new LinkedList<>();

	private static final int AMOUNT_OF_POINTS = 60;
	
	private final HTMLTableElement mainPanel;

	private final HTMLDivElement help = (HTMLDivElement) DomGlobal.document.createElement("div");

	private final LineChart chart1 = new LineChart();

	private final LineChart chart2 = new LineChart();

	private final long startingPoint = System.currentTimeMillis();

	private final DateAdapter adapter;
	
	public ZoomGroupCase() {
		// ----------------------------------------------
		// Main element
		// ----------------------------------------------

		mainPanel = (HTMLTableElement) DomGlobal.document.createElement("table");
		mainPanel.width = "100%";
		mainPanel.cellPadding = "12";

		HTMLTableRowElement chartRow1 = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		chartRow1.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(chartRow1);

		HTMLTableCellElement chartCol1 = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		chartCol1.style.width = WidthUnionType.of("100%");
		chartRow1.appendChild(chartCol1);

		HTMLTableRowElement chartRow2 = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		chartRow2.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(chartRow2);

		HTMLTableCellElement chartCol2 = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		chartCol2.style.width = WidthUnionType.of("100%");
		chartRow2.appendChild(chartCol2);

		// ----------------------------------------------
		// Chart
		// ----------------------------------------------

		CHARTS.clear();
		adapter = new DateAdapter();

		loadChart(chart1, 0, 4);
		loadChart(chart2, 1, 4);

		CallbackProxy<EventListenerCallback> keyboardCallbackProxy = JsHelper.get().newCallbackProxy();
		keyboardCallbackProxy.setCallback(new EventListenerCallback() {

			@Override
			public void call(NativeBaseEvent event) {
				event.preventDefault();
				if (KeyboardUiKey.ESCAPE.is(event)) {
					clearZooming();
				}
			}
		});
		DOM.getDocument().addEventListener(KeyboardEventType.KEY_UP, keyboardCallbackProxy.getProxy());

		Div aEsc = IsKeyboardKey.getElement(KeyboardUiKey.ESCAPE);
		help.innerHTML = "Press " + aEsc.getInnerHTML() + " to clear zooming";

		chartCol1.appendChild(chart1.getChartElement().as());
		chartCol2.appendChild(chart2.getChartElement().as());

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
		helpCol.appendChild(help);
	}

	@Override
	public HTMLElement getElement() {
		return mainPanel;
	}

	private void loadChart(LineChart chart, int col, double ratio) {
		chart.getOptions().setResponsive(true);
		chart.getOptions().setMaintainAspectRatio(true);
		chart.getOptions().setAspectRatio(ratio);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Zoom grouping by line chart");

		chart.getOptions().getTooltips().getCallbacks().setTitleCallback(new AbstractTooltipTitleCallback() {

			@Override
			public List<String> onTitle(IsChart chart, List<TooltipItem> items) {
				TooltipItem item = items.iterator().next();
				LineDataset ds = (LineDataset) chart.getData().getDatasets().get(0);
				DataPoint dp = ds.getDataPoints().get(item.getDataIndex());
				return Arrays.asList(adapter.format(dp.getXAsDate(), TimeUnit.DAY));
			}

		});

		final LineDataset dataset = chart.newDataset();
		dataset.setLabel("dataset 1");
		dataset.setFill(false);

		IsColor color1 = GoogleChartColor.values()[col];

		dataset.setBackgroundColor(color1.toHex());
		dataset.setBorderColor(color1.toHex());

		double[] xs1 = getRandomDigits(AMOUNT_OF_POINTS, false);
		DataPoint[] dp1 = new DataPoint[AMOUNT_OF_POINTS];
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			dp1[i] = new DataPoint();
			dp1[i].setY(xs1[i]);
			dp1[i].setX(adapter.add(startingPoint, i, TimeUnit.DAY));
		}
		dataset.setDataPoints(dp1);

		final CartesianTimeSeriesAxis axis = new CartesianTimeSeriesAxis(chart);
		axis.getTicks().setSource(TickSource.DATA);
		axis.getTime().setUnit(TimeUnit.DAY);

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);
		axis2.setBeginAtZero(true);

		chart.getOptions().getScales().setAxes(axis, axis2);
		chart.getData().setDatasets(dataset);

		ZoomOptions zoomOptions = new ZoomOptions();
		zoomOptions.getPan().setEnabled(false);
		zoomOptions.getZoom().setMode(Mode.X);
		zoomOptions.getZoom().getWheel().setEnabled(true);
		zoomOptions.getZoom().getWheel().setSpeed(0.3);
		zoomOptions.store(chart);

		zoomOptions.getZoom().setCompletedCallback((ZoomContext context) -> {
			IsChart cCahrt = context.getChart();
			ScaleItem scaleAxis = cCahrt.getNode().getScales().getItems().get(axis.getId().value());
			double min = scaleAxis.getMin();
			double max = scaleAxis.getMax();
			
			ScaleRange range = new ScaleRange(min, max);

			for (IsChart rawChart : CHARTS) {
				if (rawChart == cCahrt)
				  continue;
				ZoomPlugin.zoomScale(rawChart, axis.getId(), range);
			}
		});
		CHARTS.add(chart);
	}

	private void clearZooming() {
		for (IsChart c : CHARTS) {
			ZoomPlugin.reset(c);
		}
	}
}
