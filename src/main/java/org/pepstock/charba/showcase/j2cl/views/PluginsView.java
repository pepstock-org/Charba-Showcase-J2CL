package org.pepstock.charba.showcase.j2cl.views;

import org.pepstock.charba.showcase.j2cl.cases.CaseFactory;
import org.pepstock.charba.showcase.j2cl.cases.CaseItem;
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
import org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorApiCategoryCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorApiLinearCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorApiTimeCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorBarCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorBubbleCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorDrillingDownCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorLineCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorScatterCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorTimeSeriesByBarCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.DatasetItemsSelectorZoomingCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendBarCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendCustomCallbackCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendHorizontalBarCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendLineCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendLinearGradientCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendMaxItemsCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendPatternCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendPieCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendPointStylesAsCanvasCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendPointStylesAsImageCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendRadialGradientCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendSplittingTextCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.HtmlLegendStyleCase;
import org.pepstock.charba.showcase.j2cl.cases.plugins.PointerLineCase;

import elemental2.dom.CSSProperties.PaddingTopUnionType;
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
		SELECTING_ON_BAR("Selecting on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetItemsSelectorBarCase();
			}
		}),
		SELECTING_ON_LINE("Selecting on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetItemsSelectorLineCase();
			}
		}),
		SELECTING_ON_SCATTER("Selecting on scatter chart", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetItemsSelectorScatterCase();
			}
		}),
		SELECTING_ON_BUBBLE("Selecting on bubble chart", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetItemsSelectorBubbleCase();
			}
		}),
		SELECTING_ON_BAR_TIME_SERIES("Selecting on timeseries bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetItemsSelectorTimeSeriesByBarCase();
			}
		}),
		API_CATEGORY_AXIS("Programmatically selecting on category axis", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetItemsSelectorApiCategoryCase();
			}
		}),
		API_LINEAR_AXIS("Programmatically selecting on linear axis", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetItemsSelectorApiLinearCase();
			}
		}),
		API_TIME_AXIS("Programmatically selecting on time axis", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetItemsSelectorApiTimeCase();
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
				return new HtmlLegendBarCase();
			}
		}),
		HBAR("Using a horizontal bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new HtmlLegendHorizontalBarCase();
			}
		}),
		LINE("Using a line chart", new CaseFactory() {
			public BaseComposite create() {
				return new HtmlLegendLineCase();
			}
		}),
		PIR("Using a pie chart", new CaseFactory() {
			public BaseComposite create() {
				return new HtmlLegendPieCase();
			}
		}),
		MAX_LEGEND_ITEMS("Setting max legend items per row", new CaseFactory() {
			public BaseComposite create() {
				return new HtmlLegendMaxItemsCase();
			}
		}),
		SPLITTING("Splitting text by line separator", new CaseFactory() {
			public BaseComposite create() {
				return new HtmlLegendSplittingTextCase();
			}
		}),
		LINEAR_GRADIENT("Managing linear gradients", new CaseFactory() {
			public BaseComposite create() {
				return new HtmlLegendLinearGradientCase();
			}
		}),
		RADIAL_GRADIENT("Managing radial gradients", new CaseFactory() {
			public BaseComposite create() {
				return new HtmlLegendRadialGradientCase();
			}
		}),
		PATTERN("Managing patterns", new CaseFactory() {
			public BaseComposite create() {
				return new HtmlLegendPatternCase();
			}
		}),
		POINT_STYLES("Managing point styles", new CaseFactory() {
			public BaseComposite create() {
				return new HtmlLegendStyleCase();
			}
		}),
		IMAGES_AS_POINT_STYLE("Managing image as point styles", new CaseFactory() {
			public BaseComposite create() {
				return new HtmlLegendPointStylesAsImageCase();
			}
		}),
		CANVAS_AS_POINT_STYLE("Managing canvas as point styles", new CaseFactory() {
			public BaseComposite create() {
				return new HtmlLegendPointStylesAsCanvasCase();
			}
		}),
		CALLBACK("Custom legend item text by callback", new CaseFactory() {
			public BaseComposite create() {
				return new HtmlLegendCustomCallbackCase();
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

			if (Category.CHART_BACKGROUND.equals(cat)) {
				HTMLElement labelPointer = (HTMLElement) DomGlobal.document.createElement("div");
				labelPointer.innerHTML = "Chart pointer";
				labelPointer.style.textAlign = "left";
				labelPointer.className = "myCategory";
				labelPointer.style.paddingTop = PaddingTopUnionType.of("12px");
				catCol.appendChild(labelPointer);

				HTMLDivElement item = (HTMLDivElement) DomGlobal.document.createElement("div");
				item.style.textAlign = "left";
				item.className = "myCategoryItem";
				catCol.appendChild(item);
				item.innerHTML = "Setting cursors on line chart";
				item.onclick = (p0) -> {
					BaseComposite composite = new PointerLineCase();
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
