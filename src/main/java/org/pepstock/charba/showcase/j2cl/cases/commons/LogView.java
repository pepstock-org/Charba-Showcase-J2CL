package org.pepstock.charba.showcase.j2cl.cases.commons;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLPreElement;

public class LogView extends BaseComposite {

	private static final int MAX = 8;

	private int counter = 1;

	private final HTMLDivElement log;

	private final HTMLPreElement element;

	public LogView() {
		log = (HTMLDivElement) DomGlobal.document.createElement("div");
		element = (HTMLPreElement) DomGlobal.document.createElement("pre");
		log.appendChild(element);
	}

	@Override
	public HTMLElement getElement() {
		return log;
	}

	public void addLogEvent(String innerHtml) {
		HTMLDivElement newDiv = (HTMLDivElement) DomGlobal.document.createElement("div");
		newDiv.innerHTML = counter + ". " + innerHtml;
		element.insertBefore(newDiv, element.firstChild);
		if (element.childElementCount > MAX) {
			element.removeChild(element.lastChild);
		}
		counter++;
	}
}
