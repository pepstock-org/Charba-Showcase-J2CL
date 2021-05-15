package org.pepstock.charba.showcase.j2cl.cases.plugins;

import java.util.LinkedList;
import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.UpdateConfigurationBuilder;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.CartesianCategoryAxis;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.Labels;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.dom.enums.CursorType;
import org.pepstock.charba.client.events.AxisClickEvent;
import org.pepstock.charba.client.events.AxisClickEventHandler;
import org.pepstock.charba.client.events.DatasetSelectionEvent;
import org.pepstock.charba.client.events.DatasetSelectionEventHandler;
import org.pepstock.charba.client.events.TitleClickEvent;
import org.pepstock.charba.client.events.TitleClickEventHandler;
import org.pepstock.charba.client.impl.plugins.ChartPointer;
import org.pepstock.charba.client.impl.plugins.ChartPointerOptions;
import org.pepstock.charba.client.impl.plugins.enums.PointerElement;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.commons.LogView;

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

public class PointerLineCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	private final HTMLSelectElement cursor = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private final HTMLInputElement dataset = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final HTMLInputElement legend = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final HTMLInputElement title = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final HTMLInputElement axes = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final LogView mylog = new LogView(4);

	private final ChartPointerOptions options = new ChartPointerOptions();

	private final List<PointerElement> elements = new LinkedList<>();

	public PointerLineCase() {
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
		HTMLOptionElement cursorDefault = (HTMLOptionElement) DomGlobal.document.createElement("option");
		cursorDefault.text = "Default";
		cursorDefault.value = CursorType.POINTER.name();
		cursor.add(cursorDefault);
		for (CursorType myC : CursorType.values()) {
			HTMLOptionElement cursorN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			cursorN.text = myC.name();
			cursorN.value = myC.name();
			cursor.add(cursorN);
		}

		for (PointerElement element : PointerElement.values()) {
			elements.add(element);
		}

		chart.getOptions().setResponsive(true);
		chart.getOptions().setMaintainAspectRatio(true);
		chart.getOptions().setAspectRatio(3);
		chart.getOptions().getLegend().setDisplay(true);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Setting cursors on line chart");
		chart.getOptions().getTooltips().setEnabled(false);

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

		chart.addHandler(new DatasetSelectionEventHandler() {

			@Override
			public void onSelect(DatasetSelectionEvent event) {
				IsChart chart = (IsChart) event.getSource();
				Labels labels = chart.getData().getLabels();
				List<Dataset> datasets = chart.getData().getDatasets();
				if (datasets != null && !datasets.isEmpty()) {
					StringBuilder sb = new StringBuilder();
					sb.append("Dataset index: ").append(event.getItem().getDatasetIndex()).append(" ");
					sb.append("Dataset label: ").append(datasets.get(event.getItem().getDatasetIndex()).getLabel()).append(" ");
					sb.append("Dataset data: ").append(datasets.get(event.getItem().getDatasetIndex()).getData().get(event.getItem().getIndex())).append(" ");
					sb.append("Index: ").append(event.getItem().getIndex()).append(" ");
					sb.append("Value: ").append(labels.getStrings(event.getItem().getIndex()).get(0));
					mylog.addLogEvent(sb.toString());
				}
			}

		}, DatasetSelectionEvent.TYPE);

		chart.addHandler(new TitleClickEventHandler() {

			@Override
			public void onClick(TitleClickEvent event) {
				IsChart chart = (IsChart) event.getSource();
				List<String> values = chart.getOptions().getTitle().getText();
				StringBuilder title = new StringBuilder();
				if (!values.isEmpty()) {
					for (String value : values) {
						title.append(value).append(" ");
					}
				}
				StringBuilder sb = new StringBuilder();
				sb.append("Title: ").append(title.toString());
				mylog.addLogEvent(sb.toString());
			}
		}, TitleClickEvent.TYPE);

		chart.addHandler(new AxisClickEventHandler() {

			@Override
			public void onClick(AxisClickEvent event) {
				mylog.addLogEvent("> Axis value: " + event.getValue().getLabel());
			}
		}, AxisClickEvent.TYPE);

		chart.getPlugins().add(ChartPointer.get());
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

		String cursorId = "cursor" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForCursor = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForCursor.htmlFor = cursorId;
		labelForCursor.appendChild(DomGlobal.document.createTextNode("Cursor  type "));
		actionsCol.appendChild(labelForCursor);

		cursor.id = cursorId;
		cursor.onchange = (p0) -> {
			handleCursor();
			return null;
		};
		cursor.className = "gwt-ListBox";
		cursor.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(cursor);

		configCheckBox(actionsCol, dataset, "Dataset ", "dataset");
		dataset.onclick = (p0) -> {
			handleElement();
			return null;
		};

		configCheckBox(actionsCol, legend, "Legend ", "legend");
		legend.onclick = (p0) -> {
			handleElement();
			return null;
		};

		configCheckBox(actionsCol, title, "Title ", "title");
		title.onclick = (p0) -> {
			handleElement();
			return null;
		};

		configCheckBox(actionsCol, axes, "Axes ", "axes");
		axes.onclick = (p0) -> {
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

		// ----------------------------------------------
		// Log element
		// ----------------------------------------------

		HTMLTableRowElement logRow = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		logRow.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(logRow);

		HTMLTableCellElement logCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		logCol.style.width = WidthUnionType.of("100%");
		logCol.style.textAlign = "center";
		logCol.vAlign = "top";
		logRow.appendChild(logCol);
		logCol.appendChild(mylog.getElement());
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

	protected void handleCursor() {
		String selected = cursor.options.getAt(cursor.selectedIndex).value;
		CursorType myC = CursorType.valueOf(selected);
		options.setCursorPointer(myC);
		chart.getOptions().getPlugins().setOptions(ChartPointer.ID, options);
		chart.reconfigure(UpdateConfigurationBuilder.create().setDuration(1000).build());
	}

	protected void handleElement() {
		checkElement(dataset, PointerElement.DATASET);
		checkElement(legend, PointerElement.LEGEND);
		checkElement(title, PointerElement.TITLE);
		checkElement(axes, PointerElement.AXES);
		options.setElements(elements.toArray(new PointerElement[0]));
		chart.getOptions().getPlugins().setOptions(ChartPointer.ID, options);
		chart.reconfigure(UpdateConfigurationBuilder.create().setDuration(1000).build());
	}

	private void checkElement(HTMLInputElement status, PointerElement element) {
		if (status.checked && !elements.contains(element)) {
			elements.add(element);
		} else if (!status.checked) {
			elements.remove(element);
		}
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
		checkBox.checked = true;
		checkBox.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(checkBox);
	}

}
