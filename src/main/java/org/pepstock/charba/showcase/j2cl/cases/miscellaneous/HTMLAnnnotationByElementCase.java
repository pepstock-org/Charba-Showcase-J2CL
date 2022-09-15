package org.pepstock.charba.showcase.j2cl.cases.miscellaneous;

import org.pepstock.charba.client.BarChart;
import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.BarDataset;
import org.pepstock.charba.client.dom.elements.Context2dItem;
import org.pepstock.charba.client.dom.elements.Img;
import org.pepstock.charba.client.enums.AxisPosition;
import org.pepstock.charba.client.enums.InteractionMode;
import org.pepstock.charba.client.items.BarElement;
import org.pepstock.charba.client.items.DatasetItem;
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

public class HTMLAnnnotationByElementCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final BarChart chart = new BarChart();

	private BarDataset dataset;

	public HTMLAnnnotationByElementCase() {
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
		chart.getOptions().getLegend().setDisplay(false);
		chart.getOptions().getTitle().setDisplay(false);
		chart.getOptions().getTitle().setText("HTML annotation by HTML element on bar chart");
		chart.getOptions().getTooltips().setMode(InteractionMode.INDEX);
		chart.getOptions().getTooltips().setIntersect(true);
		chart.getOptions().getLayout().getPadding().setTop(100);

		CartesianLinearAxis axis1 = new CartesianLinearAxis(chart);
		axis1.setPosition(AxisPosition.LEFT);
		axis1.setDisplay(true);
		axis1.setBeginAtZero(true);
		axis1.getTitle().setDisplay(true);
		axis1.getTitle().setText("Percentage");

		chart.getOptions().getScales().setAxes(axis1);

		dataset = chart.newDataset();
		dataset.setLabel("Humidity");

		dataset.setData(getRandomDigits(months, 0, 75));

		IsColor[] colors = new IsColor[months];
		for (int i = 0; i < months; i++) {
			if (i == 3) {
				dataset.getData().set(3, getRandomDigits(1, 85, 100)[0]);
				colors[i] = HtmlColor.RED;
			} else {
				colors[i] = HtmlColor.TURQUOISE;
			}
		}
		dataset.setBackgroundColor(colors);

		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset);

		chart.getPlugins().add(new AbstractPlugin("raster") {

			private static final String ANNOTATION = "<div style=\"border: 1px solid; border-color: rgba(255, 29, 29); padding: 6px; -moz-border-radius: 4px; -webkit-border-radius: 4px; border-radius: 4px; background: rgba(255, 137, 137); color: black; -webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.2); box-shadow: 0 2px 4px rgba(0,0,0,0.2);\">"
					+ "			  <div class=\"popupContent\">" + "			    <table cellspacing=\"2\" cellpadding=\"0\">" + "				  <tbody>" + "				    <tr>"
					+ "					  <td style=\"vertical-align: top;\" align=\"left\">" + "					    <div style=\"font-size: 16px; font-weight: bold;\">Issue 26</div>" + "					  </td>" + "					</tr>"
					+ "					<tr>" + "					  <td style=\"vertical-align: top;\" align=\"left\">" + "					    <div>This is a description of issue 26</div>" + "				      </td>" + "					</tr>"
					+ "			      </tbody>" + "				</table>" + "			  </div>" + "			</div>";

			@Override
			public void onAfterDraw(IsChart chart) {
				final Context2dItem ctx = chart.getCanvas().getContext2d();

				DatasetItem item = chart.getDatasetItem(0);
				BarElement elem = (BarElement) item.getElements().get(3);

				Img img = AnnotationBuilder.build(ANNOTATION, 300, 64);

				double x = elem.getX() - (elem.getWidth() / 2);
				double y = elem.getY() - img.getHeight() - 10;

				ctx.drawImage(img, x, y);
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
		dataset.setData(getRandomDigits(months, 0, 75));
		IsColor[] colors = new IsColor[months];
		for (int i = 0; i < months; i++) {
			if (i == 3) {
				dataset.getData().set(3, getRandomDigits(1, 85, 100)[0]);
				colors[i] = HtmlColor.RED;
			} else {
				colors[i] = HtmlColor.TURQUOISE;
			}
		}
		dataset.setBackgroundColor(colors);
		chart.update();
	}
}
