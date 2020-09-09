package org.pepstock.charba.showcase.j2cl.cases.charts;

import java.util.List;

import org.pepstock.charba.client.PolarAreaChart;
import org.pepstock.charba.client.callbacks.ScaleColorCallback;
import org.pepstock.charba.client.callbacks.ScaleFontCallback;
import org.pepstock.charba.client.callbacks.ScaleScriptableContext;
import org.pepstock.charba.client.callbacks.ScaleShowLabelBackdropCallback;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.Axis;
import org.pepstock.charba.client.configuration.FontOptions;
import org.pepstock.charba.client.configuration.RadialAxis;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.PolarAreaDataset;
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

public class PolarAreaCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final PolarAreaChart chart = new PolarAreaChart();

	public PolarAreaCase() {
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
		chart.getOptions().getTitle().setText("Polar area chart");

		RadialAxis axis = new RadialAxis(chart);
		axis.setBeginAtZero(true);
		axis.setReverse(false);
		axis.getGrideLines().setCircular(true);
		axis.getAngleLines().setDisplay(true);
		axis.getAngleLines().setColor(new ScaleColorCallback() {
			
			@Override
			public IsColor invoke(Axis axis, ScaleScriptableContext context) {
				return HtmlColor.RED;
			}
		});
		
		axis.getPointLabels().setDisplay(true);
//		axis.getPointLabels().setCallback(new RadialPointLabelCallback() {
//			
//			@Override
//			public String onCallback(Axis axis, String item) {
//				return item;
//			}
//		});
		
		axis.getPointLabels().setFont(new ScaleFontCallback() {
			
			@Override
			public FontOptions invoke(Axis axis, ScaleScriptableContext context) {
				FontOptions fo = new FontOptions();
				fo.setColor(context.getIndex() % 2  == 0 ? HtmlColor.RED : HtmlColor.BLACK);
				fo.setSize(16);
				return fo;
			}
		});
		
		//axis.getTicks().getFont().setColor(HtmlColor.GRAY);
		axis.getTicks().setFont(new ScaleFontCallback() {
			
			@Override
			public FontOptions invoke(Axis axis, ScaleScriptableContext context) {
				FontOptions fo = new FontOptions();
				fo.setColor(context.getIndex() % 2  == 0 ? HtmlColor.RED : HtmlColor.BLACK);
				fo.setSize(24);
				return fo;
			}
		});
		
		axis.getTicks().setBackdropColor(new ScaleColorCallback() {
			
			@Override
			public Object invoke(Axis axis, ScaleScriptableContext context) {
				return context.getIndex() % 2  == 0 ? HtmlColor.ORANGE : HtmlColor.GRAY;
			}
		});

		axis.getTicks().setShowLabelBackdrop(new ScaleShowLabelBackdropCallback() {
			
			@Override
			public Boolean invoke(Axis axis, ScaleScriptableContext context) {
				return context.getIndex() % 2  == 0 ? false : false;
			}
		});

		chart.getOptions().getScales().setAxes(axis);

		PolarAreaDataset dataset = chart.newDataset();
		dataset.setLabel("dataset 1");
		dataset.setBackgroundColor(getSequenceColors(months, 0.2D));
		dataset.setData(getRandomDigits(months, false));

		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset);

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

		HTMLButtonElement addData = (HTMLButtonElement) DomGlobal.document.createElement("button");
		addData.onclick = (p0) -> {
			handleAddData();
			return null;
		};
		addData.className = "gwt-Button";
		addData.textContent = "Add data";
		addData.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(addData);

		HTMLButtonElement removeData = (HTMLButtonElement) DomGlobal.document.createElement("button");
		removeData.onclick = (p0) -> {
			handleRemoveData();
			return null;
		};
		removeData.className = "gwt-Button";
		removeData.textContent = "Remove data";
		removeData.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(removeData);

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
			dataset.setData(getRandomDigits(months, false));
		}
		chart.update();
	}

	protected void handleAddData() {
		if (months < 12) {
			chart.getData().getLabels().add(getLabel());
			months++;
			List<Dataset> datasets = chart.getData().getDatasets();
			for (Dataset ds : datasets) {
				PolarAreaDataset pds = (PolarAreaDataset) ds;
				pds.setBackgroundColor(getSequenceColors(months, 0.2D));
				pds.getData().add(getRandomDigit(false));
			}
			chart.update();
		}
	}

	protected void handleRemoveData() {
		removeData(chart);
	}

}
