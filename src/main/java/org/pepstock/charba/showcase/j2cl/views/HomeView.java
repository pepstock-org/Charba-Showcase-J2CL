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
import org.pepstock.charba.client.events.DatasetSelectionEvent;
import org.pepstock.charba.client.events.DatasetSelectionEventHandler;
import org.pepstock.charba.client.impl.plugins.ChartPointer;
import org.pepstock.charba.client.impl.plugins.ChartPointerOptions;
import org.pepstock.charba.client.impl.plugins.enums.PointerElement;
import org.pepstock.charba.client.utils.Utilities;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class HomeView extends BaseComposite {

	private static final String LINK_GITHUB_VERSION = "https://github.com/pepstock-org/Charba/releases/tag/";

	private static final String[] LABELS = {"4.0", "4.1", "4.2", "5.0", "5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7", "5.8", "6.0", "6.1", "6.2", "6.3", "6.4", "6.5"};

	private static final double[] VALUES_GWT = {4098, 4541, 4843, 4924, 5152, 5322, 5533, 5555, 5584, 5895, 5759, 5797, 6004, 6009, 6075, 6108, 6119, 6161};
	
	private static final double[] VALUES_J2CL = {3933, 4336, 4697, 4775, 5003, 5167, 5364, 5386, 5415, 5720, 5584, 5622, 5825, 5829, 5896, 5929, 5939, 5979};

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();
	
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

		chart.getOptions().setResponsive(true);
		chart.getOptions().setAspectRatio(2.5D);
		chart.getOptions().setMaintainAspectRatio(true);
		chart.getOptions().getLegend().setDisplay(true);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Charba artifacts");
		chart.getOptions().getTooltips().setEnabled(false);

		LineDataset datasetGwt = chart.newDataset();
		datasetGwt.setLabel("GWT");

		datasetGwt.setBackgroundColor(Color.CHARBA);
		datasetGwt.setBorderColor(Color.CHARBA);
		datasetGwt.setBorderWidth(4);
		datasetGwt.setPointBackgroundColor(HtmlColor.WHITE);
		datasetGwt.setPointBorderColor(Color.CHARBA);
		datasetGwt.setPointBorderWidth(1);
		datasetGwt.setPointRadius(4);
		datasetGwt.setPointHoverRadius(4);
		datasetGwt.setPointHoverBackgroundColor(Color.CHARBA);
		datasetGwt.setPointHoverBorderWidth(1);
		datasetGwt.setPointHitRadius(4);
		datasetGwt.setFill(false);
		datasetGwt.setData(VALUES_GWT);

		LineDataset datasetJ2CL = chart.newDataset();
		datasetJ2CL.setLabel("J2CL");

		datasetJ2CL.setBackgroundColor(HtmlColor.CORNFLOWER_BLUE);
		datasetJ2CL.setBorderColor(HtmlColor.CORNFLOWER_BLUE);
		datasetJ2CL.setBorderWidth(4);
		datasetJ2CL.setPointBackgroundColor(HtmlColor.WHITE);
		datasetJ2CL.setPointBorderColor(HtmlColor.CORNFLOWER_BLUE);
		datasetJ2CL.setPointBorderWidth(1);
		datasetJ2CL.setPointRadius(4);
		datasetJ2CL.setPointHoverRadius(4);
		datasetJ2CL.setPointHoverBackgroundColor(HtmlColor.CORNFLOWER_BLUE);
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
		axis1.getTitle().setDisplay(true);
		axis1.getTitle().setText("Charba version");
		axis1.getTitle().setColor(HtmlColor.BLACK);

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);
		axis2.getGrid().setZ(-1);
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

		axis2.getTitle().setDisplay(true);
		axis2.getTitle().setText("JAR size");
		axis2.getTitle().setColor(HtmlColor.BLACK);

		chart.getOptions().getScales().setAxes(axis1, axis2);

		chart.getData().setLabels(LABELS);
		chart.getData().setDatasets(datasetGwt, datasetJ2CL);
		
		ChartPointerOptions options = new ChartPointerOptions();
		options.setElements(PointerElement.DATASET, PointerElement.LEGEND);
		chart.getOptions().getPlugins().setOptions(ChartPointer.ID, options);

		chart.getPlugins().add(ChartPointer.get());
		
		chart.getChartElement().getStyle().setWidth(Unit.PCT.format(70));

		Element chartElement = chart.getChartElement().as();
		chartCol.appendChild(chartElement);

	}

	@Override
	public HTMLElement getElement() {
		return mainPanel;
	}

}
