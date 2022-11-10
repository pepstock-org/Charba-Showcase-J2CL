package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.List;

import org.pepstock.charba.client.callbacks.ColorCallback;
import org.pepstock.charba.client.callbacks.DatasetContext;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.commons.Key;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.datalabels.DataLabelsContext;
import org.pepstock.charba.client.datalabels.DataLabelsOptions;
import org.pepstock.charba.client.datalabels.DataLabelsPlugin;
import org.pepstock.charba.client.datalabels.callbacks.FormatterCallback;
import org.pepstock.charba.client.datalabels.enums.Align;
import org.pepstock.charba.client.datalabels.enums.Anchor;
import org.pepstock.charba.client.enums.Weight;
import org.pepstock.charba.client.impl.plugins.enums.GwtMaterialScheme;
import org.pepstock.charba.client.items.DataItem;
import org.pepstock.charba.client.treemap.TreeMapChart;
import org.pepstock.charba.client.treemap.TreeMapDataset;
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

public class TreeMapDatalabelsCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final TreeMapChart chart = new TreeMapChart();

	public TreeMapDatalabelsCase() {
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
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Tree map chart using Datalabels plugin");
		
		TreeMapDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		dataset1.setBackgroundColor(new ColorCallback<DatasetContext>() {
			
			private List<IsColor> colors = GwtMaterialScheme.RED.getColors();

			@Override
			public Object invoke(DatasetContext context) {
				if (context.getDataIndex() < 0) {
					return null;
				}
				int index = months - context.getDataIndex() - 1;
				return colors.get(index);
			}
			
		});

		IsColor color1 = GoogleChartColor.values()[0];
		dataset1.setBorderColor(color1.toHex());
		
		DataLabelsOptions optionds = new DataLabelsOptions();
		optionds.setAlign(Align.CENTER);
		optionds.setAnchor(Anchor.CENTER);
		optionds.setColor(HtmlColor.BLACK);
		optionds.getFont().setSize(24);
		optionds.getFont().setWeight(Weight.BOLD);
		optionds.setFormatter(new FormatterCallback() {
			
			private final Key value = Key.create("v");
			
			@Override
			public String invoke(DataLabelsContext context, DataItem dataItem) {
				DataPoint p = dataItem.getValueAsDataPoint();
				return String.valueOf(p.getAttribute(value));
			}
		});
		dataset1.setOptions(DataLabelsPlugin.ID, optionds);

		dataset1.setTree(getRandomDigits(months, false));
		
		chart.getData().setDatasets(dataset1);
		
		DataLabelsOptions option = new DataLabelsOptions();
		option.setDisplay(true);
		chart.getOptions().getPlugins().setOptions(DataLabelsPlugin.ID, option);
		
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
			TreeMapDataset tds = (TreeMapDataset)dataset;
			tds.setTree(getRandomDigits(months, false));
		}
		chart.update();
	}
}
