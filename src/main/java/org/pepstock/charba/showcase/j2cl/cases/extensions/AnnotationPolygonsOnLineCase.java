package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.List;

import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.annotation.AnnotationOptions;
import org.pepstock.charba.client.annotation.AnnotationPlugin;
import org.pepstock.charba.client.annotation.LabelAnnotation;
import org.pepstock.charba.client.annotation.PolygonAnnotation;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.DefaultScaleId;
import org.pepstock.charba.client.enums.JoinStyle;
import org.pepstock.charba.client.enums.Position;
import org.pepstock.charba.client.enums.Weight;
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

public class AnnotationPolygonsOnLineCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	public AnnotationPolygonsOnLineCase() {
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
		super.months = 12;

		chart.getOptions().setResponsive(true);
		chart.getOptions().getLegend().setPosition(Position.TOP);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Polygon annotations on line chart");

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
		
		PolygonAnnotation point1 = new PolygonAnnotation();
		point1.setXScaleID(DefaultScaleId.X);
		point1.setYScaleID(DefaultScaleId.Y);
		point1.setXValue("March");
		point1.setYValue(30);
		point1.setRadius(40);
		point1.setRotation(180);
		point1.setBackgroundColor(HtmlColor.WHITE);
		point1.setBorderWidth(7);
		point1.setBorderJoinStyle(JoinStyle.ROUND);
		point1.setBorderColor(HtmlColor.RED);

		PolygonAnnotation point2 = new PolygonAnnotation();
		point2.setXScaleID(DefaultScaleId.X);
		point2.setYScaleID(DefaultScaleId.Y);
		point2.setXValue(5.5);
		point2.setYValue(70);
		point2.setRadius(40);
		point2.setBackgroundColor(HtmlColor.WHITE);
		point2.setBorderWidth(7);
		point2.setBorderJoinStyle(JoinStyle.ROUND);
		point2.setBorderColor(HtmlColor.RED);
		
		LabelAnnotation label2 = new LabelAnnotation();
		label2.setXScaleID(DefaultScaleId.X);
		label2.setYScaleID(DefaultScaleId.Y);
		label2.setXValue(5.5);
		label2.setYValue(70);
		label2.setContent("!");
		label2.getFont().setSize(40);
		label2.getFont().setFamily("Arial");
		label2.getFont().setWeight(Weight.BOLD);
		label2.setColor(HtmlColor.BLACK);

		PolygonAnnotation point3 = new PolygonAnnotation();
		point3.setXScaleID(DefaultScaleId.X);
		point3.setYScaleID(DefaultScaleId.Y);
		point3.setXValue("October");
		point3.setYValue(45);
		point3.setRadius(40);
		point3.setSides(8);
		point3.setRotation(22.5);
		point3.setBackgroundColor(HtmlColor.RED);
		point3.setBorderWidth(4);
		point3.setBorderColor(HtmlColor.WHITE);
		
		LabelAnnotation label3 = new LabelAnnotation();
		label3.setXScaleID(DefaultScaleId.X);
		label3.setYScaleID(DefaultScaleId.Y);
		label3.setXValue("October");
		label3.setYValue(45);
		label3.setContent("STOP");
		label3.getFont().setSize(24);
		label3.getFont().setFamily("Arial");
		label3.setColor(HtmlColor.WHITE);

		options.setAnnotations(point1, point2, label2, point3, label3);

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
			dataset.setData(getRandomDigits(months, 0, 100));
		}
		chart.update();
	}

}
