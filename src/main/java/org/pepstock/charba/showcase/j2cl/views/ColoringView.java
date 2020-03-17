package org.pepstock.charba.showcase.j2cl.views;

import org.pepstock.charba.showcase.j2cl.cases.CaseFactory;
import org.pepstock.charba.showcase.j2cl.cases.CaseItem;
import org.pepstock.charba.showcase.j2cl.cases.coloring.FillingBoundariesCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.FillingDatasetsOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.FillingDatasetsOnRadarCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.GwtMaterialColorsCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.LinearGradientBarCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.LinearGradientLineCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.PatternBarCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.PatternBubbleCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.PatternLineCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.PatternPolarCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.PatternRadarCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.RadialGradientPieCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.RadialGradientPolarCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.RadialGradientRadarCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.TilesBarCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.TilesCharactersCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.TilesDoughnutCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.TilesImagesCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.TilesLineCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.TilesPointStylesCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.TilesPolarCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.TilesRadarCase;
import org.pepstock.charba.showcase.j2cl.cases.coloring.UiGradientsCase;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.PaddingTopUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class ColoringView extends AbstractView {

	private enum Category
	{
		PATTERNS("Patterns", PatternsCase.values()),
		GRADIENTS("Gradients", GradientsCase.values()),
		TILES("Tiles", TilesCase.values()),
		FILLING("Filling", FillingCase.values());

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
	// PATTERNS
	// ----------------------------------------------

	private enum PatternsCase implements CaseItem
	{
		BAR("Pattern on bar dataset", new CaseFactory() {
			public BaseComposite create() {
				return new PatternBarCase();
			}
		}),
		LINE("Pattern on line dataset", new CaseFactory() {
			public BaseComposite create() {
				return new PatternLineCase();
			}
		}),
		RADAR("Pattern on radar dataset", new CaseFactory() {
			public BaseComposite create() {
				return new PatternRadarCase();
			}
		}),
		POLAR("Pattern on polar area dataset", new CaseFactory() {
			public BaseComposite create() {
				return new PatternPolarCase();
			}
		}),
		BUBBLE("Pattern on bubble dataset", new CaseFactory() {
			public BaseComposite create() {
				return new PatternBubbleCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private PatternsCase(String label, CaseFactory factory) {
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
	// GRADIENTS
	// ----------------------------------------------

	private enum GradientsCase implements CaseItem
	{
		LINEAR_ON_BAR("Linear gradient on bar dataset", new CaseFactory() {
			public BaseComposite create() {
				return new LinearGradientBarCase();
			}
		}),
		LINEAR_ON_LINE("Linear gradient on line dataset", new CaseFactory() {
			public BaseComposite create() {
				return new LinearGradientLineCase();
			}
		}),
		RADIAL_ON_RADAR("Radial gradient on radar dataset", new CaseFactory() {
			public BaseComposite create() {
				return new RadialGradientRadarCase();
			}
		}),
		RADIAL_ON_PLOAR("Radial gradient on polar area dataset", new CaseFactory() {
			public BaseComposite create() {
				return new RadialGradientPolarCase();
			}
		}),
		RADIAL_ON_PIE("Radial gradient on pie dataset", new CaseFactory() {
			public BaseComposite create() {
				return new RadialGradientPieCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private GradientsCase(String label, CaseFactory factory) {
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
	// TILES
	// ----------------------------------------------
	private enum TilesCase implements CaseItem
	{
		BAR("Applying on bar dataset", new CaseFactory() {
			public BaseComposite create() {
				return new TilesBarCase();
			}
		}),
		LINE("Applying on line dataset", new CaseFactory() {
			public BaseComposite create() {
				return new TilesLineCase();
			}
		}),
		RADAR("Applying on radar dataset", new CaseFactory() {
			public BaseComposite create() {
				return new TilesRadarCase();
			}
		}),
		PLOAR("Applying on polar area dataset", new CaseFactory() {
			public BaseComposite create() {
				return new TilesPolarCase();
			}
		}),
		DOUGHNUT("Applying on doughnut dataset", new CaseFactory() {
			public BaseComposite create() {
				return new TilesDoughnutCase();
			}
		}),
		IMAGES_SHAPES("Using image shapes", new CaseFactory() {
			public BaseComposite create() {
				return new TilesImagesCase();
			}
		}),
		CHARS_SHAPES("Using character shapes", new CaseFactory() {
			public BaseComposite create() {
				return new TilesCharactersCase();
			}
		}),
		POINT_STYLES_SHAPES("Using point styles shapes", new CaseFactory() {
			public BaseComposite create() {
				return new TilesPointStylesCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private TilesCase(String label, CaseFactory factory) {
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
	// FILLING
	// ----------------------------------------------

	private enum FillingCase implements CaseItem
	{
		BOUNDARIES("Setting filling boundaries", new CaseFactory() {
			public BaseComposite create() {
				return new FillingBoundariesCase();
			}
		}),
		LINE("Setting filling on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new FillingDatasetsOnLineCase();
			}
		}),
		RADAR("Setting filling on radar chart", new CaseFactory() {
			public BaseComposite create() {
				return new FillingDatasetsOnRadarCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private FillingCase(String label, CaseFactory factory) {
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

	public ColoringView(HTMLElement content) {
		super(content);
		HTMLElement title = (HTMLElement) DomGlobal.document.createElement("div");
		title.style.textAlign = "center";
		title.style.width = WidthUnionType.of("100%");
		title.innerHTML = " section to have a look how the chart can use patterns, gradient and colors";
		title.className = "myColoringTitleItem";
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
			
			if (Category.FILLING.equals(cat)) {
				HTMLElement labelPalette = (HTMLElement) DomGlobal.document.createElement("div");
				labelPalette.innerHTML = "Palette";
				labelPalette.style.textAlign = "left";
				labelPalette.className = "myCategory";
				labelPalette.style.paddingTop = PaddingTopUnionType.of("12px");
				catCol.appendChild(labelPalette);
				
				HTMLDivElement item1 = (HTMLDivElement) DomGlobal.document.createElement("div");
				item1.style.textAlign = "left";
				item1.className = "myCategoryItem";
				catCol.appendChild(item1);
				item1.innerHTML = "GWT Material";
				item1.onclick = (p0) -> {
					BaseComposite composite = new GwtMaterialColorsCase();
					if (composite != null) {
						clearPreviousChart();
						content.appendChild(composite.getElement());
					}
					return null;
				};

				HTMLDivElement item2 = (HTMLDivElement) DomGlobal.document.createElement("div");
				item2.style.textAlign = "left";
				item2.className = "myCategoryItem";
				catCol.appendChild(item2);
				item2.innerHTML = "UI Gradients";
				item2.onclick = (p0) -> {
					BaseComposite composite = new UiGradientsCase();
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
