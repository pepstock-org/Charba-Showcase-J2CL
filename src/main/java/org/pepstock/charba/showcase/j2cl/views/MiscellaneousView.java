package org.pepstock.charba.showcase.j2cl.views;

import org.pepstock.charba.showcase.j2cl.cases.CaseFactory;
import org.pepstock.charba.showcase.j2cl.cases.CaseItem;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ActiveElementsOnBarCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointSizesOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointStylesAsCanvasOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointStylesAsImageOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingPointStylesOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ApplyingStylesOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.AutoUpdateLineCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBarCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksBubbleCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksDoughnutCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksLineCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksPieCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksPolarAreaCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksRadarCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.CallbacksWithThresholdBarCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ControllerMyHorizontalBarCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.ControllerMyLineCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FlagsPluginOnBarCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataDataLabelsCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataOnBarCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataOnHorizontalBarCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataOnStackedBarCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.FloatingDataTimeSeriesByBarCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationByElementCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HTMLAnnnotationCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.HoverStyleOnStackedAreaCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.InterpolationOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.SimpleLabelPluginOnBarCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.StandingPluginOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.SteppedLineOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.TrendAndForecastCase;

import elemental2.dom.CSSProperties.PaddingTopUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class MiscellaneousView extends AbstractView {

	private enum Category
	{
		OPTIONS("Options", OptionsCase.values()),
		SCRIPTABLE_OPTIONS("Scriptable options", ScriptableOptionsCase.values()),
		DATASETS("Datasets", DatasetsCase.values()),
		PLUGINS("Implementing plugins", PluginsCase.values());

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
	// OPTIONS
	// ----------------------------------------------

	private enum OptionsCase implements CaseItem
	{
		STEPPED_LINE("Stepped line options on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new SteppedLineOnLineCase();
			}
		}),
		INTERPOLATION("Interpolation options on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new InterpolationOnLineCase();
			}
		}),
		STYLES("Applying styles on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new ApplyingStylesOnLineCase();
			}
		}),
		POINT_STYLES("Applying point styles on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new ApplyingPointStylesOnLineCase();
			}
		}),
		POINT_STYLES_AS_IMAGES("Applying point styles as images on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new ApplyingPointStylesAsImageOnLineCase();
			}
		}),
		POINT_STYLES_AS_CANVAS("Applying point styles as canvas on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new ApplyingPointStylesAsCanvasOnLineCase();
			}
		}),
		POINT_SIZE("Applying point sizes on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new ApplyingPointSizesOnLineCase();
			}
		}),
		HOVER_STYLES("Applying hover styles on stacked area chart", new CaseFactory() {
			public BaseComposite create() {
				return new HoverStyleOnStackedAreaCase();
			}
		}),
		ACTIVE_ELEMENTS("Active elements on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new ActiveElementsOnBarCase();
			}
		}),
		TRENDS("Drawing trend and forecast on timeseries chart", new CaseFactory() {
			public BaseComposite create() {
				return new TrendAndForecastCase();
			}
		}),
		AUTO_UPDATE("Auto updating on timeseries chart", new CaseFactory() {
			public BaseComposite create() {
				return new AutoUpdateLineCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private OptionsCase(String label, CaseFactory factory) {
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
	// SCRIPTABLE OPTIONS
	// ----------------------------------------------
	
	private enum ScriptableOptionsCase implements CaseItem
	{
		BAR("Callbacks on bar dataset", new CaseFactory() {
			public BaseComposite create() {
				return new CallbacksBarCase();
			}
		}),
		LINE("Callbacks on line dataset", new CaseFactory() {
			public BaseComposite create() {
				return new CallbacksLineCase();
			}
		}),
		RADAR("Callbacks on radar dataset", new CaseFactory() {
			public BaseComposite create() {
				return new CallbacksRadarCase();
			}
		}),
		DOUGHNUT("Callbacks on doughnut dataset", new CaseFactory() {
			public BaseComposite create() {
				return new CallbacksDoughnutCase();
			}
		}),
		PIE("Callbacks on pie datasetr", new CaseFactory() {
			public BaseComposite create() {
				return new CallbacksPieCase();
			}
		}),
		POLAR("Callbacks on polar area dataset", new CaseFactory() {
			public BaseComposite create() {
				return new CallbacksPolarAreaCase();
			}
		}),
		BUBBLE("Callbacks on bubble dataset", new CaseFactory() {
			public BaseComposite create() {
				return new CallbacksBubbleCase();
			}
		}),
		BAR_THRESHOLDS("Callbacks with threshold on bar dataset", new CaseFactory() {
			public BaseComposite create() {
				return new CallbacksWithThresholdBarCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private ScriptableOptionsCase(String label, CaseFactory factory) {
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
	// DATASETS
	// ----------------------------------------------
	private enum DatasetsCase implements CaseItem
	{
		BAR("Floating data on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new FloatingDataOnBarCase();
			}
		}),
		HBAR("Floating data on horizontal bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new FloatingDataOnHorizontalBarCase();
			}
		}),
		STACKED("Floating data on stacked bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new FloatingDataOnStackedBarCase();
			}
		}),
		TIMESERIES("Floating data on timeseries by bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new FloatingDataTimeSeriesByBarCase();
			}
		}),
		DATALABELS("Floating data on bar chart and datalabels extension", new CaseFactory() {
			public BaseComposite create() {
				return new FloatingDataDataLabelsCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private DatasetsCase(String label, CaseFactory factory) {
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
	// PLUGINS
	// ----------------------------------------------
	private enum PluginsCase implements CaseItem
	{
		SIMPLE("Simple dataset labels", new CaseFactory() {
			public BaseComposite create() {
				return new SimpleLabelPluginOnBarCase();
			}
		}),
		FLAGS("Flags as ticks", new CaseFactory() {
			public BaseComposite create() {
				return new FlagsPluginOnBarCase();
			}
		}),
		STANDINGS("Standings chart", new CaseFactory() {
			public BaseComposite create() {
				return new StandingPluginOnLineCase();
			}
		}),
		HTML_ANNOTATION("HTML annotation as ticks", new CaseFactory() {
			public BaseComposite create() {
				return new HTMLAnnnotationCase();
			}
		}),
		HTML_ANNOTATION_ELEMENT("HTML annotation by element", new CaseFactory() {
			public BaseComposite create() {
				return new HTMLAnnnotationByElementCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private PluginsCase(String label, CaseFactory factory) {
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
	// CONTROLLERS
	// ----------------------------------------------

	private enum ControllersCase implements CaseItem
	{
		SIMPLE("My simple line chart", new CaseFactory() {
			public BaseComposite create() {
				return new ControllerMyLineCase();
			}
		}),
		FLAGS("My horizontal bar chart with flags", new CaseFactory() {
			public BaseComposite create() {
				return new ControllerMyHorizontalBarCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private ControllersCase(String label, CaseFactory factory) {
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
	
	public MiscellaneousView(HTMLElement content) {
		super(content);
		HTMLElement title = (HTMLElement) DomGlobal.document.createElement("div");
		title.style.textAlign = "center";
		title.style.width = WidthUnionType.of("100%");
		title.innerHTML = "  configuration and implementation items";
		title.className = "myMiscellaneousTitleItem";
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

			if (Category.PLUGINS.equals(cat)) {
				HTMLElement labelPalette = (HTMLElement) DomGlobal.document.createElement("div");
				labelPalette.innerHTML = "Implementing controllers";
				labelPalette.style.textAlign = "left";
				labelPalette.className = "myCategory";
				labelPalette.style.paddingTop = PaddingTopUnionType.of("12px");
				catCol.appendChild(labelPalette);
				
				HTMLDivElement item1 = (HTMLDivElement) DomGlobal.document.createElement("div");
				item1.style.textAlign = "left";
				item1.className = "myCategoryItem";
				catCol.appendChild(item1);
				item1.innerHTML = ControllersCase.SIMPLE.getLabel();
				item1.onclick = (p0) -> {
					BaseComposite composite = ControllersCase.SIMPLE.getFactory().create();
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
				item2.innerHTML = ControllersCase.FLAGS.getLabel();
				item2.onclick = (p0) -> {
					BaseComposite composite = ControllersCase.FLAGS.getFactory().create();
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
