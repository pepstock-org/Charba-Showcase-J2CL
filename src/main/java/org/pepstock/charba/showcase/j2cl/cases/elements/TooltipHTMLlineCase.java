package org.pepstock.charba.showcase.j2cl.cases.elements;

import java.util.List;

import org.pepstock.charba.client.IsChart;
import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.callbacks.TooltipExternalCallback;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.configuration.CartesianCategoryAxis;
import org.pepstock.charba.client.configuration.CartesianLinearAxis;
import org.pepstock.charba.client.configuration.Tooltips;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.dom.elements.CastHelper;
import org.pepstock.charba.client.dom.enums.Unit;
import org.pepstock.charba.client.enums.Fill;
import org.pepstock.charba.client.enums.InteractionMode;
import org.pepstock.charba.client.enums.Position;
import org.pepstock.charba.client.enums.TooltipAlign;
import org.pepstock.charba.client.enums.TooltipPosition;
import org.pepstock.charba.client.items.TooltipBodyItem;
import org.pepstock.charba.client.items.TooltipLabelColor;
import org.pepstock.charba.client.items.TooltipModel;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.BorderWidthUnionType;
import elemental2.dom.CSSProperties.FontSizeUnionType;
import elemental2.dom.CSSProperties.HeightUnionType;
import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.OpacityUnionType;
import elemental2.dom.CSSProperties.PaddingLeftUnionType;
import elemental2.dom.CSSProperties.PaddingTopUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class TooltipHTMLlineCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	public TooltipHTMLlineCase() {
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
		chart.getOptions().getLegend().setPosition(Position.TOP);
		chart.getOptions().getLegend().getLabels().setUsePointStyle(true);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("HTML custom tooltip on line chart");
		chart.getOptions().getTooltips().setEnabled(false);
		chart.getOptions().getTooltips().setPosition(TooltipPosition.NEAREST);
		chart.getOptions().getTooltips().setMode(InteractionMode.INDEX);
		
		chart.getOptions().getTooltips().setUsePointStyle(true);
		
		chart.getOptions().getTooltips().setExternalCallback(new TooltipExternalCallback() {

			private HTMLDivElement element = null;

			@Override
			public void onExternal(IsChart chart, TooltipModel model) {
				if (element == null) {
					element = (HTMLDivElement) DomGlobal.document.createElement("div");
					chart.getChartElement().appendChild(CastHelper.toDiv(element));
				}
				if (model.getOpacity() == 0) {
					element.style.opacity = OpacityUnionType.of(0D);
					return;
				}
				if (TooltipAlign.AUTO.equals(model.getYAlign())) {
					element.className = model.getYAlign().value();
				} else {
					element.className = "no-transform";
				}
				StringBuilder innerHTML = new StringBuilder("<table cellpadding=2>");

				if (model.getBody() != null && !model.getBody().isEmpty()) {
					innerHTML.append("<thead>");
					if (model.getTitle() != null && !model.getTitle().isEmpty()) {
						for (String title : model.getTitle()) {
							innerHTML.append("<tr><th style='font-size: 18px;'>").append(title).append("</th></tr>");
						}
					}
					innerHTML.append("</thead><tbody>");
					List<TooltipLabelColor> colors = model.getLabelColors();
					int index = 0;
					for (TooltipBodyItem item : model.getBody()) {
						List<String> lines = item.getLines();
						for (int i = 0; i < lines.size(); i++) {
							TooltipLabelColor color = colors.get(index);
							HTMLDivElement wrapper = (HTMLDivElement) DomGlobal.document.createElement("div");
							HTMLElement span = (HTMLElement) DomGlobal.document.createElement("span");
							span.style.display = "inline-block";
							span.style.width = WidthUnionType.of("10px");
							span.style.height = HeightUnionType.of("10px");
							span.style.marginRight = MarginRightUnionType.of("10px");
							span.style.backgroundColor = color.getBackgroundColor().toRGBA();
							span.style.borderColor = color.getBorderColor().toRGBA();
							span.style.borderStyle = "solid";
							span.style.borderWidth = BorderWidthUnionType.of("2px");
							wrapper.appendChild(span);
							innerHTML.append("<tr><td style='white-space: nowrap;'>").append(wrapper.innerHTML).append(lines.get(i)).append("</td></tr>");
						}
						index++;
					}
					innerHTML.append("</tbody>");
				}
				innerHTML.append("</table>");
				element.innerHTML = innerHTML.toString();
				element.style.left = Unit.PX.format(model.getCaretX());
				element.style.top = Unit.PX.format(model.getCaretY());
				
				Tooltips tooltips = chart.getOptions().getTooltips();
				element.style.fontSize = FontSizeUnionType.of(tooltips.getBodyFont().getSize() + "px");
				element.style.paddingLeft = PaddingLeftUnionType.of(tooltips.getPadding().getLeft() + "px");
				element.style.paddingTop = PaddingTopUnionType.of(tooltips.getPadding().getTop() + "px");

				element.style.opacity = OpacityUnionType.of(1D);
				element.style.backgroundColor = "rgba(0, 0, 0, .7)";
				element.style.position = "absolute";
				element.style.color = "white";
				element.style.setProperty("borderRadius", "3px");
				element.style.setProperty("WebkitTransition", "all .1s ease");
				element.style.setProperty("transition", "all .1s ease");
				element.style.setProperty("pointerEvents", "none");
				element.style.setProperty("WebkitTransform", "translate(-50%, 0)");
				element.style.setProperty("transform", "translate(-50%, 0)");
			}
		});

		LineDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		IsColor color1 = GoogleChartColor.values()[0];

		dataset1.setBackgroundColor(color1.toHex());
		dataset1.setBorderColor(color1.toHex());
		dataset1.setData(getRandomDigits(months));
		dataset1.setFill(Fill.FALSE);

		LineDataset dataset2 = chart.newDataset();
		dataset2.setLabel("dataset 2");

		IsColor color2 = GoogleChartColor.values()[1];

		dataset2.setBackgroundColor(color2.toHex());
		dataset2.setBorderColor(color2.toHex());
		dataset2.setData(getRandomDigits(months));
		dataset2.setFill(Fill.FALSE);

		CartesianCategoryAxis axis1 = new CartesianCategoryAxis(chart);
		axis1.setDisplay(true);
		axis1.getTitle().setDisplay(true);
		axis1.getTitle().setText("Month");

		CartesianLinearAxis axis2 = new CartesianLinearAxis(chart);
		axis2.setDisplay(true);
		axis2.getTitle().setDisplay(true);
		axis2.getTitle().setText("Value");

		chart.getOptions().getScales().setAxes(axis1, axis2);

		chart.getData().setLabels(getLabels());
		chart.getData().setDatasets(dataset1, dataset2);
		
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
			dataset.setData(getRandomDigits(months));
		}
		chart.update();
	}

}
