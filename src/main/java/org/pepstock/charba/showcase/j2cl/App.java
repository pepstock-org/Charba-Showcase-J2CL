package org.pepstock.charba.showcase.j2cl;

import java.util.List;
import java.util.Locale;

import org.pepstock.charba.client.ChartType;
import org.pepstock.charba.client.Defaults;
import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.commons.Key;
import org.pepstock.charba.client.controllers.AbstractController;
import org.pepstock.charba.client.controllers.ControllerContext;
import org.pepstock.charba.client.controllers.ControllerType;
import org.pepstock.charba.client.controllers.StyleElement;
import org.pepstock.charba.client.dom.elements.Context2dItem;
import org.pepstock.charba.client.enums.DefaultDateAdapter;
import org.pepstock.charba.client.impl.plugins.ChartBackgroundColor;
import org.pepstock.charba.client.items.DatasetItem;
import org.pepstock.charba.client.items.DatasetMetaItem;
import org.pepstock.charba.client.labels.LabelsPlugin;
import org.pepstock.charba.client.resources.AbstractEmbeddedResources;
import org.pepstock.charba.client.resources.DatefnsEmbeddedResources;
import org.pepstock.charba.client.resources.EmbeddedResources;
import org.pepstock.charba.client.resources.LuxonEmbeddedResources;
import org.pepstock.charba.client.resources.ResourcesType;
import org.pepstock.charba.client.utils.Window;
import org.pepstock.charba.showcase.j2cl.cases.commons.Images;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarController;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart;
import org.pepstock.charba.showcase.j2cl.views.MainView;

import com.google.gwt.core.client.EntryPoint;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;

public class App implements EntryPoint {

	public static final String DATE_ADAPTER_PARAM = "dateAdapter";

	public static final String BASE_URL = "https://github.com/pepstock-org/Charba-Showcase-J2CL/blob/3.2/src/main/java/";

	public static boolean isDeferred = false;
	
	public static DefaultDateAdapter dateAdapterTyoe = DefaultDateAdapter.UNKNOWN;

	public void onModuleLoad() {
		Images.get();

		String param = loadParameters(DomGlobal.window.location.search);
		DefaultDateAdapter adapter = Key.getKeyByValue(DefaultDateAdapter.values(), param, DefaultDateAdapter.MOMENT);
		App.dateAdapterTyoe = adapter;
		AbstractEmbeddedResources resources = null;
		if (DefaultDateAdapter.MOMENT.equals(adapter)) {
			resources = EmbeddedResources.INSTANCE;
		} else if (DefaultDateAdapter.LUXON.equals(adapter)) {
			resources = LuxonEmbeddedResources.INSTANCE;
		} else if (DefaultDateAdapter.DATE_FNS.equals(adapter)) {
			resources = DatefnsEmbeddedResources.INSTANCE;
		}
		ResourcesType.setClientBundle(resources);
		start();
	}

	private void start() {

		Window.enableResizeOnBeforePrint();

		Defaults.get().getGlobal().getFont().setFamily("'Lato', sans-serif");

		Defaults.get().getGlobal().getTitle().getFont().setSize(16);
		Defaults.get().getGlobal().getElements().getLine().setTension(0.4D);
		
		Defaults.get().getPlugins().register(new ChartBackgroundColor());
		
		Defaults.get().getOptions(ChartType.PIE).setAspectRatio(2D);
		Defaults.get().getOptions(ChartType.POLAR_AREA).setAspectRatio(2D);
		Defaults.get().getOptions(ChartType.RADAR).setAspectRatio(2D);
		Defaults.get().getOptions(ChartType.DOUGHNUT).setAspectRatio(2D);
		
		Defaults.get().getControllers().register(new AbstractController() {

			@Override
			public ControllerType getType() {
				return MyLineChart.TYPE;
			}

			@Override
			public void setHoverStyle(ControllerContext context, IsChart chart, StyleElement element, int datasetIndex, int index) {
				org.pepstock.charba.client.utils.Window.getConsole().log(element);
				super.setHoverStyle(context, chart, element, datasetIndex, index);
			}

			@Override
			public void draw(ControllerContext jsThis, IsChart chart) {
				super.draw(jsThis, chart);

				DatasetMetaItem metaItem = chart.getDatasetMeta(jsThis.getIndex());
				List<DatasetItem> items = metaItem.getDatasets();
				for (DatasetItem item : items) {
					Context2dItem ctx = chart.getCanvas().getContext2d();
					ctx.save();
					ctx.setStrokeColor(item.getOptions().getBorderColorAsString());
					ctx.setLineWidth(1D);
					ctx.strokeRect(item.getX() - 10, item.getY() - 10, 20, 20);
					ctx.restore();
				}
			}
		});

		Defaults.get().getControllers().register(new MyHorizontalBarController());

		LabelsPlugin.enable();
//
//		DataLabelsPlugin.enable();
//
//		ZoomPlugin.enable();
//
//		AnnotationPlugin.enable();

		HTMLDivElement div = (HTMLDivElement) DomGlobal.document.createElement("div");

		DomGlobal.document.body.appendChild(div);

		MainView main = new MainView();
		div.appendChild(main.getElement());
	}

	private String loadParameters(String search) {
		if (search != null && search.length() > 1) {
			String qs = search.substring(1);
			for (String kvPair : qs.split("&")) {
				String[] kv = kvPair.split("=", 2);
				String key = kv[0];
				if (DATE_ADAPTER_PARAM.equalsIgnoreCase(key)) {
					return kv.length > 1 ? kv[1].toLowerCase(Locale.getDefault()) : null;
				}
			}
		}
		return null;
	}

}
