package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.List;

import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.annotation.AnnotationOptions;
import org.pepstock.charba.client.annotation.AnnotationPlugin;
import org.pepstock.charba.client.annotation.PointAnnotation;
import org.pepstock.charba.client.annotation.enums.DrawTime;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.GwtMaterialColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.DefaultScaleId;
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

public class AnnotationPointsOnLineCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	public AnnotationPointsOnLineCase() {
		super.months = 12;

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
		chart.getOptions().getTitle().setText("Point annotations on line chart");

		LineDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		IsColor color1 = GoogleChartColor.values()[0];

		dataset1.setBackgroundColor(color1.toHex());
		dataset1.setBorderColor(color1.toHex());
		dataset1.setFill(false);
		double[] values = getRandomDigits(months, 0, 100);
		List<Double> data = dataset1.getData(true);
		for (int i = 0; i < values.length; i++) {
			data.add(values[i]);
		}

		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset1);

		AnnotationOptions options = new AnnotationOptions();

		PointAnnotation point1 = new PointAnnotation();
		point1.setDrawTime(DrawTime.AFTER_DATASETS_DRAW);
		point1.setXValue("February");
		point1.setXScaleID(DefaultScaleId.X);
		point1.setYScaleID(DefaultScaleId.Y);
		point1.setYValue(50);
		point1.setRadius(10);
		point1.setBackgroundColor(GwtMaterialColor.YELLOW_LIGHTEN_3.alpha(0.3D));
		point1.setBorderWidth(2);
		point1.setBorderColor(GwtMaterialColor.YELLOW_LIGHTEN_3.darker());

		PointAnnotation point2 = new PointAnnotation();
		point2.setDrawTime(DrawTime.AFTER_DATASETS_DRAW);
		point2.setXScaleID(DefaultScaleId.X);
		point2.setYScaleID(DefaultScaleId.Y);
		point2.setXValue("April");
		point2.setYValue(20);
		point2.setRadius(25);
		point2.setBackgroundColor(GwtMaterialColor.BROWN_LIGHTEN_3.alpha(0.3D));
		point2.setBorderWidth(3);
		point2.setBorderColor(GwtMaterialColor.BROWN_LIGHTEN_3.darker());

		PointAnnotation point3 = new PointAnnotation();
		point3.setDrawTime(DrawTime.AFTER_DATASETS_DRAW);
		point3.setXScaleID(DefaultScaleId.X);
		point3.setYScaleID(DefaultScaleId.Y);
		point3.setXValue("July");
		point3.setYValue(30);
		point3.setRadius(15);
		point3.setBackgroundColor(GwtMaterialColor.GREEN_LIGHTEN_3.alpha(0.3D));
		point3.setBorderWidth(4);
		point3.setBorderColor(GwtMaterialColor.GREEN_LIGHTEN_3.darker());

		PointAnnotation point4 = new PointAnnotation();
		point4.setXScaleID(DefaultScaleId.X);
		point4.setYScaleID(DefaultScaleId.Y);
		point4.setDrawTime(DrawTime.AFTER_DATASETS_DRAW);
		point4.setXValue("November");
		point4.setYValue(60);
		point4.setRadius(25);
		point4.setBackgroundColor(GwtMaterialColor.INDIGO_LIGHTEN_3.alpha(0.3D));
		point4.setBorderWidth(5);
		point4.setBorderColor(GwtMaterialColor.INDIGO_LIGHTEN_3.darker());

		options.setAnnotations(point1, point2, point3, point4);

		chart.getOptions().getPlugins().setOptions(AnnotationPlugin.ID, options);
		
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
			dataset.setData(getRandomDigits(months));
		}
		chart.update();
	}

	protected void handleAddDataset() {
		List<Dataset> datasets = chart.getData().getDatasets();
		LineDataset dataset = chart.newDataset();
		dataset.setLabel("dataset " + (datasets.size() + 1));
		IsColor color = GoogleChartColor.values()[datasets.size()];
		dataset.setBackgroundColor(color.toHex());
		dataset.setBorderColor(color.toHex());
		dataset.setData(getRandomDigits(months));
		dataset.setFill(false);
		datasets.add(dataset);
		chart.update();
	}

	protected void handleRemoveDataset() {
		removeDataset(chart);
	}

}
