package org.pepstock.charba.showcase.j2cl.cases.elements;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.pepstock.charba.client.VerticalLineChart;
import org.pepstock.charba.client.callbacks.BorderDashCallback;
import org.pepstock.charba.client.callbacks.ColorCallback;
import org.pepstock.charba.client.callbacks.SegmentContext;
import org.pepstock.charba.client.callbacks.WidthCallback;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.configuration.CartesianCategoryAxis;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.VerticalLineDataset;
import org.pepstock.charba.client.enums.AxisKind;
import org.pepstock.charba.client.enums.DefaultInteractionMode;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class SegmentOnVerticalLineCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final VerticalLineChart chart = new VerticalLineChart();

	public SegmentOnVerticalLineCase() {
		// ----------------------------------------------
		// Main element
		// ----------------------------------------------

		mainPanel = (HTMLTableElement) DomGlobal.document.createElement("table");
		mainPanel.width = "100%";
		mainPanel.cellPadding = "12";

		HTMLTableRowElement chartRow = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		chartRow.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(chartRow);

		HTMLTableCellElement chartCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		chartCol.style.width = WidthUnionType.of("100%");
		chartRow.appendChild(chartCol);

		// ----------------------------------------------
		// Chart
		// ----------------------------------------------

		chart.getOptions().setResponsive(true);
		chart.getOptions().setMaintainAspectRatio(true);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Vertical line chart with custom segments rendering");
		chart.getOptions().getTooltips().setMode(DefaultInteractionMode.INDEX);
		chart.getOptions().getTooltips().setIntersect(false);

		chart.getOptions().getSegment().setBorderColor(new ColorCallback<SegmentContext>() {
			
			@Override
			public Object invoke(SegmentContext context) {
				return context.getEndPoint().getParsed().getX() <  context.getStartPoint().getParsed().getX() ? HtmlColor.GRAY : HtmlColor.GREEN;
			}
		});

		chart.getOptions().getSegment().setBackgroundColor(new ColorCallback<SegmentContext>() {
			
			@Override
			public Object invoke(SegmentContext context) {
				return context.getEndPoint().getParsed().getX() <  context.getStartPoint().getParsed().getX() ? HtmlColor.LIGHT_GRAY.alpha(0.8) : HtmlColor.LIGHT_GREEN.alpha(0.8);
			}
		});
		
		chart.getOptions().getSegment().setBorderWidth(new WidthCallback<SegmentContext>() {
			
			@Override
			public Integer invoke(SegmentContext context) {
				return context.getEndPoint().getParsed().getX() <  context.getStartPoint().getParsed().getX() ? 5 : null;
			}
		});

		chart.getOptions().getSegment().setBorderDash(new BorderDashCallback<SegmentContext>() {
			
			@Override
			public List<Integer> invoke(SegmentContext context) {
				return context.getEndPoint().getParsed().getX() <  context.getStartPoint().getParsed().getX() ? Arrays.asList(6,6) : Collections.emptyList();
			}
		});
		
		List<Dataset> datasets = chart.getData().getDatasets(true);

		VerticalLineDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		dataset1.setFill(true);

		double[] values = getRandomDigits(months, false);
		List<Double> data = dataset1.getData(true);
		for (int i = 0; i < values.length; i++) {
			data.add(values[i]);
		}
		datasets.add(dataset1);

		CartesianCategoryAxis axis1 = new CartesianCategoryAxis(chart, AxisKind.Y);
		axis1.setDisplay(true);
		axis1.getTitle().setDisplay(true);
		axis1.getTitle().setText("Month");

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart, AxisKind.X);
		axis2.setDisplay(true);
		axis2.getTitle().setDisplay(true);
		axis2.getTitle().setText("Value");

		chart.getOptions().getScales().setAxes(axis1, axis2);

		chart.getData().setLabels(getLabels());
		
		chartCol.appendChild(chart.getChartElement().as());

		// ----------------------------------------------
		// Actions element
		// ----------------------------------------------

		HTMLTableRowElement actionsRow = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		actionsRow.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(actionsRow);

		HTMLTableCellElement actionsCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		actionsCol.style.width = WidthUnionType.of("100%");
		actionsCol.style.textAlign = "center";
		actionsCol.vAlign = "middle";
		actionsRow.appendChild(actionsCol);

		HTMLButtonElement randomize = (HTMLButtonElement) DomGlobal.document.createElement("button");
		randomize.onclick = (p0) -> {
			for (Dataset dataset : chart.getData().getDatasets()) {
				dataset.setData(getRandomDigits(months, false));
			}
			chart.update();
			return null;
		};
		randomize.className = "gwt-Button";
		randomize.textContent = "Randomize data";
		randomize.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(randomize);

		HTMLButtonElement github = (HTMLButtonElement) DomGlobal.document.createElement("button");
		github.onclick = (p0) -> {
			DomGlobal.window.open(getUrl(), "_blank", "");
			return null;
		};
		github.className = "gwt-Button";
		HTMLImageElement img = (HTMLImageElement) DomGlobal.document.createElement("img");
		img.src = "images/GitHub-Mark-32px.png";
		github.appendChild(img);
		actionsCol.appendChild(github);
	}

	@Override
	public HTMLElement getElement() {
		return mainPanel;
	}
}
