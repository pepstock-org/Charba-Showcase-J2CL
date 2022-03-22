package org.pepstock.charba.showcase.j2cl.cases.plugins;

import org.pepstock.charba.client.BarChart;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.BarDataset;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.enums.InteractionAxis;
import org.pepstock.charba.client.enums.Position;
import org.pepstock.charba.client.impl.plugins.Crosshair;
import org.pepstock.charba.client.impl.plugins.CrosshairOptions;
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

public class CrosshairBarCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final BarChart chart = new BarChart();

	private final HTMLSelectElement interaction = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private final HTMLInputElement hideLabels = (HTMLInputElement) DomGlobal.document.createElement("input");

	public CrosshairBarCase() {
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
		HTMLOptionElement interactionDefault = (HTMLOptionElement) DomGlobal.document.createElement("option");
		interactionDefault.text = "Default";
		interactionDefault.value = InteractionAxis.XY.name();
		interaction.add(interactionDefault);
		for (InteractionAxis myInteraction : InteractionAxis.values()) {
			if (!InteractionAxis.R.equals(myInteraction)) {
			HTMLOptionElement interactionN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			interactionN.text = myInteraction.name();
			interactionN.value = myInteraction.name();
			interaction.add(interactionN);
			}
		}

		chart.getOptions().setResponsive(true);
		chart.getOptions().getLegend().setPosition(Position.TOP);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Crosshair on bar chart");

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

		CrosshairOptions options = new CrosshairOptions();
		options.setLineColor(HtmlColor.BLACK);
		options.setLineDash(3, 3);
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

		HTMLButtonElement randomize = (HTMLButtonElement) DomGlobal.document.createElement("button");
		randomize.onclick = (p0) -> {
			handleRandomize();
			return null;
		};
		randomize.className = "gwt-Button";
		randomize.textContent = "Randomize data";
		randomize.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(randomize);

		String interactionId = "Interaction" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForInteraction = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForInteraction.htmlFor = interactionId;
		labelForInteraction.appendChild(DomGlobal.document.createTextNode("Interaction: "));
		actionsCol.appendChild(labelForInteraction);

		interaction.id = interactionId;
		interaction.onchange = (p0) -> {
			handleInteraction();
			return null;
		};
		interaction.className = "gwt-ListBox";
		interaction.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(interaction);

		configCheckBox(actionsCol, hideLabels, "Hide labels ", "hideLabels");
		
		hideLabels.onclick = (p0) -> {
			handleElement();
			return null;
		};

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
			dataset.setData(getRandomDigits(months));
		}
		chart.update();
	}

	protected void handleInteraction() {
		String selected = interaction.options.getAt(interaction.selectedIndex).value;
		CrosshairOptions options = chart.getOptions().getPlugins().getOptions(Crosshair.FACTORY);
		options.setMode(InteractionAxis.valueOf(selected));
		chart.update();
	}

	protected void handleElement() {
		CrosshairOptions options = chart.getOptions().getPlugins().getOptions(Crosshair.FACTORY);
		options.getLabels().setDisplay(!hideLabels.checked);
		chart.update();
	}

	private void configCheckBox(HTMLTableCellElement actionsCol, HTMLInputElement checkBox, String label, String prefixId) {
		String checkBoxId = prefixId + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForCheckBox = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForCheckBox.htmlFor = checkBoxId;
		labelForCheckBox.appendChild(DomGlobal.document.createTextNode(label));
		actionsCol.appendChild(labelForCheckBox);

		checkBox.id = checkBoxId;
		checkBox.type = "checkbox";
		checkBox.className = "gwt-CheckBox";
		checkBox.checked = false;
		checkBox.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(checkBox);
	}

}
