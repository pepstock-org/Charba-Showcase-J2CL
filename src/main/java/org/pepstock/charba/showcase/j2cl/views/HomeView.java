package org.pepstock.charba.showcase.j2cl.views;

import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.callbacks.TickCallback;
import org.pepstock.charba.client.colors.Color;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.configuration.Axis;
import org.pepstock.charba.client.configuration.CartesianCategoryAxis;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.Labels;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.dom.enums.Unit;
import org.pepstock.charba.client.enums.DefaultDateAdapter;
import org.pepstock.charba.client.events.DatasetSelectionEvent;
import org.pepstock.charba.client.events.DatasetSelectionEventHandler;
import org.pepstock.charba.client.impl.plugins.ChartPointer;
import org.pepstock.charba.client.impl.plugins.ChartPointerOptions;
import org.pepstock.charba.client.impl.plugins.enums.PointerElement;
import org.pepstock.charba.client.resources.ResourcesType;
import org.pepstock.charba.client.utils.Utilities;
import org.pepstock.charba.showcase.j2cl.App;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.HTMLOptionElement;
import elemental2.dom.HTMLSelectElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class HomeView extends BaseComposite {

	private static final String LINK_GITHUB_VERSION = "https://github.com/pepstock-org/Charba/releases/tag/";

	private static final String[] LABELS = { "", "1.0", "1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "2.0", "2.1", "2.2", "2.3", "2.4", "2.5", "2.6", "2.7", "2.8", "3.0", "3.1",  "3.2", "" };

	private static final double[] VALUES_GWT = { Double.NaN, Double.NaN, Double.NaN, 746, 760, 763, 832, 861, 863, 1200, 1550, 1710, 1720, 1910, 1950, 2040, 2334, 2536, 3064, 3091, 3125, Double.NaN };
	
	private static final double[] VALUES_J2CL = { Double.NaN, Double.NaN, Double.NaN, Double.NaN, Double.NaN, Double.NaN, Double.NaN, Double.NaN, Double.NaN, Double.NaN, Double.NaN, Double.NaN, Double.NaN, Double.NaN, Double.NaN, Double.NaN, Double.NaN, 2536, 2881, 2910, 2941, Double.NaN };

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();
	
	private final HTMLSelectElement dateAdapter = (HTMLSelectElement) DomGlobal.document.createElement("select");
	
	public HomeView() {
		mainPanel = (HTMLTableElement) DomGlobal.document.createElement("table");
		mainPanel.width = "100%";
		mainPanel.cellPadding = "12px";
		mainPanel.cellSpacing = "12px";

		HTMLTableRowElement singleRow = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		singleRow.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(singleRow);

		HTMLTableCellElement closureCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		singleRow.appendChild(closureCol);
		closureCol.width = "30%";
		closureCol.style.textAlign = "center";
		HTMLImageElement closureImg = (HTMLImageElement) DomGlobal.document.createElement("img");
		closureImg.src = "images/closurecompiler.png";
		closureCol.appendChild(closureImg);
		closureCol.appendChild(DomGlobal.document.createElement("br"));
		HTMLElement closureSpan = (HTMLElement) DomGlobal.document.createElement("span");
		closureSpan.style.textAlign = "center";
		closureSpan.innerHTML = "J2CL";
		closureSpan.className = "hero-name";
		closureCol.appendChild(closureSpan);
		
		HTMLTableCellElement midCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		singleRow.appendChild(midCol);
		midCol.width = "40%";
		midCol.style.textAlign = "center";
		HTMLElement midSpan = (HTMLElement) DomGlobal.document.createElement("span");
		midSpan.innerHTML = "<h1>J2CL meets Chart.JS</h1>" + 
				"<h1>by CHARBA</h1>" + 
				"<br/>" + 
				"<p>CHARBA is a J2CL library which wraps Chart.JS to enable charts on your J2CL web application.</p>";
		midSpan.className = "hero-title";
		midCol.appendChild(midSpan);
		
		HTMLTableCellElement cjsCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		singleRow.appendChild(cjsCol);
		cjsCol.width = "30%";
		cjsCol.style.textAlign = "center";
		HTMLImageElement cjsImg = (HTMLImageElement) DomGlobal.document.createElement("img");
		cjsImg.src = "images/chartjs.png";
		cjsCol.appendChild(cjsImg);
		cjsCol.appendChild(DomGlobal.document.createElement("br"));
		HTMLElement cjsSpan = (HTMLElement) DomGlobal.document.createElement("span");
		cjsSpan.innerHTML = "Chart.js";
		cjsSpan.className = "hero-name";
		cjsCol.appendChild(cjsSpan);
		
		HTMLTableRowElement chartRow = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		chartRow.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(chartRow);
		HTMLTableCellElement chartCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		chartCol.style.width = WidthUnionType.of("100%");
		chartCol.align = "middle";
		chartCol.colSpan = 3;
		chartRow.appendChild(chartCol);
		
		int index = 0;
		for (DefaultDateAdapter name : DefaultDateAdapter.values()) {
			if (!DefaultDateAdapter.UNKNOWN.equals(name)) {
				HTMLOptionElement adapterN = (HTMLOptionElement) DomGlobal.document.createElement("option");
				adapterN.text = name.value();
				adapterN.value = name.value();
				dateAdapter.add(adapterN);
				if (name.value().equalsIgnoreCase(ResourcesType.getClientBundle().getModule().getId())) {
					dateAdapter.selectedIndex = index;
				}
				index++;
			}
		}

		chart.getOptions().setResponsive(true);
		chart.getOptions().setMaintainAspectRatio(true);
		chart.getOptions().setAspectRatio(2.5D);
		chart.getOptions().getLegend().setDisplay(true);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Charba artifacts");
		chart.getOptions().getTooltips().setEnabled(false);

		LineDataset datasetGwt = chart.newDataset();
		datasetGwt.setLabel("GWT");

		datasetGwt.setBackgroundColor(Color.CHARBA);
		datasetGwt.setBorderColor(Color.CHARBA);
		datasetGwt.setBorderWidth(5);
		datasetGwt.setPointBackgroundColor(HtmlColor.WHITE);
		datasetGwt.setPointBorderColor(Color.CHARBA);
		datasetGwt.setPointBorderWidth(1);
		datasetGwt.setPointRadius(4);
		datasetGwt.setPointHoverRadius(4);
		datasetGwt.setPointHoverBorderWidth(1);
		datasetGwt.setPointHitRadius(4);
		datasetGwt.setFill(false);
		datasetGwt.setData(VALUES_GWT);

		LineDataset datasetJ2CL = chart.newDataset();
		datasetJ2CL.setLabel("J2CL");

		datasetJ2CL.setBackgroundColor(HtmlColor.CORNFLOWER_BLUE);
		datasetJ2CL.setBorderColor(HtmlColor.CORNFLOWER_BLUE);
		datasetJ2CL.setBorderWidth(5);
		datasetJ2CL.setPointBackgroundColor(HtmlColor.WHITE);
		datasetJ2CL.setPointBorderColor(HtmlColor.CORNFLOWER_BLUE);
		datasetJ2CL.setPointBorderWidth(1);
		datasetJ2CL.setPointRadius(4);
		datasetJ2CL.setPointHoverRadius(4);
		datasetJ2CL.setPointHoverBorderWidth(1);
		datasetJ2CL.setPointHitRadius(4);
		datasetJ2CL.setFill(false);
		datasetJ2CL.setData(VALUES_J2CL);

		chart.addHandler(new DatasetSelectionEventHandler() {

			@Override
			public void onSelect(DatasetSelectionEvent event) {
				IsChart chart = (IsChart) event.getSource();
				Labels labels = chart.getData().getLabels();
				String version = labels.getString(event.getItem().getIndex());
				StringBuilder sb = new StringBuilder(LINK_GITHUB_VERSION);
				sb.append(version);
				DomGlobal.window.open(sb.toString(), "_blank", "");
			}

		}, DatasetSelectionEvent.TYPE);

		CartesianCategoryAxis axis1 = new CartesianCategoryAxis(chart);
		axis1.setDisplay(true);
		axis1.getScaleLabel().setDisplay(true);
		axis1.getScaleLabel().setLabelString("Charba version");
		axis1.getScaleLabel().setFontColor(HtmlColor.BLACK);

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);
		axis2.getTicks().setCallback(new TickCallback() {

			@Override
			public String onCallback(Axis axis, double value, int index, List<Double> values) {
				if (value >= 1000D) {
					double thousands = value / 1000D;
					return Utilities.applyPrecision(thousands, 1) + " MB";
				}
				return value + " KB";
			}
		});

		axis2.getScaleLabel().setDisplay(true);
		axis2.getScaleLabel().setLabelString("JAR size");
		axis2.getScaleLabel().setFontColor(HtmlColor.BLACK);

		chart.getOptions().getScales().setXAxes(axis1);
		chart.getOptions().getScales().setYAxes(axis2);

		chart.getData().setLabels(LABELS);
		chart.getData().setDatasets(datasetGwt, datasetJ2CL);

		ChartPointerOptions options = new ChartPointerOptions();
		options.setElements(PointerElement.DATASET);
		chart.getOptions().getPlugins().setOptions(ChartPointer.ID, options);

		chart.getPlugins().add(ChartPointer.get());
		
		chart.getChartElement().getStyle().setWidth(Unit.PCT.format(70));

		Element chartElement = chart.getChartElement().as();
		chartCol.appendChild(chartElement);
		
		HTMLTableRowElement adapterRow = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		adapterRow.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(adapterRow);
		HTMLTableCellElement adapterCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		adapterCol.style.width = WidthUnionType.of("100%");
		adapterCol.align = "middle";
		adapterCol.colSpan = 3;
		adapterRow.appendChild(adapterCol);
		
		String dateAdapterId = "dateAdapter" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForDateAdapter = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForDateAdapter.htmlFor = dateAdapterId;
		labelForDateAdapter.appendChild(DomGlobal.document.createTextNode("Date adapter "));
		adapterCol.appendChild(labelForDateAdapter);

		dateAdapter.id = dateAdapterId;
		dateAdapter.onchange = (p0) -> {
			handleAdapater();
			return null;
		};
		dateAdapter.className = "gwt-ListBox";
		dateAdapter.style.marginRight = MarginRightUnionType.of("5px");
		adapterCol.appendChild(dateAdapter);
	}

	@Override
	public HTMLElement getElement() {
		return mainPanel;
	}

	private void handleAdapater() {
		String href = DomGlobal.window.location.href;
		StringBuilder cleanHref = null;
		if (href.contains("?")) {
			cleanHref = new StringBuilder(href.substring(0, href.indexOf("?")));
		} else {
			cleanHref = new StringBuilder(href);
		}
		cleanHref.append("?").append(App.DATE_ADAPTER_PARAM).append("=").append(dateAdapter.options.getAt(dateAdapter.selectedIndex).value);
		DomGlobal.window.location.replace(cleanHref.toString());
	}

}
