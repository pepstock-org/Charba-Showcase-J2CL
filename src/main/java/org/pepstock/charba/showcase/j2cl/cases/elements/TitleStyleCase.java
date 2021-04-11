package org.pepstock.charba.showcase.j2cl.cases.elements;

import java.util.List;

import org.pepstock.charba.client.Defaults;
import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.UpdateConfigurationBuilder;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.CartesianCategoryAxis;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;
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

public class TitleStyleCase extends BaseComposite {

	private static final HtmlColor[] COLORS = { HtmlColor.BLACK, HtmlColor.RED, HtmlColor.BLUE, HtmlColor.GREEN, HtmlColor.ORANGE };

	private static final int[] FONT_SIZES = { 8, 12, 16, 20, 24 };

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	private final HTMLSelectElement color = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private final HTMLSelectElement fontSize = (HTMLSelectElement) DomGlobal.document.createElement("select");

	public TitleStyleCase() {
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

		HTMLOptionElement colorDefault = (HTMLOptionElement) DomGlobal.document.createElement("option");
		colorDefault.text = "Default";
		colorDefault.value = Defaults.get().getGlobal().getTitle().getColorAsString();
		color.add(colorDefault);
		for (HtmlColor myColor : COLORS) {
			HTMLOptionElement colorN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			colorN.text = myColor.name();
			colorN.value = myColor.toRGB();
			color.add(colorN);
		}

		HTMLOptionElement fontSizeDefault = (HTMLOptionElement) DomGlobal.document.createElement("option");
		fontSizeDefault.text = "Default";
		fontSizeDefault.value = String.valueOf(Defaults.get().getGlobal().getTitle().getFont().getSize());
		fontSize.add(fontSizeDefault);
		for (int myFontSize : FONT_SIZES) {
			HTMLOptionElement fontSizeN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			fontSizeN.text = String.valueOf(myFontSize);
			fontSizeN.value = String.valueOf(myFontSize);
			fontSize.add(fontSizeN);
		}

		chart.getOptions().setResponsive(true);
		chart.getOptions().getLegend().setDisplay(true);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Changing title style on line chart");

		List<Dataset> datasets = chart.getData().getDatasets(true);

		LineDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		IsColor color1 = GoogleChartColor.values()[0];

		dataset1.setBackgroundColor(color1.toHex());
		dataset1.setBorderColor(color1.toHex());
		dataset1.setFill(false);
		double[] values = getRandomDigits(months);
		List<Double> data = dataset1.getData(true);
		for (int i = 0; i < values.length; i++) {
			data.add(values[i]);
		}
		datasets.add(dataset1);

		LineDataset dataset2 = chart.newDataset();
		dataset2.setLabel("dataset 2");

		IsColor color2 = GoogleChartColor.values()[1];

		dataset2.setBackgroundColor(color2.toHex());
		dataset2.setBorderColor(color2.toHex());
		dataset2.setData(getRandomDigits(months));
		dataset2.setFill(false);
		datasets.add(dataset2);

		CartesianCategoryAxis axis1 = new CartesianCategoryAxis(chart);
		axis1.setDisplay(true);
		axis1.getTitle().setDisplay(true);
		axis1.getTitle().setText("Month");

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);
		axis2.getTitle().setDisplay(true);
		axis2.getTitle().setText("Value");

		chart.getOptions().getScales().setAxes(axis1, axis2);

		chart.getData().setLabels(getLabels());
		
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

		String colorId = "color" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForColor = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForColor.htmlFor = colorId;
		labelForColor.appendChild(DomGlobal.document.createTextNode("Color "));
		actionsCol.appendChild(labelForColor);

		color.id = colorId;
		color.onchange = (p0) -> {
			handleColor();
			return null;
		};
		color.className = "gwt-ListBox";
		color.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(color);

		String fontSizeId = "fontSize" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForFontSize = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForFontSize.htmlFor = fontSizeId;
		labelForFontSize.appendChild(DomGlobal.document.createTextNode("Font size "));
		actionsCol.appendChild(labelForFontSize);

		fontSize.id = fontSizeId;
		fontSize.onchange = (p0) -> {
			handleFontSize();
			return null;
		};
		fontSize.className = "gwt-ListBox";
		fontSize.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(fontSize);

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

	protected void handleColor() {
		String selected = color.options.getAt(color.selectedIndex).value;
		chart.getOptions().getTitle().setColor(selected);
		chart.reconfigure(UpdateConfigurationBuilder.create().setDuration(0).build());
	}

	protected void handleFontSize() {
		String selected = fontSize.options.getAt(fontSize.selectedIndex).value;
		chart.getOptions().getTitle().getFont().setSize(Integer.parseInt(selected));
		chart.reconfigure(UpdateConfigurationBuilder.create().setDuration(0).build());
	}

}
