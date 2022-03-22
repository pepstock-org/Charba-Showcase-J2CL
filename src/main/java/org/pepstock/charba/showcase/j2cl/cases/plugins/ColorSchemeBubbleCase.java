package org.pepstock.charba.showcase.j2cl.cases.plugins;

import java.util.List;
import java.util.Random;

import org.pepstock.charba.client.BubbleChart;
import org.pepstock.charba.client.commons.Key;
import org.pepstock.charba.client.data.BubbleDataset;
import org.pepstock.charba.client.data.DataPoint;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.impl.plugins.ColorScheme;
import org.pepstock.charba.client.impl.plugins.ColorSchemes;
import org.pepstock.charba.client.impl.plugins.ColorSchemesOptions;
import org.pepstock.charba.client.impl.plugins.enums.BrewerScheme;
import org.pepstock.charba.client.impl.plugins.enums.GoogleChartScheme;
import org.pepstock.charba.client.impl.plugins.enums.GwtMaterialScheme;
import org.pepstock.charba.client.impl.plugins.enums.OfficeScheme;
import org.pepstock.charba.client.impl.plugins.enums.SchemeScope;
import org.pepstock.charba.client.impl.plugins.enums.TableauScheme;
import org.pepstock.charba.showcase.j2cl.cases.commons.BaseComposite;

