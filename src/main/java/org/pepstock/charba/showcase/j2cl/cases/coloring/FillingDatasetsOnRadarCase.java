package org.pepstock.charba.showcase.j2cl.cases.coloring;

import java.util.List;

import org.pepstock.charba.client.RadarChart;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.RadarDataset;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.IsFill;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class FillingDatasetsOnRadarCase extends BaseComposite {

	private static final boolean[] HIDDENS = { false, true, false, false, false, false };

	private static final IsFill[] FILLS = { null, Fill.getFill("-1"), Fill.getFill(1), Fill.FALSE, Fill.getFill("-1"), Fill.getFill("-1") };

	private final HTMLTableElement mainPanel;

	private final RadarChart chart = new RadarChart();

	private final HTMLInputElement smooth = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final HTMLInputElement propagate = (HTMLInputElement) DomGlobal.document.createElement("input");

	public FillingDatasetsOnRadarCase() {
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
		chart.getOptions().setMaintainAspectRatio(true);
		chart.getOptions().getLegend().setDisplay(true);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Filling datasets mode on radar chart");
		chart.getOptions().getElements().getLine().setTension(0.000001D);
		chart.getOptions().setSpanGaps(false);
		chart.getOptions().getFiller().setPropagate(false);

		List<Dataset> datasets = chart.getData().getDatasets(true);

		// radar chart doesn't support stacked values, let's do it manually
		double increment = 10;
		double max = 0;

		for (int i = 0; i < 6; i++) {
			RadarDataset dataset1 = chart.newDataset(HIDDENS[i]);
			dataset1.setLabel("dataset " + i);

			IsColor color1 = GoogleChartColor.values()[i];

			dataset1.setBackgroundColor(color1.alpha(0.2D));
			dataset1.setBorderColor(color1);
			IsFill fill = FILLS[i];
			if (fill != null) {
				dataset1.setFill(fill);
			}
			// radar chart doesn't support stacked values, let's do it manually
			dataset1.setData(getRandomDigits(months, max + 1, max + increment));
			datasets.add(dataset1);
			max += increment;
		}

		chart.getData().setLabels(getLabels());

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

		String smoothId = "smooth" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForSmooth = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForSmooth.htmlFor = smoothId;
		labelForSmooth.appendChild(DomGlobal.document.createTextNode("Smooth "));
		actionsCol.appendChild(labelForSmooth);

		smooth.id = smoothId;
		smooth.onclick = (p0) -> {
			handleSmooth();
			return null;
		};
		smooth.type = "checkbox";
		smooth.className = "gwt-CheckBox";
		smooth.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(smooth);

		String propagateId = "propagate" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForPropagate = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForPropagate.htmlFor = propagateId;
		labelForPropagate.appendChild(DomGlobal.document.createTextNode("Propagate "));
		actionsCol.appendChild(labelForPropagate);

		propagate.id = propagateId;
		propagate.onclick = (p0) -> {
			handlePropagate();
			return null;
		};
		propagate.type = "checkbox";
		propagate.className = "gwt-CheckBox";
		propagate.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(propagate);

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
		// radar chart doesn't support stacked values, let's do it manually
		double increment = 10;
		double max = 0;
		for (Dataset dataset : chart.getData().getDatasets()) {
			// radar chart doesn't support stacked values, let's do it manually
			dataset.setData(getRandomDigits(months, max + 1, max + increment));
			max += increment;
		}
		chart.update();
	}

	protected void handleSmooth() {
		double value = smooth.checked ? 0.4D : 0.000001D;
		chart.getOptions().getElements().getLine().setTension(value);
		chart.reconfigure();
	}

	protected void handlePropagate() {
		chart.getOptions().getFiller().setPropagate(propagate.checked);
		chart.reconfigure();
	}

}
