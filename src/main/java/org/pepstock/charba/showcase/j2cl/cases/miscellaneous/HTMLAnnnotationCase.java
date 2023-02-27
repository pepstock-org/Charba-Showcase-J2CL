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
import org.pepstock.charba.client.enums.AxisPosition;
import org.pepstock.charba.client.enums.DefaultScaleId;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.DefaultInteractionMode;
import org.pepstock.charba.client.enums.Position;
import org.pepstock.charba.client.items.ChartAreaNode;
import org.pepstock.charba.client.items.ScaleItem;
import org.pepstock.charba.client.plugins.AbstractPlugin;
import org.pepstock.charba.client.utils.AnnotationBuilder;
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

	private static final String SUN_BASE64 = " data:image/png;base64,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";

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
		chart.getOptions().getTooltips().setMode(DefaultInteractionMode.INDEX);
		chart.getOptions().getTooltips().setIntersect(true);
		chart.getOptions().getLayout().getPadding().setBottom(200);

		CartesianLinearAxis axis1 = new CartesianLinearAxis(chart,"y-axis-1");
		axis1.setPosition(AxisPosition.LEFT);
		axis1.setDisplay(true);
		axis1.setBeginAtZero(true);
		axis1.getTitle().setDisplay(true);
		axis1.getTitle().setText("Percentage");

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart, "y-axis-2");
		axis2.setPosition(AxisPosition.RIGHT);
		axis2.setDisplay(true);
		axis2.setBeginAtZero(true);
		axis2.getGrid().setDrawOnChartArea(false);
		axis2.getTitle().setDisplay(true);
		axis2.getTitle().setText("Degrees");

		chart.getOptions().getScales().setAxes(axis1, axis2);

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
		
		chart.getPlugins().add(new AbstractPlugin("raster") {

			private final static String ANNOTATION_TEMPLATE = "<center>" + "<table width=\"100%\" height=\"100%\" style=\"background-color: lightGray;\">" + "<tr><th><img src=\"{0}\"></img></th></tr>"
					+ "<tr align=\"center\"><td>Temperature</td><td>{1}</td></tr>" + "<tr align=\"center\"><td>Humidity</td><td>{2}</td></tr></table></center>";

			@Override
			public void onAfterDraw(IsChart chart) {
				final Context2dItem ctx = chart.getCanvas().getContext2d();

				ChartNode node = chart.getNode();
				ChartAreaNode chartArea = node.getChartArea();

				ScaleItem scaleItem = node.getScales().getItems().get(DefaultScaleId.X.value());

				double topRaster = chartArea.getBottom() + scaleItem.getHeight();
				double heightRaster = chart.getCanvas().getOffsetHeight() - topRaster - 5;

				int areaCount = scaleItem.getTicks().size();
				double scaleTickX = chartArea.getLeft();
				double scaleTickLength = (double) scaleItem.getWidth() / (double) areaCount;

				for (int i = 0; i < areaCount; i++) {
					double humidity = dataset1.getData().get(i);
					double temperature = dataset2.getData().get(i);

					String result = ANNOTATION_TEMPLATE;
					result = result.replaceAll("\\{0\\}", SUN_BASE64);
					result = result.replaceAll("\\{1\\}", String.valueOf(temperature));
					result = result.replaceAll("\\{2\\}", String.valueOf(humidity));

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
