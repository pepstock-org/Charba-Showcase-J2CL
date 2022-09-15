package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.commons.Key;
import org.pepstock.charba.client.data.Labels;
import org.pepstock.charba.client.datalabels.DataLabelsContext;
import org.pepstock.charba.client.datalabels.DataLabelsOptions;
import org.pepstock.charba.client.datalabels.DataLabelsPlugin;
import org.pepstock.charba.client.datalabels.callbacks.FormatterCallback;
import org.pepstock.charba.client.datalabels.enums.Align;
import org.pepstock.charba.client.enums.Weight;
import org.pepstock.charba.client.geo.BubbleMapChart;
import org.pepstock.charba.client.geo.BubbleMapDataPoint;
import org.pepstock.charba.client.geo.BubbleMapDataset;
import org.pepstock.charba.client.geo.Feature;
import org.pepstock.charba.client.geo.GeoFeatureElementOptions;
import org.pepstock.charba.client.geo.GeoUtil;
import org.pepstock.charba.client.geo.ProjectionAxis;
import org.pepstock.charba.client.geo.SizeAxis;
import org.pepstock.charba.client.geo.enums.Position;
import org.pepstock.charba.client.geo.enums.Projection;
import org.pepstock.charba.client.items.DataItem;
import org.pepstock.charba.showcase.j2cl.App;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.topojson.UScapitals;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class GeoBubbleMapDatalabelsCase extends BaseComposite {

	private static final UScapitals US_CAPITALS_FILE = new UScapitals();
	
	private static final Map<String, Capital> CAPITALS = new HashMap<>();

	private static final Key NAME = Key.create("name");

	private final HTMLTableElement mainPanel;

	private final BubbleMapChart chart = new BubbleMapChart();

	private final BubbleMapDataset dataset1;

	private final List<BubbleMapDataPoint> geodata = new LinkedList<>();

	public GeoBubbleMapDatalabelsCase() {

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


		if (CAPITALS.isEmpty()) {
			parseAndLoad();
		}

		List<Feature> stateFeatures = GeoUtil.features(App.US, "states");

		chart.getOptions().setResponsive(true);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("US bubble map chart");
		chart.getOptions().getElements().getElement(GeoFeatureElementOptions.FACTORY).setOutlineBorderColor(HtmlColor.GREEN);
		chart.getOptions().getElements().getPoint().setBackgroundColor(HtmlColor.LIGHT_CORAL);

		Labels labels = Labels.build();

		for (Feature f : stateFeatures) {
			String state = f.getStringProperty(NAME);
			if (CAPITALS.containsKey(state)) {
				Capital c = CAPITALS.get(state);
				labels.add(c.capital);
				geodata.add(new BubbleMapDataPoint(c.latitude, c.longitude, getRandomDigit(0, 1000)));
			}
		}

		dataset1 = chart.newDataset();
		dataset1.setLabel("States");
		dataset1.setOutline(stateFeatures);
		dataset1.setValues(geodata);
		dataset1.setBackgroundColor(HtmlColor.LIGHT_CORAL);

		ProjectionAxis axis1 = new ProjectionAxis(chart);
		axis1.setProjection(Projection.ALBERS_USA);
		
		SizeAxis axis2 = new SizeAxis(chart);
		axis2.getLegend().setAlign(org.pepstock.charba.client.geo.enums.Align.RIGHT);
		axis2.getLegend().setPosition(Position.BOTTOM_RIGHT);
		axis2.setRange(1, 20);
		chart.getOptions().getScales().setAxes(axis1, axis2);

		chart.getData().setLabels(labels);
		chart.getData().setDatasets(dataset1);

		DataLabelsOptions option = new DataLabelsOptions();
		option.setAlign(Align.TOP);
		option.setColor(HtmlColor.BLACK);
		option.getFont().setWeight(Weight.BOLD);
		option.setFormatter(new FormatterCallback() {
			
			@Override
			public String invoke(DataLabelsContext context, DataItem dataItem) {
				BubbleMapDataPoint bmp = dataItem.createDataPoint(BubbleMapDataPoint.FACTORY);
				return "v: ["+bmp.getValue()+"]";
			}
		});

		chart.getOptions().getPlugins().setOptions(DataLabelsPlugin.ID, option);
		
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
		for (BubbleMapDataPoint g : geodata) {
			g.setValue(getRandomDigit(0, 1000));
		}
		dataset1.setValues(geodata);
		chart.update();
	}
	
	private void parseAndLoad() {
		String[] records = US_CAPITALS_FILE.getContent().split("\n");
		for (int i = 1; i < records.length; i++) {
			Capital c = new Capital(records[i]);
			CAPITALS.put(c.state, c);
		}
	}
	
	private static class Capital {

		private final String state;

		private final String capital;

		private final double latitude;

		private final double longitude;

		private Capital(String record) {
			String[] values = record.split(",");
			this.state = values[0];
			this.capital = values[1];
			this.latitude = Double.parseDouble(values[2]);
			this.longitude = Double.parseDouble(values[3]);
		}

	}

}
