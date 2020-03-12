package org.pepstock.charba.showcase.j2cl.views;

import org.pepstock.charba.showcase.j2cl.cases.commons.AbstractComposite;

import elemental2.dom.CSSProperties.BorderWidthUnionType;
import elemental2.dom.CSSProperties.MinWidthUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.Event;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;

public class MainView extends AbstractComposite {

	private final HTMLDivElement content;

	private final HTMLTableElement mainPanel;

	private HTMLElement currentPanel;

	private enum MenuItem
	{
		CHARTS("Charts", "icons/showcaseCharts.png"),
		ELEMENTS("Elements", "icons/showcaseElements.png"),
		PLUGINS("Plugins", "icons/showcasePlugins.png"),
		COLORING("Coloring", "icons/showcaseColoring.png"),
		EXTENSIONS("Extensions", "icons/showcaseExtensions.png"),
		MISC("Miscellaneous", "icons/showcaseMiscellaneous.png");

		private final String label;

		private final String imgSrc;

		private MenuItem(String label, String imgSrc) {
			this.label = label;
			this.imgSrc = imgSrc;
		}

		public String getLabel() {
			return label;
		}

		public String getImgSrc() {
			return imgSrc;
		}

	}

	public MainView() {
		mainPanel = (HTMLTableElement) DomGlobal.document.createElement("table");
		mainPanel.width = "100%";

		HTMLTableRowElement singleRow = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
		singleRow.style.width = WidthUnionType.of("100%");
		mainPanel.appendChild(singleRow);

		HTMLTableCellElement menuCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		menuCol.style.width = WidthUnionType.of("250px");
		menuCol.style.minWidth = MinWidthUnionType.of("250px");
		menuCol.style.verticalAlign = "top";
		singleRow.appendChild(menuCol);

		loadMenu(menuCol);

		HTMLTableCellElement contentCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
		contentCol.style.width = WidthUnionType.of("100%");
		contentCol.style.textAlign = "center";
		contentCol.vAlign = "top";
		singleRow.appendChild(contentCol);

		content = (HTMLDivElement) DomGlobal.document.createElement("div");
		content.id = "myContent";
		content.style.textAlign = "center";
		content.style.width = WidthUnionType.of("100%");
		contentCol.appendChild(content);

		HomeView home = new HomeView();
		content.appendChild(home.getElement());
	}

	@Override
	public HTMLElement getElement() {
		return mainPanel;
	}

	private void loadMenu(HTMLTableCellElement menu) {
		HTMLElement title = (HTMLElement) DomGlobal.document.createElement("div");
		title.style.width = WidthUnionType.of("250px");
		title.style.textAlign = "center";
		title.innerHTML = " showcase";
		title.className = "myTitle";
		title.onclick = (p0) -> {
			handleHome(p0);
			return null;
		};
		menu.appendChild(title);

		HTMLTableElement menuPanel = (HTMLTableElement) DomGlobal.document.createElement("table");
		menuPanel.width = "100%";
		menuPanel.style.borderCollapse = "collapse";
		menu.appendChild(menuPanel);

		for (MenuItem item : MenuItem.values()) {
			HTMLTableRowElement singleRow = (HTMLTableRowElement) DomGlobal.document.createElement("tr");
			singleRow.style.width = WidthUnionType.of("100%");
			singleRow.style.borderWidth = BorderWidthUnionType.of("0px");
			singleRow.className = "myItem";
			menuPanel.appendChild(singleRow);

			HTMLTableCellElement imgCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
			imgCol.style.width = WidthUnionType.of("36px");
			singleRow.appendChild(imgCol);
			HTMLImageElement img = (HTMLImageElement) DomGlobal.document.createElement("img");
			img.src = item.getImgSrc();
			img.className = "myImgItem";
			imgCol.appendChild(img);
			img.onclick = (p0) -> {
				handleEvent(p0, item);
				return null;
			};

			HTMLTableCellElement labelCol = (HTMLTableCellElement) DomGlobal.document.createElement("td");
			labelCol.style.width = WidthUnionType.of("100%");
			singleRow.appendChild(labelCol);

			HTMLDivElement label = (HTMLDivElement) DomGlobal.document.createElement("div");
			label.innerHTML = item.getLabel();
			label.className = "myLabelItem";
			label.style.verticalAlign = "middle";
			label.onclick = (p0) -> {
				handleEvent(p0, item);
				return null;
			};
			labelCol.appendChild(label);
		}

	}

	private void handleEvent(Event event, MenuItem item) {
		switch (item) {
		case CHARTS:
			handleCharts(event);
			break;
		case ELEMENTS:
			handleElements(event);
			break;
		case PLUGINS:
			handlePlugins(event);
			break;
		case COLORING:
			handleColoring(event);
			break;
		case EXTENSIONS:
			handleExtensions(event);
			break;
		case MISC:
			handleMiscellaneous(event);
			break;
		default:
			break;
		}
	}

	private boolean changeSelection(Event event) {
		if (event.target instanceof HTMLElement) {
			HTMLElement w = (HTMLElement) event.target;
			if ("myImgItem".equalsIgnoreCase(w.className) || "myLabelItem".equalsIgnoreCase(w.className)) {
				if (currentPanel != null) {
					currentPanel.style.borderWidth = BorderWidthUnionType.of("0px");
				}
				currentPanel = (HTMLElement) (w.parentElement.parentElement);
				currentPanel.style.borderColor = "#d0d0d0";
				 currentPanel.style.borderWidth = BorderWidthUnionType.of("3px");
				 currentPanel.style.borderStyle = "dashed";
				return true;
			}
		}
		return false;
	}

	private void clearPreviousChart() {
		while (content.firstChild != null) {
			content.removeChild(content.firstChild);
		}
	}

	protected void handleHome(Event event) {
		if (currentPanel != null) {
			 currentPanel.style.borderWidth = BorderWidthUnionType.of("0px");
//			currentPanel.style.borderColor = "rgba(0,0,0,0)";
			currentPanel = null;
		}
		clearPreviousChart();
		content.appendChild(new HomeView().getElement());
	}

	protected void handleCharts(Event event) {
		if (changeSelection(event)) {
			clearPreviousChart();
			new ChartsView(content);
			// content.add(view);
		}
	}

	protected void handleExtensions(Event event) {
		if (changeSelection(event)) {
			clearPreviousChart();
			// content.add(new ExtensionsView(content));
		}
	}

	protected void handleElements(Event event) {
		if (changeSelection(event)) {
			clearPreviousChart();
			// content.add(new ElementsView(content));
		}
	}

	protected void handleColoring(Event event) {
		if (changeSelection(event)) {
			clearPreviousChart();
			// content.add(new ColoringView(content));
		}
	}

	protected void handlePlugins(Event event) {
		if (changeSelection(event)) {
			clearPreviousChart();
			// content.add(new PluginsView(content));
		}
	}

	protected void handleMiscellaneous(Event event) {
		if (changeSelection(event)) {
			clearPreviousChart();
			// content.add(new MiscellaneousView(content));
		}
	}

}
