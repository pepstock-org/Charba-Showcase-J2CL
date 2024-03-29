package org.pepstock.charba.showcase.j2cl.cases.miscellaneous;

import java.util.LinkedList;
import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.callbacks.TickCallback;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.Axis;
import org.pepstock.charba.client.configuration.CartesianCategoryAxis;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.dom.elements.Context2dItem;
import org.pepstock.charba.client.dom.enums.TextBaseline;
import org.pepstock.charba.client.enums.DefaultScaleId;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.TextAlign;
import org.pepstock.charba.client.items.ScaleItem;
import org.pepstock.charba.client.plugins.AbstractPlugin;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class StandingPluginOnLineCase extends BaseComposite {

	private static final String[] YEARS = { "2004", "2006", "2008", "2010", "2012", "2013" };

	private static final String[] FACTORS = { "Market Factors", "People Skills", "Macro-economic Factors", "Globalization", "Regulatory Concerns", "Technology Factors", "Socio-economic Factors", "Environmental Issues", "Geopolitical Factors" };

	private static final double[] STANDINGS_1 = new double[] { 1, 1, 1, 1, 3, 2 };
	private static final double[] STANDINGS_2 = new double[] { 2, 2, 2, 4, 2, 4 };
	private static final double[] STANDINGS_3 = new double[] { 3, 6, 6, 3, 4, 3 };
	private static final double[] STANDINGS_4 = new double[] { 4, 5, 4, 6, 6, 7 };
	private static final double[] STANDINGS_5 = new double[] { 5, 4, 5, 5, 5, 5 };
	private static final double[] STANDINGS_6 = new double[] { 6, 3, 3, 2, 1, 1 };
	private static final double[] STANDINGS_7 = new double[] { 7, 7, 8, 8, 7, 6 };
	private static final double[] STANDINGS_8 = new double[] { 8, 8, 7, 7, 8, 8 };
	private static final double[] STANDINGS_9 = new double[] { 9, 9, 9, 9, 9, 9 };

	private static final double[][] STANDINGS = new double[][] { STANDINGS_1, STANDINGS_2, STANDINGS_3, STANDINGS_4, STANDINGS_5, STANDINGS_6, STANDINGS_7, STANDINGS_8, STANDINGS_9 };

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	public StandingPluginOnLineCase() {
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
		chart.getOptions().getLegend().setDisplay(false);
		chart.getOptions().getTitle().setDisplay(false);
		chart.getOptions().getTitle().setText("Standing plugin on line chart");
		chart.getOptions().getLayout().getPadding().setTop(40);
		chart.getOptions().getLayout().getPadding().setRight(40);

		List<Dataset> datasets = new LinkedList<Dataset>();
		for (int i = 0; i < FACTORS.length; i++) {
			LineDataset dataset = chart.newDataset();
			dataset.setLabel(FACTORS[i]);
			IsColor color = GoogleChartColor.values()[i];
			dataset.setBackgroundColor(color.toHex());
			dataset.setBorderColor(color.toHex());
			double[] values = STANDINGS[i];
			dataset.setData(values);
			dataset.setFill(Fill.FALSE);
			datasets.add(dataset);
		}

		CartesianCategoryAxis axis1 = new CartesianCategoryAxis(chart);
		axis1.setDisplay(true);

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);
		axis2.setReverse(true);

		axis2.getTicks().setCallback(new TickCallback() {

			@Override
			public String onCallback(Axis axis, double value, int index, List<Double> values) {
				List<Dataset> dss = chart.getData().getDatasets();
				Dataset ds = dss.get(FACTORS.length - index - 1);
				return ds.getLabel();
			}
		});

		chart.getOptions().getScales().setAxes(axis1, axis2);

		chart.getData().setLabels(YEARS);
		chart.getData().setDatasets(datasets.toArray(new Dataset[0]));

		AbstractPlugin p = new AbstractPlugin("standings") {

			@Override
			public void onAfterDatasetsDraw(IsChart chart) {
				final int padding = 30;
				final int datasetsCount = chart.getData().getDatasets().size();
				Context2dItem ctx = chart.getCanvas().getContext2d();

				ScaleItem scaleX = chart.getNode().getScales().getItems().get(DefaultScaleId.X.value());
				ScaleItem scaleY = chart.getNode().getScales().getItems().get(DefaultScaleId.Y.value());

				double heightAmongLabels = (scaleY.getBottom() - scaleY.getTop()) / (datasetsCount - 1);

				double x = scaleX.getRight() + padding;
				double y = scaleY.getTop();

				for (int i = 0; i < datasetsCount; i++) {
					int index = i + 1;
					ctx.setFillColor("rgb(0, 0, 0)");
					ctx.setFont("22px bold Helvetica Neue");
					ctx.setTextAlign(TextAlign.CENTER);
					ctx.setTextBaseline(TextBaseline.MIDDLE);
					ctx.fillText(String.valueOf(index), x, y);
					y = y + heightAmongLabels;
				}
			}
		};
		chart.getPlugins().add(p);
		
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
		actionsCol.setAttribute("colspan", "2");
		actionsRow.appendChild(actionsCol);

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
