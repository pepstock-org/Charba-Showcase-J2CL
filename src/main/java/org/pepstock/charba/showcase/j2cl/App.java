package org.pepstock.charba.showcase.j2cl;

import java.util.List;

import org.pepstock.charba.client.Charba;
import org.pepstock.charba.client.ChartType;
import org.pepstock.charba.client.Defaults;
import org.pepstock.charba.client.annotation.AnnotationPlugin;
import org.pepstock.charba.client.datalabels.DataLabelsPlugin;
import org.pepstock.charba.client.geo.Feature;
import org.pepstock.charba.client.geo.GeoUtils;
import org.pepstock.charba.client.geo.TopoJson;
import org.pepstock.charba.client.impl.charts.GaugeChart;
import org.pepstock.charba.client.impl.charts.MeterChart;
import org.pepstock.charba.client.impl.plugins.ChartBackgroundColor;
import org.pepstock.charba.client.labels.LabelsPlugin;
import org.pepstock.charba.client.utils.CScheduler;
import org.pepstock.charba.client.utils.toast.Toaster;
import org.pepstock.charba.client.utils.toast.enums.MaximumOpenItemsPolicy;
import org.pepstock.charba.client.zoom.ZoomPlugin;
import org.pepstock.charba.showcase.j2cl.cases.commons.Images;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarController;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart;
import org.pepstock.charba.showcase.j2cl.topojson.Earthmap;
import org.pepstock.charba.showcase.j2cl.topojson.Europemap;
import org.pepstock.charba.showcase.j2cl.topojson.Germanymap;
import org.pepstock.charba.showcase.j2cl.topojson.Italymap;
import org.pepstock.charba.showcase.j2cl.topojson.USmap;
import org.pepstock.charba.showcase.j2cl.views.MainView;

import com.google.gwt.core.client.EntryPoint;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;

public class App implements EntryPoint {

	public static final String BASE_URL = "https://github.com/pepstock-org/Charba-Showcase-J2CL/blob/5.1/src/main/java/";

	public static List<Feature> EARTH_FEATURES;

	public static TopoJson US;

	public static TopoJson EUROPE;

	public static TopoJson ITALY;

	public static TopoJson GERMANY; 
	
	public void onModuleLoad() {
		Images.get();
		Charba.enable();
		start();
	}

	private void start() {

		org.pepstock.charba.client.utils.Window.enableResizeOnBeforePrint();

		Defaults.get().getGlobal().getFont().setFamily("'Lato', sans-serif");

		Defaults.get().getGlobal().getTitle().getFont().setSize(16);

		Defaults.get().getPlugins().register(new ChartBackgroundColor());

		Defaults.get().getOptions(ChartType.LINE).getElements().getLine().setTension(0.4D);

		Defaults.get().getOptions(ChartType.PIE).setAspectRatio(2D);
		Defaults.get().getOptions(ChartType.POLAR_AREA).setAspectRatio(2D);
		Defaults.get().getOptions(ChartType.RADAR).setAspectRatio(2D);
		Defaults.get().getOptions(ChartType.DOUGHNUT).setAspectRatio(2D);
		Defaults.get().getOptions(MeterChart.CONTROLLER_TYPE).setAspectRatio(2D);
		Defaults.get().getOptions(GaugeChart.CONTROLLER_TYPE).setAspectRatio(2D);

		MyHorizontalBarController.TYPE.register();

		MyLineChart.TYPE.register();

		LabelsPlugin.enable();

		DataLabelsPlugin.enable();

		ZoomPlugin.enable();
		
		AnnotationPlugin.enable();
		
		Toaster.get().getDefaults().setTimeout(3000);
		Toaster.get().setMaxHistoryItems(50);
		Toaster.get().setMaxOpenItems(4);
		Toaster.get().setMaxOpenItemsPolicy(MaximumOpenItemsPolicy.QUEUE);

		HTMLDivElement div = (HTMLDivElement) DomGlobal.document.createElement("div");

		DomGlobal.document.body.appendChild(div);

		MainView main = new MainView();
		div.appendChild(main.getElement());
		
		CScheduler.get().submit(new Runnable() {
			
			@Override
			public void run() {
				USmap us = new USmap();
				Earthmap earth = new Earthmap();
				Europemap europe = new Europemap();
				Germanymap germany = new Germanymap();
				Italymap italy = new Italymap();
				App.EARTH_FEATURES = GeoUtils.features(earth.getContent(), "countries");
				App.US = GeoUtils.createTopoJson(us.getContent());
				App.EUROPE = GeoUtils.createTopoJson(europe.getContent());
				App.ITALY = GeoUtils.createTopoJson(italy.getContent());
				App.GERMANY = GeoUtils.createTopoJson(germany.getContent());
			}
		});

	}

}
