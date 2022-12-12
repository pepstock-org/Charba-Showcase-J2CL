package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.Arrays;
import java.util.List;

import org.pepstock.charba.client.callbacks.ColorCallback;
import org.pepstock.charba.client.callbacks.DatasetContext;
import org.pepstock.charba.client.colors.GwtMaterialColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.commons.ArrayListHelper;
import org.pepstock.charba.client.commons.ArrayObject;
import org.pepstock.charba.client.commons.Key;
import org.pepstock.charba.client.commons.NativeObject;
import org.pepstock.charba.client.commons.NativeObjectContainer;
import org.pepstock.charba.client.commons.NativeObjectContainerFactory;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.enums.ContextType;
import org.pepstock.charba.client.impl.plugins.enums.GwtMaterialScheme;
import org.pepstock.charba.client.treemap.TreeMapChart;
import org.pepstock.charba.client.treemap.TreeMapDataPoint;
import org.pepstock.charba.client.treemap.TreeMapDataset;
import org.pepstock.charba.client.treemap.callbacks.FormatterCallback;
import org.pepstock.charba.client.treemap.enums.Align;
import org.pepstock.charba.client.utils.JSON;
import org.pepstock.charba.client.utils.Utilities;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class TreeMapDividersCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final TreeMapChart chart = new TreeMapChart();
	
	private static final String DATA = "[{\"category\": \"main\", \"value\": 1},{\"category\": \"main\", \"value\": 2},{\"category\": \"other\", \"value\": 4}]";
	
	private static final TreeMapObjectFactory FACTORY = new TreeMapObjectFactory();
	
	private List<TreeMapObject> tree;

	public TreeMapDividersCase() {
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

		chart.getChartElement().getStyle().setHeight("400px");

		chart.getOptions().setMaintainAspectRatio(false);
		chart.getOptions().getLegend().setDisplay(false);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Dividers on a tree map chart");

		TreeMapDataset dataset1 = chart.newDataset();
		
		dataset1.setTreeObjetcs(tree);
		
		dataset1.setKey(Property.VALUE);
		dataset1.setGroups(Property.CATEGORY);
		dataset1.setSpacing(1);
		dataset1.setBorderWidth(2);
		dataset1.setBorderColor(GwtMaterialColor.BLUE_DARKEN_2);
		dataset1.setBackgroundColor(new ColorCallback<DatasetContext>() {
			
			private List<IsColor> colors = GwtMaterialScheme.BLUE.getColors();

			@Override
			public Object invoke(DatasetContext context) {
				if (context.getDataIndex() < 0) {
					return null;
				}
				int index = (colors.size() / 2) - (context.getDataIndex() * 2) - 1;
				return colors.get(index);
			}
			
		});
		dataset1.getDividers().setLineWidth(2);
		dataset1.getDividers().setLineDash(2,3);
		dataset1.getDividers().setDisplay(true);
		dataset1.getLabels().setDisplay(true);
		dataset1.getLabels().setAlign(Align.LEFT);
		dataset1.getLabels().setFormatter(new FormatterCallback() {
			
			@Override
			public List<String> invoke(DatasetContext context) {
				if (ContextType.DATA.equals(context.getType())) {
					TreeMapDataPoint point = dataset1.getDataPoints().get(context.getDataIndex());
					return Arrays.asList("Value:", Utilities.applyPrecision(point.getValue(), 2));
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
		ArrayObject array = JSON.parseForArray(DATA);
		tree = ArrayListHelper.unmodifiableList(array, FACTORY);
		tree.forEach((obj) -> obj.setValue(getRandomDigit(1, 10)));
		for (Dataset dataset : chart.getData().getDatasets()) {
			TreeMapDataset tds = (TreeMapDataset)dataset;
			tds.setTreeObjetcs(tree);
		}
		chart.update();
	}
	
	private enum Property implements Key
	{
		CATEGORY("category"),
		VALUE("value");

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
		
		private void setValue(double s) {
			setValue(Property.VALUE, s);
		}
		
	}
	
	private static class TreeMapObjectFactory implements NativeObjectContainerFactory<TreeMapObject>{

		@Override
		public TreeMapObject create(NativeObject nativeObject) {
			return new TreeMapObject(nativeObject);
		}
		
	}

}
