package org.pepstock.charba.showcase.j2cl.cases.commons;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLImageElement;

public final class Images {

	private static final Images INSTANCE = new Images();

	public final HTMLImageElement github = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement githubWhite = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement extensionWhite = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement fingerprintWhite = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement headlineWhite = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement visibilityWhite = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement gwt = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement sun = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement chartjs = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement pattern = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement patternHover = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement customPoint = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement flagBR = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement flagDE = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement flagFR = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement flagGB = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement flagIT = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement flagUS = (HTMLImageElement) DomGlobal.document.createElement("img");

	public final HTMLImageElement background = (HTMLImageElement) DomGlobal.document.createElement("img");

	private Images() {
		github.src = "images/GitHub-Mark-32px.png";
		githubWhite.src = "images/GitHub-Mark-Light-32px.png";
		extensionWhite.src = "images/baseline_extension_white_18dp.png";
		fingerprintWhite.src = "images/baseline_fingerprint_white_18dp.png";
		headlineWhite.src = "images/baseline_view_headline_white_18dp.png";
		visibilityWhite.src = "images/baseline_visibility_white_18dp.png";
		gwt.src = "images/gwt.png";
		sun.src = "images/weather-sun.png";
		chartjs.src = "images/chartjs.png";
		pattern.src = "images/crossline-lines.png";
		patternHover.src = "images/positive.png";
		customPoint.src = "images/custom_point.png";
		flagBR.src = "images/br.png";
		flagDE.src = "images/de.png";
		flagFR.src = "images/fr.png";
		flagGB.src = "images/gb.png";
		flagIT.src = "images/it.png";
		flagUS.src = "images/us.png";
		background.src = "images/embossed-diamond.png";
	}

	public static Images get() {
		return INSTANCE;
	}

}
