package org.pepstock.charba.showcase.j2cl.cases.plugins;

import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.ScatterChart;
import org.pepstock.charba.client.callbacks.CrosshairFormatterCallback;
import org.pepstock.charba.client.callbacks.TickCallback;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.Axis;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.configuration.CartesianLogarithmicAxis;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.ScatterDataset;
import org.pepstock.charba.client.enums.AxisKind;
import org.pepstock.charba.client.enums.AxisPosition;
import org.pepstock.charba.client.enums.Position;
import org.pepstock.charba.client.impl.plugins.Crosshair;
import org.pepstock.charba.client.impl.plugins.CrosshairOptions;
import org.pepstock.charba.client.items.ScaleItem;
import org.pepstock.charba.client.items.ScaleValueItem;
import org.pepstock.charba.client.utils.Utilities;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class CrosshairLogarithmicAxisOnScatterCase extends BaseComposite {

	private final static double[] X = new double[] { 1, 1.26, 1.58, 2.0, 2.51, 3.16, 3.98, 5.01, 6.31, 7.94, 10.00, 12.6, 15.8, 20.0, 25.1, 31.6, 39.8, 50.1, 63.1, 79.4, 100.00, 126, 158, 200, 251, 316, 398, 501, 631, 794, 1000, };
	private final static double[] Y = new double[] { -1.711e-2, -2.708e-2, -4.285e-2, -6.772e-2, -1.068e-1, -1.681e-1, -2.635e-1, -4.106e-1, -6.339e-1, -9.659e-1, -1.445, -2.110, -2.992, -4.102, -5.429, -6.944, -8.607, -1.038e1, -1.223e1, -1.413e1,
			-1.607e1, -1.803e1, -2e1, -2.199e1, -2.398e1, -2.597e1, -2.797e1, -2.996e1, -3.196e1, -3.396e1, -3.596e1, };

	private final HTMLTableElement mainPanel;

	private final ScatterChart chart = new ScatterChart();

	public CrosshairLogarithmicAxisOnScatterCase() {
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
		chart.getOptions().getLegend().setPosition(Position.TOP);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Crosshair on logarithmic axis");

		ScatterDataset dataset1 = chart.newDataset();
		dataset1.setLabel("V(node2)");

		IsColor color1 = GoogleChartColor.values()[1];

		DataPoint[] points = new DataPoint[X.length];
		for (int i = 0; i < X.length; i++) {
			points[i] = new DataPoint();
			points[i].setX(X[i]);
			points[i].setY(Y[i]);
		}
		dataset1.setDataPoints(points);
		dataset1.setBackgroundColor(color1.toHex());
		dataset1.setBorderColor(color1.toHex());

		CartesianLogarithmicAxis axis1 = new CartesianLogarithmicAxis(chart, AxisKind.X);
		axis1.setDisplay(true);
		axis1.getTitle().setDisplay(true);
		axis1.setPosition(AxisPosition.BOTTOM);
		axis1.getTicks().setCallback(new TickCallback() {

			@Override
			public String onCallback(Axis axis, double value, int index, List<Double> values) {
				int remain = (int) (value / (Math.pow(10, Math.floor(Math.log10(value)))));
				if (remain == 1 || remain == 2 || remain == 5) {
					return value + "Hz";
				}
				return "";
			}
		});
		axis1.getTitle().setText("Frequency");
		axis1.getTitle().setDisplay(true);

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);
		axis2.getTicks().setCallback(new TickCallback() {

			@Override
			public String onCallback(Axis axis, double value, int index, List<Double> values) {
				return value + "dB";
			}
		});

		axis2.getTitle().setDisplay(true);
		axis2.getTitle().setText("voltage");

		chart.getOptions().getScales().setAxes(axis1, axis2);

		chart.getData().setDatasets(dataset1);

		CrosshairOptions options = new CrosshairOptions();
		options.setLineColor(HtmlColor.BLACK);
		options.setLineDash(3, 3);
		options.getXLabel().setFormatter(new CrosshairFormatterCallback() {
			
			@Override
			public String format(IsChart chart, ScaleItem scale, ScaleValueItem value) {
				return Utilities.applyPrecision(value.getValue(), 1) + "Hz";
			}
		});
		options.getYLabel().setFormatter(new CrosshairFormatterCallback() {
			
			@Override
			public String format(IsChart chart, ScaleItem scale, ScaleValueItem value) {
				return Utilities.applyPrecision(value.getValue(), 1) + "dB";
			}
		});
		chart.getOptions().getPlugins().setOptions(Crosshair.ID, options);
		
		chart.getPlugins().add(Crosshair.get());

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
