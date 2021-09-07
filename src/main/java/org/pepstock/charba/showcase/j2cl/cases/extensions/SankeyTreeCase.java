package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.Collections;
import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.callbacks.ColorCallback;
import org.pepstock.charba.client.callbacks.DatasetContext;
import org.pepstock.charba.client.callbacks.TooltipLabelCallback;
import org.pepstock.charba.client.callbacks.TooltipTitleCallback;
import org.pepstock.charba.client.commons.ArrayListHelper;
import org.pepstock.charba.client.commons.ArrayObject;
import org.pepstock.charba.client.commons.Key;
import org.pepstock.charba.client.commons.NativeObject;
import org.pepstock.charba.client.commons.NativeObjectContainer;
import org.pepstock.charba.client.enums.ContextType;
import org.pepstock.charba.client.items.TooltipItem;
import org.pepstock.charba.client.items.TooltipLabelColor;
import org.pepstock.charba.client.sankey.Priority;
import org.pepstock.charba.client.sankey.SankeyChart;
import org.pepstock.charba.client.sankey.SankeyDataPoint;
import org.pepstock.charba.client.sankey.SankeyDataset;
import org.pepstock.charba.client.sankey.enums.Size;
import org.pepstock.charba.client.utils.JSON;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;
import org.pepstock.charba.showcase.j2cl.data.TreeData;
import org.pepstock.charba.showcase.j2cl.data.TreeDataColors;

import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class SankeyTreeCase extends BaseComposite {

	private static List<SankeyDataPoint> datapoints = null;

	private static TreeColors colors = null;

	private final HTMLTableElement mainPanel;

	private final SankeyChart chart = new SankeyChart();

	public SankeyTreeCase() {
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
		chart.getOptions().getTitle().setText("Tree on sankey chart");
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
		SankeyDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");
		
		Priority priority = new Priority();
		priority.set("one", 0);
		dataset1.setPriority(priority);
		
		dataset1.setNodeWidth(25);

		if (datapoints == null) {
			ArrayObject array = JSON.parseForArray(new TreeData().getContent());
			datapoints = ArrayListHelper.list(array, SankeyDataset.DATAPOINTS_FACTORY);
		}
		dataset1.setDataPoints(datapoints);

		if (colors == null) {
			colors = new TreeColors(JSON.parseForObject(new TreeDataColors().getContent()));
		}

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
		dataset1.setSize(Size.MIN);

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


	private String getColor(String category) {
		return colors.get(category);
	}

	private static class TreeColors extends NativeObjectContainer {

		private TreeColors(NativeObject nativeObject) {
			super(nativeObject);
		}

		private String get(String key) {
			return getValue(Key.create(key), "#6c5ce7");
		}

	}

}
