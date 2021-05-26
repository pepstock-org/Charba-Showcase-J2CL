package org.pepstock.charba.showcase.j2cl;

import org.pepstock.charba.client.Charba;
import org.pepstock.charba.client.ChartType;
import org.pepstock.charba.client.Defaults;
import org.pepstock.charba.client.annotation.AnnotationPlugin;
import org.pepstock.charba.client.datalabels.DataLabelsOptions;
import org.pepstock.charba.client.datalabels.DataLabelsPlugin;
import org.pepstock.charba.client.impl.charts.GaugeChart;
import org.pepstock.charba.client.impl.charts.MeterChart;
import org.pepstock.charba.client.impl.plugins.ChartBackgroundColor;
import org.pepstock.charba.client.labels.LabelsPlugin;
import org.pepstock.charba.client.zoom.ZoomPlugin;
import org.pepstock.charba.showcase.j2cl.cases.commons.Images;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyHorizontalBarController;
import org.pepstock.charba.showcase.j2cl.cases.miscellaneous.MyLineChart;
import org.pepstock.charba.showcase.j2cl.views.MainView;

import com.google.gwt.core.client.EntryPoint;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;

public class App implements EntryPoint {

	public static final String BASE_URL = "https://github.com/pepstock-org/Charba-Showcase-J2CL/blob/4.0/src/main/java/";

	public static boolean isDeferred = false;
	
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
		
		DataLabelsOptions dataLabelsOption = new DataLabelsOptions();
		dataLabelsOption.getPadding().set(4);
		dataLabelsOption.store();

		HTMLDivElement div = (HTMLDivElement) DomGlobal.document.createElement("div");

		DomGlobal.document.body.appendChild(div);

		MainView main = new MainView();
		div.appendChild(main.getElement());
	}

}
