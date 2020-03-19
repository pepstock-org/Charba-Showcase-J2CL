package org.pepstock.charba.showcase.j2cl.cases.coloring;

import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.colors.GradientOrientation;
import org.pepstock.charba.client.colors.GradientType;
import org.pepstock.charba.client.colors.UiGradient;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.Position;
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

public class UiGradientsCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	private final HTMLSelectElement gradient = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private final HTMLSelectElement orientation = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private LineDataset dataset1 = null;

	public UiGradientsCase() {
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

		UiGradient first = null;
		for (UiGradient myColor : UiGradient.values()) {
			if (first == null) {
				first = myColor;
			}
			HTMLOptionElement colorN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			colorN.text = myColor.name();
			colorN.value = myColor.name();
			gradient.add(colorN);
		}

		GradientOrientation firstOrientation = null;
		for (GradientOrientation myOrientation : GradientOrientation.values()) {
			if (firstOrientation == null) {
				firstOrientation = myOrientation;
			}
			HTMLOptionElement orientationN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			orientationN.text = myOrientation.name();
			orientationN.value = myOrientation.name();
			orientation.add(orientationN);
		}

		chart.getOptions().setResponsive(true);
		chart.getOptions().getLegend().setPosition(Position.TOP);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("UI gradients on line chart");

		dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		dataset1.setBackgroundColor(first.createGradient(GradientType.LINEAR, firstOrientation));
		dataset1.setData(getRandomDigits(months, false));
		dataset1.setFill(Fill.ORIGIN);

		chart.getData().setLabels(getLabels());
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

		String orientationId = "orientation" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForOrientation = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForOrientation.htmlFor = orientationId;
		labelForOrientation.appendChild(DomGlobal.document.createTextNode("Orientation "));
		actionsCol.appendChild(labelForOrientation);

		orientation.id = orientationId;
		orientation.oninput = (p0) -> {
			handleOrientation();
			return null;
		};
		orientation.className = "gwt-ListBox";
		orientation.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(orientation);

		String gradientId = "gradient" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForGradient = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForGradient.htmlFor = gradientId;
		labelForGradient.appendChild(DomGlobal.document.createTextNode("UI Gradients "));
		actionsCol.appendChild(labelForGradient);

		gradient.id = gradientId;
		gradient.oninput = (p0) -> {
			handleGradient();
			return null;
		};
		gradient.className = "gwt-ListBox";
		gradient.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(gradient);

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
		dataset1.setData(getRandomDigits(months, false));
		chart.update();
	}

	protected void handleOrientation() {
		applyGradient();
	}

	protected void handleGradient() {
		applyGradient();
	}

	private void applyGradient() {
		String selectedGradient = gradient.options.getAt(gradient.selectedIndex).value;
		String selectedOrientation = orientation.options.getAt(orientation.selectedIndex).value;
		UiGradient gradient = UiGradient.valueOf(selectedGradient);
		GradientOrientation orie = GradientOrientation.valueOf(selectedOrientation);
		dataset1.setBackgroundColor(gradient.createGradient(orie.getType(), orie));
		chart.update();
	}
}
