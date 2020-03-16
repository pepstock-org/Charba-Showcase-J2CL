package org.pepstock.charba.showcase.j2cl.views;

import org.pepstock.charba.showcase.j2cl.cases.CaseFactory;
import org.pepstock.charba.showcase.j2cl.cases.CaseItem;
import org.pepstock.charba.showcase.j2cl.cases.charts.BarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.HorizontalBarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.LineCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.ScatterCase;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.plugins.BackgroundColorBarCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.BackgroundLinearGradientBarCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.BackgroundPatternLineCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.BackgroundRadialGradientPieCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.ColorSchemeBarCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.ColorSchemeBubbleCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.ColorSchemeLineCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.ColorSchemePieCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.ColorSchemePolarAreaCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.ColorSchemeRadarCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorBarCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorDrillingDownCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorLineCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorTimeSeriesByBarCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase;

import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class PluginsView extends AbstractView {

	private enum Category
	{
		CHART_BACKGROUND("Chart background", ChartBackgroundCase.values()),
		DATASET_ITEMS_SELECTOR("Dataset items selector", DatasetItemsSelectorCase.values()),
		COLOR_SCHEMES("Color schemes", ColorSchemesCase.values()),
		HTML_LEGEND("HTML legend", HtmlLegendCase.values());

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
	// CHART BACKGROUND
	// ----------------------------------------------

	private enum ChartBackgroundCase implements CaseItem
	{
		COLOR("Applying color on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new BackgroundColorBarCase();
			}
		}),
		LINEAR_GRADIENT("Applying linear gradient on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new BackgroundLinearGradientBarCase();
			}
		}),
		RADIAL_GRADIENT("Applying radial gradient on pie chart", new CaseFactory() {
			public BaseComposite create() {
				return new BackgroundRadialGradientPieCase();
			}
		}),
		PATTERN("Applying pattern on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new BackgroundPatternLineCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private ChartBackgroundCase(String label, CaseFactory factory) {
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
	// DATASET ITEMS SELECTOR
	// ----------------------------------------------

	private enum DatasetItemsSelectorCase implements CaseItem
	{
		SELECTIONG_ON_BAR("Selecting on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetItemsSelectorBarCase();
			}
		}),
		SELECTIONG_ON_LINE("Selecting on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetItemsSelectorLineCase();
			}
		}),
		SELECTIONG_ON_BAR_TIME_SERIES("Selecting on timeseries bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetItemsSelectorTimeSeriesByBarCase();
			}
		}),
		ZOOMING("Zooming on timeseries line chart", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetItemsSelectorZoomingCase();
			}
		}),
		DRILLING_DOWN("Drilling down on timeseries chart", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetItemsSelectorDrillingDownCase();
			}
		});
		
		private final String label;

		private final CaseFactory factory;

		private DatasetItemsSelectorCase(String label, CaseFactory factory) {
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
	// COLOR SCHEMES
	// ----------------------------------------------

	private enum ColorSchemesCase implements CaseItem
	{
		COLORING_BAR("Coloring bar chart by schemes", new CaseFactory() {
			public BaseComposite create() {
				return new ColorSchemeBarCase();
			}
		}),
		COLORING_LINE("Coloring line chart by schemes", new CaseFactory() {
			public BaseComposite create() {
				return new ColorSchemeLineCase();
			}
		}),
		COLORING_RADAR("Coloring radar chart by schemes", new CaseFactory() {
			public BaseComposite create() {
				return new ColorSchemeRadarCase();
			}
		}),
		COLORING_PIE("Coloring pie chart by schemes", new CaseFactory() {
			public BaseComposite create() {
				return new ColorSchemePieCase();
			}
		}),
		COLORING_POLAR("Coloring polar area chart by scheme", new CaseFactory() {
			public BaseComposite create() {
				return new ColorSchemePolarAreaCase();
			}
		}),
		COLORING_BUBBLE("Coloring bubble chart by scheme", new CaseFactory() {
			public BaseComposite create() {
				return new ColorSchemeBubbleCase();
			}
		});
		
		private final String label;

		private final CaseFactory factory;

		private ColorSchemesCase(String label, CaseFactory factory) {
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
	// HTML LEGEND
	// ----------------------------------------------

	private enum HtmlLegendCase implements CaseItem
	{
		BAR("Using a bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new BarCase();
			}
		}),
		HBAR("Using a horizontal bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new HorizontalBarCase();
			}
		}),
		LINE("Using a line chart", new CaseFactory() {
			public BaseComposite create() {
				return new LineCase();
			}
		}),
		PIR("Using a pie chart", new CaseFactory() {
			public BaseComposite create() {
				return new ScatterCase();
			}
		}),
		MAX_LEGEND_ITEMS("Setting max legend items per row", new CaseFactory() {
			public BaseComposite create() {
				return new ScatterCase();
			}
		}),
		SPLITTING("Splitting text by line separator", new CaseFactory() {
			public BaseComposite create() {
				return new ScatterCase();
			}
		}),
		LINEAR_GRADIENT("Managing linear gradients", new CaseFactory() {
			public BaseComposite create() {
				return new ScatterCase();
			}
		}),
		RADIAL_GRADIENT("Managing radial gradients", new CaseFactory() {
			public BaseComposite create() {
				return new ScatterCase();
			}
		}),
		PATTERN("Managing patterns", new CaseFactory() {
			public BaseComposite create() {
				return new ScatterCase();
			}
		}),
		POINT_STYLES("Managing point styles", new CaseFactory() {
			public BaseComposite create() {
				return new ScatterCase();
			}
		}),
		IMAGES_AS_POINT_STYLE("Managing image as point styles", new CaseFactory() {
			public BaseComposite create() {
				return new ScatterCase();
			}
		}),
		CALLBACK("Custom legend item text by callback", new CaseFactory() {
			public BaseComposite create() {
				return new ScatterCase();
			}
		});
		
		private final String label;

		private final CaseFactory factory;

		private HtmlLegendCase(String label, CaseFactory factory) {
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
	
	public PluginsView(HTMLElement content) {
		super(content);
		HTMLElement title = (HTMLElement) DomGlobal.document.createElement("div");
		title.style.textAlign = "center";
		title.style.width = WidthUnionType.of("100%");
		title.innerHTML = " provided out of the box by CHARBA";
		title.className = "myPluginsTitleItem";
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
