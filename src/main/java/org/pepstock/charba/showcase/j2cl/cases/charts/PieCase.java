package org.pepstock.charba.showcase.j2cl.cases.charts;

import java.util.List;

import org.pepstock.charba.client.PieChart;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.PieDataset;
import org.pepstock.charba.client.enums.Position;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class PieCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final PieChart chart = new PieChart();

	public PieCase() {

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
		chart.getOptions().getLegend().setPosition(Position.TOP);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Pie chart");

		PieDataset dataset = chart.newDataset();
		dataset.setLabel("dataset 1");
		dataset.setBackgroundColor(getSequenceColors(months, 1));
		dataset.setData(getRandomDigits(months, false));
		
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

		HTMLButtonElement addDataset = (HTMLButtonElement) DomGlobal.document.createElement("button");
		addDataset.onclick = (p0) -> {
			handleAddDataset();
			return null;
		};
		addDataset.className = "gwt-Button";
		addDataset.textContent = "Add dataset";
		addDataset.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(addDataset);

		HTMLButtonElement removeDataset = (HTMLButtonElement) DomGlobal.document.createElement("button");
		removeDataset.onclick = (p0) -> {
			handleRemoveDataset();
			return null;
		};
		removeDataset.className = "gwt-Button";
		removeDataset.textContent = "Remove dataset";
		removeDataset.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(removeDataset);

		HTMLButtonElement addData = (HTMLButtonElement) DomGlobal.document.createElement("button");
		addData.onclick = (p0) -> {
			handleAddData();
			return null;
		};
		addData.className = "gwt-Button";
		addData.textContent = "Add data";
		addData.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(addData);

		HTMLButtonElement removeData = (HTMLButtonElement) DomGlobal.document.createElement("button");
		removeData.onclick = (p0) -> {
			handleRemoveData();
			return null;
		};
		removeData.className = "gwt-Button";
		removeData.textContent = "Remove data";
		removeData.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(removeData);

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
			dataset.setData(getRandomDigits(months, false));
		}
		chart.update();
	}

	protected void handleAddDataset() {
		List<Dataset> datasets = chart.getData().getDatasets();
		PieDataset dataset = chart.newDataset();
		dataset.setLabel("dataset " + (datasets.size() + 1));
		dataset.setBackgroundColor(getSequenceColors(months, 1));
		dataset.setData(getRandomDigits(months, false));
		datasets.add(dataset);
		chart.update();
	}

	protected void handleRemoveDataset() {
		removeDataset(chart);
	}

	protected void handleAddData() {
		if (months < 12) {
			chart.getData().getLabels().add(getLabel());
			months++;
			List<Dataset> datasets = chart.getData().getDatasets();
			for (Dataset ds : datasets) {
				PieDataset pds = (PieDataset) ds;
				pds.setBackgroundColor(getSequenceColors(months, 1));
				pds.getData().add(getRandomDigit(false));
			}
			chart.update();
		}
	}

	protected void handleRemoveData() {
		removeData(chart);
	}

}
