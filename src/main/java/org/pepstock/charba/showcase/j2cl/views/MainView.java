package org.pepstock.charba.showcase.j2cl.views;

import org.pepstock.charba.showcase.j2cl.cases.commons.AbstractComposite;

import elemental2.dom.CSSProperties.BorderWidthUnionType;
import elemental2.dom.CSSProperties.LineHeightUnionType;
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
		CHARTS("Charts", "images/showcaseCharts.png"),
		ELEMENTS("Elements", "images/showcaseElements.png"),
		PLUGINS("Plugins", "images/showcasePlugins.png"),
		COLORING("Coloring", "images/showcaseColoring.png"),
		EXTENSIONS("Extensions", "images/showcaseExtensions.png"),
		MISC("Miscellaneous", "images/showcaseMiscellaneous.png");

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

		HTMLDivElement parent = (HTMLDivElement) DomGlobal.document.createElement("div");
		parent.style.width = WidthUnionType.of("250px");
		parent.style.lineHeight = LineHeightUnionType.of("64px");
		menu.appendChild(parent);

		for (MenuItem item : MenuItem.values()) {
			HTMLDivElement row = (HTMLDivElement) DomGlobal.document.createElement("div");
			row.style.width = WidthUnionType.of("250px");
			row.style.borderWidth = BorderWidthUnionType.of("3px");
			row.style.borderColor = "rgba(0,0,0,0)";
			row.style.borderStyle = "dashed";
			row.style.verticalAlign = "middle";
			row.className = "myItem";
			parent.appendChild(row);

			HTMLImageElement img = (HTMLImageElement) DomGlobal.document.createElement("img");
			img.src = item.getImgSrc();
			img.className = "myImgItem";
			img.style.display = "inline-block";
			img.style.verticalAlign = "middle";
			img.style.width = WidthUnionType.of("36px");
			row.appendChild(img);
			img.onclick = (p0) -> {
				handleEvent(p0, item);
				return null;
			};
			HTMLDivElement label = (HTMLDivElement) DomGlobal.document.createElement("div");
			label.innerHTML = item.getLabel();
			label.className = "myLabelItem";
			label.style.verticalAlign = "middle";
			label.style.display = "inline-block";
			label.onclick = (p0) -> {
				handleEvent(p0, item);
				return null;
			};
			row.appendChild(label);
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
					currentPanel.style.borderColor = "rgba(0,0,0,0)";
				}
				currentPanel = (HTMLElement) (w.parentElement);
				currentPanel.style.borderColor = "#d0d0d0";
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
			currentPanel.style.borderColor = "rgba(0,0,0,0)";
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
			new ElementsView(content);
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
			new PluginsView(content);
		}
	}

	protected void handleMiscellaneous(Event event) {
		if (changeSelection(event)) {
			clearPreviousChart();
			// content.add(new MiscellaneousView(content));
		}
	}

}
