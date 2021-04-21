package org.pepstock.charba.showcase.j2cl.cases.charts;

import java.util.ArrayList;
import java.util.List;

import org.pepstock.charba.client.callbacks.MeterFormatCallback;
import org.pepstock.charba.client.colors.ColorBuilder;
import org.pepstock.charba.client.enums.FontStyle;
import org.pepstock.charba.client.enums.Render;
import org.pepstock.charba.client.impl.charts.DefaultThreshold;
import org.pepstock.charba.client.impl.charts.GaugeChart;
import org.pepstock.charba.client.impl.charts.GaugeDataset;
import org.pepstock.charba.client.impl.charts.MeterContext;
import org.pepstock.charba.client.utils.Utilities;
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

public class GaugeCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final GaugeChart chartPercent = new GaugeChart();

	private final GaugeChart chartValue = new GaugeChart();

	private final GaugeChart chartValueColor = new GaugeChart();

	private final GaugeChart chartValueReverse = new GaugeChart();

	private final List<GaugeDataset> datasets = new ArrayList<GaugeDataset>();

	public GaugeCase() {
		// ----------------------------------------------
		// Main element
		// ----------------------------------------------

		mainPanel = (HTMLTableElement) DomGlobal.document.createElement("table");
		mainPanel.width = "100%";
		mainPanel.cellPadding = "12";

		HTMLTableRowElement chartRow1 = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		chartRow1.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(chartRow1);

		HTMLTableCellElement chartCol11 = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		chartCol11.style.width = WidthUnionType.of("50%");
		chartRow1.appendChild(chartCol11);

		HTMLTableCellElement chartCol12 = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		chartCol12.style.width = WidthUnionType.of("50%");
		chartRow1.appendChild(chartCol12);

		HTMLTableRowElement chartRow2 = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		chartRow2.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(chartRow2);

		HTMLTableCellElement chartCol21 = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		chartCol21.style.width = WidthUnionType.of("50%");
		chartRow2.appendChild(chartCol21);

		HTMLTableCellElement chartCol22 = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		chartCol22.style.width = WidthUnionType.of("50%");
		chartRow2.appendChild(chartCol22);

		// ----------------------------------------------
		// Chart
		// ----------------------------------------------

		chartPercent.getOptions().getTitle().setDisplay(true);
		chartPercent.getOptions().getTitle().setText("GAUGE chart to represent percentage value");
		chartPercent.getOptions().setRender(Render.PERCENTAGE);
		chartPercent.getOptions().setFormatCallback(new MeterFormatCallback() {

			@Override
			public String invoke(MeterContext context) {
				return Utilities.applyPrecision(context.getValue() * 100, 2) + "%";
			}
		});
		chartPercent.getOptions().setAnimated(true);
		chartPercent.getData().setDatasets(getDataset(chartPercent, "Percent", 100D));

		chartCol11.appendChild(chartPercent.getChartElement().as());

		chartValue.getOptions().getTitle().setDisplay(true);
		chartValue.getOptions().getTitle().setText("GAUGE chart to represent value and dataset label");
		chartValue.getOptions().setRender(Render.VALUE_AND_LABEL);
		chartValue.getOptions().setFormatCallback(new MeterFormatCallback() {

			@Override
			public String invoke(MeterContext context) {
				return Utilities.applyPrecision(context.getValue(), 0) + " MB";
			}

		});
		chartValue.getOptions().getFont().setStyle(FontStyle.ITALIC);
		chartValue.getData().setDatasets(getDataset(chartValue, "Memory", 2048D));

		chartCol12.appendChild(chartValue.getChartElement().as());

		chartValueColor.getOptions().getTitle().setDisplay(true);
		chartValueColor.getOptions().getTitle().setText("GAUGE chart to represent value and dataset label", "changing the color of label");
		chartValueColor.getOptions().setRender(Render.VALUE_AND_LABEL);
		chartValueColor.getOptions().setFormatCallback(new MeterFormatCallback() {

			@Override
			public String invoke(MeterContext context) {
				return Utilities.applyPrecision(context.getValue(), 0) + " GB";
			}
		});
		chartValueColor.getOptions().setFontColor(ColorBuilder.build(90, 173, 255));
		chartValueColor.getData().setDatasets(getDataset(chartValueColor, "Storage", 200D));

		chartCol21.appendChild(chartValueColor.getChartElement().as());

		chartValueReverse.getOptions().getTitle().setDisplay(true);
		chartValueReverse.getOptions().getTitle().setText("GAUGE chart with thresholds on reverse mode");
		chartValueReverse.getOptions().setRender(Render.VALUE);
		chartValueReverse.getOptions().setPrecision(0);

		GaugeDataset ds = getDataset(chartValueReverse, "Reverse", 400D);

		ds.setThresholds(DefaultThreshold.NORMAL.getThreshold().setValue(Double.MAX_VALUE), DefaultThreshold.WARNING.getThreshold().setValue(100), DefaultThreshold.CRITICAL.getThreshold().setValue(40));
		ds.setPercentageThreshold(false);
		chartValueReverse.getData().setDatasets(ds);

		chartCol22.appendChild(chartValueReverse.getChartElement().as());

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
		for (GaugeDataset dataset : datasets) {
			dataset.setValue(Math.random() * dataset.getMax());
		}
		chartPercent.update();
		chartValue.update();
		chartValueColor.update();
		chartValueReverse.update();
	}

	private GaugeDataset getDataset(GaugeChart chart, String label, double max) {
		chart.getOptions().setResponsive(true);
		GaugeDataset dataset = chart.newDataset(max);
		dataset.setLabel(label);
		dataset.setValue(Math.random() * max);
		datasets.add(dataset);
		return dataset;
	}
}
