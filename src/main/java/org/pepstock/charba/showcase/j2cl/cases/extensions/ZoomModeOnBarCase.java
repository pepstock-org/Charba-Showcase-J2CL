package org.pepstock.charba.showcase.j2cl.cases.extensions;

import org.pepstock.charba.client.BarChart;
import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.BarDataset;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.enums.InteractionAxis;
import org.pepstock.charba.client.enums.Position;
import org.pepstock.charba.client.zoom.ZoomOptions;
import org.pepstock.charba.client.zoom.ZoomPlugin;
import org.pepstock.charba.client.zoom.callbacks.ModeCallback;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.commons.LogView;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class ZoomModeOnBarCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final BarChart chart = new BarChart();

	private final LogView mylog = new LogView();

	public ZoomModeOnBarCase() {
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
		chart.getOptions().setAspectRatio(3);
		chart.getOptions().getLegend().setPosition(Position.TOP);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Zoom mode callback on bar chart");

		BarDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		IsColor color1 = GoogleChartColor.values()[0];

		dataset1.setBackgroundColor(color1.alpha(0.2));
		dataset1.setBorderColor(color1.toHex());
		dataset1.setBorderWidth(1);

		dataset1.setData(getRandomDigits(months));

		BarDataset dataset2 = chart.newDataset();
		dataset2.setLabel("dataset 2");

		IsColor color2 = GoogleChartColor.values()[1];

		dataset2.setBackgroundColor(color2.alpha(0.2));
		dataset2.setBorderColor(color2.toHex());
		dataset2.setBorderWidth(1);
		dataset2.setData(getRandomDigits(months));

		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset1, dataset2);

		ZoomOptions options = new ZoomOptions();
		options.getPan().setEnabled(true);
		options.getPan().setMode(new ModeCallback() {

			@Override
			public InteractionAxis mode(IsChart chart) {
				mylog.addLogEvent("> Panning MODE: " + InteractionAxis.Y.value());
				return InteractionAxis.Y;
			}
		});
		options.getZoom().setEnabled(true);
		options.getZoom().setMode(new ModeCallback() {

			@Override
			public InteractionAxis mode(IsChart chart) {
				mylog.addLogEvent("> Zooming MODE: " + InteractionAxis.Y.value());
				return InteractionAxis.Y;
			}
		});

		chart.getOptions().getPlugins().setOptions(ZoomPlugin.ID, options);
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

		HTMLButtonElement reset = (HTMLButtonElement) DomGlobal.document.createElement("button");
		reset.onclick = (p0) -> {
			handleResetZoom();
			return null;
		};
		reset.className = "gwt-Button";
		reset.textContent = "Reset zoom";
		reset.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(reset);

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

		// ----------------------------------------------
		// Log element
		// ----------------------------------------------

		HTMLTableRowElement logRow = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		logRow.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(logRow);

		HTMLTableCellElement logCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		logCol.style.width = WidthUnionType.of("100%");
		logCol.style.textAlign = "center";
		logCol.vAlign = "top";
		logRow.appendChild(logCol);
		logCol.appendChild(mylog.getElement());
	}

	@Override
	public HTMLElement getElement() {
		return mainPanel;
	}

	protected void handleRandomize() {
		for (Dataset dataset : chart.getData().getDatasets()) {
			dataset.setData(getRandomDigits(months));
		}
		chart.update();
	}

	protected void handleResetZoom() {
		ZoomPlugin.resetZoom(chart);
	}
}
