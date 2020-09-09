package org.pepstock.charba.showcase.j2cl.cases.miscellaneous;

import java.util.List;

import org.pepstock.charba.client.HorizontalBarChart;
import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.CartesianCategoryAxis;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.HorizontalBarDataset;
import org.pepstock.charba.client.dom.elements.CastHelper;
import org.pepstock.charba.client.dom.elements.Context2dItem;
import org.pepstock.charba.client.dom.elements.Img;
import org.pepstock.charba.client.enums.AxisKind;
import org.pepstock.charba.client.enums.DefaultScaleId;
import org.pepstock.charba.client.enums.Position;
import org.pepstock.charba.client.items.ScaleItem;
import org.pepstock.charba.client.items.ScaleTickItem;
import org.pepstock.charba.client.items.SizeItem;
import org.pepstock.charba.client.plugins.AbstractPlugin;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.commons.Images;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class FlagsPluginOnBarCase extends BaseComposite {

	private static final String[] COUNTRIES = { "br", "de", "fr", "gb", "it", "us" };

	private final HTMLTableElement mainPanel;

	private final HorizontalBarChart chart = new HorizontalBarChart();

	private CartesianCategoryAxis axis;

	private static final int MIN = 50;

	private static final int MAX = 100;

	private static final int PERCENT = 10;

	public FlagsPluginOnBarCase() {
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
		chart.getOptions().getLegend().setPosition(Position.RIGHT);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Flags plugin on bar chart");

		HorizontalBarDataset dataset1 = chart.newDataset();
		dataset1.setLabel("Countries");

		IsColor color1 = GoogleChartColor.values()[0];

		dataset1.setBackgroundColor(color1.alpha(0.2));
		dataset1.setBorderColor(color1.toHex());
		dataset1.setBorderWidth(1);
		dataset1.setData(getRandomDigits(COUNTRIES.length, false));

		axis = new CartesianCategoryAxis(chart, AxisKind.Y);
		axis.setDisplay(true);
		axis.getScaleLabel().setDisplay(true);

		chart.getData().setLabels(COUNTRIES);
		chart.getData().setDatasets(dataset1);

		chart.getOptions().getScales().setAxes(axis);

		AbstractPlugin p = new AbstractPlugin() {

			@Override
			public String getId() {
				return "flagsplugin";
			}

			@Override
			public void onAfterDatasetsDraw(IsChart chart) {
				final int padding = 4;
				Context2dItem ctx = chart.getCanvas().getContext2d();
				ScaleItem scale = chart.getNode().getScales().getItems().get(DefaultScaleId.Y.value());
				List<ScaleTickItem> ticks = scale.getTicks();
				double heightAmongLabels = (scale.getBottom() - scale.getTop()) / ticks.size();
				final double height = Math.min(heightAmongLabels - (padding * 2), MIN);
				final double width = Math.min(60 * height / 40, axis.getScaleLabel().getPadding().getTop() - padding);
				double x = scale.getLeft() + axis.getScaleLabel().getPadding().getTop() - width + axis.getScaleLabel().getFont().getSize();
				double y = scale.getTop();
				for (ScaleTickItem tick : ticks) {
					Img image = null;
					if (tick.getLabel().equalsIgnoreCase("br")) {
						image = getImageElement(Images.get().flagBR);
					} else if (tick.getLabel().equalsIgnoreCase("de")) {
						image = getImageElement(Images.get().flagDE);
					} else if (tick.getLabel().equalsIgnoreCase("fr")) {
						image = getImageElement(Images.get().flagFR);
					} else if (tick.getLabel().equalsIgnoreCase("gb")) {
						image = getImageElement(Images.get().flagGB);
					} else if (tick.getLabel().equalsIgnoreCase("it")) {
						image = getImageElement(Images.get().flagIT);
					} else if (tick.getLabel().equalsIgnoreCase("us")) {
						image = getImageElement(Images.get().flagUS);
					}

					if (image != null) {
						double yToDraw = y + (heightAmongLabels - height) / 2;
						ctx.drawImage(image, x, yToDraw, width, height);
					}
					y = y + heightAmongLabels;
				}
			}
			
			@Override
			public void onResize(IsChart chart, SizeItem size) {
				double width = size.getWidth();
				calculateAndSetScaleLabelPadding(width);
			}

		};
		chart.getPlugins().add(p);
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

	private Img getImageElement(HTMLImageElement resource) {
		return CastHelper.toImg(resource);
	}

	protected void handleRandomize() {
		for (Dataset dataset : chart.getData().getDatasets()) {
			dataset.setData(getRandomDigits(months));
		}
		chart.update();
	}

	private void calculateAndSetScaleLabelPadding(double width) {
		double percent = width * PERCENT / 100D;
		int padding = (int)Math.min(Math.max(MIN, percent), MAX);
		axis.getScaleLabel().getPadding().setTop(padding);
	}
}
