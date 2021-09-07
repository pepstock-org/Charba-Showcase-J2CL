package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.Collections;
import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.callbacks.TooltipTitleCallback;
import org.pepstock.charba.client.enums.FontStyle;
import org.pepstock.charba.client.items.TooltipItem;
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

public class SankeyBasicCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final SankeyChart chart = new SankeyChart();

	public SankeyBasicCase() {
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
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Basic sankey chart");
		chart.getOptions().getTooltips().getCallbacks().setTitleCallback(new TooltipTitleCallback() {

			@Override
			public List<String> onTitle(IsChart chart, List<TooltipItem> items) {
				return Collections.emptyList();
			}

		});

		SankeyDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");
		
		dataset1.setNodeWidth(25);
		dataset1.getFont().setSize(32);
		dataset1.getFont().setStyle(FontStyle.BOLD);

		List<SankeyDataPoint> datapoints = dataset1.getDataPoints(true);
		datapoints.add(new SankeyDataPoint("a", "b", 20));
		datapoints.add(new SankeyDataPoint("c", "d", 10));
		datapoints.add(new SankeyDataPoint("c", "e", 5));

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
