package org.pepstock.charba.showcase.j2cl.views;

import org.pepstock.charba.showcase.j2cl.cases.CaseFactory;
import org.pepstock.charba.showcase.j2cl.cases.CaseItem;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.elements.ChangingLegendLabelsCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.FilteringAxisLabelsCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.FilteringLegendCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesDisplayCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.GridLinesStyleCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.LegendPositioningCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.LegendStyleCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.LogarithmicAxisOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.LogarithmicAxisOnScatterCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.MultiAxisBarCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.MultiAxisLineCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.MultiAxisScatterCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.MultiLineAxisLabelsCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.NoNumericYAxisCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.TicksMinMaxCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.TicksStepSizeCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.TitleChangeCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.TitleStyleCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.TooltipBorderCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.TooltipCallbacksCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.TooltipHTMLPieCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.TooltipHTMLlineCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.TooltipInteractionsCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.TooltipPositionerCase;
import org.pepstock.charba.showcase.j2cl.cases.elements.TooltipPositioningCase;

import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class ElementsView extends AbstractView {

	private enum Category
	{
		LEGEND("Legend", LegendCase.values()),
		TOOLTIP("Tooltip", TooltipCase.values()),
		AXES("Axes", AxesCase.values()),
		TITLE("Title", TitleCase.values());

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
	// LEGEND
	// ----------------------------------------------

	private enum LegendCase implements CaseItem
	{
		POSITIONING("Positioning", new CaseFactory() {
			public BaseComposite create() {
				return new LegendPositioningCase();
			}
		}),
		POINT_STYLES("Point style from line datasets", new CaseFactory() {
			public BaseComposite create() {
				return new LegendStyleCase();
			}
		}),
		FILTERING("Filtering hidden datasets by callbacks", new CaseFactory() {
			public BaseComposite create() {
				return new FilteringLegendCase();
			}
		}),
		CHANGING("Changing texts and colors by callbacks", new CaseFactory() {
			public BaseComposite create() {
				return new ChangingLegendLabelsCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private LegendCase(String label, CaseFactory factory) {
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
	// TOOLTIP
	// ----------------------------------------------
	
	private enum TooltipCase implements CaseItem
	{
		POSITIONING("Positioning", new CaseFactory() {
			public BaseComposite create() {
				return new TooltipPositioningCase();
			}
		}),
		INTERACTIONS("Interactions among datasets", new CaseFactory() {
			public BaseComposite create() {
				return new TooltipInteractionsCase();
			}
		}),
		CALLBACK("Callback to add elements", new CaseFactory() {
			public BaseComposite create() {
				return new TooltipCallbacksCase();
			}
		}),
		STYLING("Styling", new CaseFactory() {
			public BaseComposite create() {
				return new TooltipBorderCase();
			}
		}),
		POSITIONER("Positioner for custom positioning", new CaseFactory() {
			public BaseComposite create() {
				return new TooltipPositionerCase();
			}
		}),
		HTML_LINE("HTML tooltip by callback on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new TooltipHTMLlineCase();
			}
		}),
		HTML_PIE("HTML tooltip bu callback on pie chart", new CaseFactory() {
			public BaseComposite create() {
				return new TooltipHTMLPieCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private TooltipCase(String label, CaseFactory factory) {
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
	// AXES
	// ----------------------------------------------

	private enum AxesCase implements CaseItem
	{
		MULTI_BAR("Multiple axes on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new MultiAxisBarCase();
			}
		}),
		MULTI_LINE("Multiple axes on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new MultiAxisLineCase();
			}
		}),
		MULTI_SCATTER("Multiple axes on scatter chart", new CaseFactory() {
			public BaseComposite create() {
				return new MultiAxisScatterCase();
			}
		}),
		GRID_LINES("Displaying grid lines", new CaseFactory() {
			public BaseComposite create() {
				return new GridLinesDisplayCase();
			}
		}),
		STYLING_GRID_LINES("Styling grid lines", new CaseFactory() {
			public BaseComposite create() {
				return new GridLinesStyleCase();
			}
		}),
		MULTI_LABELS("Multiple lines labels on axis", new CaseFactory() {
			public BaseComposite create() {
				return new MultiLineAxisLabelsCase();
			}
		}),
		FILTERING("Filtering labels on axis", new CaseFactory() {
			public BaseComposite create() {
				return new FilteringAxisLabelsCase();
			}
		}),
		NON_NUMERIC("Non numeric Y axis", new CaseFactory() {
			public BaseComposite create() {
				return new NoNumericYAxisCase();
			}
		}),
		STEP_SIZE("Changing step size on ticks", new CaseFactory() {
			public BaseComposite create() {
				return new TicksStepSizeCase();
			}
		}),
		MIN_MAX("Setting min/max on ticks", new CaseFactory() {
			public BaseComposite create() {
				return new TicksMinMaxCase();
			}
		}),
		LOG_LINE("Logarithmic axis on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new LogarithmicAxisOnLineCase();
			}
		}),
		LOG_SCATTER("Logarithmic axis on scatter chart", new CaseFactory() {
			public BaseComposite create() {
				return new LogarithmicAxisOnScatterCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private AxesCase(String label, CaseFactory factory) {
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
	// TITLE
	// ----------------------------------------------

	private enum TitleCase implements CaseItem
	{
		CHANGING_TEXT("Changing text", new CaseFactory() {
			public BaseComposite create() {
				return new TitleChangeCase();
			}
		}),
		CHANGING_STYLE("Changing style", new CaseFactory() {
			public BaseComposite create() {
				return new TitleStyleCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private TitleCase(String label, CaseFactory factory) {
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
	
	public ElementsView(HTMLElement content) {
		super(content);
		HTMLElement title = (HTMLElement) DomGlobal.document.createElement("div");
		title.style.textAlign = "center";
		title.style.width = WidthUnionType.of("100%");
		title.innerHTML = " options to change how the chart behaves";
		title.className = "myElementsTitleItem";
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
