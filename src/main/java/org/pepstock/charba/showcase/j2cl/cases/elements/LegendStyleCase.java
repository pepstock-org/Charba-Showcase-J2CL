package org.pepstock.charba.showcase.j2cl.cases.elements;

import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.UpdateConfigurationBuilder;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.PointStyle;
import org.pepstock.charba.client.enums.Position;
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

public class LegendStyleCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

    private final HTMLSelectElement pointStyle = (HTMLSelectElement) DomGlobal.document.createElement("select");
    
    private final HTMLInputElement usePointStyle = (HTMLInputElement) DomGlobal.document.createElement("input");

	LineDataset dataset = null;

	public LegendStyleCase() {
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

		for (PointStyle style : PointStyle.values()) {
			HTMLOptionElement styleN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			styleN.text = style.name();
			styleN.value = style.name();
			pointStyle.add(styleN);
		}

		chart.getOptions().setResponsive(true);
		chart.getOptions().getLegend().setPosition(Position.TOP);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Legend labels styling");

		dataset = chart.newDataset();
		dataset.setLabel("dataset 1");
		IsColor color1 = GoogleChartColor.values()[0];
		dataset.setBackgroundColor(color1.alpha(0.2));
		dataset.setBorderColor(color1.toHex());
		dataset.setBorderWidth(1);
		dataset.setPointBackgroundColor(color1.toHex());
		dataset.setPointStyle(PointStyle.CIRCLE);
		dataset.setPointRadius(10);
		dataset.setData(getRandomDigits(months));
		dataset.setFill(Fill.ORIGIN);
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

		String pointStyleId = "pointStyle" + (int)(Math.random() * 1000D);

		HTMLLabelElement labelForPointStyle = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForPointStyle.htmlFor = pointStyleId;
		labelForPointStyle.appendChild(DomGlobal.document.createTextNode("Point style "));
		actionsCol.appendChild(labelForPointStyle);
		
		pointStyle.id = pointStyleId;
		pointStyle.oninput = (p0) -> {
			handlePointStyle();
			return null;
		};
		pointStyle.className = "gwt-ListBox";
		pointStyle.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(pointStyle);

		String usePointStyleId = "usePointStyle" + (int)(Math.random() * 1000D);

		HTMLLabelElement labelForUsePointStyle = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForUsePointStyle.htmlFor = usePointStyleId;
		labelForUsePointStyle.appendChild(DomGlobal.document.createTextNode("Use point style on legend "));
		actionsCol.appendChild(labelForUsePointStyle);
		
		usePointStyle.id = usePointStyleId;
		usePointStyle.onclick = (p0) -> {
			handleUsePointStyle();
			return null;
		};
		usePointStyle.type = "checkbox";
		usePointStyle.className = "gwt-CheckBox";
		usePointStyle.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(usePointStyle);

		
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
		String selected = pointStyle.options.getAt(pointStyle.selectedIndex).value; 
		int i = 0;
		for (PointStyle cPos : PointStyle.values()) {
			if (cPos.name().equalsIgnoreCase(selected)) {
				IsColor color = GoogleChartColor.values()[i];
				dataset.setBackgroundColor(color.alpha(0.2));
				dataset.setBorderColor(color.toHex());
				dataset.setPointBackgroundColor(color.toHex());
				dataset.setPointStyle(cPos);
				usePointStyle.checked = false;
				handleUsePointStyle();
				return;
			}
			i++;
		}
	}

	protected void handleUsePointStyle() {
		chart.getOptions().getLegend().getLabels().setUsePointStyle(usePointStyle.checked);
		chart.reconfigure(UpdateConfigurationBuilder.create().setDuration(1000).build());
	}

}
