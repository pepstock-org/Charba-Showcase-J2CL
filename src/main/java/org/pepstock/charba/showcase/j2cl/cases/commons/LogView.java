package org.pepstock.charba.showcase.j2cl.cases.commons;

import elemental2.dom.CSSProperties.HeightUnionType;
import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLPreElement;

public class LogView extends BaseComposite {

	private static final int MAX = 8;

	private int counter = 1;

	private final HTMLDivElement log = (HTMLDivElement) DomGlobal.document.createElement("div");

	private final HTMLPreElement element = (HTMLPreElement) DomGlobal.document.createElement("pre");

	public LogView() {
		HTMLDivElement title = (HTMLDivElement) DomGlobal.document.createElement("div");
		title.className = "myLogTitle";
		title.textContent = "Event logs";
		title.onclick = (p0) -> {
			while(element.firstChild != null) {
				element.removeChild(element.firstChild);
			}
			counter = 1;
			return null;
		};
		log.appendChild(title);
		log.appendChild(element);
		log.style.width = WidthUnionType.of("80%");
		log.style.height = HeightUnionType.of("100%");	
	}

	@Override
	public HTMLElement getElement() {
		return log;
	}

	public void addLogEvent(String innerHtml) {
		HTMLDivElement newDiv = (HTMLDivElement) DomGlobal.document.createElement("div");
		newDiv.innerHTML = counter + ". " + innerHtml;
		newDiv.style.whiteSpace = "nowrap";
		element.insertBefore(newDiv, element.firstChild);
		if (element.childElementCount > MAX) {
			element.removeChild(element.lastChild);
		}
		counter++;
	}
}
