package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.ScatterChart;
import org.pepstock.charba.client.adapters.DateAdapter;
import org.pepstock.charba.client.callbacks.AbstractTooltipTitleCallback;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.configuration.CartesianTimeAxis;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.data.ScatterDataset;
import org.pepstock.charba.client.enums.DefaultScaleId;
import org.pepstock.charba.client.enums.DefaultTransitionKey;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.InteractionAxis;
import org.pepstock.charba.client.enums.ModifierKey;
import org.pepstock.charba.client.enums.TimeUnit;
import org.pepstock.charba.client.items.TooltipItem;
import org.pepstock.charba.client.zoom.ScaleRange;
import org.pepstock.charba.client.zoom.ZoomOptions;
import org.pepstock.charba.client.zoom.ZoomPlugin;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class ZoomTimeAxisCase extends BaseComposite {

	private static final long DAY = 1000 * 60 * 60 * 24;
	
	private static final long MAX_DAYS = DAY * 20;

	private static final int AMOUNT_OF_POINTS = 500;
	
	private final HTMLTableElement mainPanel;
	
	private final HTMLInputElement enableZoom = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final HTMLInputElement enablePan = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final HTMLDivElement help = (HTMLDivElement) DomGlobal.document.createElement("div");

	private final ScatterChart chart = new ScatterChart();
	
	private final long time;

	public ZoomTimeAxisCase() {
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
		chart.getOptions().setMaintainAspectRatio(true);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Zooming on cartesian time axis");
		chart.getOptions().getTooltips().setTitleMarginBottom(10);
		chart.getOptions().getTooltips().getCallbacks().setTitleCallback(new AbstractTooltipTitleCallback() {

			@Override
			public List<String> onTitle(IsChart chart, List<TooltipItem> items) {
				TooltipItem item = items.iterator().next();
				LineDataset ds = (LineDataset) chart.getData().getDatasets().get(0);
				DataPoint dp = ds.getDataPoints().get(item.getDataIndex());
				return Arrays.asList(adapter.format(dp.getXAsDate(), TimeUnit.DAY));
			}

		});

		final ScatterDataset dataset1 = chart.newDataset();

		dataset1.setLabel("dataset 1");
		dataset1.setFill(Fill.FALSE);

		IsColor color1 = GoogleChartColor.values()[0];

		dataset1.setBackgroundColor(color1.toHex());
		dataset1.setBorderColor(color1.toHex());

		time = new Date().getTime();

		double[] xs1 = getRandomDigits(AMOUNT_OF_POINTS, 0, 1000);
		
		List<DataPoint> points = dataset1.getDataPoints(true);

		for (int i = AMOUNT_OF_POINTS - 1; i >= 0; i--) {
			long newTime = time + (long)(Math.random() * MAX_DAYS);
			DataPoint dp = new DataPoint();
			dp.setX(new Date(newTime));
			dp.setY(xs1[i]);
			points.add(dp);
		}

		CartesianTimeAxis axis = new CartesianTimeAxis(chart);
		axis.getTicks().setAutoSkip(true);
		axis.getTicks().setAutoSkipPadding(50);
		axis.getTicks().setMaxRotation(0);
		axis.getTime().getDisplayFormats().setDisplayFormat(TimeUnit.HOUR, "HH:mm");
		axis.getTime().getDisplayFormats().setDisplayFormat(TimeUnit.MINUTE, "HH:mm");
		axis.getTime().getDisplayFormats().setDisplayFormat(TimeUnit.SECOND, "HH:mm:ss");

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);
		axis2.setBeginAtZero(true);
		axis2.setStacked(true);

		chart.getData().setDatasets(dataset1);
		chart.getOptions().getScales().setAxes(axis, axis2);

		ZoomOptions options = new ZoomOptions();
		options.getPan().setEnabled(true);
		options.getPan().setMode(InteractionAxis.XY);
		options.getZoom().setMode(InteractionAxis.XY);
		options.getZoom().getWheel().setEnabled(true);

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

		HTMLButtonElement reset = (HTMLButtonElement) DomGlobal.document.createElement("button");
		reset.onclick = (p0) -> {
			handleResetZoom();
			return null;
		};
		reset.className = "gwt-Button";
		reset.textContent = "Reset zoom";
		reset.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(reset);
		
		String zoomId = "zoom" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForZoom = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForZoom.htmlFor = zoomId;
		labelForZoom.appendChild(DomGlobal.document.createTextNode("Zoom enable"));
		actionsCol.appendChild(labelForZoom);

		enableZoom.id = zoomId;
		enableZoom.checked = true;
		enableZoom.onclick = (p0) -> {
			handleZoom();
			return null;
		};
		enableZoom.type = "checkbox";
		enableZoom.className = "gwt-CheckBox";
		enableZoom.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(enableZoom);

		String panId = "pan" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForPan = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForPan.htmlFor = panId;
		labelForPan.appendChild(DomGlobal.document.createTextNode("Pan enable"));
		actionsCol.appendChild(labelForPan);

		enablePan.id = panId;
		enablePan.checked = true;
		enablePan.onclick = (p0) -> {
			handlePan();
			return null;
		};
		enablePan.type = "checkbox";
		enablePan.className = "gwt-CheckBox";
		enablePan.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(enablePan);

		HTMLButtonElement zoomNextWeek = (HTMLButtonElement) DomGlobal.document.createElement("button");
		zoomNextWeek.onclick = (p0) -> {
			handleZoomNextWeek();
			return null;
		};
		zoomNextWeek.className = "gwt-Button";
		zoomNextWeek.textContent = "Zoom next week";
		zoomNextWeek.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(zoomNextWeek);

		HTMLButtonElement zoom400600 = (HTMLButtonElement) DomGlobal.document.createElement("button");
		zoom400600.onclick = (p0) -> {
			handleZoom400600();
			return null;
		};
		zoom400600.className = "gwt-Button";
		zoom400600.textContent = "Zoom to 400-600";
		zoom400600.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(zoom400600);

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
		help.innerHTML = ModifierKey.ALT.getElement().getInnerHTML() + " + wheeling to zoom";
		helpCol.appendChild(help);
		
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
	}

	@Override
	public HTMLElement getElement() {
		return mainPanel;
	}

	protected void handleRandomize() {
		for (Dataset dataset : chart.getData().getDatasets()) {
			ScatterDataset scDataset = (ScatterDataset) dataset;
			List<DataPoint> points = scDataset.getDataPoints(true);
			for (DataPoint dp : points) {
				dp.setY(getRandomDigit(0, 1000));
			}
		}
		chart.update();
	}

	protected void handleResetZoom() {
		ZoomPlugin.reset(chart);
	}
	protected void handleZoom() {
		ZoomOptions options = chart.getOptions().getPlugins().getOptions(ZoomPlugin.FACTORY);
		options.getZoom().getWheel().setEnabled(enableZoom.checked);
		chart.update();
	}
	
	protected void handlePan() {
		ZoomOptions options = chart.getOptions().getPlugins().getOptions(ZoomPlugin.FACTORY);
		options.getPan().setEnabled(enablePan.checked);
		chart.update();
	}
	
	protected void handleZoomNextWeek() {
		ScaleRange range = new ScaleRange();
		range.setMin(time);
		range.setMax(time + DAY * 8);
		ZoomPlugin.zoomScale(chart, DefaultScaleId.X, range, DefaultTransitionKey.DEFAULT);
	}
	
	protected void handleZoom400600() {
		ScaleRange range = new ScaleRange();
		range.setMin(400);
		range.setMax(600);
		ZoomPlugin.zoomScale(chart, DefaultScaleId.Y, range, DefaultTransitionKey.DEFAULT);
	}

}
