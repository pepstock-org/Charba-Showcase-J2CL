package org.pepstock.charba.showcase.j2cl.cases.miscellaneous;

import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.callbacks.LegendLabelsCallback;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.PointStyle;
import org.pepstock.charba.client.items.LegendLabelItem;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.HTMLOptionElement;
import elemental2.dom.HTMLSelectElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class ApplyingPointStylesOnLineCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	private final HTMLSelectElement pointStyles = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private LineDataset dataset = null;

	private IsColor color = null;

	public ApplyingPointStylesOnLineCase() {
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

		for (PointStyle myPointStyle : PointStyle.values()) {
			HTMLOptionElement styleN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			styleN.text = myPointStyle.name();
			styleN.value = myPointStyle.name();
			pointStyles.add(styleN);
		}

		chart.getOptions().setResponsive(true);
		chart.getOptions().getLegend().setDisplay(true);
		chart.getOptions().getLegend().getLabels().setUsePointStyle(true);
		chart.getOptions().getLegend().getLabels().setFontSize(15);
		chart.getOptions().getLegend().getLabels().setLabelsCallback(new LegendLabelsCallback() {

			@Override
			public List<LegendLabelItem> generateLegendLabels(IsChart chart, List<LegendLabelItem> defaultLabels) {
				String selectedPointStyle = pointStyles.options.getAt(pointStyles.selectedIndex).value;
				for (LegendLabelItem item : defaultLabels) {
					item.setPointStyle(PointStyle.valueOf(selectedPointStyle));
					item.setStrokeStyle(color);
					item.setFillStyle(color);
				}
				return defaultLabels;
			}
		});
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Applying point styles on line chart");

		dataset = chart.newDataset();
		dataset.setLabel("My dataset");

		color = GoogleChartColor.values()[0];
		dataset.setBackgroundColor(color.toHex());
		dataset.setBorderColor(color.toHex());
		dataset.setData(getRandomDigits(months));
		dataset.setFill(Fill.FALSE);
		dataset.setPointRadius(10D);
		dataset.setPointHoverRadius(20D);
		dataset.setShowLine(false);
		dataset.setPointStyle(PointStyle.CIRCLE);

		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset);
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

		String pointStyleId = "pointStyle" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForPointStyle = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForPointStyle.htmlFor = pointStyleId;
		labelForPointStyle.appendChild(DomGlobal.document.createTextNode("Point style "));
		actionsCol.appendChild(labelForPointStyle);

		pointStyles.id = pointStyleId;
		pointStyles.onchange = (p0) -> {
			handlePointStyle();
			return null;
		};
		pointStyles.className = "gwt-ListBox";
		pointStyles.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(pointStyles);

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
		dataset.setData(getRandomDigits(months));
		chart.update();
	}

	protected void handlePointStyle() {
		String selectedPointStyle = pointStyles.options.getAt(pointStyles.selectedIndex).value;
		int index = 0;
		for (PointStyle style : PointStyle.values()) {
			if (style.name().equalsIgnoreCase(selectedPointStyle)) {
				color = GoogleChartColor.values()[index];
				dataset.setPointStyle(style);
				dataset.setBackgroundColor(color.toHex());
				dataset.setBorderColor(color.toHex());
				chart.update();
				return;
			}
			index++;
		}
	}
}
