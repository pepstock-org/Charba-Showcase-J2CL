package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.Arrays;
import java.util.List;

import org.pepstock.charba.client.callbacks.ColorCallback;
import org.pepstock.charba.client.callbacks.DatasetContext;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.commons.ArrayListHelper;
import org.pepstock.charba.client.commons.ArrayObject;
import org.pepstock.charba.client.commons.Key;
import org.pepstock.charba.client.commons.NativeObject;
import org.pepstock.charba.client.commons.NativeObjectContainer;
import org.pepstock.charba.client.commons.NativeObjectContainerFactory;
import org.pepstock.charba.client.enums.TooltipPosition;
import org.pepstock.charba.client.events.DatasetSelectionEvent;
import org.pepstock.charba.client.events.DatasetSelectionEventHandler;
import org.pepstock.charba.client.impl.plugins.ChartPointer;
import org.pepstock.charba.client.impl.plugins.ChartPointerOptions;
import org.pepstock.charba.client.impl.plugins.enums.PointerElement;
import org.pepstock.charba.client.items.FontItem;
import org.pepstock.charba.client.items.Undefined;
import org.pepstock.charba.client.treemap.InnerData;
import org.pepstock.charba.client.treemap.TreeMapChart;
import org.pepstock.charba.client.treemap.TreeMapDataPoint;
import org.pepstock.charba.client.treemap.TreeMapDataset;
import org.pepstock.charba.client.treemap.callbacks.FontsCallback;
import org.pepstock.charba.client.utils.JSON;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.commons.Toast;

