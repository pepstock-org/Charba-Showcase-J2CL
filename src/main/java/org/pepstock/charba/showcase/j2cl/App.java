package org.pepstock.charba.showcase.j2cl;

import java.util.logging.Logger;

import org.pepstock.charba.client.resources.EmbeddedResources;
import org.pepstock.charba.client.resources.ResourcesType;
import org.pepstock.charba.showcase.j2cl.views.MainView;

import com.google.gwt.core.client.EntryPoint;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;

public class App implements EntryPoint {
	
	public static final String DATE_ADAPTER_PARAM = "dateAdapter";

	public static final String LOADING_PARAM = "loading";

	public static final String LOADING_EMBEDDED = "embedded";

	public static final String LOADING_DEFERRED = "deferred";

	public static final Logger LOG = Logger.getLogger("charba-showcase");

	public static final String BASE_URL = "https://github.com/pepstock-org/Charba-Showcase/blob/3.0/src/";

	public static boolean isDeferred = false;

	public void onModuleLoad() {
		
		HTMLDivElement div = (HTMLDivElement)DomGlobal.document.createElement("div");

//		HTMLButtonElement button = (HTMLButtonElement)DomGlobal.document.createElement("button");
//		button.onclick = (p0) -> { 
//			Window.getConsole().log("click");
//			return null;
//		}; 
//		button.className = "gwt-Button";
//		button.textContent = "Reset Zoom";

		DomGlobal.document.body.appendChild(div);
		
		ResourcesType.setClientBundle(EmbeddedResources.INSTANCE);
		
		MainView main = new MainView();
		div.appendChild(main.getElement());
		
		
//		LabelsPlugin.enable();
//
//		BarChart chart = new BarChart();
//		chart.getOptions().setResponsive(true);
//		chart.getOptions().getLegend().setPosition(Position.TOP);
//		chart.getOptions().getTitle().setDisplay(true);
//		chart.getOptions().getTitle().setText("Labels on bar chart");
//
//		BarDataset dataset1 = chart.newDataset();
//		dataset1.setLabel("dataset 1");
//
//		IsColor color1 = GoogleChartColor.values()[0];
//
//		dataset1.setBackgroundColor(color1.alpha(0.2));
//		dataset1.setBorderColor(color1);
//
//		dataset1.setData(10, 5, 45, 60, 40, 15);
//		
//		chart.addHandler(new DatasetSelectionEventHandler() {
//
//			@Override
//			public void onSelect(DatasetSelectionEvent event) {
//				IsChart chart = (IsChart) event.getSource();
//				Labels labels = chart.getData().getLabels();
//				List<Dataset> datasets = chart.getData().getDatasets();
//				if (datasets != null && !datasets.isEmpty()) {
//					StringBuilder sb = new StringBuilder();
//					sb.append("Dataset index: ").append(event.getItem().getDatasetIndex()).append("\n");
//					sb.append("Dataset label: ").append(datasets.get(event.getItem().getDatasetIndex()).getLabel()).append("\n");
//					sb.append("Dataset data: ").append(datasets.get(event.getItem().getDatasetIndex()).getData().get(event.getItem().getIndex())).append("\n");
//					sb.append("Index: ").append(event.getItem().getIndex()).append("\n");
//					sb.append("Value: ").append(labels.getStrings(event.getItem().getIndex()).get(0)).append("\n");
//					Window.getConsole().log("Dataset Selected!", sb.toString());
//					Window.getConsole().log(event.getNativeEvent().getType());
//					Window.getConsole().log(event.getNativeEvent().getOffsetX());
//					Window.getConsole().log(event.getNativeEvent().getTouches());
//				}
//			}
//		}, DatasetSelectionEvent.TYPE);
//
//
//		LabelsOptions option = new LabelsOptions();
//		option.setRender(new RenderCallback() {
//
//			@Override
//			public String invoke(IsChart chart, RenderItem item) {
//				return "$$ " + (int) (item.getValue() * item.getPercentage() / 100);
//			}
//		});
//		option.setFontColor(new FontColorCallback() {
//
//			@Override
//			public IsColor invoke(IsChart chart, FontColorItem item) {
//				return item.getValue() > 25 ? HtmlColor.RED : HtmlColor.BLACK;
//			}
//		});
//
//		chart.getOptions().getPlugins().setOptions(LabelsPlugin.ID, option);
//
//		chart.getData().setLabels("1", "2" , "3", "4", "5", "6");
//		chart.getData().setDatasets(dataset1);

		// GaugeChart chart = new GaugeChart();
		// chart.getOptions().setResponsive(true);
		// chart.getOptions().getTitle().setDisplay(true);
		// chart.getOptions().getTitle().setText("GAUGE chart to represent percentage value");
		// chart.getOptions().setDisplay(MeterDisplay.PERCENTAGE);
		// chart.getOptions().setValueCallback(new ValueCallback() {
		//
		// @Override
		// public String onFormat(IsChart chart, double value, double easing) {
		// return Utilities.applyPrecision(value, 2)+ "%";
		// }
		// });
		// chart.getOptions().setAnimatedDisplay(true);
		//
		// GaugeDataset dataset = chart.newDataset(100);
		// dataset.setLabel("Percent");
		// dataset.setValue(Math.random() * 100D);
		// chart.getData().setDatasets(dataset);
		//
		// RadarChart chart = new RadarChart();
		// chart.getOptions().setResponsive(true);
		// chart.getOptions().setMaintainAspectRatio(true);
		// chart.getOptions().getLegend().setPosition(Position.TOP);
		// chart.getOptions().getTitle().setDisplay(true);
		// chart.getOptions().getTitle().setText("Callbacks on radar chart dataset");
		//
		// chart.getOptions().getTooltips().setMode(InteractionMode.INDEX);
		// chart.getOptions().getTooltips().setIntersect(false);
		// chart.getOptions().getHover().setMode(InteractionMode.NEAREST);
		// chart.getOptions().getHover().setIntersect(true);
		//
		// List<Dataset> datasets = chart.getData().getDatasets(true);
		//
		// RadarDataset dataset1 = chart.newDataset();
		// dataset1.setLabel("dataset 1");
		//
		// IsColor color = GoogleChartColor.values()[0];
		//
		// dataset1.setBackgroundColor(color.alpha(0.2D));
		// dataset1.setBorderColor(color);
		// dataset1.setPointBackgroundColor(color);
		// dataset1.setPointRadius(new RadiusCallback() {
		//
		// @Override
		// public Double invoke(IsChart chart, ScriptableContext context) {
		// Window.getConsole().log(context);
		// return (double) ((int) (Math.random() * (MAX - MIN))) + MIN;
		// }
		// });
		// dataset1.setPointHoverBackgroundColor(color);
		//// dataset1.setPointHoverRadius(radiusCallback);
		//
		// dataset1.setData(10, 45, 50, 25, 30, 5);
		// datasets.add(dataset1);
		//
		// chart.getData().setLabels("1", "2", "3", "4", "5", "6");

//		Element element = chart.getChartElement().as();
//		div.appendChild(element);
		
		//div.appendChild(button);

	}

}
