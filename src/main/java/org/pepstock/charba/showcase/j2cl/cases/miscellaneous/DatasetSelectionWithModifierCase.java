package org.pepstock.charba.showcase.j2cl.cases.miscellaneous;

import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.PieChart;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.Labels;
import org.pepstock.charba.client.data.PieDataset;
import org.pepstock.charba.client.dom.elements.Div;
import org.pepstock.charba.client.dom.enums.IsKeyboardKey;
import org.pepstock.charba.client.enums.ModifierKey;
import org.pepstock.charba.client.enums.Position;
import org.pepstock.charba.client.events.DatasetSelectionEvent;
import org.pepstock.charba.client.events.DatasetSelectionEventHandler;
import org.pepstock.charba.client.impl.plugins.ChartPointer;
import org.pepstock.charba.client.impl.plugins.ChartPointerOptions;
import org.pepstock.charba.client.impl.plugins.enums.PointerElement;
import org.pepstock.charba.client.utils.toast.enums.DefaultToastType;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.commons.Toast;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class DatasetSelectionWithModifierCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final HTMLDivElement help = (HTMLDivElement) DomGlobal.document.createElement("div");

	private final PieChart chart = new PieChart();

	public DatasetSelectionWithModifierCase() {
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
		chart.getOptions().getTitle().setText("Selecting dataset on pie chart");

		chart.addHandler(new DatasetSelectionEventHandler() {

			@Override
			public void onSelect(DatasetSelectionEvent event) {
				if (!ModifierKey.ALT.isPressed(event)) {
					Div kkey = IsKeyboardKey.getElement(ModifierKey.ALT.getKeyboardKey());
					new Toast("Missing key!", "To select the dataset you must press " + kkey.getInnerHTML() + " + click! ", DefaultToastType.WARNING).show();
					return;
				}
				IsChart chart = (IsChart) event.getSource();
				Labels labels = chart.getData().getLabels();
				List<Dataset> datasets = chart.getData().getDatasets();
				if (datasets != null && !datasets.isEmpty()) {
					StringBuilder sb = new StringBuilder();
					sb.append("Dataset index: <b>").append(event.getItem().getDatasetIndex()).append("</b><br>");
					sb.append("Dataset label: <b>").append(datasets.get(event.getItem().getDatasetIndex()).getLabel()).append("</b><br>");
					sb.append("Dataset data: <b>").append(datasets.get(event.getItem().getDatasetIndex()).getData().get(event.getItem().getIndex())).append("</b><br>");
					sb.append("Index: <b>").append(event.getItem().getIndex()).append("</b><br>");
					sb.append("Value: <b>").append(labels.getStrings(event.getItem().getIndex()).get(0)).append("</b><br>");
					new Toast("Dataset Selected!", sb.toString()).show();
				}
			}
		}, DatasetSelectionEvent.TYPE);

		PieDataset dataset = chart.newDataset();
		dataset.setLabel("dataset 1");
		dataset.setBackgroundColor(getSequenceColors(months, 1));
		dataset.setData(getRandomDigits(months, false));

		ChartPointerOptions op = new ChartPointerOptions();
		op.setElements(PointerElement.DATASET);
		chart.getOptions().getPlugins().setOptions(ChartPointer.ID, op);
		chart.getPlugins().add(ChartPointer.get());

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
		Div kkey = IsKeyboardKey.getElement(ModifierKey.ALT.getKeyboardKey());
		help.innerHTML = "Press " + kkey.getInnerHTML() + " + click to select";
		helpCol.appendChild(help);

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

}
