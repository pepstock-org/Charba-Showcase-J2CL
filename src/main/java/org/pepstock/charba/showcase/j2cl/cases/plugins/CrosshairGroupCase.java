package org.pepstock.charba.showcase.j2cl.cases.plugins;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.adapters.DateAdapter;
import org.pepstock.charba.client.callbacks.AbstractTooltipTitleCallback;
import org.pepstock.charba.client.callbacks.MinMaxCallback;
import org.pepstock.charba.client.callbacks.ScaleContext;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.HtmlColor;
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
import org.pepstock.charba.client.enums.InteractionAxis;
import org.pepstock.charba.client.enums.TickSource;
import org.pepstock.charba.client.enums.TimeUnit;
import org.pepstock.charba.client.events.DatasetRangeSelectionEvent;
import org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler;
import org.pepstock.charba.client.impl.plugins.Crosshair;
import org.pepstock.charba.client.impl.plugins.CrosshairLabel;
import org.pepstock.charba.client.impl.plugins.CrosshairOptions;
import org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector;
import org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions;
import org.pepstock.charba.client.items.TooltipItem;
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

public class CrosshairGroupCase extends BaseComposite {

	private static final List<IsChart> CHARTS = new LinkedList<>();

	private static final int AMOUNT_OF_POINTS = 60;
	
	private final HTMLTableElement mainPanel;

	private final HTMLDivElement help = (HTMLDivElement) DomGlobal.document.createElement("div");

	private final LineChart chart1 = new LineChart();

	private final LineChart chart2 = new LineChart();

	private final long startingPoint = System.currentTimeMillis();

	private final DateAdapter adapter;
	
	private double minDate = Double.NaN;

	private double maxDate = Double.NaN;
	
	public CrosshairGroupCase() {
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
		chart.getOptions().getTitle().setText("Crosshair grouping by line chart");

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
		axis.setMin(new MinMaxCallback<Object>() {

			@Override
			public Double invoke(ScaleContext context) {
				return minDate;
			}
		});
		axis.setMax(new MinMaxCallback<Object>() {

			@Override
			public Double invoke(ScaleContext context) {
				return maxDate;
			}
		});

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);
		axis2.setBeginAtZero(true);

		chart.getOptions().getScales().setAxes(axis, axis2);
		chart.getData().setDatasets(dataset);

		CrosshairOptions options = new CrosshairOptions();
		options.setGroup("groupA");
		options.setLineColor(HtmlColor.BLACK);
		options.setMode(InteractionAxis.XY);
		options.setLineDash(3, 3);
		options.setLineWidth(1);
		options.getLabels().setDisplay(col == 1);
		options.getLabels().setBackgroundColor(HtmlColor.WHITE_SMOKE);
		options.getLabels().setBorderRadius(0);
		options.getLabels().setBorderWidth(1);
		options.getLabels().setColor(CrosshairLabel.DEFAULT_BACKGROUND_COLOR);
		options.getLabels().setBorderColor(CrosshairLabel.DEFAULT_BACKGROUND_COLOR);

		chart.getOptions().getPlugins().setOptions(Crosshair.ID, options);
		chart.getPlugins().add(Crosshair.get());

		DatasetsItemsSelectorOptions pOptions = new DatasetsItemsSelectorOptions();
		pOptions.setBorderWidth(2);
		pOptions.setBorderDash(6, 2);
		pOptions.setBorderColor(HtmlColor.GREY);
		pOptions.setColor(HtmlColor.LIGHT_GREEN.alpha(DatasetsItemsSelectorOptions.DEFAULT_ALPHA));
		pOptions.getSelectionCleaner().setDisplay(false);

		chart.getOptions().getPlugins().setOptions(DatasetsItemsSelector.ID, pOptions);
		chart.getPlugins().add(DatasetsItemsSelector.get());

		chart.addHandler(new DatasetRangeSelectionEventHandler() {

			@Override
			public void onSelect(DatasetRangeSelectionEvent event) {
				minDate = event.getFrom().getValue();
				maxDate = event.getTo().getValue();
				for (IsChart c : CHARTS) {
					if (c.getId().equals(event.getChart().getId())) {
						DatasetsItemsSelector.get().cleanSelection(c, false);
					}
					c.reconfigure();
				}
			}
		}, DatasetRangeSelectionEvent.TYPE);

		// adds chart
		CHARTS.add(chart);
	}

	private void clearZooming() {
		minDate = Double.NaN;
		maxDate = Double.NaN;
		for (IsChart c : CHARTS) {
			c.reconfigure();
		}
	}
}
