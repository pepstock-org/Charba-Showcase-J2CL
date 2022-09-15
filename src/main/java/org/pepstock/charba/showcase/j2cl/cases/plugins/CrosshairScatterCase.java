package org.pepstock.charba.showcase.j2cl.cases.plugins;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.ScatterChart;
import org.pepstock.charba.client.callbacks.CrosshairFormatterCallback;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.ScatterDataset;
import org.pepstock.charba.client.dom.elements.Div;
import org.pepstock.charba.client.dom.enums.IsKeyboardKey;
import org.pepstock.charba.client.enums.ModifierKey;
import org.pepstock.charba.client.impl.plugins.Crosshair;
import org.pepstock.charba.client.impl.plugins.CrosshairOptions;
import org.pepstock.charba.client.items.ScaleItem;
import org.pepstock.charba.client.items.ScaleValueItem;
import org.pepstock.charba.client.utils.Utilities;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class CrosshairScatterCase extends BaseComposite {

	private static final int AMOUNT_OF_POINTS = 16;

	private final HTMLTableElement mainPanel;

	private final ScatterChart chart = new ScatterChart();

	private final HTMLInputElement format = (HTMLInputElement) DomGlobal.document.createElement("input");
	
	private final HTMLDivElement help = (HTMLDivElement) DomGlobal.document.createElement("div");

	public CrosshairScatterCase() {
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
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Crosshair on scatter chart");

		ScatterDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		IsColor color1 = GoogleChartColor.values()[0];

		dataset1.setBackgroundColor(color1.toHex());
		dataset1.setBorderColor(color1.toHex());

		double[] xs1 = getRandomDigits(AMOUNT_OF_POINTS);
		double[] ys1 = getRandomDigits(AMOUNT_OF_POINTS);
		DataPoint[] dp1 = new DataPoint[AMOUNT_OF_POINTS];
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			dp1[i] = new DataPoint();
			dp1[i].setX(xs1[i]);
			dp1[i].setY(ys1[i]);
		}
		dataset1.setDataPoints(dp1);

		ScatterDataset dataset2 = chart.newDataset();
		dataset2.setLabel("dataset 2");

		IsColor color2 = GoogleChartColor.values()[1];

		dataset2.setBackgroundColor(color2.toHex());
		dataset2.setBorderColor(color2.toHex());
		double[] xs2 = getRandomDigits(AMOUNT_OF_POINTS);
		double[] ys2 = getRandomDigits(AMOUNT_OF_POINTS);
		DataPoint[] dp2 = new DataPoint[AMOUNT_OF_POINTS];
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			dp2[i] = new DataPoint();
			dp2[i].setX(xs2[i]);
			dp2[i].setY(ys2[i]);
		}
		dataset2.setDataPoints(dp2);

		CrosshairOptions options = new CrosshairOptions();
		options.setModifierKey(ModifierKey.CTRL);
		options.setLineColor(HtmlColor.DARK_CYAN);
		options.getLabels().setBackgroundColor(HtmlColor.CYAN);
		options.getLabels().setColor(HtmlColor.BLACK);
		options.getLabels().setBorderRadius(0);
		options.getYLabel().setFormatter(new CrosshairFormatterCallback() {
			
			@Override
			public String format(IsChart chart, ScaleItem scale, ScaleValueItem value) {
				if (format.checked) {
					return Utilities.applyPrecision(value.getValue(), 0);
				}
				return value.getLabel();
			}
		});
		chart.getOptions().getPlugins().setOptions(Crosshair.ID, options);
		chart.getPlugins().add(Crosshair.get());
		
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

		configCheckBox(actionsCol, format, "Format ", "format");

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
		// help element
		// ----------------------------------------------

		HTMLTableRowElement helpRow = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		helpRow.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(helpRow);

		HTMLTableCellElement helpCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		helpCol.style.width = WidthUnionType.of("100%");
		helpCol.style.textAlign = "center";
		helpCol.vAlign = "top";
		helpRow.appendChild(helpCol);
		Div kkey = IsKeyboardKey.getElement(ModifierKey.CTRL.getKeyboardKey());
		help.innerHTML = "Press " + kkey.getInnerHTML() + " to act with crosshair";
		helpCol.appendChild(help);
	}

	@Override
	public HTMLElement getElement() {
		return mainPanel;
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
