package org.pepstock.charba.showcase.j2cl.cases.plugins;

import java.util.LinkedList;
import java.util.List;

import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.configuration.CartesianCategoryAxis;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.AxisKind;
import org.pepstock.charba.client.enums.AxisPosition;
import org.pepstock.charba.client.impl.plugins.Crosshair;
import org.pepstock.charba.client.impl.plugins.CrosshairOptions;
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

public class CrosshairStackedAxesCase extends BaseComposite {

	private static final String[] VALUES = {"ON", "OFF"}; 

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	private final HTMLInputElement upperScale = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final LineDataset dataset1; 

	private final LineDataset dataset2;
	
	private final CartesianLinearAxis axis1;
	
	private final CartesianCategoryAxis axis2;

	public CrosshairStackedAxesCase() {
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
		chart.getOptions().getTitle().setText("Crosshair on stacked axes");

		axis1 = new CartesianLinearAxis(chart, "y-axis-1");
		axis1.setDisplay(true);
		axis1.setPosition(AxisPosition.LEFT);
		axis1.setStack("myStack");
		axis1.setStackWeight(2);
		axis1.setMin(0);
		axis1.setMax(100);
		axis1.getBorder().setColor(HtmlColor.RED);
		axis1.getBorder().setWidth(3);
		axis1.getGrid().setZ(-1);
		
		axis2 = new CartesianCategoryAxis(chart, "y-axis-2", AxisKind.Y);
		axis2.setDisplay(true);
		axis2.setLabels(VALUES);
		axis2.setPosition(AxisPosition.LEFT);
		axis2.setOffset(true);
		axis2.setStack("myStack");
		axis2.setStackWeight(1);
		axis2.getBorder().setColor(HtmlColor.BLUE);
		axis2.getBorder().setWidth(3);
		axis2.getGrid().setZ(-1);

		chart.getOptions().getScales().setAxes(axis1, axis2);

		dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		dataset1.setBorderColor(HtmlColor.ORANGE_RED);
		dataset1.setPointBackgroundColor(HtmlColor.ORANGE_RED);
		dataset1.setData(getRandomDigits(months, 0, 100));
		dataset1.setYAxisID("y-axis-1");

		dataset2 = chart.newDataset();
		dataset2.setLabel("dataset 2");

		dataset2.setBorderColor(HtmlColor.CORNFLOWER_BLUE);
		dataset2.setPointBackgroundColor(HtmlColor.CORNFLOWER_BLUE);
		dataset2.setDataString(getRandomData());
		dataset2.setYAxisID("y-axis-2");
		dataset2.setStepped(true);
		
		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset1, dataset2);

		CrosshairOptions options = new CrosshairOptions(); 
		options.setYScaleID(axis1.getId());
		chart.getOptions().getPlugins().setOptions(Crosshair.ID, options);
		
		chart.getPlugins().add(Crosshair.get());

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

		configCheckBox(actionsCol, upperScale, "UpperScale ", "upperScale");
		upperScale.onclick = (p0) -> {
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

	}

	@Override
	public HTMLElement getElement() {
		return mainPanel;
	}

	protected void handleElement() {
		CrosshairOptions options = chart.getOptions().getPlugins().getOptions(Crosshair.ID, Crosshair.FACTORY);
		options.setYScaleID(upperScale.checked  ? axis2.getId() : axis1.getId());
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
		checkBox.checked = false;
		checkBox.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(checkBox);
	}

	private List<String> getRandomData(){
		List<String> result = new LinkedList<>();
		for (int i=0;i<months; i++) {
			int index = Math.random() <= 0.5 ? 0 : 1;
			result.add(VALUES[index]);
		}
		return result;
	}

}
