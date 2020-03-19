package org.pepstock.charba.showcase.j2cl.cases.coloring;

import org.pepstock.charba.client.LineChart;
import org.pepstock.charba.client.colors.HtmlColor;
import org.pepstock.charba.client.colors.Pattern;
import org.pepstock.charba.client.colors.tiles.TilesFactory;
import org.pepstock.charba.client.colors.tiles.TilesFactoryDefaults;
import org.pepstock.charba.client.data.LineDataset;
import org.pepstock.charba.client.enums.PointStyle;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.HTMLOptionElement;
import elemental2.dom.HTMLSelectElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class TilesPointStylesCase extends BaseComposite {

	private static final HtmlColor[] BACKGROUND = { HtmlColor.ORANGE_RED, HtmlColor.LIGHT_BLUE, HtmlColor.LIGHT_GREEN, HtmlColor.ORANGE, HtmlColor.IVORY };

	private static final HtmlColor[] COLORS = { HtmlColor.BLACK, HtmlColor.WHITE, HtmlColor.LIGHT_GRAY };

	private static final int ITEMS = 12;

	private final HTMLTableElement mainPanel;

	private final LineChart chart = new LineChart();

	private final HTMLSelectElement pointStyles = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private final HTMLSelectElement background = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private final HTMLSelectElement color = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private LineDataset dataset1 = null;

	public TilesPointStylesCase() {
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

		for (PointStyle myPointStyle : PointStyle.values()) {
			HTMLOptionElement pointStyleN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			pointStyleN.text = myPointStyle.name();
			pointStyleN.value = myPointStyle.name();
			pointStyles.add(pointStyleN);
		}

		HTMLOptionElement backgroundDefault = (HTMLOptionElement) DomGlobal.document.createElement("option");
		backgroundDefault.text = "Default";
		backgroundDefault.value = TilesFactoryDefaults.DEFAULT_BACKGROUND_COLOR_AS_STRING;
		background.add(backgroundDefault);
		for (HtmlColor myColor : BACKGROUND) {
			HTMLOptionElement backgroundN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			backgroundN.text = myColor.name();
			backgroundN.value = myColor.toRGB();
			background.add(backgroundN);
		}

		HTMLOptionElement colorDefault = (HTMLOptionElement) DomGlobal.document.createElement("option");
		colorDefault.text = "Default";
		colorDefault.value = TilesFactoryDefaults.DEFAULT_SHAPE_COLOR_AS_STRING;
		color.add(colorDefault);
		for (HtmlColor myColor : COLORS) {
			HTMLOptionElement colorN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			colorN.text = myColor.name();
			colorN.value = myColor.toRGB();
			color.add(colorN);
		}

		Pattern p = TilesFactory.createPattern(PointStyle.CIRCLE);

		chart.getOptions().setResponsive(true);
		chart.getOptions().getLegend().setDisplay(true);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Using tiles on line chart datasets");

		dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");
		dataset1.setBackgroundColor(p);
		dataset1.setData(getFixedDigits(ITEMS));

		chart.getData().setLabels(getLabels(ITEMS));
		chart.getData().setDatasets(dataset1);
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

		configListBox(actionsCol, pointStyles, "Point style ", "pointStyles");

		configListBox(actionsCol, color, "Color ", "color");

		configListBox(actionsCol, background, "Background color ", "background");

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
		dataset1.setData(getRandomDigits(ITEMS));
		applyTile();
	}

	protected void handleShapes() {
		applyTile();
	}

	protected void applyTile() {
		String selectedPointStyle = pointStyles.options.getAt(pointStyles.selectedIndex).value;
		String selectedColor = color.options.getAt(color.selectedIndex).value;
		String selectedBackground = background.options.getAt(background.selectedIndex).value;
		PointStyle pointStyle = PointStyle.valueOf(selectedPointStyle);
		Pattern p = TilesFactory.createPattern(pointStyle, selectedBackground, selectedColor);
		dataset1.setBackgroundColor(p);
		chart.update();
	}

	private void configListBox(HTMLTableCellElement actionsCol, HTMLSelectElement listBox, String label, String prefixId) {
		String listId = prefixId + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForListBox = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForListBox.htmlFor = listId;
		labelForListBox.appendChild(DomGlobal.document.createTextNode(label));
		actionsCol.appendChild(labelForListBox);

		listBox.id = listId;
		listBox.oninput = (p0) -> {
			handleShapes();
			return null;
		};
		listBox.className = "gwt-ListBox";
		listBox.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(listBox);
	}

}
