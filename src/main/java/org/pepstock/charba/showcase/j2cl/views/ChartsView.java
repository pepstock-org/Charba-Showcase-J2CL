package org.pepstock.charba.showcase.j2cl.views;

import org.pepstock.charba.showcase.j2cl.cases.CaseFactory;
import org.pepstock.charba.showcase.j2cl.cases.CaseItem;
import org.pepstock.charba.showcase.j2cl.cases.charts.AxesEventsCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.BarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.BubbleCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.ChartClickEventCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.ChartHoverEventCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.ChartResizeEventCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.ComboBarLineCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.DatasetSelectionBarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.DatasetSelectionPieCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.DoughnutCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.GaugeCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.GeoBubbleMapUSCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.GeoChoroplethCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.GeoChoroplethUSCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.HorizontalBarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.LegendClickEventCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.LegendHoverAndLeaveEventsCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.LineCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.MatrixCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.MeterCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.PieCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.PolarAreaCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.RadarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.ScatterCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.StackedAreaCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.StackedBarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.StackedGroupBarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.StackedLineCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.SubtitleEventsCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.TimeSeriesBarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.TimeSeriesByBarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.TimeSeriesByLineCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.TimeSeriesLineCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.TitleEventsCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.TreeMapCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.VerticalLineCase;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.PaddingTopUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class ChartsView extends AbstractView {

	private enum Category
	{
		CHARTS("Charts", ChartsCase.values()),
		OTHER_CHARTS("Other charts", OtherChartsCase.values()),
		EXTENDED_CHARTS("Extended charts", ExtendedChartsCase.values()),
		EVENTS("Events", EventsCase.values());

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
	// CHARTS
	// ----------------------------------------------

	private enum ChartsCase implements CaseItem
	{
		BAR("Bar", new CaseFactory() {
			public BaseComposite create() {
				return new BarCase();
			}
		}),
		HBAR("Horizontal bar", new CaseFactory() {
			public BaseComposite create() {
				return new HorizontalBarCase();
			}
		}),
		LINE("Line", new CaseFactory() {
			public BaseComposite create() {
				return new LineCase();
			}
		}),
		VERTICAL_LINE("Vertical line", new CaseFactory() {
			public BaseComposite create() {
				return new VerticalLineCase();
			}
		}),
		SCATTER("Scatter", new CaseFactory() {
			public BaseComposite create() {
				return new ScatterCase();
			}
		}),
		DOUGHNUT("Doughnut", new CaseFactory() {
			public BaseComposite create() {
				return new DoughnutCase();
			}
		}),
		PIE("Pie", new CaseFactory() {
			public BaseComposite create() {
				return new PieCase();
			}
		}),
		POLAR("Polar area", new CaseFactory() {
			public BaseComposite create() {
				return new PolarAreaCase();
			}
		}),
		RADAR("Radar", new CaseFactory() {
			public BaseComposite create() {
				return new RadarCase();
			}
		}),
		BUBBLE("Bubble", new CaseFactory() {
			public BaseComposite create() {
				return new BubbleCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private ChartsCase(String label, CaseFactory factory) {
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
	// Others CHARTS
	// ----------------------------------------------
	
	private enum OtherChartsCase implements CaseItem
	{
		TIMESERIES_LINE("Timeseries line", new CaseFactory() {
			public BaseComposite create() {
				return new TimeSeriesLineCase();
			}
		}),
		TIMESERIES_BAR("Timeseries bar", new CaseFactory() {
			public BaseComposite create() {
				return new TimeSeriesBarCase();
			}
		}),
		TIMESERIES_BY_LINE("Timeseries by line chart", new CaseFactory() {
			public BaseComposite create() {
				return new TimeSeriesByLineCase();
			}
		}),
		TIMESERIES_BY_BAR("Timeseries by bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new TimeSeriesByBarCase();
			}
		}),
		STACKED_BAR("Stacked bar", new CaseFactory() {
			public BaseComposite create() {
				return new StackedBarCase();
			}
		}),
		STACKED_GROUP_BAR("Stacked group bar", new CaseFactory() {
			public BaseComposite create() {
				return new StackedGroupBarCase();
			}
		}),
		STACKED_LINE("Stacked line", new CaseFactory() {
			public BaseComposite create() {
				return new StackedLineCase();
			}
		}),
		STACKED_AREA("Stacked area", new CaseFactory() {
			public BaseComposite create() {
				return new StackedAreaCase();
			}
		}),
		COMBINED("Combined bar and line datasets", new CaseFactory() {
			public BaseComposite create() {
				return new ComboBarLineCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private OtherChartsCase(String label, CaseFactory factory) {
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
	// EXTENDED CHARTS
	// ----------------------------------------------
	private enum ExtendedChartsCase implements CaseItem
	{
		METER("Meter", new CaseFactory() {
			public BaseComposite create() {
				return new MeterCase();
			}
		}),
		GAUGE("Gauge", new CaseFactory() {
			public BaseComposite create() {
				return new GaugeCase();
			}
		}),
		TREEMAP("TreeMap", new CaseFactory() {
			public BaseComposite create() {
				return new TreeMapCase();
			}
		}),
		MATRIX("Matrix", new CaseFactory() {
			public BaseComposite create() {
				return new MatrixCase();
			}
		});
		
		private final String label;

		private final CaseFactory factory;

		private ExtendedChartsCase(String label, CaseFactory factory) {
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
	// GEO CHARTS
	// ----------------------------------------------
	private enum GeoChartsCase implements CaseItem
	{
		EARTH_CHOROPLETH("Earth choropleth", new CaseFactory() {
			public BaseComposite create() {
				return new GeoChoroplethCase();
			}
		}),
		CHOROPLETH("Choropleth", new CaseFactory() {
			public BaseComposite create() {
				return new GeoChoroplethUSCase();
			}
		}),
		BUBBLE_MAP("Bubble map", new CaseFactory() {
			public BaseComposite create() {
				return new GeoBubbleMapUSCase();
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
	// Events
	// ----------------------------------------------

	private enum EventsCase implements CaseItem
	{
		CHART_CLICK("Chart click events", new CaseFactory() {
			public BaseComposite create() {
				return new ChartClickEventCase();
			}
		}),
		CHART_HOVER("Chart hover events", new CaseFactory() {
			public BaseComposite create() {
				return new ChartHoverEventCase();
			}
		}),
		CHART_RESIZE("Chart resize events", new CaseFactory() {
			public BaseComposite create() {
				return new ChartResizeEventCase();
			}
		}),
		DATASET_SELECTION_BAR("Selecting dataset on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetSelectionBarCase();
			}
		}),
		DATASET_SELECTION_PIE("Selecting dataset on pie chart", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetSelectionPieCase();
			}
		}),
		LEGEND_CLICK("Legend click events", new CaseFactory() {
			public BaseComposite create() {
				return new LegendClickEventCase();
			}
		}),
		LEGEND_HOVER("Legend hover and leave events", new CaseFactory() {
			public BaseComposite create() {
				return new LegendHoverAndLeaveEventsCase();
			}
		}),
		TITLE_EVENTS("Title events", new CaseFactory() {
			public BaseComposite create() {
				return new TitleEventsCase();
			}
		}),
		SUBTITLE_EVENTS("Subtitle events", new CaseFactory() {
			public BaseComposite create() {
				return new SubtitleEventsCase();
			}
		}),
		AXES_EVENTS("Axes events", new CaseFactory() {
			public BaseComposite create() {
				return new AxesEventsCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private EventsCase(String label, CaseFactory factory) {
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
	
	public ChartsView(HTMLElement content) {
		super(content);
		HTMLElement title = (HTMLElement) DomGlobal.document.createElement("div");
		title.style.textAlign = "center";
		title.style.width = WidthUnionType.of("100%");
		title.innerHTML = " available out of the box by CHART.JS or by CHARBA";
		title.className = "myChartsTitleItem";
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
			
			if (Category.EXTENDED_CHARTS.equals(cat)) {
				HTMLElement labelPointer = (HTMLElement) DomGlobal.document.createElement("div");
				labelPointer.innerHTML = "Geographic map charts";
				labelPointer.style.textAlign = "left";
				labelPointer.className = "myCategory";
				labelPointer.style.paddingTop = PaddingTopUnionType.of("12px");
				catCol.appendChild(labelPointer);
				
				for (CaseItem caseItem : GeoChartsCase.values()) {
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
