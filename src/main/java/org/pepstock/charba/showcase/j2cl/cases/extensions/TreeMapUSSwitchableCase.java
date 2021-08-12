package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.commons.ArrayListHelper;
import org.pepstock.charba.client.commons.ArrayObject;
import org.pepstock.charba.client.commons.Key;
import org.pepstock.charba.client.commons.NativeObject;
import org.pepstock.charba.client.commons.NativeObjectContainer;
import org.pepstock.charba.client.commons.NativeObjectContainerFactory;
import org.pepstock.charba.client.treemap.TreeMapChart;
import org.pepstock.charba.client.treemap.TreeMapDataset;
import org.pepstock.charba.client.utils.JSON;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.HTMLOptionElement;
import elemental2.dom.HTMLSelectElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class TreeMapUSSwitchableCase extends BaseComposite {

	private static final String DATA = "[{\"state\":\"Alabama\",\"code\":\"AL\",\"region\":\"South\",\"division\":\"East South Central\",\"income\":48123,\"population\":4887871,\"area\":135767},{\"state\":\"Alaska\",\"code\":\"AK\",\"region\":\"West\",\"division\":\"Pacific\",\"income\":73181,\"population\":737438,\"area\":1723337},{\"state\":\"Arizona\",\"code\":\"AZ\",\"region\":\"West\",\"division\":\"Mountain\",\"income\":56581,\"population\":7171646,\"area\":295234},{\"state\":\"Arkansas\",\"code\":\"AR\",\"region\":\"South\",\"division\":\"West South Central\",\"income\":45869,\"population\":3013825,\"area\":137732},{\"state\":\"California\",\"code\":\"CA\",\"region\":\"West\",\"division\":\"Pacific\",\"income\":71805,\"population\":39557045,\"area\":423972},{\"state\":\"Colorado\",\"code\":\"CO\",\"region\":\"West\",\"division\":\"Mountain\",\"income\":69117,\"population\":5695564,\"area\":269601},{\"state\":\"Connecticut\",\"code\":\"CT\",\"region\":\"Northeast\",\"division\":\"New England\",\"income\":74168,\"population\":3572665,\"area\":14357},{\"state\":\"Delaware\",\"code\":\"DE\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":62852,\"population\":967171,\"area\":6446},{\"state\":\"District of Columbia\",\"code\":\"DC\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":82372,\"population\":702455,\"area\":177},{\"state\":\"Florida\",\"code\":\"FL\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":52594,\"population\":21299325,\"area\":170312},{\"state\":\"Georgia\",\"code\":\"GA\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":56183,\"population\":10519475,\"area\":153910},{\"state\":\"Hawaii\",\"code\":\"HI\",\"region\":\"West\",\"division\":\"Pacific\",\"income\":77765,\"population\":1420491,\"area\":28313},{\"state\":\"Idaho\",\"code\":\"ID\",\"region\":\"West\",\"division\":\"Mountain\",\"income\":52225,\"population\":1754208,\"area\":216443},{\"state\":\"Illinois\",\"code\":\"IL\",\"region\":\"Midwest\",\"division\":\"East North Central\",\"income\":62992,\"population\":12741080,\"area\":149995},{\"state\":\"Indiana\",\"code\":\"IN\",\"region\":\"Midwest\",\"division\":\"East North Central\",\"income\":54181,\"population\":6691878,\"area\":94326},{\"state\":\"Iowa\",\"code\":\"IA\",\"region\":\"Midwest\",\"division\":\"West North Central\",\"income\":5857,\"population\":3156145,\"area\":145746},{\"state\":\"Kansas\",\"code\":\"KS\",\"region\":\"Midwest\",\"division\":\"West North Central\",\"income\":56422,\"population\":2911505,\"area\":213100},{\"state\":\"Kentucky\",\"code\":\"KY\",\"region\":\"South\",\"division\":\"East South Central\",\"income\":45215,\"population\":4468402,\"area\":104656},{\"state\":\"Louisiana\",\"code\":\"LA\",\"region\":\"South\",\"division\":\"West South Central\",\"income\":46145,\"population\":4659978,\"area\":135659},{\"state\":\"Maine\",\"code\":\"ME\",\"region\":\"Northeast\",\"division\":\"New England\",\"income\":55277,\"population\":1338404,\"area\":91633},{\"state\":\"Maryland\",\"code\":\"MD\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":80776,\"population\":6042718,\"area\":32131},{\"state\":\"Massachusetts\",\"code\":\"MA\",\"region\":\"Northeast\",\"division\":\"New England\",\"income\":77385,\"population\":6902149,\"area\":27336},{\"state\":\"Michigan\",\"code\":\"MI\",\"region\":\"Midwest\",\"division\":\"East North Central\",\"income\":54909,\"population\":9995915,\"area\":250487},{\"state\":\"Minnesota\",\"code\":\"MN\",\"region\":\"Midwest\",\"division\":\"West North Central\",\"income\":68388,\"population\":5611179,\"area\":225163},{\"state\":\"Mississippi\",\"code\":\"MS\",\"region\":\"South\",\"division\":\"East South Central\",\"income\":43529,\"population\":2986530,\"area\":125438},{\"state\":\"Missouri\",\"code\":\"MO\",\"region\":\"Midwest\",\"division\":\"West North Central\",\"income\":53578,\"population\":6126452,\"area\":180540},{\"state\":\"Montana\",\"code\":\"MT\",\"region\":\"West\",\"division\":\"Mountain\",\"income\":53386,\"population\":1062305,\"area\":380831},{\"state\":\"Nebraska\",\"code\":\"NE\",\"region\":\"Midwest\",\"division\":\"West North Central\",\"income\":59970,\"population\":1929268,\"area\":200330},{\"state\":\"Nevada\",\"code\":\"NV\",\"region\":\"West\",\"division\":\"Mountain\",\"income\":58003,\"population\":3034392,\"area\":286380},{\"state\":\"New Hampshire\",\"code\":\"NH\",\"region\":\"Northeast\",\"division\":\"New England\",\"income\":73381,\"population\":1356458,\"area\":24214},{\"state\":\"New Jersey\",\"code\":\"NJ\",\"region\":\"Northeast\",\"division\":\"Middle Atlantic\",\"income\":80088,\"population\":8908520,\"area\":22591},{\"state\":\"New Mexico\",\"code\":\"NM\",\"region\":\"West\",\"division\":\"Mountain\",\"income\":46744,\"population\":2095428,\"area\":314917},{\"state\":\"New York\",\"code\":\"NY\",\"region\":\"Northeast\",\"division\":\"Middle Atlantic\",\"income\":64894,\"population\":19542209,\"area\":141297},{\"state\":\"North Carolina\",\"code\":\"NC\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":52752,\"population\":10383620,\"area\":139391},{\"state\":\"North Dakota\",\"code\":\"ND\",\"region\":\"Midwest\",\"division\":\"West North Central\",\"income\":61843,\"population\":760077,\"area\":183108},{\"state\":\"Ohio\",\"code\":\"OH\",\"region\":\"Midwest\",\"division\":\"East North Central\",\"income\":54021,\"population\":11689442,\"area\":116098},{\"state\":\"Oklahoma\",\"code\":\"OK\",\"region\":\"South\",\"division\":\"West South Central\",\"income\":50051,\"population\":3943079,\"area\":181037},{\"state\":\"Oregon\",\"code\":\"OR\",\"region\":\"West\",\"division\":\"Pacific\",\"income\":60212,\"population\":4190713,\"area\":254799},{\"state\":\"Pennsylvania\",\"code\":\"PA\",\"region\":\"Northeast\",\"division\":\"Middle Atlantic\",\"income\":59105,\"population\":12807060,\"area\":119280},{\"state\":\"Rhode Island\",\"code\":\"RI\",\"region\":\"Northeast\",\"division\":\"New England\",\"income\":63870,\"population\":1057315,\"area\":4001},{\"state\":\"South Carolina\",\"code\":\"SC\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":50570,\"population\":5084127,\"area\":82933},{\"state\":\"South Dakota\",\"code\":\"SD\",\"region\":\"Midwest\",\"division\":\"West North Central\",\"income\":56521,\"population\":882235,\"area\":199729},{\"state\":\"Tennessee\",\"code\":\"TN\",\"region\":\"South\",\"division\":\"East South Central\",\"income\":51340,\"population\":6770010,\"area\":109153},{\"state\":\"Texas\",\"code\":\"TX\",\"region\":\"South\",\"division\":\"West South Central\",\"income\":59206,\"population\":28701845,\"area\":695662},{\"state\":\"Utah\",\"code\":\"UT\",\"region\":\"West\",\"division\":\"Mountain\",\"income\":65358,\"population\":3161105,\"area\":219882},{\"state\":\"Vermont\",\"code\":\"VT\",\"region\":\"Northeast\",\"division\":\"New England\",\"income\":57513,\"population\":626299,\"area\":24906},{\"state\":\"Virginia\",\"code\":\"VA\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":71535,\"population\":8517685,\"area\":110787},{\"state\":\"Washington\",\"code\":\"WA\",\"region\":\"West\",\"division\":\"Pacific\",\"income\":70979,\"population\":7535591,\"area\":184661},{\"state\":\"West Virginia\",\"code\":\"WV\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":43469,\"population\":1805832,\"area\":62756},{\"state\":\"Wisconsin\",\"code\":\"WI\",\"region\":\"Midwest\",\"division\":\"East North Central\",\"income\":59305,\"population\":5813568,\"area\":169635},{\"state\":\"Wyoming\",\"code\":\"WY\",\"region\":\"West\",\"division\":\"Mountain\",\"income\":60434,\"population\":577737,\"area\":253335}]";

	private static final TreeMapObjectFactory FACTORY = new TreeMapObjectFactory();

	private final HTMLTableElement mainPanel;

	private final HTMLSelectElement metric = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private final HTMLInputElement region = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final HTMLInputElement division = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final HTMLInputElement state = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final HTMLInputElement rtl = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final TreeMapChart chart = new TreeMapChart();
	
	private final List<TreeMapObject> tree;

	private final TreeMapDataset dataset1;

	public TreeMapUSSwitchableCase() {
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
		chartCol.align = "center";
		chartRow.appendChild(chartCol);

		// ----------------------------------------------
		// Chart
		// ----------------------------------------------
		HTMLOptionElement area = (HTMLOptionElement) DomGlobal.document.createElement("option");
		area.text = "Area";
		area.value = Property.AREA.name();
		metric.add(area);
		HTMLOptionElement population = (HTMLOptionElement) DomGlobal.document.createElement("option");
		population.text = "Population";
		population.value = Property.POPULATION.name();
		metric.add(population);
		
		ArrayObject array = JSON.parseForArray(DATA);
		tree = ArrayListHelper.unmodifiableList(array, FACTORY);

		chart.getChartElement().getStyle().setHeight("600px");
		
		chart.getOptions().setMaintainAspectRatio(false);
		chart.getOptions().getLegend().setDisplay(false);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Switching on region/division/state on a tree map chart");

		dataset1 = chart.newDataset();

		dataset1.setTreeObjetcs(tree);

		dataset1.setKey(Property.AREA);
		dataset1.setGroups(Property.STATE);
		dataset1.setSpacing(1);
		dataset1.setBorderWidth(1);
		dataset1.setHoverBackgroundColor("rgba(220,230,220,0.5)");
		dataset1.setBorderColor("rgba(200,200,200,1)");
		dataset1.setColor(HtmlColor.BLACK);

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

		String metricId = "metric" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForFill = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForFill.htmlFor = metricId;
		labelForFill.appendChild(DomGlobal.document.createTextNode("Metric: "));
		actionsCol.appendChild(labelForFill);

		metric.id = metricId;
		metric.onchange = (p0) -> {
			handleEvents();
			return null;
		};
		metric.className = "gwt-ListBox";
		metric.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(metric);

		String regionId = "region" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForRegion = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForRegion.htmlFor = regionId;
		labelForRegion.appendChild(DomGlobal.document.createTextNode("Region"));
		actionsCol.appendChild(labelForRegion);

		region.id = regionId;
		region.onclick = (p0) -> {
			handleEvents();
			return null;
		};
		region.type = "checkbox";
		region.className = "gwt-CheckBox";
		region.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(region);

		String divisionId = "division" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForDivision = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForDivision.htmlFor = divisionId;
		labelForDivision.appendChild(DomGlobal.document.createTextNode("Division"));
		actionsCol.appendChild(labelForDivision);

		division.id = divisionId;
		division.onclick = (p0) -> {
			handleEvents();
			return null;
		};
		division.type = "checkbox";
		division.className = "gwt-CheckBox";
		division.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(division);

		String stateId = "state" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForState = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForState.htmlFor = stateId;
		labelForState.appendChild(DomGlobal.document.createTextNode("State"));
		actionsCol.appendChild(labelForState);

		state.id = stateId;
		state.onclick = (p0) -> {
			handleEvents();
			return null;
		};
		state.type = "checkbox";
		state.className = "gwt-CheckBox";
		state.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(state);

		String rtlId = "rtl" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForRtl = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForRtl.htmlFor = rtlId;
		labelForRtl.appendChild(DomGlobal.document.createTextNode("Right-to-left"));
		actionsCol.appendChild(labelForRtl);

		rtl.id = rtlId;
		rtl.onclick = (p0) -> {
			handleEvents();
			return null;
		};
		rtl.type = "checkbox";
		rtl.className = "gwt-CheckBox";
		rtl.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(rtl);

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
	
	private void handleEvents() {
		String what = metric.options.getAt(metric.selectedIndex).value;
		Property whatProperty = Property.valueOf(what);
		dataset1.setKey(whatProperty);
		
		Set<Key> groups = new HashSet<>();
		if (region.checked) {
			groups.add(Property.REGION);
		}
		if (division.checked) {
			groups.add(Property.DIVISION);
		}
		if (state.checked) {
			groups.add(Property.STATE);
		}
		if (groups.isEmpty()) {
			groups.add(Property.STATE);
		}
		dataset1.setGroups(groups);
		dataset1.setRtl(rtl.checked);
		chart.update();
	}
	
	private enum Property implements Key
	{
		STATE("state"),
		CODE("code"),
		REGION("region"),
		DIVISION("division"),
		INCOME("income"),
		POPULATION("population"),
		AREA("area");

		private final String value;

		private Property(String value) {
			this.value = value;
		}

		@Override
		public String value() {
			return value;
		}

	}

	private static class TreeMapObject extends NativeObjectContainer {

		private TreeMapObject(NativeObject nativeObject) {
			super(nativeObject);
		}

	}

	private static class TreeMapObjectFactory implements NativeObjectContainerFactory<TreeMapObject> {

		@Override
		public TreeMapObject create(NativeObject nativeObject) {
			return new TreeMapObject(nativeObject);
		}

	}

}