import elemental2.dom.CSSProperties.MarginRightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.HTMLOptionElement;
import elemental2.dom.HTMLSelectElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class ColorSchemeBubbleCase extends BaseComposite {

	private static final int AMOUNT_OF_POINTS = 16;
	private static final int MIN_XY = -150;
	private static final int MAX_XY = 100;

	private final HTMLTableElement mainPanel;

	private final BubbleChart chart = new BubbleChart();

	private final HTMLInputElement data = (HTMLInputElement) DomGlobal.document.createElement("input");

	private final HTMLSelectElement category = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private final HTMLSelectElement name = (HTMLSelectElement) DomGlobal.document.createElement("select");

	private final HTMLInputElement reverse = (HTMLInputElement) DomGlobal.document.createElement("input");

	public ColorSchemeBubbleCase() {
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
		HTMLOptionElement category1 = (HTMLOptionElement) DomGlobal.document.createElement("option");
		category1.text = "Brewer";
		category1.value = "brewer";
		category.add(category1);
		HTMLOptionElement category2 = (HTMLOptionElement) DomGlobal.document.createElement("option");
		category2.text = "MS Office";
		category2.value = "office";
		category.add(category2);
		HTMLOptionElement category3 = (HTMLOptionElement) DomGlobal.document.createElement("option");
		category3.text = "Tableau";
		category3.value = "tableau";
		category.add(category3);
		HTMLOptionElement category4 = (HTMLOptionElement) DomGlobal.document.createElement("option");
		category4.text = "GWT material";
		category4.value = "gwtmaterial";
		category.add(category4);
		HTMLOptionElement category5 = (HTMLOptionElement) DomGlobal.document.createElement("option");
		category5.text = "Google Chart";
		category5.value = "googlechart";
		category.add(category5);

		int index = 0;
		for (BrewerScheme scheme : BrewerScheme.values()) {
			HTMLOptionElement schemeN = (HTMLOptionElement) DomGlobal.document.createElement("option");
			schemeN.text = scheme.value();
			schemeN.value = scheme.value();
			name.add(schemeN);
			if (BrewerScheme.PAIRED12.equals(scheme)) {
				name.selectedIndex = index;
			}
			index++;
		}

		chart.getOptions().setResponsive(true);
		chart.getOptions().getLegend().setDisplay(true);
		chart.getOptions().getLegend().getLabels().setUsePointStyle(true);
		chart.getOptions().getLegend().getLabels().getFont().setSize(18);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Coloring buble chart");

		BubbleDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		String[] colors = new String[AMOUNT_OF_POINTS];
		String[] hcolors = new String[AMOUNT_OF_POINTS];
		String[] bcolors = new String[AMOUNT_OF_POINTS];
		int[] bwidth = new int[AMOUNT_OF_POINTS];
		int[] hbwidth = new int[AMOUNT_OF_POINTS];

		DataPoint[] dp1 = new DataPoint[AMOUNT_OF_POINTS];
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			dp1[i] = new DataPoint();
			dp1[i].setX(getData());
			dp1[i].setY(getData());
			dp1[i].setR(getData(0, 50));
			colors[i] = colorize(false, dp1[i]);
			bcolors[i] = colorize(true, dp1[i]);
			bwidth[i] = Math.min(Math.max(1, i + 1), 5);
			hcolors[i] = "transparent";
			hbwidth[i] = (int) Math.round(8 * dp1[i].getR() / 1000);
		}
		dataset1.setBackgroundColor(colors);
		dataset1.setBorderColor(bcolors);
		dataset1.setBorderWidth(bwidth);
		dataset1.setHoverBackgroundColor(hcolors);
		dataset1.setHoverBorderWidth(hbwidth);
		dataset1.setDataPoints(dp1);

		chart.getPlugins().add(ColorSchemes.get());
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

		HTMLButtonElement addDataset = (HTMLButtonElement) DomGlobal.document.createElement("button");
		addDataset.onclick = (p0) -> {
			handleAddDataset();
			return null;
		};
		addDataset.className = "gwt-Button";
		addDataset.textContent = "Add dataset";
		addDataset.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(addDataset);

		HTMLButtonElement removeDataset = (HTMLButtonElement) DomGlobal.document.createElement("button");
		removeDataset.onclick = (p0) -> {
			handleRemoveDataset();
			return null;
		};
		removeDataset.className = "gwt-Button";
		removeDataset.textContent = "Remove dataset";
		removeDataset.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(removeDataset);

		String dataColorsID = "dataColors" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForDataColors = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForDataColors.htmlFor = dataColorsID;
		labelForDataColors.appendChild(DomGlobal.document.createTextNode("Data colors "));
		actionsCol.appendChild(labelForDataColors);

		data.id = dataColorsID;
		data.onclick = (p0) -> {
			handleScope();
			return null;
		};
		data.type = "checkbox";
		data.className = "gwt-CheckBox";
		data.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(data);

		category.onchange = (p0) -> {
			handleCategory();
			return null;
		};
		category.className = "gwt-ListBox";
		category.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(category);

		name.onchange = (p0) -> {
			handleName();
			return null;
		};
		name.className = "gwt-ListBox";
		name.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(name);

		String reverseID = "reverse" + (int) (Math.random() * 1000D);

		HTMLLabelElement labelForReverse = (HTMLLabelElement) DomGlobal.document.createElement("label");
		labelForReverse.htmlFor = reverseID;
		labelForReverse.appendChild(DomGlobal.document.createTextNode("Reverse "));
		actionsCol.appendChild(labelForReverse);

		reverse.id = reverseID;
		reverse.onclick = (p0) -> {
			handleReverse();
			return null;
		};
		reverse.type = "checkbox";
		reverse.className = "gwt-CheckBox";
		reverse.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(reverse);

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

	private int getData() {
		return getData(MIN_XY, MAX_XY);
	}

	private int getData(int min, int max) {
		Random random = new Random();
		return random.nextInt(max + 1 - min) + min;
	}

	private String colorize(boolean opaque, DataPoint value) {
		double x = value.getX() / 100;
		double y = value.getY() / 100;
		int r = x < 0 && y < 0 ? 250 : x < 0 ? 150 : y < 0 ? 50 : 0;
		int g = x < 0 && y < 0 ? 0 : x < 0 ? 50 : y < 0 ? 150 : 250;
		int b = x < 0 && y < 0 ? 0 : x > 0 && y > 0 ? 250 : 150;
		double a = opaque ? 1 : 0.2 * value.getR() / 50;

		return "rgba(" + r + "," + g + "," + b + "," + a + ")";
	}

	protected void handleRandomize() {
		String[] colors = new String[AMOUNT_OF_POINTS];
		String[] bcolors = new String[AMOUNT_OF_POINTS];
		int[] bwidth = new int[AMOUNT_OF_POINTS];
		int[] hbwidth = new int[AMOUNT_OF_POINTS];

		for (Dataset dataset : chart.getData().getDatasets()) {
			BubbleDataset bDataset = (BubbleDataset) dataset;
			int i = 0;
			for (DataPoint dp : bDataset.getDataPoints()) {
				dp.setX(getData());
				dp.setY(getData());
				dp.setR(getData(0, 50));
				colors[i] = colorize(false, dp);
				bcolors[i] = colorize(true, dp);
				bwidth[i] = Math.min(Math.max(1, i + 1), 5);
				hbwidth[i] = (int) Math.round(8 * dp.getR() / 1000);
				i++;
			}
			bDataset.setBackgroundColor(colors);
			bDataset.setBorderColor(bcolors);
			bDataset.setBorderWidth(bwidth);
		}
		chart.update();
	}

	protected void handleAddDataset() {
		List<Dataset> datasets = chart.getData().getDatasets();
		BubbleDataset dataset = chart.newDataset();
		dataset.setLabel("dataset " + (datasets.size() + 1));

		String[] colors = new String[AMOUNT_OF_POINTS];
		String[] hcolors = new String[AMOUNT_OF_POINTS];
		String[] bcolors = new String[AMOUNT_OF_POINTS];
		int[] bwidth = new int[AMOUNT_OF_POINTS];
		int[] hbwidth = new int[AMOUNT_OF_POINTS];

		DataPoint[] dp1 = new DataPoint[AMOUNT_OF_POINTS];
		for (int i = 0; i < AMOUNT_OF_POINTS; i++) {
			dp1[i] = new DataPoint();
			dp1[i].setX(getData());
			dp1[i].setY(getData());
			dp1[i].setR(getData(0, 50));
			colors[i] = colorize(false, dp1[i]);
			bcolors[i] = colorize(true, dp1[i]);
			bwidth[i] = Math.min(Math.max(1, i + 1), 5);
			hcolors[i] = "transparent";
			hbwidth[i] = (int) Math.round(8 * dp1[i].getR() / 1000);
		}
		dataset.setBackgroundColor(colors);
		dataset.setBorderColor(bcolors);
		dataset.setBorderWidth(bwidth);
		dataset.setHoverBackgroundColor(hcolors);
		dataset.setHoverBorderWidth(hbwidth);
		dataset.setDataPoints(dp1);

		datasets.add(dataset);

		chart.update();
	}

	protected void handleRemoveDataset() {
		removeDataset(chart);
	}

	protected void handleScope() {
		ColorSchemesOptions options = chart.getOptions().getPlugins().getOptions(ColorSchemes.ID, ColorSchemes.FACTORY);
		if (data.checked) {
			options.setSchemeScope(SchemeScope.DATA);
		} else {
			options.setSchemeScope(SchemeScope.DATASET);
		}
		chart.update();
	}

	protected void handleReverse() {
		ColorSchemesOptions options = chart.getOptions().getPlugins().getOptions(ColorSchemes.ID, ColorSchemes.FACTORY);
		options.setReverse(reverse.checked);
		chart.update();
	}

	protected void handleCategory() {
		String selected = category.options.getAt(category.selectedIndex).value;
		if ("brewer".equalsIgnoreCase(selected)) {
			clearNames();
			int index = 0;
			for (ColorScheme scheme : BrewerScheme.values()) {
				HTMLOptionElement schemeN = (HTMLOptionElement) DomGlobal.document.createElement("option");
				schemeN.text = scheme.value();
				schemeN.value = scheme.value();
				name.add(schemeN);
				if (BrewerScheme.PAIRED12.equals(scheme)) {
					name.selectedIndex = index;
				}
				index++;
			}
		} else if ("office".equalsIgnoreCase(selected)) {
			clearNames();
			for (ColorScheme scheme : OfficeScheme.values()) {
				HTMLOptionElement schemeN = (HTMLOptionElement) DomGlobal.document.createElement("option");
				schemeN.text = scheme.value();
				schemeN.value = scheme.value();
				name.add(schemeN);
			}
			name.selectedIndex = 0;
		} else if ("tableau".equalsIgnoreCase(selected)) {
			clearNames();
			for (ColorScheme scheme : TableauScheme.values()) {
				HTMLOptionElement schemeN = (HTMLOptionElement) DomGlobal.document.createElement("option");
				schemeN.text = scheme.value();
				schemeN.value = scheme.value();
				name.add(schemeN);
			}
			name.selectedIndex = 0;
		} else if ("gwtmaterial".equalsIgnoreCase(selected)) {
			clearNames();
			for (ColorScheme scheme : GwtMaterialScheme.values()) {
				HTMLOptionElement schemeN = (HTMLOptionElement) DomGlobal.document.createElement("option");
				schemeN.text = scheme.value();
				schemeN.value = scheme.value();
				name.add(schemeN);
			}
			name.selectedIndex = 0;
		} else if ("googlechart".equalsIgnoreCase(selected)) {
			clearNames();
			for (ColorScheme scheme : GoogleChartScheme.values()) {
				HTMLOptionElement schemeN = (HTMLOptionElement) DomGlobal.document.createElement("option");
				schemeN.text = scheme.value();
				schemeN.value = scheme.value();
				name.add(schemeN);
			}
			name.selectedIndex = 0;
		}
		handleName();
		chart.update();
	}

	private void clearNames() {
		while (name.firstChild != null) {
			name.removeChild(name.firstChild);
		}
	}

	protected void handleName() {
		ColorSchemesOptions options = chart.getOptions().getPlugins().getOptions(ColorSchemes.ID, ColorSchemes.FACTORY);
		String selected = category.options.getAt(category.selectedIndex).value;
		if ("brewer".equalsIgnoreCase(selected)) {
			options.setScheme(Key.getKeyByValue(BrewerScheme.values(), name.options.getAt(name.selectedIndex).value));
			options.setBackgroundColorAlpha(0.5D);
		} else if ("office".equalsIgnoreCase(selected)) {
			options.setScheme(Key.getKeyByValue(OfficeScheme.values(), name.options.getAt(name.selectedIndex).value));
			options.setBackgroundColorAlpha(0.5D);
		} else if ("tableau".equalsIgnoreCase(selected)) {
			options.setScheme(Key.getKeyByValue(TableauScheme.values(), name.options.getAt(name.selectedIndex).value));
			options.setBackgroundColorAlpha(0.5D);
		} else if ("gwtmaterial".equalsIgnoreCase(selected)) {
			options.setScheme(Key.getKeyByValue(GwtMaterialScheme.values(), name.options.getAt(name.selectedIndex).value));
			options.setBackgroundColorAlpha(0.95D);
		} else if ("googlechart".equalsIgnoreCase(selected)) {
			options.setScheme(Key.getKeyByValue(GoogleChartScheme.values(), name.options.getAt(name.selectedIndex).value));
			options.setBackgroundColorAlpha(0.5D);
		}
		chart.update();
	}

}
