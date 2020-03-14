package org.pepstock.charba.showcase.j2cl.cases.elements;

import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.UpdateConfigurationBuilder;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.InteractionMode;
import org.pepstock.charba.client.enums.Position;
import org.pepstock.charba.client.enums.TooltipPosition;
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

public class TooltipPositioningCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	private final HTMLSelectElement position = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private LineDataset dataset1 = null;

	private LineDataset dataset2 = null;

	public TooltipPositioningCase() {
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

		for (TooltipPosition pos : TooltipPosition.values()) {
			HTMLOptionElement posN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			posN.text = pos.name();
			posN.value = pos.name();
			position.add(posN);
		}

		chart.getOptions().setResponsive(true);
		chart.getOptions().getLegend().setPosition(Position.TOP);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Tooltip positioning");
		chart.getOptions().getTooltips().setPosition(TooltipPosition.AVERAGE);
		chart.getOptions().getTooltips().setMode(InteractionMode.INDEX);
		chart.getOptions().getTooltips().setIntersect(false);

		dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");
		IsColor color1 = GoogleChartColor.values()[0];
		dataset1.setBackgroundColor(color1.toHex());
		dataset1.setBorderColor(color1.toHex());
		dataset1.setData(getRandomDigits(months));
		dataset1.setFill(Fill.FALSE);

		dataset2 = chart.newDataset();
		dataset2.setLabel("dataset 1");
		IsColor color2 = GoogleChartColor.values()[1];
		dataset2.setBackgroundColor(color2.toHex());
		dataset2.setBorderColor(color2.toHex());
		dataset2.setData(getRandomDigits(months));
		dataset2.setFill(Fill.FALSE);

		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset1, dataset2);
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

		String positionId = "position" + (int)(Math.random() * 1000D);

		HTMLLabelElement labelForPosition = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForPosition.htmlFor = positionId;
		labelForPosition.appendChild(DomGlobal.document.createTextNode("Position "));
		actionsCol.appendChild(labelForPosition);
		
		position.id = positionId;
		position.oninput = (p0) -> {
			handlePosition();
			return null;
		};
		position.className = "gwt-ListBox";
		position.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(position);
		
		HTMLButtonElement github = (HTMLButtonElement) DomGlobal.document.createElement("button");
		github.onclick = (p0) -> {
			DomGlobal.window.open(getUrl(), "_blank", "");
			return null;
		};
		github.className = "gwt-Button";
		HTMLImageElement img = (HTMLImageElement) DomGlobal.document.createElement("img");
		img.src = "icons/GitHub-Mark-32px.png";
		github.appendChild(img);
		actionsCol.appendChild(github);
	}

	@Override
	public HTMLElement getElement() {
		return mainPanel;
	}
	
	protected void handleRandomize() {
		dataset1.setData(getRandomDigits(months));
		dataset2.setData(getRandomDigits(months));
		chart.update();
	}

	protected void handlePosition() {
		String selected = position.options.getAt(position.selectedIndex).value;
		for (TooltipPosition cPos : TooltipPosition.values()) {
			if (cPos.name().equalsIgnoreCase(selected)) {
				chart.getOptions().getTooltips().setPosition(cPos);
				chart.reconfigure(UpdateConfigurationBuilder.create().setDuration(1000).build());
				return;
			}
		}
	}

}
