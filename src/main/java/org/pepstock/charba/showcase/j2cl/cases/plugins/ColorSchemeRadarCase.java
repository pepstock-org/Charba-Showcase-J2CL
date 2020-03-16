package org.pepstock.charba.showcase.j2cl.cases.plugins;

import java.util.List;

import org.pepstock.charba.client.RadarChart;
import org.pepstock.charba.client.colors.GoogleChartColor;
import org.pepstock.charba.client.colors.IsColor;
import org.pepstock.charba.client.commons.Key;
import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.RadarDataset;
import org.pepstock.charba.client.enums.Position;
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

public class ColorSchemeRadarCase extends BaseComposite {

	private final HTMLTableElement mainPanel;

	private final RadarChart chart = new RadarChart();
	
    private final HTMLSelectElement category = (HTMLSelectElement) DomGlobal.document.createElement("select");
    
    private final HTMLSelectElement name = (HTMLSelectElement) DomGlobal.document.createElement("select");
    
    private final HTMLInputElement reverse = (HTMLInputElement) DomGlobal.document.createElement("input");

	public ColorSchemeRadarCase() {
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
		chart.getOptions().getLegend().setPosition(Position.TOP);
		chart.getOptions().getTitle().setDisplay(true);
		chart.getOptions().getTitle().setText("Coloring radar chart");

		RadarDataset dataset1 = chart.newDataset();
		dataset1.setLabel("dataset 1");

		IsColor color1 = GoogleChartColor.values()[0];

		dataset1.setBorderWidth(2);
		dataset1.setBorderColor(color1);
		dataset1.setData(getFixedDigits(months));

		ColorSchemesOptions options = new ColorSchemesOptions();
		options.setSchemeScope(SchemeScope.DATASET);

		chart.getOptions().getPlugins().setOptions(ColorSchemes.ID, options);
		chart.getPlugins().add(ColorSchemes.get());

		chart.getData().setLabels(getLabels());
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

		HTMLButtonElement addData = (HTMLButtonElement) DomGlobal.document.createElement("button");
		addData.onclick = (p0) -> {
			handleAddData();
			return null;
		};
		addData.className = "gwt-Button";
		addData.textContent = "Add data";
		addData.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(addData);

		HTMLButtonElement removeData = (HTMLButtonElement) DomGlobal.document.createElement("button");
		removeData.onclick = (p0) -> {
			handleRemoveData();
			return null;
		};
		removeData.className = "gwt-Button";
		removeData.textContent = "Remove data";
		removeData.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(removeData);
		
		category.oninput = (p0) -> {
			handleCategory();
			return null;
		};
		category.className = "gwt-ListBox";
		category.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(category);
		
		name.oninput = (p0) -> {
			handleName();
			return null;
		};
		name.className = "gwt-ListBox";
		name.style.marginRight = MarginRightUnionType.of("5px");
		actionsCol.appendChild(name);
		
		String reverseID = "reverse" + (int)(Math.random() * 1000D);

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
	
	protected void handleRandomize() {
		for (Dataset dataset : chart.getData().getDatasets()) {
			dataset.setData(getRandomDigits(months));
		}
		chart.update();

	}

	protected void handleAddDataset() {
		List<Dataset> datasets = chart.getData().getDatasets();

		RadarDataset dataset = chart.newDataset();
		dataset.setLabel("dataset " + (datasets.size() + 1));

		IsColor color = GoogleChartColor.values()[datasets.size()];
		dataset.setBackgroundColor(color.alpha(0.2));
		dataset.setBorderColor(color.toHex());
		dataset.setBorderWidth(2);
		dataset.setData(getRandomDigits(months));

		datasets.add(dataset);

		chart.update();
	}

	protected void handleRemoveDataset() {
		removeDataset(chart);
	}

	protected void handleAddData() {
		addData(chart);
	}

	protected void handleRemoveData() {
		removeData(chart);
	}

	protected void handleReverse() {
		ColorSchemesOptions options = chart.getOptions().getPlugins().getOptions(ColorSchemes.ID, ColorSchemes.FACTORY);
		options.setReverse(reverse.checked);
		chart.getOptions().getPlugins().setOptions(ColorSchemes.ID, options);
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
		while(name.firstChild != null) {
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
