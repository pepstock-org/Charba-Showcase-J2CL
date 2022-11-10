package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.Arrays;
import java.util.Collections;
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
import org.pepstock.charba.client.enums.ContextType;
import org.pepstock.charba.client.enums.Weight;
import org.pepstock.charba.client.items.FontItem;
import org.pepstock.charba.client.items.Undefined;
import org.pepstock.charba.client.treemap.TreeMapChart;
import org.pepstock.charba.client.treemap.TreeMapDataPoint;
import org.pepstock.charba.client.treemap.TreeMapDataset;
import org.pepstock.charba.client.treemap.callbacks.FontsCallback;
import org.pepstock.charba.client.treemap.callbacks.FormatterCallback;
import org.pepstock.charba.client.treemap.enums.Align;
import org.pepstock.charba.client.treemap.enums.Position;
import org.pepstock.charba.client.utils.JSON;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class TreeMapFontsColorsCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final TreeMapChart chart = new TreeMapChart();
	
	private static final String DATA = "[{\"what\":\"Apples\",\"value\":98,\"color\":\"rgb(191, 77, 114)\"},{\"what\":\"Orange\",\"value\":75,\"color\":\"rgb(228, 148, 55)\"},{\"what\":\"Lime\",\"value\":69,\"color\":\"rgb(147, 119, 214)\"},{\"what\":\"Grapes\",\"value\":55,\"color\":\"rgb(80, 134, 55)\"},{\"what\":\"Apricots\",\"value\":49,\"color\":\"rgb(90, 97, 110)\"},{\"what\":\"Blackberries\",\"value\":35,\"color\":\"rgb(34, 38, 82)\"}]";
	
	private static final NativeObjectContainerFactory<TreeMapObject> FACTORY = obj -> new TreeMapObject(obj);
	
	public TreeMapFontsColorsCase() {
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
		
		List<TreeMapObject> tree = ArrayListHelper.list(array, FACTORY);
		
		chart.getChartElement().getStyle().setHeight("550px");

		chart.getOptions().setMaintainAspectRatio(false);
		chart.getOptions().getLegend().setDisplay(false);
		chart.getOptions().getTooltips().setEnabled(false);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Multiple fonts and colors on the labels");
		chart.getOptions().setEvents(Collections.emptySet());

		TreeMapDataset dataset1 = chart.newDataset();
		dataset1.setTreeObjetcs(tree);
		
		dataset1.setKey("value");
		dataset1.setSpacing(1);
		dataset1.setBorderWidth(0);
		dataset1.setBorderRadius(6);
		dataset1.setBackgroundColor(new ColorCallback<DatasetContext>() {
			
			@Override
			public Object invoke(DatasetContext context) {
				if (ContextType.DATA.equals(context.getType())) {
					TreeMapDataPoint point = dataset1.getDataPoints().get(context.getDataIndex());
					TreeMapObject obj = point.getData(FACTORY);
					return obj.color();
				}
				return null;
			}
			
		});
		dataset1.getCaptions().setDisplay(false);
		dataset1.getLabels().setDisplay(true);
		dataset1.getLabels().setAlign(Align.LEFT);
		dataset1.getLabels().setPosition(Position.TOP);
		dataset1.getLabels().setFont(new FontsCallback() {
			
			private FontItem item1 = new FontItem();
			private FontItem item2 = new FontItem();
			private List<FontItem> result = Arrays.asList(item1, item2);
			
			@Override
			public List<FontItem> invoke(DatasetContext context) {
				item1.setSize(24);
				item1.setWeight(Weight.BOLD);
				item2.setSize(14);
				return result;
			}
		});
		dataset1.getLabels().setColor(HtmlColor.WHITE, HtmlColor.WHITE_SMOKE);
		
		dataset1.getLabels().getHoverFont().setSize(10);
		
		
		dataset1.getLabels().setFormatter(new FormatterCallback() {

			@Override
			public List<String> invoke(DatasetContext context) {
				if (ContextType.DATA.equals(context.getType())) {
					TreeMapDataPoint point = dataset1.getDataPoints().get(context.getDataIndex());
					TreeMapObject obj = point.getData(FACTORY);
					return Arrays.asList(obj.what(), "Value is", String.valueOf(obj.value()));
				}
				return null;
			}
		});
		
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
	
	private static class TreeMapObject extends NativeObjectContainer {

		private enum Property implements Key {

			WHAT("what"),
			VALUE("value"),
			COLOR("color");

			private final String value;

			private Property(String value) {
				this.value = value;
			}

			@Override
			public String value() {
				return value;
			}
		}
		
		private TreeMapObject(NativeObject nativeObject) {
			super(nativeObject);
		}
		
		private String what() {
			return getValue(Property.WHAT, Undefined.STRING);
		}

		private double value() {
			return getValue(Property.VALUE, Undefined.DOUBLE);
		}

		private String color() {
			return getValue(Property.COLOR, Undefined.STRING);
		}

	}

}
