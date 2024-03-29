package org.pepstock.charba.showcase.j2cl.cases.elements;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.callbacks.DatasetContext;
import org.pepstock.charba.client.callbacks.DelayCallback;
import org.pepstock.charba.client.callbacks.FromCallback;
import org.pepstock.charba.client.callbacks.NativeCallback;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.commons.Key;
import org.pepstock.charba.client.configuration.Animations;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.AxisKind;
import org.pepstock.charba.client.enums.ContextType;
import org.pepstock.charba.client.enums.DefaultAnimationPropertyKey;
import org.pepstock.charba.client.enums.DefaultScaleId;
import org.pepstock.charba.client.enums.Easing;
import org.pepstock.charba.client.items.ChartElement;
import org.pepstock.charba.client.items.ScaleItem;
import org.pepstock.charba.client.options.AnimationCollection;
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

public class AnimationProgressiveLineCase extends BaseComposite {

	private static final int DURATION = 10000;

	private static final int AMOUNT = 1000;

	private static final int DELAY_BETWEEN_POINTS = DURATION / AMOUNT;

	private static final NativeCallback NATIVE_DELAY_X = NativeCallback.create("if (context.type !== 'data' || context.xStarted) { return 0; } context.xStarted = true; return context.index * "+DELAY_BETWEEN_POINTS+";");
	
	private static final NativeCallback NATIVE_DELAY_Y = NativeCallback.create("if (context.type !== 'data' || context.yStarted) { return 0; } context.yStarted = true; return context.index * "+DELAY_BETWEEN_POINTS+";");
	
	private static final NativeCallback NATIVE_FROM_Y = NativeCallback.create("return context.index === 0 ? context.chart.scales.y.getPixelForValue(100) : context.chart.getDatasetMeta(context.datasetIndex).data[context.index - 1].getProps(['y'], true).y;");

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();
	
	private static final Delay X_DELAY_CALLBACK = new Delay(Key.create("xMyStarted"));

	private static final Delay Y_DELAY_CALLBACK = new Delay(Key.create("yMyStarted"));

	private static final From FROM_CALLBACK = new From();
	
	private final HTMLInputElement nativeCallbacks = (HTMLInputElement) DomGlobal.document.createElement("input");

	public AnimationProgressiveLineCase() {
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
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Progressive line");
		chart.getOptions().getLegend().setDisplay(false);
		chart.getOptions().getTooltips().setEnabled(false);
		chart.getOptions().getInteraction().setIntersect(false);
		chart.getOptions().getElements().getLine().setTension(0);

		Animations animations = chart.getOptions().getAnimations();
		AnimationCollection x = animations.create(DefaultAnimationPropertyKey.X);
		x.setEasing(Easing.LINEAR);
		x.setDuration(DELAY_BETWEEN_POINTS);
		x.setFrom(Double.NaN);
		x.setDelay(X_DELAY_CALLBACK);
		
		AnimationCollection y = animations.create(DefaultAnimationPropertyKey.Y);
		y.setEasing(Easing.LINEAR);
		y.setDuration(DELAY_BETWEEN_POINTS);
		y.setDelay(Y_DELAY_CALLBACK);
		y.setFrom(FROM_CALLBACK);

		List<DataPoint> datapoint1 = new LinkedList<>();
		List<DataPoint> datapoint2 = new LinkedList<>();

		List<Dataset> datasets = chart.getData().getDatasets(true);
		
		double prev = 100;
		double prev2 = 80;
		for (int i = 0; i < AMOUNT; i++) {
			prev += 5 - Math.random() * 10;

			DataPoint dp1 = new DataPoint();
			dp1.setX(i);
			dp1.setY(prev);
			datapoint1.add(dp1);
			prev2 += 5 - Math.random() * 10;

			DataPoint dp2 = new DataPoint();
			dp2.setX(i);
			dp2.setY(prev2);
			datapoint2.add(dp2);
		}

		LineDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");
		dataset1.setBorderColor(GoogleChartColor.values()[0]);
		dataset1.setFill(false);
		dataset1.setDataPoints(datapoint1);
		dataset1.setPointRadius(0);
		datasets.add(dataset1);

		LineDataset dataset2 = chart.newDataset();
		dataset2.setLabel("dataset 2");
		dataset2.setBorderColor(GoogleChartColor.values()[1]);
		dataset2.setFill(false);
		dataset2.setDataPoints(datapoint2);
		dataset2.setPointRadius(0);
		datasets.add(dataset2);

		CartesianLinearAxis axis1 = new CartesianLinearAxis(chart, AxisKind.X);
		axis1.setDisplay(true);

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);

		chart.getOptions().getScales().setAxes(axis1, axis2);
		
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

		String nativeCallbacksId = "nativeCallbacks" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForNativeCallbacks = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForNativeCallbacks.htmlFor = nativeCallbacksId;
		labelForNativeCallbacks.appendChild(DomGlobal.document.createTextNode("Use native callbacks "));
		actionsCol.appendChild(labelForNativeCallbacks);

		nativeCallbacks.id = nativeCallbacksId;
		nativeCallbacks.onclick = (p0) -> {
			handleNativeCallbacks();
			return null;
		};
		nativeCallbacks.type = "checkbox";
		nativeCallbacks.className = "gwt-CheckBox";
		nativeCallbacks.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(nativeCallbacks);


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
	
	protected void handleNativeCallbacks() {
		Animations animations = chart.getOptions().getAnimations();
		AnimationCollection x = animations.get(DefaultAnimationPropertyKey.X);
		AnimationCollection y = animations.get(DefaultAnimationPropertyKey.Y);
		if (nativeCallbacks.checked) {
			x.setDelay(NATIVE_DELAY_X);
			y.setFrom(NATIVE_FROM_Y);
			y.setDelay(NATIVE_DELAY_Y);
		}
		chart.reconfigure();
		nativeCallbacks.disabled = true;
	}

	private static class Delay implements DelayCallback{
		
		private final Key key;
		
		private boolean reset = true;
		
		private Delay(Key key) {
			this.key = key;
		}

		private void setReset(boolean reset) {
			this.reset = reset;
		}

		@Override
		public Integer invoke(DatasetContext context) {
			if (!ContextType.DATA.equals(context.getType()) || (context.getAttribute(key, false) && reset)) {
				return 0;
			}
			context.setAttribute(key, true);
			setReset(false);
			return context.getDataIndex() * DELAY_BETWEEN_POINTS;
		}
		
	}

	private static class From implements FromCallback{

		private Map<Integer, List<ChartElement>> elements = new HashMap<Integer, List<ChartElement>>();
		
		@Override
		public Double invoke(DatasetContext context) {
			IsChart chart = context.getChart();
			if (context.getDataIndex() <= 0) {
				ScaleItem scale = chart.getNode().getScales().getItems().get(DefaultScaleId.Y.value());
				return scale.getPixelForValue(100);
			}
			ChartElement element = elements.computeIfAbsent(context.getDatasetIndex(), mapKey -> chart.getDatasetItem(context.getDatasetIndex()).getElements()).get(context.getDataIndex() - 1);
			return element.getY();
		}			
		
	}
}
