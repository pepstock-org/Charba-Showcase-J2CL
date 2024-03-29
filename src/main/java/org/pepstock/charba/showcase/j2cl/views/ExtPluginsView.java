package org.pepstock.charba.showcase.j2cl.views;

import org.pepstock.charba.showcase.j2cl.cases.CaseFactory;
import org.pepstock.charba.showcase.j2cl.cases.CaseItem;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationBoxesOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationCurveLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationEllipseOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLabelCalloutOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLabelImageOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLabelOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineAndArrowsCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineLabelOnEnter;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnHorizontalBarCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnLogarithmicAxisCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationLineOnTimeSeriesLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationObliqueLineOnTimeSeriesLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationPointsOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationPolygonsOnLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationsEventsOnTimeSeriesCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.AnnotationsEventsWithModifierKey;
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
import org.pepstock.charba.showcase.j2cl.cases.extensions.GradientBarCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.GradientLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.GradientPolarAreaCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.GradientTimeSeriesByLineCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ImportingCrosshairPluginCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ImportingPluginCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsBarCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsMultiOptionsCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsPolarCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsPositioningCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsUsingImageRenderCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsUsingLabelRenderCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsUsingPercentageRenderCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.LabelsUsingValueRenderCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomApiPanCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomApiZoomCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomApiZoomScaleCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomBasicCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCallbacksOnTimeSeriesCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomCategoryAxisCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomDragCategoryAxisCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomDragLineareAxisCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomDragTimeAxisCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomGroupCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomOverScaleCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomPanRegionCase;
import org.pepstock.charba.showcase.j2cl.cases.extensions.ZoomTimeAxisCase;

import elemental2.dom.CSSProperties.PaddingTopUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class ExtPluginsView extends AbstractView {

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
		BASIC("Pan and zoom on scatter chart", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomBasicCase();
			}
		}),
		ZOOM_CATEGORY("Zooming on category axis", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomCategoryAxisCase();
			}
		}),
		ZOOM_TIME("Zooming on time axis", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomTimeAxisCase();
			}
		}),
		ZOOM_OVER_AXES("Zooming over axes", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomOverScaleCase();
			}
		}),
		ZOOM_DRAG_CATEGORY("Drag to zoom on category axis", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomDragCategoryAxisCase();
			}
		}),
		ZOOM_DRAG_LINEAR("Drag to zoom on linear axis", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomDragLineareAxisCase();
			}
		}),
		ZOOM_DRAG_TIME("Drag to zoom on time axis", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomDragTimeAxisCase();
			}
		}),
		PAN_REGION("Pan region on scatter chart", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomPanRegionCase();
			}
		}),
		ZOOM_API_SCATTER("Programmatically zoom on scatter chart", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomApiZoomCase();
			}
		}),
		ZOOM_API_LINEAR("Programmatically zoom on linear scale", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomApiZoomScaleCase();
			}
		}),
		PAN_API_SCATTER("Programmatically pan on scatter char", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomApiPanCase();
			}
		}),
		ZOOM_CALLBACK("Zoom callbacks on timeseries line chart", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomCallbacksOnTimeSeriesCase();
			}
		}),
		ZOOM_GROUP("Zoom wheel grouping", new CaseFactory() {
			public BaseComposite create() {
				return new ZoomGroupCase();
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
		ARROWS("Line annotation with arrow heads on timeseries chart", new CaseFactory() {
			public BaseComposite create() {
				return new AnnotationLineAndArrowsCase();
			}
		}),
		LABEL_ON_ENTER("Line annotation label appears when the annotation is hovered", new CaseFactory() {
			public BaseComposite create() {
				return new AnnotationLineLabelOnEnter();
			}
		}),
		CURVE_LINE("Curve line annotation on bar chart", new CaseFactory() {
			public BaseComposite create() {
				return new AnnotationCurveLineCase();
			}
		}),
		ELLIPSE("Ellipse annotation on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new AnnotationEllipseOnLineCase();
			}
		}),
		POINTS("Points annotations on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new AnnotationPointsOnLineCase();
			}
		}),
		LABELS("Label annotation on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new AnnotationLabelOnLineCase();
			}
		}),
		LABEL_IMAGE("Label annotation with an image on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new AnnotationLabelImageOnLineCase();
			}
		}),
		LABELS_CALLOUT("Label annotation with callout on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new AnnotationLabelCalloutOnLineCase();
			}
		}),
		POLYGONS("Polygon annotations on line chart", new CaseFactory() {
			public BaseComposite create() {
				return new AnnotationPolygonsOnLineCase();
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
		}),
		EVENTS_WITH_MODIFIER("Catching annotations events with modifier key", new CaseFactory() {
			public BaseComposite create() {
				return new AnnotationsEventsWithModifierKey();
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
	
	// ----------------------------------------------
	// GRADIENT plugin
	// ----------------------------------------------

	private enum GradientCase implements CaseItem
	{
		BAR("Using on cartesian category axis", new CaseFactory() {
			public BaseComposite create() {
				return new GradientBarCase();
			}
		}),
		LINE("Using on cartesian linear axis", new CaseFactory() {
			public BaseComposite create() {
				return new GradientLineCase();
			}
		}),
		TIME_LINE("Using on cartesian time axis", new CaseFactory() {
			public BaseComposite create() {
				return new GradientTimeSeriesByLineCase();
			}
		}),
		POLAR("Using on radial linear axis", new CaseFactory() {
			public BaseComposite create() {
				return new GradientPolarAreaCase();
			}
		});

		private final String label;

		private final CaseFactory factory;

		private GradientCase(String label, CaseFactory factory) {
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

	public ExtPluginsView(HTMLElement content) {
		super(content);
		HTMLElement title = (HTMLElement) DomGlobal.document.createElement("div");
		title.style.textAlign = "center";
		title.style.width = WidthUnionType.of("100%");
		title.innerHTML = " of javascript CHART.JS plugins and their integration with CHARBA";
		title.className = "myExtensionsPluginsTitleItem";
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

			if (Category.ZOOM.equals(cat)) {
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

				HTMLDivElement item1 = (HTMLDivElement) DomGlobal.document.createElement("div");
				item1.style.textAlign = "left";
				item1.className = "myCategoryItem";
				catCol.appendChild(item1);
				item1.innerHTML = "Using Crosshair plugin";
				item1.onclick = (p0) -> {
					BaseComposite composite = new ImportingCrosshairPluginCase();
					if (composite != null) {
						clearPreviousChart();
						content.appendChild(composite.getElement());
					}
					return null;
				};

			}
			
			if (Category.LABELS.equals(cat)) {
				HTMLElement labelCrosshair = (HTMLElement) DomGlobal.document.createElement("div");
				labelCrosshair.innerHTML = "Gradient plugin";
				labelCrosshair.style.textAlign = "left";
				labelCrosshair.className = "myCategory";
				labelCrosshair.style.paddingTop = PaddingTopUnionType.of("12px");
				catCol.appendChild(labelCrosshair);

				for (GradientCase gp : GradientCase.values()) {
					HTMLDivElement item = (HTMLDivElement) DomGlobal.document.createElement("div");
					item.style.textAlign = "left";
					item.className = "myCategoryItem";
					catCol.appendChild(item);
					item.innerHTML = gp.getLabel();
					item.onclick = (p0) -> {
						BaseComposite composite = gp.getFactory().create();
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
