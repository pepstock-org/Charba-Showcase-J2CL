package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.callbacks.ColorCallback;
import org.pepstock.charba.client.callbacks.DatasetContext;
import org.pepstock.charba.client.callbacks.TooltipLabelCallback;
import org.pepstock.charba.client.callbacks.TooltipTitleCallback;
import org.pepstock.charba.client.commons.ArrayListHelper;
import org.pepstock.charba.client.commons.ArrayObject;
import org.pepstock.charba.client.enums.ContextType;
import org.pepstock.charba.client.events.DatasetSelectionEvent;
import org.pepstock.charba.client.events.DatasetSelectionEventHandler;
import org.pepstock.charba.client.impl.plugins.ChartPointer;
import org.pepstock.charba.client.impl.plugins.ChartPointerOptions;
import org.pepstock.charba.client.impl.plugins.enums.PointerElement;
import org.pepstock.charba.client.items.TooltipItem;
import org.pepstock.charba.client.items.TooltipLabelColor;
import org.pepstock.charba.client.sankey.SankeyChart;
import org.pepstock.charba.client.sankey.SankeyDataPoint;
import org.pepstock.charba.client.sankey.SankeyDataset;
import org.pepstock.charba.client.utils.JSON;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.cases.commons.Toast;
import org.pepstock.charba.showcase.j2cl.data.Countries;

import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class SankeyClickCase extends BaseComposite {

	private static final String[] COLORS = { "#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704" };

	private static List<SankeyDataPoint> datapoints = null;

	private final HTMLTableElement mainPanel;

	private final SankeyChart chart = new SankeyChart();

	private int colorIndex = 0;

	private Map<String, String> categoryIndexes = new HashMap<>();

	public SankeyClickCase() {
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
		chartCol.align = "center";
		chartRow.appendChild(chartCol);

		// ----------------------------------------------
		// Chart
		// ----------------------------------------------

		chart.getOptions().setResponsive(true);
		chart.getOptions().getLayout().getPadding().setRight(26);
		chart.getOptions().getFont().setSize(9);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Clicking on a sankey chart");
		chart.getOptions().getTooltips().getCallbacks().setTitleCallback(new TooltipTitleCallback() {

			@Override
			public List<String> onTitle(IsChart chart, List<TooltipItem> items) {
				return Collections.emptyList();
			}

		});
		chart.getOptions().getTooltips().getCallbacks().setLabelCallback(new TooltipLabelCallback() {

			@Override
			public String onLabel(IsChart chart, TooltipItem item) {
				SankeyDataset dataset = (SankeyDataset) chart.getData().retrieveDataset(item);
				SankeyDataPoint v = dataset.getDataPoints().get(item.getDataIndex());
				return v.getFrom() + " -> " + v.getTo()+ ": "+v.getFlow();
			}

			@Override
			public TooltipLabelColor onLabelColor(IsChart chart, TooltipItem item) {
				SankeyDataset dataset = (SankeyDataset) chart.getData().retrieveDataset(item);
				SankeyDataPoint v = dataset.getDataPoints().get(item.getDataIndex());
				TooltipLabelColor result = new TooltipLabelColor();
				result.setBackgroundColor(getColor(v.getFrom()));
				return result;
			}

		});
		
		final SankeyDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");
		
		dataset1.setNodeWidth(25);
		dataset1.setParsing(true);

		if (datapoints == null) {
			ArrayObject array = JSON.parseForArray(new Countries().getContent());
			datapoints = ArrayListHelper.list(array, SankeyDataset.DATAPOINTS_FACTORY);
		}
		dataset1.setDataPoints(datapoints);

		dataset1.setColorFrom(new ColorCallback<DatasetContext>() {

			@Override
			public Object invoke(DatasetContext context) {
				if (!ContextType.DATA.equals(context.getType())) {
					return null;
				}
				SankeyDataset dataset = (SankeyDataset) context.getChart().getData().getDatasets().get(context.getDatasetIndex());
				SankeyDataPoint point = dataset.getDataPoints().get(context.getDataIndex());
				return getColor(point.getFrom());
			}

		});

		dataset1.setColorTo(new ColorCallback<DatasetContext>() {

			@Override
			public Object invoke(DatasetContext context) {
				if (!ContextType.DATA.equals(context.getType())) {
					return null;
				}
				SankeyDataset dataset = (SankeyDataset) context.getChart().getData().getDatasets().get(context.getDatasetIndex());
				SankeyDataPoint point = dataset.getDataPoints().get(context.getDataIndex());
				return getColor(point.getTo());
			}

		});

		chart.getData().setDatasets(dataset1);
		
		
		chart.addHandler(new DatasetSelectionEventHandler() {

			@Override
			public void onSelect(DatasetSelectionEvent event) {
				SankeyDataPoint point = dataset1.getDataPoints().get(event.getItem().getIndex());
				StringBuilder sb = new StringBuilder();
				sb.append("Dataset index: <b>").append(event.getItem().getDatasetIndex()).append("</b><br>");
				sb.append("From: <b>").append(point.getFrom()).append("</b><br>");
				sb.append("To: <b>").append(point.getTo()).append("</b><br>");
				sb.append("Flow: <b>").append(point.getFlow()).append("</b><br>");
				new Toast("Dataset Selected!", sb.toString()).show();
			}
		}, DatasetSelectionEvent.TYPE);
		
		ChartPointerOptions op = new ChartPointerOptions();
		op.setElements(PointerElement.DATASET);
		chart.getOptions().getPlugins().setOptions(ChartPointer.ID, op);
		chart.getPlugins().add(ChartPointer.get());
		
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

	private String getColor(String category) {
		if (!categoryIndexes.containsKey(category)) {
			categoryIndexes.put(category, COLORS[colorIndex % COLORS.length]);
			colorIndex++;
		}
		return categoryIndexes.get(category);
	}

}
