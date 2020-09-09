package org.pepstock.charba.showcase.j2cl.cases.plugins;

import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import org.pepstock.charba.client.TimeSeriesLineChart;
import org.pepstock.charba.client.adapters.DateAdapter;
import org.pepstock.charba.client.callbacks.TimeTickCallback;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.Axis;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.configuration.CartesianTimeAxis;
import org.pepstock.charba.client.data.TimeSeriesItem;
import org.pepstock.charba.client.data.TimeSeriesLineDataset;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.TickSource;
import org.pepstock.charba.client.enums.TimeUnit;
import org.pepstock.charba.client.events.DatasetRangeSelectionEvent;
import org.pepstock.charba.client.events.DatasetRangeSelectionEventHandler;
import org.pepstock.charba.client.impl.plugins.DatasetsItemsSelector;
import org.pepstock.charba.client.impl.plugins.DatasetsItemsSelectorOptions;
import org.pepstock.charba.client.items.ScaleTickItem;
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

public class DatasetItemsSelectorDrillingDownCase extends BaseComposite {

	private static final long MINUTE = 1000 * 60;

	private static final long HOUR = MINUTE * 60;

	private static final int AMOUNT_OF_POINTS = 6 * 24;

	private final HTMLTableElement mainPanel;

	private final TimeSeriesLineChart chart = new TimeSeriesLineChart();

	private final HTMLButtonElement reset = (HTMLButtonElement) DomGlobal.document.createElement("button");

	private TimeSeriesLineDataset dataset;

	private CartesianTimeAxis axis;

	private final DatasetsItemsSelector plugin = DatasetsItemsSelector.get();

	private DatasetsItemsSelectorOptions pOptions = new DatasetsItemsSelectorOptions();

	private final DateAdapter adapter = new DateAdapter();

	public DatasetItemsSelectorDrillingDownCase() {
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

		reset.disabled = true;

		chart.getOptions().setResponsive(true);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Drilling down into dataset data on timeseries line chart");

		dataset = chart.newDataset();

		dataset.setLabel("dataset 1");
		dataset.setFill(Fill.FALSE);

		IsColor color1 = GoogleChartColor.values()[0];

		dataset.setBackgroundColor(color1.toHex());
		dataset.setBorderColor(color1.toHex());

		@SuppressWarnings("deprecation")
		Date myDate = new Date(119, 11, 1, 0, 0);
		long time = myDate.getTime();

		double[] xs1 = getRandomDigits(AMOUNT_OF_POINTS, false);
		List<TimeSeriesItem> data = new LinkedList<>();

		time = time + HOUR * AMOUNT_OF_POINTS;
		for (int i = AMOUNT_OF_POINTS - 1; i >= 0; i--) {
			data.add(new TimeSeriesItem(new Date(time), xs1[i]));
			time = time - HOUR;
		}
		dataset.setTimeSeriesData(data);

		axis = chart.getOptions().getScales().getTimeAxis();
		axis.getTime().setUnit(TimeUnit.DAY);
		axis.getTime().setStepSize(1);
		axis.getTicks().setSource(TickSource.DATA);
		axis.getTicks().setCallback(new TimeTickCallback() {

			@SuppressWarnings("deprecation")
			@Override
			public String onCallback(Axis axis, Date value, String label, int index, List<ScaleTickItem> values) {
				boolean toPrintDate = index == 0 || index == (values.size() - 1);
				if (!reset.disabled) {
					if (toPrintDate) {
						return adapter.format(value, TimeUnit.DAY);
					} else if (value.getHours() == 0 && value.getMinutes() == 0) {
						return adapter.format(value, TimeUnit.DAY);
					} else {
						return adapter.format(value, TimeUnit.HOUR);
					}
				} else if (toPrintDate || value.getHours() == 0) {
					return adapter.format(value, TimeUnit.DAY);
				} else if (value.getHours() == 12) {
					return adapter.format(value, TimeUnit.HOUR);
				}
				return "";
			}
		});

		CartesianLinearAxis axis2 = chart.getOptions().getScales().getLinearAxis();
		axis2.setDisplay(true);
		axis2.setBeginAtZero(true);

		chart.getData().setDatasets(dataset);

		pOptions.setBorderWidth(2);
		pOptions.setBorderDash(6, 3, 6);
		pOptions.setBorderColor(HtmlColor.GREY);
		pOptions.setColor(HtmlColor.LIGHT_GOLDEN_ROD_YELLOW.alpha(DatasetsItemsSelectorOptions.DEFAULT_ALPHA));
		pOptions.setFireEventOnClearSelection(false);

		chart.getOptions().getPlugins().setOptions(DatasetsItemsSelector.ID, pOptions);
		chart.getPlugins().add(plugin);

		chart.addHandler(new DatasetRangeSelectionEventHandler() {

			@Override
			public void onSelect(DatasetRangeSelectionEvent event) {
				if (reset.disabled) {
					reset.disabled = false;
					dataset.setBackgroundColor(HtmlColor.DARK_MAGENTA);
					dataset.setBorderColor(HtmlColor.DARK_MAGENTA);
					axis.setMin(event.getFrom().getValueAsDate());
					axis.setMax(event.getTo().getValueAsDate());
					axis.getTime().setUnit(TimeUnit.HOUR);
					chart.getOptions().getPlugins().setEnabled(DatasetsItemsSelector.ID, false);
					plugin.onDestroy(chart);
					chart.reconfigure();
				}
			}
		}, DatasetRangeSelectionEvent.TYPE);
		
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

		reset.onclick = (p0) -> {
			handleReset();
			return null;
		};
		reset.className = "gwt-Button";
		reset.textContent = "Reset";
		reset.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(reset);

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
		for (TimeSeriesItem dp : dataset.getTimeSeriesData()) {
			dp.setValue(getRandomDigit(false));
		}
		chart.update();
	}

	protected void handleReset() {
		reset.disabled = true;
		IsColor color1 = GoogleChartColor.values()[0];
		dataset.setBackgroundColor(color1.toHex());
		dataset.setBorderColor(color1.toHex());
		axis.setMin(null);
		axis.setMax(null);
		axis.getTime().setUnit(TimeUnit.DAY);
		chart.getOptions().getPlugins().setOptions(DatasetsItemsSelector.ID, pOptions);
		chart.reconfigure();
	}

}
