package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.callbacks.ColorCallback;
import org.pepstock.charba.client.callbacks.DatasetContext;
import org.pepstock.charba.client.callbacks.TooltipTitleCallback;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.enums.ContextType;
import org.pepstock.charba.client.items.TooltipItem;
import org.pepstock.charba.client.sankey.Column;
import org.pepstock.charba.client.sankey.Priority;
import org.pepstock.charba.client.sankey.SankeyChart;
import org.pepstock.charba.client.sankey.SankeyDataPoint;
import org.pepstock.charba.client.sankey.SankeyDataset;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class SankeyColumnsCase extends BaseComposite {

	private static final Map<String, IsColor> categoryIndexes = new HashMap<>();
	
	private final HTMLTableElement mainPanel;

	private final SankeyChart chart = new SankeyChart();

	public SankeyColumnsCase() {
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

		if (categoryIndexes.isEmpty()) {
			categoryIndexes.put("Oil", HtmlColor.BLACK);
			categoryIndexes.put("Coal", HtmlColor.GRAY);
			categoryIndexes.put("Fossil Fuels", HtmlColor.SLATE_GRAY);
			categoryIndexes.put("Electricity", HtmlColor.BLUE);
			categoryIndexes.put("Energy", HtmlColor.ORANGE);
		}

		chart.getOptions().setResponsive(true);
		chart.getOptions().getLayout().getPadding().setRight(26);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Sankey chart setting columns of nodes");
		chart.getOptions().getTooltips().getCallbacks().setTitleCallback(new TooltipTitleCallback() {

			@Override
			public List<String> onTitle(IsChart chart, List<TooltipItem> items) {
				return Collections.emptyList();
			}

		});

		SankeyDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");
		
		List<SankeyDataPoint> datapoints = dataset1.getDataPoints(true);
		datapoints.add(new SankeyDataPoint("Oil", "Fossil Fuels", 15));
		datapoints.add(new SankeyDataPoint("Natural Gas", "Fossil Fuels", 20));
		datapoints.add(new SankeyDataPoint("Coal", "Fossil Fuels", 25));

		datapoints.add(new SankeyDataPoint("Coal", "Electricity", 25));
		datapoints.add(new SankeyDataPoint("Fossil Fuels", "Energy", 60));
		datapoints.add(new SankeyDataPoint("Solar", "Energy", 25));
		
		Column columns = new Column();
		columns.set("Electricity", 1);
		columns.set("Solar", 1);
		dataset1.setColumn(columns);
		
		Priority priority = new Priority();
		priority.set("Oil", 1);
		priority.set("Natural Gas", 2);
		priority.set("Coal", 3);
		priority.set("Fossil Fuels", 1);
		priority.set("Electricity", 2);
		priority.set("Energy", 1);
		priority.set("Solar", 1);
		dataset1.setPriority(priority);

		dataset1.setColorFrom(new ColorCallback<DatasetContext>() {

			@Override
			public Object invoke(DatasetContext context) {
				if (!ContextType.DATA.equals(context.getType())) {
					return null;
				}
				SankeyDataset dataset = (SankeyDataset) context.getChart().getData().getDatasets().get(context.getDatasetIndex());
				SankeyDataPoint point = dataset.getDataPoints().get(context.getDataIndex());
				if (categoryIndexes.containsKey(point.getFrom())) {
					return categoryIndexes.get(point.getFrom());
				}
				return HtmlColor.GREEN;
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
				if (categoryIndexes.containsKey(point.getTo())) {
					return categoryIndexes.get(point.getTo());
				}
				return HtmlColor.GREEN;
			}

		});
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

}
