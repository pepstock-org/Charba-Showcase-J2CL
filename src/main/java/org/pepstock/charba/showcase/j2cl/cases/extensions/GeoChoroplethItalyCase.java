package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.LinkedList;
import java.util.List;

import org.pepstock.charba.client.commons.Key;
import org.pepstock.charba.client.data.Labels;
import org.pepstock.charba.client.geo.ChoroplethChart;
import org.pepstock.charba.client.geo.ChoroplethDataPoint;
import org.pepstock.charba.client.geo.ChoroplethDataset;
import org.pepstock.charba.client.geo.ColorAxis;
import org.pepstock.charba.client.geo.Feature;
import org.pepstock.charba.client.geo.GeoUtils;
import org.pepstock.charba.client.geo.ProjectionAxis;
import org.pepstock.charba.client.geo.enums.Interpolate;
import org.pepstock.charba.client.geo.enums.Projection;
import org.pepstock.charba.showcase.j2cl.App;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.HTMLOptionElement;
import elemental2.dom.HTMLSelectElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class GeoChoroplethItalyCase extends BaseComposite {

	private static final Key NAME0 = Key.create("NAME_0");
	private static final Key NAME2 = Key.create("NAME_2");
	private static final Key GEOUNIT = Key.create("geounit");

	private final HTMLTableElement mainPanel;

	private final HTMLSelectElement color = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private final ChoroplethChart chart = new ChoroplethChart();

	private final ChoroplethDataset dataset1;

	private final ColorAxis axis2;

	private final List<ChoroplethDataPoint> geodata = new LinkedList<>();

	public GeoChoroplethItalyCase() {

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
		
		HTMLOptionElement colorDefault = (HTMLOptionElement) DomGlobal.document.createElement("option");
		colorDefault.text = "Default";
		colorDefault.value = Interpolate.BLUES.name();
		color.add(colorDefault);
		for (Interpolate interpolate : Interpolate.values()) {
			HTMLOptionElement colorN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			colorN.text = interpolate.name();
			colorN.value = interpolate.name();
			color.add(colorN);
		}
		
		List<Feature> stateFeatures = GeoUtils.features(App.ITALY, "ITA_adm2", (element, index) -> "Italy".equalsIgnoreCase(element.getPropertyValue(NAME0, null)));
		Feature outline = GeoUtils.feature(App.EUROPE, "continent_Europe_subunits", (element, index) -> "Italy".equalsIgnoreCase(element.getPropertyValue(GEOUNIT, null)) && element.hasGeometry());

		chart.getOptions().setResponsive(true);
		chart.getOptions().getLegend().setDisplay(false);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Italian provinces choropleth chart with selected interpolation");

		Labels labels = GeoUtils.loadLabels(stateFeatures, NAME2);

		for (Feature f : stateFeatures) {
			geodata.add(new ChoroplethDataPoint(f, getRandomDigit(0, 100)));
		}
		
		dataset1 = chart.newDataset();
		dataset1.setLabel("Italy");
		dataset1.setOutline(outline);
		dataset1.setValues(geodata);
		
		ProjectionAxis axis1 = new ProjectionAxis(chart);
		axis1.setProjection(Projection.EQUAL_EARTH);
		
		axis2 = new ColorAxis(chart);
		axis2.setInterpolate(Interpolate.BLUES);
		chart.getOptions().getScales().setAxes(axis1, axis2);

		chart.getData().setLabels(labels);
		chart.getData().setDatasets(dataset1);
		
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
		
		String colorId = "color" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForColor = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForColor.htmlFor = colorId;
		labelForColor.appendChild(DomGlobal.document.createTextNode("Color "));
		actionsCol.appendChild(labelForColor);

		color.id = colorId;
		color.onchange = (p0) -> {
			handleColor();
			return null;
		};
		color.className = "gwt-ListBox";
		color.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(color);

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
		for (ChoroplethDataPoint g : geodata) {
			g.setValue(getRandomDigit(0, 100));
		}
		dataset1.setValues(geodata);
		chart.update();
	}
	
	protected void handleColor() {
		String selected = color.options.getAt(color.selectedIndex).value;
		Interpolate interpolate = Interpolate.valueOf(selected);
		axis2.setInterpolate(interpolate);
		chart.reconfigure();
	}

}
