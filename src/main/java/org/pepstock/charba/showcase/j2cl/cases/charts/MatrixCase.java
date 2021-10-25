package org.pepstock.charba.showcase.j2cl.cases.charts;

import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.callbacks.ColorCallback;
import org.pepstock.charba.client.callbacks.DatasetContext;
import org.pepstock.charba.client.callbacks.TooltipLabelCallback;
import org.pepstock.charba.client.callbacks.TooltipTitleCallback;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.enums.AxisKind;
import org.pepstock.charba.client.enums.DefaultScaleId;
import org.pepstock.charba.client.items.ChartAreaNode;
import org.pepstock.charba.client.items.IsArea;
import org.pepstock.charba.client.items.TooltipItem;
import org.pepstock.charba.client.matrix.MatrixChart;
import org.pepstock.charba.client.matrix.MatrixDataPoint;
import org.pepstock.charba.client.matrix.MatrixDataset;
import org.pepstock.charba.client.matrix.callbacks.SizeCallback;
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

public class MatrixCase extends BaseComposite {

	private static final int ROWS_COUNT = 5;

	private static final int COLUMNS_COUNT = 10;

	private final HTMLTableElement mainPanel;

	private final MatrixChart chart = new MatrixChart();

	public MatrixCase() {
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
		chartCol.align = "center";
		chartRow.appendChild(chartCol);

		// ----------------------------------------------
		// Chart
		// ----------------------------------------------

		chart.getOptions().setResponsive(true);
		chart.getOptions().getLegend().setDisplay(false);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Matrix chart");
		chart.getOptions().getTooltips().getCallbacks().setTitleCallback(new TooltipTitleCallback() {

			@Override
			public List<String> onTitle(IsChart chart, List<TooltipItem> items) {
				return Collections.emptyList();
			}
		
		});
		chart.getOptions().getTooltips().getCallbacks().setLabelCallback(new TooltipLabelCallback() {

			@Override
			public List<String> onLabel(IsChart chart, TooltipItem item) {
				MatrixDataset dataset = (MatrixDataset)chart.getData().retrieveDataset(item);
				MatrixDataPoint v = dataset.getDataPoints().get(item.getDataIndex());
	            return Arrays.asList("x: " + v.getX()+ ", y: " + v.getY() + ", v: " + v.getValue());
			}
		
		});
		MatrixDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		dataset1.setBackgroundColor(new ColorCallback<DatasetContext>() {

			@Override
			public Object invoke(DatasetContext context) {
				if (context.getDataIndex() < 0) {
					return null;
				}
				List<MatrixDataPoint> points = dataset1.getDataPoints();
				MatrixDataPoint point = points.get(context.getDataIndex());
				double alpha = Math.min(Math.max((10 + point.getValue()) / 110, 0), 1);
				return HtmlColor.GREEN.alpha(alpha);
			}

		});

		dataset1.setBorderColor(new ColorCallback<DatasetContext>() {

			@Override
			public Object invoke(DatasetContext context) {
				if (context.getDataIndex() < 0) {
					return null;
				}
				List<MatrixDataPoint> points = dataset1.getDataPoints();
				MatrixDataPoint point = points.get(context.getDataIndex());
				double alpha = Math.min(Math.max((10 + point.getValue()) / 110, 0), 1);
				return HtmlColor.DARK_GREEN.alpha(alpha);
			}

		});
		
		dataset1.setHoverBackgroundColor(HtmlColor.YELLOW);
	
		dataset1.setWidth(new SizeCallback() {
			
			@Override
			public Double invoke(DatasetContext context) {
				ChartAreaNode area = context.getChart().getNode().getChartArea();
				return IsArea.isConsistent(area) ? area.getWidth() / ROWS_COUNT - 1 : MatrixDataset.DEFAULT_WIDTH;
			}
		});

		dataset1.setHeight(new SizeCallback() {
			
			@Override
			public Double invoke(DatasetContext context) {
				ChartAreaNode area = context.getChart().getNode().getChartArea();
				return IsArea.isConsistent(area) ? area.getHeight() / COLUMNS_COUNT - 1 : MatrixDataset.DEFAULT_HEIGHT;
			}
		});

		List<MatrixDataPoint> points = new LinkedList<>();
		for (int i= 0; i<ROWS_COUNT; i++) {
			for (int k= 0; k<COLUMNS_COUNT; k++) {
				points.add(new MatrixDataPoint(i, k, getRandomDigit(0,100)));
			}
		}
		dataset1.setDataPoints(points);
		
		CartesianLinearAxis axis = new CartesianLinearAxis(chart, DefaultScaleId.X, AxisKind.X);
		axis.getTicks().setStepSize(1);
		axis.getGrid().setDisplay(false);
		
		CartesianLinearAxis axis1 = new CartesianLinearAxis(chart, DefaultScaleId.Y, AxisKind.Y);
		axis1.setOffset(true);
		axis1.getTicks().setStepSize(1);
		axis1.getGrid().setDisplay(false);

		chart.getOptions().getScales().setAxes(axis, axis1);
		
		chart.getData().setDatasets(dataset1);
		
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
			handleRandomize();
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

	protected void handleRandomize() {
		for (Dataset dataset : chart.getData().getDatasets()) {
			MatrixDataset ds = (MatrixDataset)dataset;
			List<MatrixDataPoint> points = ds.getDataPoints();
			points.forEach(element -> element.setValue(getRandomDigit(0,100)));
		}
		chart.update();
	}
}
