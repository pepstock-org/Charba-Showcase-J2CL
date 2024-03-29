package org.pepstock.charba.showcase.j2cl.cases.miscellaneous;

import java.util.List;

import org.pepstock.charba.client.ChartType;
import org.pepstock.charba.client.Controller;
import org.pepstock.charba.client.Helpers;
import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.controllers.AbstractController;
import org.pepstock.charba.client.controllers.ControllerContext;
import org.pepstock.charba.client.controllers.ControllerProvider;
import org.pepstock.charba.client.controllers.ControllerType;
import org.pepstock.charba.client.dom.elements.Context2dItem;
import org.pepstock.charba.client.items.ChartElement;
import org.pepstock.charba.client.items.DatasetItem;
import org.pepstock.charba.client.items.PointElement;

public class MyLineChart extends LineChart {

	public static final ControllerType TYPE = new ControllerType("stock", ChartType.LINE, new ControllerProvider() {
		
		@Override
		public Controller provide(ControllerType controllerType) {
			return new AbstractController(TYPE) {

				@Override
				public void onAfterDraw(ControllerContext context, IsChart chart) {
					DatasetItem item = chart.getDatasetItem(context.getIndex());
					List<ChartElement> elements = item.getElements();
					for (ChartElement elem : elements) {
						if (elem instanceof PointElement) {
							PointElement pElem = (PointElement) elem;
							Context2dItem ctx = chart.getCanvas().getContext2d();
							Helpers.get().unclipArea(ctx);
							ctx.save();
							ctx.setStrokeColor(pElem.getOptions().getBorderColorAsString());
							ctx.setLineWidth(1D);
							ctx.strokeRect(elem.getX() - 10, elem.getY() - 10, 20, 20);
							ctx.restore();
						}
					}
				}
			};
		}
	});

	public MyLineChart() {
		super(TYPE);
	}

	@Override
	public MyLineDataset newDataset() {
		return newDataset(false);
	}

	@Override
	public MyLineDataset newDataset(boolean hidden) {
		return new MyLineDataset();
	}

}
