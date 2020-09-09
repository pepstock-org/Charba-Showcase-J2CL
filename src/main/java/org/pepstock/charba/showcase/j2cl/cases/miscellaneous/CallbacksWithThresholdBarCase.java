package org.pepstock.charba.showcase.j2cl.cases.miscellaneous;

import org.pepstock.charba.client.BarChart;
import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.callbacks.BackgroundColorCallback;
import org.pepstock.charba.client.callbacks.BorderColorCallback;
import org.pepstock.charba.client.callbacks.ScriptableContext;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.BarBorderWidth;
import org.pepstock.charba.client.data.BarDataset;
import org.pepstock.charba.client.data.Dataset;
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

public class CallbacksWithThresholdBarCase extends BaseComposite {

	private static final IsColor INFO_COLOR = HtmlColor.GREEN;

	private static final double WARNING = 60D;

	private static final IsColor WARNING_COLOR = HtmlColor.ORANGE;

	private static final double ERROR = 85D;

	private static final IsColor ERROR_COLOR = HtmlColor.RED;

	private final HTMLTableElement mainPanel;

	private final BarChart chart = new BarChart();

	public CallbacksWithThresholdBarCase() {
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
		chart.getOptions().getTitle().setText("Callbacks on bar chart dataset");

		BarDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		BarBorderWidth border = new BarBorderWidth();
		border.setTop(2);
		border.setLeft(2);
		border.setRight(2);
		dataset1.setBorderWidth(border);

		dataset1.setBackgroundColor(new BackgroundColorCallback() {

			@Override
			public IsColor invoke(IsChart chart, ScriptableContext context) {
				Dataset dataset = chart.getData().getDatasets().get(context.getDatasetIndex());
				Double value = dataset.getData().get(context.getIndex());
				if (value >= ERROR) {
					return ERROR_COLOR.alpha(0.2D);
				} else if (value >= WARNING) {
					return WARNING_COLOR.alpha(0.2D);
				}
				return INFO_COLOR.alpha(0.2D);
			}

		});
		dataset1.setBorderColor(new BorderColorCallback() {

			@Override
			public IsColor invoke(IsChart chart, ScriptableContext context) {
				Dataset dataset = chart.getData().getDatasets().get(context.getDatasetIndex());
				Double value = dataset.getData().get(context.getIndex());
				if (value >= ERROR) {
					return ERROR_COLOR;
				} else if (value >= WARNING) {
					return WARNING_COLOR;
				}
				return INFO_COLOR;
			}

		});
		dataset1.setData(getRandomDigits(months, 0, 100));

		CartesianLinearAxis axis = new CartesianLinearAxis(chart);
		axis.setMax(100);
		axis.setMin(0);
		axis.setBeginAtZero(true);

		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset1);

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
