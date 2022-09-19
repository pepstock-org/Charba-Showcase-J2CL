package org.pepstock.charba.showcase.j2cl.views;

import org.pepstock.charba.showcase.j2cl.cases.CaseFactory;
import org.pepstock.charba.showcase.j2cl.cases.CaseItem;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.extensions.GeoBubbleMapDatalabelsCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.GeoBubbleMapLogarithmicCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethGermanyCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethItalyCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethLogarithmicCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethSelectCountryCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.GeoChoroplethUSCapitalsCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.MatrixCalendarCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.MatrixClickEventCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.MatrixDatalabelsCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.MatrixOnCategoryAxisCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.MatrixOnTimeAxisCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.SankeyBasicCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.SankeyClickCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.SankeyColumnsCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.SankeyCountriesCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.SankeyEnergyCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.SankeyTreeCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.TreeMapClickEventCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.TreeMapDatalabelsCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.TreeMapDividersCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.TreeMapUSPopulationCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.TreeMapUSSwitchableCase;

import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class ExtChartsView extends AbstractView {

	private enum Category
	{
		GEO("Geographical controller", GeoChartsCase.values()),
		TREEMAP("TreeMap controller", TreeMapChartsCase.values()),
		MATRIX("Matrix controller", MatrixChartsCase.values()),
		SANKEY("Sankey controller", SankeyChartsCase.values());

		private final String label;

		private final CaseItem[] items;

		private Category(String label, CaseItem[] items) {
			this.label = label;
			this.items = items;
		}

		public String getLabel() {
			return label;
		}

		public CaseItem[] getItems() {
			return items;
		}

	}
	
	// ----------------------------------------------
	// GEO CHARTS
	// ----------------------------------------------
	private enum GeoChartsCase implements CaseItem
	{
		LOG_COLOR_SCALE("Choropleth with logarithmic axis", new CaseFactory() {
			public BaseComposite create() {
				return new GeoChoroplethLogarithmicCase();
			}
		}),
		LOG_SIZE_SCALE("Bubble map with logarithmic axis", new CaseFactory() {
			public BaseComposite create() {
				return new GeoBubbleMapLogarithmicCase();
			}
		}),
		INTERPOLATIONS("Interpolations", new CaseFactory() {
			public BaseComposite create() {
				return new GeoChoroplethItalyCase();
			}
		}),
		CUSTOM_INTERPOLATION("Custom interpolation", new CaseFactory() {
			public BaseComposite create() {
				return new GeoChoroplethGermanyCase();
			}
		}),
		CLICK("Select country from map", new CaseFactory() {
			public BaseComposite create() {
				return new GeoChoroplethSelectCountryCase();
			}
		}),
		BUBBLE_MAP_DATALABELS("Using Datalabels on map", new CaseFactory() {
			public BaseComposite create() {
				return new GeoBubbleMapDatalabelsCase();
			}
		}),
		CAPITALS("Adds capitals to the choropleth chart", new CaseFactory() {
			public BaseComposite create() {
				return new GeoChoroplethUSCapitalsCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private GeoChartsCase(String label, CaseFactory factory) {
			this.label = label;
			this.factory = factory;
		}

		public String getLabel() {
			return label;
		}

		public CaseFactory getFactory() {
			return factory;
		}

	}
	
	// ----------------------------------------------
	// TREEMAP CHARTS
	// ----------------------------------------------
	private enum TreeMapChartsCase implements CaseItem
	{
		GROUPS("Groups", new CaseFactory() {
			public BaseComposite create() {
				return new TreeMapUSPopulationCase();
			}
		}),
		GROUPING("Grouping data at runtime", new CaseFactory() {
			public BaseComposite create() {
				return new TreeMapUSSwitchableCase();
			}
		}),
		DIVIDERS("Applying dividers", new CaseFactory() {
			public BaseComposite create() {
				return new TreeMapDividersCase();
			}
		}),
		CLICKING("Selecting treemap item", new CaseFactory() {
			public BaseComposite create() {
				return new TreeMapClickEventCase();
			}
		}),
		DATALABELS("Using Datalabels plugin", new CaseFactory() {
			public BaseComposite create() {
				return new TreeMapDatalabelsCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private TreeMapChartsCase(String label, CaseFactory factory) {
			this.label = label;
			this.factory = factory;
		}

		public String getLabel() {
			return label;
		}

		public CaseFactory getFactory() {
			return factory;
		}

	}

	// ----------------------------------------------
	// MATRIX CHARTS
	// ----------------------------------------------
	private enum MatrixChartsCase implements CaseItem
	{
		CALENDAR("Calendar", new CaseFactory() {
			public BaseComposite create() {
				return new MatrixCalendarCase();
			}
		}),
		USING_TIME_AXIS("Using time axis", new CaseFactory() {
			public BaseComposite create() {
				return new MatrixOnTimeAxisCase();
			}
		}),
		USING_CATEGORY_AXIS("Using category axis", new CaseFactory() {
			public BaseComposite create() {
				return new MatrixOnCategoryAxisCase();
			}
		}),
		CLICKING("Selecting matrix item", new CaseFactory() {
			public BaseComposite create() {
				return new MatrixClickEventCase();
			}
		}),
		DATALABELS("Using Datalabels plugin", new CaseFactory() {
			public BaseComposite create() {
				return new MatrixDatalabelsCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private MatrixChartsCase(String label, CaseFactory factory) {
			this.label = label;
			this.factory = factory;
		}

		public String getLabel() {
			return label;
		}

		public CaseFactory getFactory() {
			return factory;
		}

	}

	// ----------------------------------------------
	// SANKEY CHARTS
	// ----------------------------------------------
	private enum SankeyChartsCase implements CaseItem
	{
		BASIC("Basic", new CaseFactory() {
			public BaseComposite create() {
				return new SankeyBasicCase();
			}
		}),
		ENERGY("Energy", new CaseFactory() {
			public BaseComposite create() {
				return new SankeyEnergyCase();
			}
		}),
		COUNTRIES("Countries", new CaseFactory() {
			public BaseComposite create() {
				return new SankeyCountriesCase();
			}
		}),
		TREE("Tree", new CaseFactory() {
			public BaseComposite create() {
				return new SankeyTreeCase();
			}
		}),
		CLICKING("Selecting flow item", new CaseFactory() {
			public BaseComposite create() {
				return new SankeyClickCase();
			}
		}),
		COLUMNS("Setting columns", new CaseFactory() {
			public BaseComposite create() {
				return new SankeyColumnsCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private SankeyChartsCase(String label, CaseFactory factory) {
			this.label = label;
			this.factory = factory;
		}

		public String getLabel() {
			return label;
		}

		public CaseFactory getFactory() {
			return factory;
		}

	}

	public ExtChartsView(HTMLElement content) {
		super(content);
		HTMLElement title = (HTMLElement) DomGlobal.document.createElement("div");
		title.style.textAlign = "center";
		title.style.width = WidthUnionType.of("100%");
		title.innerHTML = " of javascript CHART.JS controllers and their integration with CHARBA";
		title.className = "myExtensionsChartsTitleItem";
		content.appendChild(title);
		content.appendChild(DomGlobal.document.createElement("br"));

		HTMLElement panel = (HTMLElement) DomGlobal.document.createElement("div");
		panel.style.textAlign = "center";
		panel.style.width = WidthUnionType.of("100%");
		content.appendChild(panel);

		HTMLTableElement menuPanel = (HTMLTableElement) DomGlobal.document.createElement("table");
		menuPanel.width = "90%";
		menuPanel.align = "center";
		menuPanel.cellPadding = "10";
		panel.appendChild(menuPanel);

		HTMLTableRowElement singleRow = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		singleRow.style.width = WidthUnionType.of("100%");
		menuPanel.appendChild(singleRow);

		for (Category cat : Category.values()) {
			HTMLTableCellElement catCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
			catCol.style.width = WidthUnionType.of("25%");
			catCol.vAlign = "top";
			singleRow.appendChild(catCol);
			HTMLElement label = (HTMLElement) DomGlobal.document.createElement("div");
			label.innerHTML = cat.getLabel();
			label.style.textAlign = "left";
			label.className = "myCategory";
			catCol.appendChild(label);

			if (cat.getItems().length > 0) {
				for (CaseItem caseItem : cat.getItems()) {
					HTMLDivElement item = (HTMLDivElement) DomGlobal.document.createElement("div");
					item.style.textAlign = "left";
					item.className = "myCategoryItem";
					catCol.appendChild(item);
					item.innerHTML = caseItem.getLabel();
					item.onclick = (p0) -> {
						BaseComposite composite = caseItem.getFactory().create();
						if (composite != null) {
							clearPreviousChart();
							content.appendChild(composite.getElement());
						}
						return null;
					};
				}
			}
		}
	}

}
