package org.pepstock.charba.showcase.j2cl.views;

import org.pepstock.charba.showcase.j2cl.cases.CaseFactory;
import org.pepstock.charba.showcase.j2cl.cases.CaseItem;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationBoxesOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnHorizontalBarCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnLogarithmicAxisCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnTimeSeriesLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationObliqueLineOnTimeSeriesLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationsEventsOnTimeSeriesCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationsOnCombinedCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBarCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsBubbleCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsCustomLabelsCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDataCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDatasetCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsDoughnutCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsHighlightCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsIndicesCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsInteractionsCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsLinearGradientLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsListenersCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMirrorCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsMultiLabelsCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsPolarAreaCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsRadarCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.DataLabelsSelectionCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ImportingPluginCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsMultiOptionsCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsPolarCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsPositioningCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsUsingImageRenderCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsUsingLabelRenderCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsUsingPercentageRenderCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsUsingValueRenderCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomModeOnBarCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomOnBarCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomOnHorizontalBarCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomOnScatterCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomOnTimeSeriesLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomPanOnBarCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomStyledZoomOnBarCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomXOnBarCase;

import elemental2.dom.CSSProperties.PaddingTopUnionType;
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
				return new DataLabelsBarCase();
			}
		}),
		BUBBLE("Using on bubble chart", new CaseFactory() {
			public BaseComposite create() {
				return new DataLabelsBubbleCase();
			}
		}),
		DOUGHNUT("Using on doughnut chart", new CaseFactory() {
			public BaseComposite create() {
				return new DataLabelsDoughnutCase();
			}
		}),
		LINE("Using on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new DataLabelsLineCase();
			}
		}),
		POLAR("Using on polar chart", new CaseFactory() {
			public BaseComposite create() {
				return new DataLabelsPolarAreaCase();
			}
		}),
		RADAR("Using on radar chart", new CaseFactory() {
			public BaseComposite create() {
				return new DataLabelsRadarCase();
			}
		}),
		ON_GRADIENT("Applying labels on dataset with gradient", new CaseFactory() {
			public BaseComposite create() {
				return new DataLabelsLinearGradientLineCase();
			}
		}),
		INTERACTIONS("Interactions among labels on line datasets", new CaseFactory() {
			public BaseComposite create() {
				return new DataLabelsInteractionsCase();
			}
		}),
		DATA_AMONG_LABELS("Managing data among on labels on line dataset", new CaseFactory() {
			public BaseComposite create() {
				return new DataLabelsDataCase();
			}
		}),
		JOINING_DATASETS("Joining line datasets", new CaseFactory() {
			public BaseComposite create() {
				return new DataLabelsDatasetCase();
			}
		}),
		INDEXES("Indexes and values on line datasets", new CaseFactory() {
			public BaseComposite create() {
				return new DataLabelsIndicesCase();
			}
		}),
		MIRRORING("Mirroring labels on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new DataLabelsMirrorCase();
			}
		}),
		EVENTS("Listening events", new CaseFactory() {
			public BaseComposite create() {
				return new DataLabelsListenersCase();
			}
		}),
		HOVERING("Highlighting hovered labels", new CaseFactory() {
			public BaseComposite create() {
				return new DataLabelsHighlightCase();
			}
		}),
		SELECTING("Selecting data by labels", new CaseFactory() {
			public BaseComposite create() {
				return new DataLabelsSelectionCase();
			}
		}),
		CALLBACKS("Customizing dataset labels on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new DataLabelsCustomLabelsCase();
			}
		}),
		MULTIPLE_OPTIONS("Multiple options on pie chart", new CaseFactory() {
			public BaseComposite create() {
				return new DataLabelsMultiLabelsCase();
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
				return new LabelsBarCase();
			}
		}),
		POLAR("Using on polar chart", new CaseFactory() {
			public BaseComposite create() {
				return new LabelsPolarCase();
			}
		}),
		LABELS("Using dataset label", new CaseFactory() {
			public BaseComposite create() {
				return new LabelsUsingLabelRenderCase();
			}
		}),
		PERCENTAGE("Using percentage values", new CaseFactory() {
			public BaseComposite create() {
				return new LabelsUsingPercentageRenderCase();
			}
		}),
		DATA("Using data values", new CaseFactory() {
			public BaseComposite create() {
				return new LabelsUsingValueRenderCase();
			}
		}),
		IMAGES("Using images", new CaseFactory() {
			public BaseComposite create() {
				return new LabelsUsingImageRenderCase();
			}
		}),
		POSITIONING("Positioning", new CaseFactory() {
			public BaseComposite create() {
				return new LabelsPositioningCase();
			}
		}),
		MULTIPLE_OPTIONS("Multiple labels rendering options", new CaseFactory() {
			public BaseComposite create() {
				return new LabelsMultiOptionsCase();
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
				return new ZoomPanOnBarCase();
			}
		}),
		ZOOM_BAR("Zooming on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomOnBarCase();
			}
		}),
		ZOOM_BY_X("Zooming by X direction on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomXOnBarCase();
			}
		}),
		ZOOM_HORIZONTAL("Zooming on horizontal bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomOnHorizontalBarCase();
			}
		}),
		ZOOM_TIME_SERIES("Zooming on timeseries line chart", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomOnTimeSeriesLineCase();
			}
		}),
		ZOOM_SCATTER("Zooming on scatter chart", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomOnScatterCase();
			}
		}),
		STYLING("Styling zooming on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomStyledZoomOnBarCase();
			}
		}),
		CALLBACKS("Zoom callbacks on timeseries line chart", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomCallbacksOnTimeSeriesCase();
			}
		}),
		MODE_CALLBACK("Mode direction callback on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomModeOnBarCase();
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
				return new AnnotationsOnCombinedCase();
			}
		}),
		LINE("Box annotations on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new AnnotationBoxesOnLineCase();
			}
		}),
		TIME_SERIES("Line annotation on timeseries chart", new CaseFactory() {
			public BaseComposite create() {
				return new AnnotationLineOnTimeSeriesLineCase();
			}
		}),
		HORIZONTAL_BAR("Line annotation on horizontal bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new AnnotationLineOnHorizontalBarCase();
			}
		}),
		LOG_SCALE("Line annotation on logarithmic scale", new CaseFactory() {
			public BaseComposite create() {
				return new AnnotationLineOnLogarithmicAxisCase();
			}
		}),
		OBLIQUE_LINE("Oblique line annotation on timeseries chart", new CaseFactory() {
			public BaseComposite create() {
				return new AnnotationObliqueLineOnTimeSeriesLineCase();
			}
		}),
		EVENTS("Catching annotations events", new CaseFactory() {
			public BaseComposite create() {
				return new AnnotationsEventsOnTimeSeriesCase();
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
			
			if (Category.ANNOTATION.equals(cat)) {
				HTMLElement labelPointer = (HTMLElement) DomGlobal.document.createElement("div");
				labelPointer.innerHTML = "Importing Chart.JS plugin";
				labelPointer.style.textAlign = "left";
				labelPointer.className = "myCategory";
				labelPointer.style.paddingTop = PaddingTopUnionType.of("12px");
				catCol.appendChild(labelPointer);
				
				HTMLDivElement item = (HTMLDivElement) DomGlobal.document.createElement("div");
				item.style.textAlign = "left";
				item.className = "myCategoryItem";
				catCol.appendChild(item);
				item.innerHTML = "Using Stacked100 plugin";
				item.onclick = (p0) -> {
					BaseComposite composite = new ImportingPluginCase();
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
