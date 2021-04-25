package org.pepstock.charba.showcase.j2cl.cases.miscellaneous;

import java.util.Date;
import java.util.List;

import org.pepstock.charba.client.ChartTimerTask;
import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.configuration.CartesianTimeAxis;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.AxisKind;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.TickSource;
import org.pepstock.charba.client.enums.TimeUnit;
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

public class AutoUpdateLineCase extends BaseComposite {

	private static final int INTERVAL = 5 * 1000;

	private static final int AMOUNT_OF_POINTS = 20;
	
	private static final int INITIAL_AMOUNT_OF_POINTS = AMOUNT_OF_POINTS / 2;
	
	private final HTMLTableElement mainPanel;
	
	private final HTMLButtonElement start;
	
	private final HTMLButtonElement stop;

	private final LineChart chart = new LineChart();

	private final Date nowDate = new Date();

	private final LineDataset dataset;

	private final CartesianTimeAxis axis;

	public AutoUpdateLineCase() {
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
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Auto update chart (every 5 seconds)");

		dataset = chart.newDataset();
		dataset.setLabel("Data");
		dataset.setFill(Fill.FALSE);
		IsColor color1 = GoogleChartColor.values()[0];
		dataset.setBackgroundColor(color1.toHex());
		dataset.setBorderColor(color1.toHex());

		double time = nowDate.getTime() - INTERVAL * (INITIAL_AMOUNT_OF_POINTS - 1);

		double[] xs1 = getRandomDigits(INITIAL_AMOUNT_OF_POINTS, false);
		DataPoint[] dataDp = new DataPoint[INITIAL_AMOUNT_OF_POINTS];
		for (int i = 0; i < INITIAL_AMOUNT_OF_POINTS; i++) {
			dataDp[i] = new DataPoint();
			Date newDate = new Date((long) time);
			dataDp[i].setY(xs1[i]);
			dataDp[i].setX(newDate);
			time = time + INTERVAL;
		}
		dataset.setDataPoints(dataDp);

		axis = new CartesianTimeAxis(chart, AxisKind.X);
		axis.getTicks().setSource(TickSource.DATA);
		axis.getTime().setUnit(TimeUnit.SECOND);
		axis.getTime().getDisplayFormats().setDisplayFormat(TimeUnit.SECOND, "H:mm:ss");
		
		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);
		axis2.setBeginAtZero(true);

		chart.getOptions().getScales().setAxes(axis, axis2);
		chart.getData().setDatasets(dataset);
		
		chart.createAndSetTimer(new ChartTimerTask() {
			
			@Override
			public void execute(IsChart chart) {
				DataPoint dataDp = new DataPoint();
				dataDp.setY(getRandomDigit(false));
				dataDp.setX(new Date());
				List<DataPoint> points = dataset.getDataPoints(true);
				points.add(dataDp);
				if (points.size() > AMOUNT_OF_POINTS) {
					points.remove(0);
				}
				chart.update();
			}
		
		}, INTERVAL);

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

		start = (HTMLButtonElement) DomGlobal.document.createElement("button");
		start.onclick = (p0) -> {
			handleStart();
			return null;
		};
		start.className = "gwt-Button";
		start.textContent = "Start";
		start.style.marginRight = MarginRightUnionType.of("5px");
		start.disabled = true;
		actionsCol.appendChild(start);
		
		stop = (HTMLButtonElement) DomGlobal.document.createElement("button");
		stop.onclick = (p0) -> {
			handleStop();
			return null;
		};
		stop.className = "gwt-Button";
		stop.textContent = "Stop";
		stop.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(stop);

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

	protected void handleStart() {
		chart.getTimer().start();
		start.disabled = true;
		stop.disabled = false;
	}

	protected void handleStop() {
		chart.getTimer().stop();
		start.disabled = false;
		stop.disabled = true;
	}

}
