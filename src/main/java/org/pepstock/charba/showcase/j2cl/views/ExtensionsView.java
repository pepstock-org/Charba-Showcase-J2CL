package org.pepstock.charba.showcase.j2cl.views;

import org.pepstock.charba.showcase.j2cl.cases.CaseFactory;
import org.pepstock.charba.showcase.j2cl.cases.CaseItem;
import org.pepstock.charba.showcase.j2cl.cases.charts.AxesClickEventCase;
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
import org.pepstock.charba.showcase.j2cl.cases.charts.HorizontalBarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.LegendClickEventCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.LineCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.MeterCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.PieCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.PolarAreaCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.RadarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.ScatterCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.StackedBarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.StackedGroupBarCase;
import org.pepstock.charba.showcase.j2cl.cases.charts.StackedLineCase;
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

public class ExtensionsView extends AbstractView {

	private enum Category
	{
		DATA_LABELS("Datalabels plugin", DataLabelsCase.values()),
		LABELS("Labels plugin", LabelsCase.values()),
		ZOOM("Zoom plugin", ZoomCase.values()),
		ANNOTATION("Annotation plugin", AnnotationCase.values());

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
	// DATA LABELS plugin
	// ----------------------------------------------

	private enum DataLabelsCase implements CaseItem
	{
		BAR("Using on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new BarCase();
			}
		}),
		BUBBLE("Using on bubble chart", new CaseFactory() {
			public BaseComposite create() {
				return new HorizontalBarCase();
			}
		}),
		DOUGHNUT("Using on doughnut chart", new CaseFactory() {
			public BaseComposite create() {
				return new LineCase();
			}
		}),
		LINE("Using on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new ScatterCase();
			}
		}),
		POLAR("Using on polar chart", new CaseFactory() {
			public BaseComposite create() {
				return new DoughnutCase();
			}
		}),
		RADAR("Using on radar chart", new CaseFactory() {
			public BaseComposite create() {
				return new PieCase();
			}
		}),
		ON_GRADIENT("Applying labels on dataset with gradient", new CaseFactory() {
			public BaseComposite create() {
				return new PolarAreaCase();
			}
		}),
		INTERACTIONS("Interactions among labels on line datasets", new CaseFactory() {
			public BaseComposite create() {
				return new RadarCase();
			}
		}),
		DATA_AMONG_LABELS("Managing data among on labels on line dataset", new CaseFactory() {
			public BaseComposite create() {
				return new BubbleCase();
			}
		}),
		JOINING_DATASETS("Joining line datasets", new CaseFactory() {
			public BaseComposite create() {
				return new BubbleCase();
			}
		}),
		INDEXES("Indexes and values on line datasets", new CaseFactory() {
			public BaseComposite create() {
				return new BubbleCase();
			}
		}),
		MIRRORING("Mirroring labels on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new BubbleCase();
			}
		}),
		EVENTS("Listening events", new CaseFactory() {
			public BaseComposite create() {
				return new BubbleCase();
			}
		}),
		HOVERING("Highlighting hovered labels", new CaseFactory() {
			public BaseComposite create() {
				return new BubbleCase();
			}
		}),
		SELECTING("Selecting data by labels", new CaseFactory() {
			public BaseComposite create() {
				return new BubbleCase();
			}
		}),
		CALLBACKS("Customizing dataset labels on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new BubbleCase();
			}
		}),
		MULTIPLE_OPTIONS("Multiple options on pie chart", new CaseFactory() {
			public BaseComposite create() {
				return new BubbleCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private DataLabelsCase(String label, CaseFactory factory) {
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
	// LABELS plugin
	// ----------------------------------------------

	private enum LabelsCase implements CaseItem
	{
		BAR("Using on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new TimeSeriesLineCase();
			}
		}),
		POLAR("Using on polar chart", new CaseFactory() {
			public BaseComposite create() {
				return new TimeSeriesBarCase();
			}
		}),
		LABELS("Using dataset label", new CaseFactory() {
			public BaseComposite create() {
				return new TimeSeriesByLineCase();
			}
		}),
		PERCENTAGE("Using percentage values", new CaseFactory() {
			public BaseComposite create() {
				return new TimeSeriesByBarCase();
			}
		}),
		DATA("Using data values", new CaseFactory() {
			public BaseComposite create() {
				return new StackedBarCase();
			}
		}),
		IMAGES("Using images", new CaseFactory() {
			public BaseComposite create() {
				return new StackedGroupBarCase();
			}
		}),
		POSITIONING("Positioning", new CaseFactory() {
			public BaseComposite create() {
				return new StackedLineCase();
			}
		}),
		MULTIPLE_OPTIONS("Multiple labels rendering options", new CaseFactory() {
			public BaseComposite create() {
				return new ComboBarLineCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private LabelsCase(String label, CaseFactory factory) {
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
	// ZOOM plugin
	// ----------------------------------------------
	private enum ZoomCase implements CaseItem
	{
		PANNING("Panning on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new MeterCase();
			}
		}),
		ZOOM_BAR("Zooming on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new MeterCase();
			}
		}),
		ZOOM_BY_X("Zooming by X direction on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new MeterCase();
			}
		}),
		ZOOM_HORIZONTAL("Zooming on horizontal bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new MeterCase();
			}
		}),
		ZOOM_TIME_SERIES("Zooming on timeseries line chart", new CaseFactory() {
			public BaseComposite create() {
				return new MeterCase();
			}
		}),
		ZOOM_SCATTER("Zooming on scatter chart", new CaseFactory() {
			public BaseComposite create() {
				return new MeterCase();
			}
		}),
		STYLING("Styling zooming on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new MeterCase();
			}
		}),
		CALLBACKS("Zoom callbacks on timeseries line chart", new CaseFactory() {
			public BaseComposite create() {
				return new MeterCase();
			}
		}),
		MODE_CALLBACK("Mode direction callback on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new GaugeCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private ZoomCase(String label, CaseFactory factory) {
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
	// ANNOTATION plugin
	// ----------------------------------------------

	private enum AnnotationCase implements CaseItem
	{
		COMBINED("Applying line and box on combined chart", new CaseFactory() {
			public BaseComposite create() {
				return new ChartClickEventCase();
			}
		}),
		LINE("Box annotations on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new ChartHoverEventCase();
			}
		}),
		TIME_SERIES("Line annotation on timeseries chart", new CaseFactory() {
			public BaseComposite create() {
				return new ChartResizeEventCase();
			}
		}),
		HORIZONTAL_BAR("Line annotation on horizontal bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetSelectionBarCase();
			}
		}),
		LOG_SCALE("Line annotation on logarithmic scale", new CaseFactory() {
			public BaseComposite create() {
				return new DatasetSelectionPieCase();
			}
		}),
		OBLIQUE_LINE("Oblique line annotation on timeseries chart", new CaseFactory() {
			public BaseComposite create() {
				return new LegendClickEventCase();
			}
		}),
		EVENTS("Catching annotations events", new CaseFactory() {
			public BaseComposite create() {
				return new AxesClickEventCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private AnnotationCase(String label, CaseFactory factory) {
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

	public ExtensionsView(HTMLElement content) {
		super(content);
		HTMLElement title = (HTMLElement) DomGlobal.document.createElement("div");
		title.style.textAlign = "center";
		title.style.width = WidthUnionType.of("100%");
		title.innerHTML = " of javascript CHART.JS plugins and their integration with CHARBA";
		title.className = "myExtensionsTitleItem";
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
