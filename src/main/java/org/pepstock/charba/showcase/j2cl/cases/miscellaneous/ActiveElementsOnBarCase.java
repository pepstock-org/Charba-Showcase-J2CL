package org.pepstock.charba.showcase.j2cl.cases.miscellaneous;

import java.util.List;

import org.pepstock.charba.client.BarChart;
import org.pepstock.charba.client.Defaults;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.BarDataset;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.enums.Position;
import org.pepstock.charba.client.events.ChartHoverEvent;
import org.pepstock.charba.client.events.ChartHoverEventHandler;
import org.pepstock.charba.client.events.LegendClickEvent;
import org.pepstock.charba.client.events.LegendClickEventHandler;
import org.pepstock.charba.client.items.ActiveDatasetElement;
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

public class ActiveElementsOnBarCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final BarChart chart = new BarChart();
	
	private final String[] labels;
	
	private final HTMLSelectElement datasets = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private final HTMLSelectElement data = (HTMLSelectElement) DomGlobal.document.createElement("select");

	public ActiveElementsOnBarCase() {
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

		labels = getLabels();

		chart.getOptions().setResponsive(true);
		chart.getOptions().getLegend().setPosition(Position.TOP);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Bar chart");
		chart.getOptions().getHover().setIntersect(false);

		chart.addHandler(new LegendClickEventHandler() {

			@Override
			public void onClick(LegendClickEvent event) {
				datasets.selectedIndex = 0;
				data.selectedIndex = 0;
				Defaults.get().invokeLegendOnClick(event);
			}
			
		}, LegendClickEvent.TYPE);
		
		chart.addHandler(new ChartHoverEventHandler() {
			
			@Override
			public void onHover(ChartHoverEvent event) {
				datasets.selectedIndex = 0;
				data.selectedIndex = 0;
			}
			
		}, ChartHoverEvent.TYPE);

		BarDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 0");

		IsColor color1 = GoogleChartColor.values()[0];

		dataset1.setBackgroundColor(color1.alpha(0.2));
		dataset1.setBorderColor(color1.toHex());
		dataset1.setBorderWidth(1);
		dataset1.setHoverBorderWidth(5);
		dataset1.setHoverBorderColor(color1.darker());
		dataset1.setData(getRandomDigits(months));

		BarDataset dataset2 = chart.newDataset();
		dataset2.setLabel("dataset 1");

		IsColor color2 = GoogleChartColor.values()[1];

		dataset2.setBackgroundColor(color2.alpha(0.2));
		dataset2.setBorderColor(color2.toHex());
		dataset2.setBorderWidth(1);
		dataset2.setHoverBorderWidth(5);
		dataset2.setHoverBorderColor(color2.darker());
		dataset2.setData(getRandomDigits(months));

		chart.getData().setLabels(labels);
		chart.getData().setDatasets(dataset1, dataset2);
		
		HTMLOptionElement styleN = (HTMLOptionElement) DomGlobal.document.createElement("option");
		styleN.text = "none";
		styleN.value = String.valueOf("-1");
		datasets.add(styleN);

		HTMLOptionElement style1 = (HTMLOptionElement) DomGlobal.document.createElement("option");
		style1.text = dataset1.getLabel();
		style1.value = String.valueOf("0");
		datasets.add(style1);

		HTMLOptionElement style2 = (HTMLOptionElement) DomGlobal.document.createElement("option");
		style2.text = dataset2.getLabel();
		style2.value = String.valueOf("1");
		datasets.add(style2);
		datasets.size = 3;

		HTMLOptionElement styleD = (HTMLOptionElement) DomGlobal.document.createElement("option");
		styleD.text = "none";
		styleD.value = String.valueOf("-1");
		data.add(styleD);

		for (int i = 0; i < labels.length; i++) {
			HTMLOptionElement styleL = (HTMLOptionElement) DomGlobal.document.createElement("option");
			styleL.text = labels[i];
			styleL.value = String.valueOf(i);
			data.add(styleL);
		}
		data.size = labels.length + 1;

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
		actionsCol.style.verticalAlign = "middle";
		actionsRow.appendChild(actionsCol);

		HTMLButtonElement randomize = (HTMLButtonElement) DomGlobal.document.createElement("button");
		randomize.onclick = (p0) -> {
			for (Dataset dataset : chart.getData().getDatasets()) {
				dataset.setData(getRandomDigits(months));
			}
			chart.update();
			datasets.selectedIndex = 0;
			data.selectedIndex = 0;
			return null;
		};
		randomize.className = "gwt-Button";
		randomize.textContent = "Randomize data";
		randomize.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(randomize);
		
		String datasetsId = "datasets" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForDatasets = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForDatasets.htmlFor = datasetsId;
		labelForDatasets.appendChild(DomGlobal.document.createTextNode("Dataset "));
		actionsCol.appendChild(labelForDatasets);

		datasets.id = datasetsId;
		datasets.onchange = (p0) -> {
			handleDatasetsList();
			return null;
		};
		datasets.className = "gwt-ListBox";
		datasets.style.marginRight = MarginRightUnionType.of("5px");
		datasets.style.verticalAlign = "middle";
		actionsCol.appendChild(datasets);

		String dataId = "data" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForData = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForData.htmlFor = dataId;
		labelForData.appendChild(DomGlobal.document.createTextNode("Dataset "));
		actionsCol.appendChild(labelForData);

		data.id = datasetsId;
		data.onchange = (p0) -> {
			handleDatasetsList();
			return null;
		};
		data.className = "gwt-ListBox";
		data.style.marginRight = MarginRightUnionType.of("5px");
		data.style.verticalAlign = "middle";
		actionsCol.appendChild(data);

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
	
	private void handleDatasetsList() {
		int datasetValue = Integer.parseInt(datasets.options.getAt(datasets.selectedIndex).value);
		int dataValue = Integer.parseInt(data.options.getAt(data.selectedIndex).value);
		if (datasetValue >= 0) {
			if (dataValue >= 0) {
				ActiveDatasetElement active = new ActiveDatasetElement(datasetValue, dataValue);
				chart.setActiveElements(active);
				chart.setTooltipActiveElements(active);
			} else {
				List<ActiveDatasetElement> active = chart.getData().createActiveElementsByDatasetIndex(datasetValue);
				chart.setActiveElements(active);
				chart.setTooltipActiveElements(active);
			}
		} else if (dataValue >= 0) {
			List<ActiveDatasetElement> active = chart.getData().createActiveElementsByDataIndex(dataValue);
			chart.setActiveElements(active);
			chart.setTooltipActiveElements(active);
		} else {
			chart.resetActiveElements();
			chart.resetTooltipActiveElements();
		}
		chart.update();
	}

}
