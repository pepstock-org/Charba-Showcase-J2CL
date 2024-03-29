package org.pepstock.charba.showcase.j2cl.cases.extensions;

import java.util.Collections;
import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.annotation.AnnotationOptions;
import org.pepstock.charba.client.annotation.AnnotationPlugin;
import org.pepstock.charba.client.annotation.LabelAnnotation;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.commons.CallbackProxy;
import org.pepstock.charba.client.commons.JsHelper;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.dom.BaseEventTarget.EventListenerCallback;
import org.pepstock.charba.client.dom.DOMBuilder;
import org.pepstock.charba.client.dom.elements.Img;
import org.pepstock.charba.client.dom.events.NativeBaseEvent;
import org.pepstock.charba.client.enums.DefaultScaleId;
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

public class AnnotationLabelImageOnLineCase extends BaseComposite {

	private final HTMLTableElement mainPanel;
	
	private final LineChart chart = new LineChart();
	
	private final CallbackProxy<EventListenerCallback> loadCallbackProxy = JsHelper.get().newCallbackProxy();

	public AnnotationLabelImageOnLineCase() {
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
		super.months = 12;

		
		chart.setDrawOnAttach(false);

		final Img logo = DOMBuilder.get().createImageElement();

		loadCallbackProxy.setCallback(new EventListenerCallback() {
			
			@Override
			public void call(NativeBaseEvent event) {
				
				chart.getOptions().setResponsive(true);
				chart.getOptions().getLegend().setPosition(Position.TOP);
				chart.getOptions().getTitle().setDisplay(true);
				chart.getOptions().getTitle().setText("Label annotation with image on line chart");

				LineDataset dataset1 = chart.newDataset();
				dataset1.setLabel("dataset 1");

				IsColor color1 = GoogleChartColor.values()[0];

				dataset1.setBackgroundColor(color1.toHex());
				dataset1.setBorderColor(color1.toHex());
				dataset1.setFill(false);
				double[] values = getRandomDigits(months, 0, 100);
				List<Double> data = dataset1.getData(true);
				for (int i = 0; i < values.length; i++) {
					data.add(values[i]);
				}

				chart.getData().setLabels(getLabels());
				chart.getData().setDatasets(dataset1);

				CartesianLinearAxis axis = new CartesianLinearAxis(chart);
				axis.setMax(120);
				
				chart.getOptions().getScales().setAxes(axis);

				AnnotationOptions options = new AnnotationOptions();
				options.setClip(false);

				LabelAnnotation label = new LabelAnnotation("myLabel");
				label.setContent(logo);
				label.setImageOpacity(0.5);
				label.setXScaleID(DefaultScaleId.X);
				label.setXValue((ctx) -> maxLabel(ctx.getChart()));
				label.setYScaleID(DefaultScaleId.Y);
				label.setYValue((ctx) -> maxValue(ctx.getChart()));
				
				options.setAnnotations(label);

				chart.getOptions().getPlugins().setOptions(AnnotationPlugin.ID, options);
				chart.draw();
				
			}
		});
		logo.addEventListener("load", loadCallbackProxy.getProxy());
		logo.setSrc("https://www.chartjs.org/img/chartjs-logo.svg");
		
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
	
	private double maxValue(IsChart chart) {
		return Collections.max(chart.getData().getDatasets().get(0).getData());
	}

	private int maxIndex(IsChart chart) {
		double max = maxValue(chart);
		return chart.getData().getDatasets().get(0).getData().indexOf(max);
	}

	private String maxLabel(IsChart chart) {
		return getLabels()[maxIndex(chart)];
	}

}
