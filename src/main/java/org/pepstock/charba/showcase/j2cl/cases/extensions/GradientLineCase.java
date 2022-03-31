package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.List;

import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.CartesianCategoryAxis;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.Labels;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.AxisKind;
import org.pepstock.charba.client.enums.InteractionMode;
import org.pepstock.charba.client.gradient.Colors;
import org.pepstock.charba.client.gradient.GradientOptions;
import org.pepstock.charba.client.gradient.PropertyOptions;
import org.pepstock.charba.client.impl.plugins.enums.TableauScheme;
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

public class GradientLineCase extends BaseComposite {
	
	private static final int MIN = -100;
	
	private static final int MAX = 100;
	
	private static final List<IsColor> COLORS = TableauScheme.JEWEL_BRIGHT9.getColors();

	private final HTMLInputElement fill = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();
	
	private LineDataset dataset1;

	public GradientLineCase() {
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
		chart.getOptions().setMaintainAspectRatio(true);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Using GRADIENT plugin on cartesian linear axis");
		chart.getOptions().getTooltips().setMode(InteractionMode.INDEX);
		chart.getOptions().getTooltips().setIntersect(false);

		List<Dataset> datasets = chart.getData().getDatasets(true);

		dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		dataset1.setFill(true);
		dataset1.setBorderWidth(0);
		
		double[] values = getRandomDigits(months, MIN, MAX);
		List<Double> data = dataset1.getData(true);
		for (int i = 0; i < values.length; i++) {
			data.add(values[i]);
		}
		datasets.add(dataset1);

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
		
		GradientOptions options = new GradientOptions();
		PropertyOptions propOptions = options.getBackgroundColor();
		propOptions.setAxis(AxisKind.Y);
		Colors stopColors = propOptions.getColors();
		int index = 0;
		for (int i = MIN; i<MAX; i++) {
			if (i % 30 == 0) {
				stopColors.setColor(i, COLORS.get(index));
				index++;
			}
		}

		Labels labels = chart.getData().getLabels();
		PropertyOptions prop1Options = options.getBorderColor();
		prop1Options.setAxis(AxisKind.X);
		Colors stop1Colors = prop1Options.getColors();
		for (int i=0; i<labels.size(); i++) {
			stop1Colors.setColor(i * 1.5, GoogleChartColor.values()[i]);
		}
		dataset1.setOptions(options);

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

		HTMLButtonElement addData = (HTMLButtonElement) DomGlobal.document.createElement("button");
		addData.onclick = (p0) -> {
			addData(chart, false);
			return null;
		};
		addData.className = "gwt-Button";
		addData.textContent = "Add data";
		addData.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(addData);

		HTMLButtonElement removeData = (HTMLButtonElement) DomGlobal.document.createElement("button");
		removeData.onclick = (p0) -> {
			removeData(chart);
			return null;
		};
		removeData.className = "gwt-Button";
		removeData.textContent = "Remove data";
		removeData.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(removeData);
		
		configCheckBox(actionsCol, fill, "Fill", "fill");
		fill.onclick = (p0) -> {
			handleOutside();
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
			dataset.setData(getRandomDigits(months, MIN, MAX));
		}
		chart.update();
	}
	
	protected void handleOutside() {
		if (fill.checked) {
			dataset1.setFill(true);
			dataset1.setBorderWidth(0);
		} else {
			dataset1.setFill(false);
			dataset1.setBorderWidth(5);
		}
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
		checkBox.checked = true;
		checkBox.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(checkBox);
	}

}
