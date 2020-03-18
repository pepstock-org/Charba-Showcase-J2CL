package org.pepstock.charba.showcase.j2cl.cases.miscellaneous;

import org.pepstock.charba.client.BarChart;
import org.pepstock.charba.client.ChartNode;
import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.BarDataset;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.dom.elements.Context2dItem;
import org.pepstock.charba.client.dom.elements.Img;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.InteractionMode;
import org.pepstock.charba.client.enums.Position;
import org.pepstock.charba.client.items.ChartAreaNode;
import org.pepstock.charba.client.items.ScaleItem;
import org.pepstock.charba.client.options.Scales;
import org.pepstock.charba.client.plugins.AbstractPlugin;
import org.pepstock.charba.client.utils.AnnotationBuilder;
import org.pepstock.charba.client.utils.Window;
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

public class HTMLAnnnotationCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final BarChart chart = new BarChart();

	public HTMLAnnnotationCase() {
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
		chart.getOptions().getTitle().setText("HTML annotation on bar chart");
		chart.getOptions().getTooltips().setMode(InteractionMode.INDEX);
		chart.getOptions().getTooltips().setIntersect(true);
		chart.getOptions().getLayout().getPadding().setBottom(200);

		CartesianLinearAxis axis1 = new CartesianLinearAxis(chart);
		axis1.setId("y-axis-1");
		axis1.setPosition(Position.LEFT);
		axis1.setDisplay(true);
		axis1.getTicks().setBeginAtZero(true);
		axis1.getScaleLabel().setDisplay(true);
		axis1.getScaleLabel().setLabelString("Percentage");

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setId("y-axis-2");
		axis2.setPosition(Position.RIGHT);
		axis2.setDisplay(true);
		axis2.getTicks().setBeginAtZero(true);
		axis2.getGrideLines().setDrawOnChartArea(false);
		axis2.getScaleLabel().setDisplay(true);
		axis2.getScaleLabel().setLabelString("Degrees");

		chart.getOptions().getScales().setYAxes(axis1, axis2);

		final BarDataset dataset1 = chart.newDataset();
		dataset1.setLabel("Humidity");

		dataset1.setData(getRandomDigits(months, 0, 100));
		dataset1.setYAxisID("y-axis-1");

		final LineDataset dataset2 = new LineDataset();
		dataset2.setLabel("Temperature");

		dataset2.setBackgroundColor(HtmlColor.BLUE);
		dataset2.setBorderColor(HtmlColor.BLUE);
		dataset2.setData(getRandomDigits(months, 0, 35));
		dataset2.setFill(Fill.FALSE);
		dataset2.setYAxisID("y-axis-2");

		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset1, dataset2);

		chart.getPlugins().add(new AbstractPlugin() {

			private final static String ANNOTATION_TEMPLATE = "<center>" + 
					"<table width=\"100%\" height=\"100%\" style=\"background-color: lightGray;\">" + 
					"<tr><th><img src=\"images/weather-sun.png\"></img></th></tr>" + 
					"<tr align=\"center\"><td>Temperature</td><td>{0}</td></tr>" + 
					"<tr align=\"center\"><td>Humidity</td><td>{1}</td></tr></table></center>";

			@Override
			public String getId() {
				return "raster";
			}

			@Override
			public void onAfterDraw(IsChart chart, double easing) {
				final Context2dItem ctx = chart.getCanvas().getContext2d();

				ChartNode node = chart.getNode();
				ChartAreaNode chartArea = node.getChartArea();

				ScaleItem scaleItem = node.getScales().getItems().get(Scales.DEFAULT_X_AXIS_ID);

				double topRaster = chartArea.getBottom() + scaleItem.getHeight();
				double heightRaster = chart.getCanvas().getOffsetHeight() - topRaster - 5;

				int areaCount = scaleItem.getTicks().size();
				double scaleTickX = chartArea.getLeft();
				double scaleTickLength = (double) scaleItem.getWidth() / (double) areaCount;

				for (int i = 0; i < areaCount; i++) {
					double humidity = dataset1.getData().get(i);
					double temperature = dataset2.getData().get(i);

					String result = ANNOTATION_TEMPLATE;
					result = result.replaceAll("\\{0\\}", String.valueOf(temperature));
					result = result.replaceAll("\\{1\\}", String.valueOf(humidity));
					Window.getConsole().log(result);

					Img img = AnnotationBuilder.build(result, scaleTickLength - 4, heightRaster);
					ctx.drawImage(img, scaleTickX + 2, topRaster);

					scaleTickX = scaleTickX + scaleTickLength;
				}
			}

		});

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
		actionsCol.setAttribute("colspan", "2");
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
			if (dataset instanceof LineDataset) {
				dataset.setData(getRandomDigits(months, 0, 35));
			} else {
				dataset.setData(getRandomDigits(months, 0, 100));
			}
		}
		chart.update();
	}
}
