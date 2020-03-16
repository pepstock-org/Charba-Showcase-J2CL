package org.pepstock.charba.showcase.j2cl;

import org.pepstock.charba.client.Defaults;
import org.pepstock.charba.client.annotation.AnnotationPlugin;
import org.pepstock.charba.client.datalabels.DataLabelsPlugin;
import org.pepstock.charba.client.impl.plugins.ChartBackgroundColor;
import org.pepstock.charba.client.labels.LabelsPlugin;
import org.pepstock.charba.client.resources.EmbeddedResources;
import org.pepstock.charba.client.resources.ResourcesType;
import org.pepstock.charba.client.utils.JsWindowHelper;
import org.pepstock.charba.client.utils.Window;
import org.pepstock.charba.client.zoom.ZoomPlugin;
import org.pepstock.charba.showcase.j2cl.cases.commons.Images;
import org.pepstock.charba.showcase.j2cl.views.MainView;

import com.google.gwt.core.client.EntryPoint;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;

public class App implements EntryPoint {

	public static final String DATE_ADAPTER_PARAM = "dateAdapter";

	public static final String BASE_URL = "https://github.com/pepstock-org/Charba-Showcase-J2CL/tree/master/src/main/java/";

	public static boolean isDeferred = false;

	public void onModuleLoad() {
		Images.get();
		
		Window.getConsole().log(DomGlobal.window.location);
		
//		DefaultDateAdapter adapter = Key.getKeyByValue(DefaultDateAdapter.values(), 
//				Window.Location.getParameter(DATE_ADAPTER_PARAM), DefaultDateAdapter.MOMENT);
//		AbstractEmbeddedResources resources = null;
//		if (DefaultDateAdapter.MOMENT.equals(adapter)) {
//			resources = EmbeddedResources.INSTANCE;
//		} else if (DefaultDateAdapter.LUXON.equals(adapter)) {
//			resources = LuxonEmbeddedResources.INSTANCE;
//		} else if (DefaultDateAdapter.DATE_FNS.equals(adapter)) {
//			resources = DatefnsEmbeddedResources.INSTANCE;
//		}
//		ResourcesType.setClientBundle(resources);
		
		ResourcesType.setClientBundle(EmbeddedResources.INSTANCE);
		start();
	}

	// Image.prefetch(Images.INSTANCE.background().getSafeUri());
	// Image.prefetch(Images.INSTANCE.pattern().getSafeUri());
	// Image.prefetch(Images.INSTANCE.patternHover().getSafeUri());
	// Image.prefetch(Images.INSTANCE.flagIT().getSafeUri());
	// Image.prefetch(Images.INSTANCE.flagFR().getSafeUri());
	// Image.prefetch(Images.INSTANCE.flagDE().getSafeUri());
	//
	// Image.prefetch(Images.INSTANCE.githubWhite().getSafeUri());
	// Image.prefetch(Images.INSTANCE.extensionWhite().getSafeUri());
	// Image.prefetch(Images.INSTANCE.fingerprintWhite().getSafeUri());
	// Image.prefetch(Images.INSTANCE.headlineWhite().getSafeUri());
	// Image.prefetch(Images.INSTANCE.visibilityWhite().getSafeUri());

	private void start() {

		JsWindowHelper.get().enableResizeOnBeforePrint();

		Defaults.get().getGlobal().setDefaultFontFamily("'Lato', sans-serif");

		Defaults.get().getGlobal().getTitle().setFontSize(16);

		Defaults.get().getPlugins().register(new ChartBackgroundColor());

		// Defaults.get().getControllers().extend(new AbstractController() {
		//
		// @Override
		// public ControllerType getType() {
		// return MyLineChart.TYPE;
		// }
		//
		// @Override
		// public void draw(ControllerContext jsThis, IsChart chart, double ease) {
		// super.draw(jsThis, chart, ease);
		//
		// DatasetMetaItem metaItem = chart.getDatasetMeta(jsThis.getIndex());
		// List<DatasetItem> items = metaItem.getDatasets();
		// for (DatasetItem item : items) {
		// DatasetViewItem view = item.getView();
		// Context2dItem ctx = chart.getCanvas().getContext2d();
		// ctx.save();
		// ctx.setStrokeColor(view.getBorderColorAsString());
		// ctx.setLineWidth(1D);
		// ctx.strokeRect(view.getX() - 10, view.getY() - 10, 20, 20);
		// ctx.restore();
		// }
		// }
		// });

		// Defaults.get().getControllers().extend(new MyHorizontalBarController());

		LabelsPlugin.enable();

		DataLabelsPlugin.enable();

		ZoomPlugin.enable();

		AnnotationPlugin.enable();

		HTMLDivElement div = (HTMLDivElement) DomGlobal.document.createElement("div");

		DomGlobal.document.body.appendChild(div);

		MainView main = new MainView();
		div.appendChild(main.getElement());
	}

}