import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class TreeMapClickEventCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final TreeMapChart chart = new TreeMapChart();
	
	private static final String DATA = "[{\"state\":\"Alabama\",\"code\":\"AL\",\"region\":\"South\",\"division\":\"East South Central\",\"income\":48123,\"population\":4887871,\"area\":135767},{\"state\":\"Alaska\",\"code\":\"AK\",\"region\":\"West\",\"division\":\"Pacific\",\"income\":73181,\"population\":737438,\"area\":1723337},{\"state\":\"Arizona\",\"code\":\"AZ\",\"region\":\"West\",\"division\":\"Mountain\",\"income\":56581,\"population\":7171646,\"area\":295234},{\"state\":\"Arkansas\",\"code\":\"AR\",\"region\":\"South\",\"division\":\"West South Central\",\"income\":45869,\"population\":3013825,\"area\":137732},{\"state\":\"California\",\"code\":\"CA\",\"region\":\"West\",\"division\":\"Pacific\",\"income\":71805,\"population\":39557045,\"area\":423972},{\"state\":\"Colorado\",\"code\":\"CO\",\"region\":\"West\",\"division\":\"Mountain\",\"income\":69117,\"population\":5695564,\"area\":269601},{\"state\":\"Connecticut\",\"code\":\"CT\",\"region\":\"Northeast\",\"division\":\"New England\",\"income\":74168,\"population\":3572665,\"area\":14357},{\"state\":\"Delaware\",\"code\":\"DE\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":62852,\"population\":967171,\"area\":6446},{\"state\":\"District of Columbia\",\"code\":\"DC\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":82372,\"population\":702455,\"area\":177},{\"state\":\"Florida\",\"code\":\"FL\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":52594,\"population\":21299325,\"area\":170312},{\"state\":\"Georgia\",\"code\":\"GA\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":56183,\"population\":10519475,\"area\":153910},{\"state\":\"Hawaii\",\"code\":\"HI\",\"region\":\"West\",\"division\":\"Pacific\",\"income\":77765,\"population\":1420491,\"area\":28313},{\"state\":\"Idaho\",\"code\":\"ID\",\"region\":\"West\",\"division\":\"Mountain\",\"income\":52225,\"population\":1754208,\"area\":216443},{\"state\":\"Illinois\",\"code\":\"IL\",\"region\":\"Midwest\",\"division\":\"East North Central\",\"income\":62992,\"population\":12741080,\"area\":149995},{\"state\":\"Indiana\",\"code\":\"IN\",\"region\":\"Midwest\",\"division\":\"East North Central\",\"income\":54181,\"population\":6691878,\"area\":94326},{\"state\":\"Iowa\",\"code\":\"IA\",\"region\":\"Midwest\",\"division\":\"West North Central\",\"income\":5857,\"population\":3156145,\"area\":145746},{\"state\":\"Kansas\",\"code\":\"KS\",\"region\":\"Midwest\",\"division\":\"West North Central\",\"income\":56422,\"population\":2911505,\"area\":213100},{\"state\":\"Kentucky\",\"code\":\"KY\",\"region\":\"South\",\"division\":\"East South Central\",\"income\":45215,\"population\":4468402,\"area\":104656},{\"state\":\"Louisiana\",\"code\":\"LA\",\"region\":\"South\",\"division\":\"West South Central\",\"income\":46145,\"population\":4659978,\"area\":135659},{\"state\":\"Maine\",\"code\":\"ME\",\"region\":\"Northeast\",\"division\":\"New England\",\"income\":55277,\"population\":1338404,\"area\":91633},{\"state\":\"Maryland\",\"code\":\"MD\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":80776,\"population\":6042718,\"area\":32131},{\"state\":\"Massachusetts\",\"code\":\"MA\",\"region\":\"Northeast\",\"division\":\"New England\",\"income\":77385,\"population\":6902149,\"area\":27336},{\"state\":\"Michigan\",\"code\":\"MI\",\"region\":\"Midwest\",\"division\":\"East North Central\",\"income\":54909,\"population\":9995915,\"area\":250487},{\"state\":\"Minnesota\",\"code\":\"MN\",\"region\":\"Midwest\",\"division\":\"West North Central\",\"income\":68388,\"population\":5611179,\"area\":225163},{\"state\":\"Mississippi\",\"code\":\"MS\",\"region\":\"South\",\"division\":\"East South Central\",\"income\":43529,\"population\":2986530,\"area\":125438},{\"state\":\"Missouri\",\"code\":\"MO\",\"region\":\"Midwest\",\"division\":\"West North Central\",\"income\":53578,\"population\":6126452,\"area\":180540},{\"state\":\"Montana\",\"code\":\"MT\",\"region\":\"West\",\"division\":\"Mountain\",\"income\":53386,\"population\":1062305,\"area\":380831},{\"state\":\"Nebraska\",\"code\":\"NE\",\"region\":\"Midwest\",\"division\":\"West North Central\",\"income\":59970,\"population\":1929268,\"area\":200330},{\"state\":\"Nevada\",\"code\":\"NV\",\"region\":\"West\",\"division\":\"Mountain\",\"income\":58003,\"population\":3034392,\"area\":286380},{\"state\":\"New Hampshire\",\"code\":\"NH\",\"region\":\"Northeast\",\"division\":\"New England\",\"income\":73381,\"population\":1356458,\"area\":24214},{\"state\":\"New Jersey\",\"code\":\"NJ\",\"region\":\"Northeast\",\"division\":\"Middle Atlantic\",\"income\":80088,\"population\":8908520,\"area\":22591},{\"state\":\"New Mexico\",\"code\":\"NM\",\"region\":\"West\",\"division\":\"Mountain\",\"income\":46744,\"population\":2095428,\"area\":314917},{\"state\":\"New York\",\"code\":\"NY\",\"region\":\"Northeast\",\"division\":\"Middle Atlantic\",\"income\":64894,\"population\":19542209,\"area\":141297},{\"state\":\"North Carolina\",\"code\":\"NC\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":52752,\"population\":10383620,\"area\":139391},{\"state\":\"North Dakota\",\"code\":\"ND\",\"region\":\"Midwest\",\"division\":\"West North Central\",\"income\":61843,\"population\":760077,\"area\":183108},{\"state\":\"Ohio\",\"code\":\"OH\",\"region\":\"Midwest\",\"division\":\"East North Central\",\"income\":54021,\"population\":11689442,\"area\":116098},{\"state\":\"Oklahoma\",\"code\":\"OK\",\"region\":\"South\",\"division\":\"West South Central\",\"income\":50051,\"population\":3943079,\"area\":181037},{\"state\":\"Oregon\",\"code\":\"OR\",\"region\":\"West\",\"division\":\"Pacific\",\"income\":60212,\"population\":4190713,\"area\":254799},{\"state\":\"Pennsylvania\",\"code\":\"PA\",\"region\":\"Northeast\",\"division\":\"Middle Atlantic\",\"income\":59105,\"population\":12807060,\"area\":119280},{\"state\":\"Rhode Island\",\"code\":\"RI\",\"region\":\"Northeast\",\"division\":\"New England\",\"income\":63870,\"population\":1057315,\"area\":4001},{\"state\":\"South Carolina\",\"code\":\"SC\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":50570,\"population\":5084127,\"area\":82933},{\"state\":\"South Dakota\",\"code\":\"SD\",\"region\":\"Midwest\",\"division\":\"West North Central\",\"income\":56521,\"population\":882235,\"area\":199729},{\"state\":\"Tennessee\",\"code\":\"TN\",\"region\":\"South\",\"division\":\"East South Central\",\"income\":51340,\"population\":6770010,\"area\":109153},{\"state\":\"Texas\",\"code\":\"TX\",\"region\":\"South\",\"division\":\"West South Central\",\"income\":59206,\"population\":28701845,\"area\":695662},{\"state\":\"Utah\",\"code\":\"UT\",\"region\":\"West\",\"division\":\"Mountain\",\"income\":65358,\"population\":3161105,\"area\":219882},{\"state\":\"Vermont\",\"code\":\"VT\",\"region\":\"Northeast\",\"division\":\"New England\",\"income\":57513,\"population\":626299,\"area\":24906},{\"state\":\"Virginia\",\"code\":\"VA\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":71535,\"population\":8517685,\"area\":110787},{\"state\":\"Washington\",\"code\":\"WA\",\"region\":\"West\",\"division\":\"Pacific\",\"income\":70979,\"population\":7535591,\"area\":184661},{\"state\":\"West Virginia\",\"code\":\"WV\",\"region\":\"South\",\"division\":\"South Atlantic\",\"income\":43469,\"population\":1805832,\"area\":62756},{\"state\":\"Wisconsin\",\"code\":\"WI\",\"region\":\"Midwest\",\"division\":\"East North Central\",\"income\":59305,\"population\":5813568,\"area\":169635},{\"state\":\"Wyoming\",\"code\":\"WY\",\"region\":\"West\",\"division\":\"Mountain\",\"income\":60434,\"population\":577737,\"area\":253335}]";

	private static final TreeMapObjectFactory FACTORY = new TreeMapObjectFactory();
	
	private final List<TreeMapObject> tree;

	private final TreeMapDataset dataset1;

	public TreeMapClickEventCase() {
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

		ArrayObject array = JSON.parseForArray(DATA);
		tree = ArrayListHelper.unmodifiableList(array, FACTORY);
		
		chart.getChartElement().getStyle().setHeight("550px");

		chart.getOptions().setMaintainAspectRatio(false);
		chart.getOptions().getLegend().setDisplay(false);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Clicking on a tree map chart");
		chart.getOptions().getTooltips().setEnabled(false);
		chart.getOptions().getTooltips().setPosition(TooltipPosition.AVERAGE);
		
		chart.addHandler(new DatasetSelectionEventHandler() {

			@Override
			public void onSelect(DatasetSelectionEvent event) {
				
				TreeMapDataPoint point = dataset1.getDataPoints().get(event.getItem().getIndex());
				InnerData data = point.getData();
				StringBuilder sb = new StringBuilder();
				sb.append("Dataset index: <b>").append(event.getItem().getDatasetIndex()).append("</b><br>");
				sb.append("TreeMapPoint group: <b>").append(point.getGroup()).append("</b><br>");
				sb.append("Index: <b>").append(event.getItem().getIndex()).append("</b><br>");
				List<TreeMapObject> objects = data.getChildren(FACTORY);
				if (objects != null && !objects.isEmpty()) {
					int index = 0;
					for (TreeMapObject obj : objects) {
						sb.append(index).append(". Value: <b>").append(obj.toString()).append("</b><br>");
						index++;
					}
				}
				new Toast("Dataset Selected!", sb.toString()).show();
			}
		}, DatasetSelectionEvent.TYPE);

		dataset1 = chart.newDataset();

		dataset1.setTreeObjetcs(tree);

		dataset1.setKey(Property.POPULATION);
		dataset1.setGroups(Property.REGION, Property.DIVISION, Property.CODE);
		dataset1.setSpacing(2);
		dataset1.setBorderWidth(1);
		dataset1.setBorderColor("rgba(160,160,160,0.5)");
		dataset1.setBackgroundColor(new ColorCallback<DatasetContext>() {

			@Override
			public Object invoke(DatasetContext context) {
				if (context.getDataIndex() < 0) {
					return null;
				}
				TreeMapDataPoint point = dataset1.getDataPoints().get(context.getDataIndex());
				if (point.getDepth() == 0) {
					switch (point.getGroup()) {
					case "Midwest":
						return "#4363d8";
					case "Northeast":
						return "#469990";
					case "South":
						return "#9A6324";
					case "West":
						return "#f58231";
					default:
						return "#e6beff";
					}
				} else if (point.getDepth() == 1) {
					return HtmlColor.WHITE.alpha(0.3).toRGBA();
				} else {
					double a = point.getValue() / (Undefined.isNot(point.getGroupSum()) ? point.getGroupSum() : point.getSum()) / 2 + 0.5;
					return HtmlColor.GREEN.alpha(a).toRGBA();
				}
			}

		});

		dataset1.getLabels().setDisplay(true);
		dataset1.getLabels().setColor(HtmlColor.WHITE);
		dataset1.getLabels().setHoverColor("#F0B90B");
		dataset1.getLabels().setFont(new FontsCallback() {
			
			private FontItem item = new FontItem();
			private List<FontItem> result = Arrays.asList(item);
			
			@Override
			public List<FontItem> invoke(DatasetContext context) {
				item.setFamily("Tahoma");
				item.setSize(10);
				return result;
			}
		});

		chart.getData().setDatasets(dataset1);

		ChartPointerOptions op = new ChartPointerOptions();
		op.setElements(PointerElement.DATASET);
		chart.getOptions().getPlugins().setOptions(ChartPointer.ID, op);
		chart.getPlugins().add(ChartPointer.get());

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
		
		@Override
		public String toString() {
			StringBuilder sb = new StringBuilder();
			if (has(Property.REGION)) {
				sb.append(getValue(Property.REGION, "")).append(" ");
			}
			if (has(Property.DIVISION)) {
				sb.append(getValue(Property.DIVISION, "")).append(" ");
			}
			if (has(Property.STATE)) {
				sb.append(getValue(Property.STATE, "")).append(" ");
			}
			if (has(Property.CODE)) {
				sb.append(getValue(Property.CODE, "")).append(" ");
			}
			return sb.toString();
		}

	}

	private static class TreeMapObjectFactory implements NativeObjectContainerFactory<TreeMapObject> {

		@Override
		public TreeMapObject create(NativeObject nativeObject) {
			return new TreeMapObject(nativeObject);
		}

	}

}