package org.pepstock.charba.showcase.j2cl.cases.elements;

import java.util.List;

import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.UpdateConfigurationBuilder;
import org.pepstock.charba.client.colors.GoogleChartColor;
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
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class TitleChangeCase extends BaseComposite {

	private static final String ORIGINAL_TITLE = "Changing title text on line chart";

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	private final HTMLInputElement split = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final HTMLInputElement text = (HTMLInputElement) DomGlobal.document.createElement("input");

	public TitleChangeCase() {

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
		chart.getOptions().getLegend().setDisplay(true);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText(ORIGINAL_TITLE);

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
		axis1.getScaleLabel().setDisplay(true);
		axis1.getScaleLabel().setLabelString("Month");

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);
		axis2.getScaleLabel().setDisplay(true);
		axis2.getScaleLabel().setLabelString("Value");

		chart.getOptions().getScales().setXAxes(axis1);
		chart.getOptions().getScales().setYAxes(axis2);

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

		String textId = "text" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForText = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForText.htmlFor = textId;
		labelForText.appendChild(DomGlobal.document.createTextNode("Title "));
		actionsCol.appendChild(labelForText);

		text.id = textId;
		text.oninput = (p0) -> {
			handleTextChange();
			return null;
		};
		text.type = "text";
		text.className = "gwt-TextBox";
		text.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(text);

		String splitId = "split" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForSplit = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForSplit.htmlFor = splitId;
		labelForSplit.appendChild(DomGlobal.document.createTextNode("Split by blanks "));
		actionsCol.appendChild(labelForSplit);

		split.id = splitId;
		split.onclick = (p0) -> {
			handleSplit();
			return null;
		};
		split.type = "checkbox";
		split.className = "gwt-CheckBox";
		split.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(split);

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

	protected void handleTextChange() {
		String value = text.value.length() > 0 ? text.value : ORIGINAL_TITLE;
		chart.getOptions().getTitle().setText(value);
		handleSplit();
	}

	protected void handleSplit() {
		if (split.checked) {
			List<String> values = chart.getOptions().getTitle().getText();
			if (!values.isEmpty()) {
				String value = values.get(0);
				if (value.contains(" ")) {
					String[] splitValues = value.split(" ");
					chart.getOptions().getTitle().setText(splitValues);
					chart.reconfigure(UpdateConfigurationBuilder.create().setDuration(0).build());
				}
			}
		} else {
			List<String> values = chart.getOptions().getTitle().getText();
			if (!values.isEmpty()) {
				StringBuilder title = new StringBuilder();
				for (String value : values) {
					title.append(value).append(" ");
				}
				chart.getOptions().getTitle().setText(title.toString().trim());
				chart.reconfigure(UpdateConfigurationBuilder.create().setDuration(0).build());
			}
		}
	}
}
