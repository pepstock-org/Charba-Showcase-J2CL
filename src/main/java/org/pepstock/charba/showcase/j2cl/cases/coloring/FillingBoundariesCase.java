package org.pepstock.charba.showcase.j2cl.cases.coloring;

import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.UpdateConfigurationBuilder;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.HTMLOptionElement;
import elemental2.dom.HTMLSelectElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class FillingBoundariesCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	private final HTMLSelectElement fill = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private final HTMLInputElement smooth = (HTMLInputElement) DomGlobal.document.createElement("input");

	private LineDataset dataset = null;

	public FillingBoundariesCase() {
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

		for (Fill cFill : Fill.values()) {
			HTMLOptionElement fillN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			fillN.text = cFill.name();
			fillN.value = cFill.name();
			fill.add(fillN);
		}

		chart.getOptions().setResponsive(true);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Setting filling modes on line chart");
		chart.getOptions().setSpanGaps(false);
		chart.getOptions().getElements().getLine().setTension(0.000001D);

		dataset = chart.newDataset();
		dataset.setLabel("dataset 1");
		IsColor color = GoogleChartColor.values()[0];
		dataset.setBackgroundColor(color.alpha(0.2));
		dataset.setBorderColor(color.toHex());
		dataset.setData(getRandomDigits(months));
		dataset.setFill(Fill.START);

		CartesianLinearAxis axis = new CartesianLinearAxis(chart);
		axis.getTicks().setAutoSkip(false);
		axis.getTicks().setMaxRotation(0);

		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset);
		chart.getOptions().getScales().setYAxes(axis);
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

		String fillId = "fill" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForFill = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForFill.htmlFor = fillId;
		labelForFill.appendChild(DomGlobal.document.createTextNode("Filling mode "));
		actionsCol.appendChild(labelForFill);

		fill.id = fillId;
		fill.oninput = (p0) -> {
			handleFill();
			return null;
		};
		fill.className = "gwt-ListBox";
		fill.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(fill);

		String smoothId = "smooth" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForSmooth = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForSmooth.htmlFor = smoothId;
		labelForSmooth.appendChild(DomGlobal.document.createTextNode("Smooth"));
		actionsCol.appendChild(labelForSmooth);

		smooth.id = smoothId;
		smooth.onclick = (p0) -> {
			handleSmooth();
			return null;
		};
		smooth.type = "checkbox";
		smooth.className = "gwt-CheckBox";
		smooth.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(smooth);

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

	protected void handleSmooth() {
		double value = smooth.checked ? 0.4D : 0.000001D;
		chart.getOptions().getElements().getLine().setTension(value);
		chart.reconfigure();
	}

	protected void handleFill() {
		String selected = fill.options.getAt(fill.selectedIndex).value;
		int i = 0;
		for (Fill cFill : Fill.values()) {
			if (cFill.name().equalsIgnoreCase(selected)) {
				IsColor color = GoogleChartColor.values()[i];
				dataset.setBackgroundColor(color.alpha(0.2));
				dataset.setBorderColor(color.toHex());
				dataset.setFill(cFill);
				chart.update(UpdateConfigurationBuilder.create().setDuration(1000).build());
				return;
			}
			i++;
		}
	}
}
