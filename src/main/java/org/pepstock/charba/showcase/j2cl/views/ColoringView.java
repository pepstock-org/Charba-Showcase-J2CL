package org.pepstock.charba.showcase.j2cl.views;

import org.pepstock.charba.showcase.j2cl.cases.CaseFactory;
import org.pepstock.charba.showcase.j2cl.cases.CaseItem;
import org.pepstock.charba.showcase.j2cl.cases.charts.BarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.ChartClickEventCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.ChartHoverEventCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.ChartResizeEventCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.DoughnutCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.HorizontalBarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.LineCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.MeterCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.ScatterCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.StackedBarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.TimeSeriesBarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.TimeSeriesByBarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.TimeSeriesByLineCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.TimeSeriesLineCase;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

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
				return new BarCase();
			}
		}),
		LINE("Pattern on line dataset", new CaseFactory() {
			public BaseComposite create() {
				return new HorizontalBarCase();
			}
		}),
		RADAR("Pattern on radar dataset", new CaseFactory() {
			public BaseComposite create() {
				return new LineCase();
			}
		}),
		POLAR("Pattern on polar area dataset", new CaseFactory() {
			public BaseComposite create() {
				return new ScatterCase();
			}
		}),
		BUBBLE("Pattern on bubble dataset", new CaseFactory() {
			public BaseComposite create() {
				return new DoughnutCase();
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
				return new TimeSeriesLineCase();
			}
		}),
		LINEAR_ON_LINE("Linear gradient on line dataset", new CaseFactory() {
			public BaseComposite create() {
				return new TimeSeriesBarCase();
			}
		}),
		RADIAL_ON_RADAR("Radial gradient on radar dataset", new CaseFactory() {
			public BaseComposite create() {
				return new TimeSeriesByLineCase();
			}
		}),
		RADIAL_ON_PLOAR("Radial gradient on polar area dataset", new CaseFactory() {
			public BaseComposite create() {
				return new TimeSeriesByBarCase();
			}
		}),
		RADIAL_ON_PIE("Radial gradient on pie dataset", new CaseFactory() {
			public BaseComposite create() {
				return new StackedBarCase();
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
				return new MeterCase();
			}
		}),
		LINE("Applying on line dataset", new CaseFactory() {
			public BaseComposite create() {
				return new MeterCase();
			}
		}),
		RADAR("Applying on radar dataset", new CaseFactory() {
			public BaseComposite create() {
				return new MeterCase();
			}
		}),
		PLOAR("Applying on polar area dataset", new CaseFactory() {
			public BaseComposite create() {
				return new MeterCase();
			}
		}),
		DOUGHNUT("Applying on doughnut dataset", new CaseFactory() {
			public BaseComposite create() {
				return new MeterCase();
			}
		}),
		IMAGES_SHAPES("Using image shapes", new CaseFactory() {
			public BaseComposite create() {
				return new MeterCase();
			}
		}),
		CHARS_SHAPES("Using character shapes", new CaseFactory() {
			public BaseComposite create() {
				return new MeterCase();
			}
		}),
		POINT_STYLES_SHAPES("Using point styles shapes", new CaseFactory() {
			public BaseComposite create() {
				return new GaugeCase();
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
				return new ChartClickEventCase();
			}
		}),
		LINE("Setting filling on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new ChartHoverEventCase();
			}
		}),
		RADAR("Setting filling on radar chart", new CaseFactory() {
			public BaseComposite create() {
				return new ChartResizeEventCase();
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
		}
	}

}
