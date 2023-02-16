package org.pepstock.charba.showcase.j2cl.cases.coloring;

import java.util.Arrays;
import java.util.List;

import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.items.FillColors;
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

public class FillingColorsCase extends BaseComposite {
	
	private static final List<HtmlColor> COLORS = Arrays.asList(HtmlColor.BLUE, HtmlColor.RED, HtmlColor.GREEN, HtmlColor.ORANGE, HtmlColor.LIGHT_GREY);

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	private final HTMLSelectElement above = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private final HTMLSelectElement below = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private LineDataset dataset = null;

	private FillColors fillColors = new FillColors();

	public FillingColorsCase() {
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

		HtmlColor aboveFirst = null;

		for (HtmlColor myColor : COLORS) {
			if (aboveFirst == null) {
				aboveFirst = myColor;
			}
			HTMLOptionElement fillN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			fillN.text = myColor.name();
			fillN.value = myColor.toRGB();
			above.add(fillN);
		}
		
		HtmlColor belowFirst = null;

		for (HtmlColor myColor : COLORS) {
			if (belowFirst == null) {
				belowFirst = myColor;
			}
			HTMLOptionElement fillN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			fillN.text = myColor.name();
			fillN.value = myColor.toRGB();
			below.add(fillN);
		}

		fillColors.setFill(Fill.ORIGIN);
		fillColors.setAboveColor(aboveFirst);
		fillColors.setBelowColor(belowFirst);
		chart.getOptions().setResponsive(true);
		chart.getOptions().getLegend().setDisplay(false);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Setting filling colors on line chart");

		dataset = chart.newDataset();
		dataset.setLabel("dataset 1");
		dataset.setBorderWidth(0);
		dataset.setPointRadius(0);
		dataset.setData(getRandomDigits(months));
		dataset.setFillColors(fillColors);

		CartesianLinearAxis axis = new CartesianLinearAxis(chart);
		axis.getTicks().setAutoSkip(false);
		axis.getTicks().setMaxRotation(0);

		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset);
		chart.getOptions().getScales().setAxes(axis);

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

		String aboveId = "above" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForAbove = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForAbove.htmlFor = aboveId;
		labelForAbove.appendChild(DomGlobal.document.createTextNode("Above color: "));
		actionsCol.appendChild(labelForAbove);

		above.id = aboveId;
		above.onchange = (p0) -> {
			handleAbove();
			return null;
		};
		above.className = "gwt-ListBox";
		above.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(above);

		String belowId = "below" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForBelow = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForBelow.htmlFor = belowId;
		labelForBelow.appendChild(DomGlobal.document.createTextNode("below color: "));
		actionsCol.appendChild(labelForBelow);

		below.id = belowId;
		below.onchange = (p0) -> {
			handleBelow();
			return null;
		};
		below.className = "gwt-ListBox";
		below.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(below);

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

	protected void handleAbove() {
		String selected = above.options.getAt(above.selectedIndex).value;
		dataset.getFillColors().setAboveColor(selected);
		chart.update();
	}

	protected void handleBelow() {
		String selected = below.options.getAt(below.selectedIndex).value;
		dataset.getFillColors().setBelowColor(selected);
		chart.update();
	}

}
