package org.pepstock.charba.showcase.j2cl.views;

import elemental2.dom.HTMLElement;

abstract class AbstractView  {

	protected HTMLElement content;

	public AbstractView(HTMLElement content) {
		this.content = content;
	}

	protected void clearPreviousChart() {
		while(content.firstChild != null) {
			content.removeChild(content.firstChild);
		}
	}

}
