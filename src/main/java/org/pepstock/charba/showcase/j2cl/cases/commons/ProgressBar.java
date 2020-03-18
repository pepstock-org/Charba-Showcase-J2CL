package org.pepstock.charba.showcase.j2cl.cases.commons;

import org.pepstock.charba.client.utils.Utilities;

import elemental2.dom.CSSProperties.WidthUnionType;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLElement;

public class ProgressBar extends AbstractComposite {

	private static final String PROGRESS_TAG = "progress";

	private static final String PROGRESS_MAX_ATTRIBUTE = "max";

	private static final String PROGRESS_VALUE_ATTRIBUTE = "value";

	private static final double DEFAULT_MAX = 100D;

	private final HTMLElement progress;
	private final HTMLElement percentageLabel;

	private double percentage = 0;

	private double max;

	private double value;

	public ProgressBar() {
		progress = (HTMLElement) DomGlobal.document.createElement(PROGRESS_TAG);
		progress.style.width = WidthUnionType.of("90%");
		percentageLabel = (HTMLElement) DomGlobal.document.createElement("span");
		percentage = value / max;
		percentageLabel.innerHTML = Utilities.applyPrecision(percentage, 3);
		progress.appendChild(percentageLabel);
		setValue(0);
		setMax(DEFAULT_MAX);
	}

	@Override
	public HTMLElement getElement() {
		return progress;
	}

	public void setWidth(String width) {
		progress.style.width = WidthUnionType.of(width);
	}

	public double getMax() {
		return max;
	}

	public void setMax(double max) {
		this.max = max;
		progress.setAttribute(PROGRESS_MAX_ATTRIBUTE, Double.toString(max));
	}

	public double getValue() {
		return value;
	}

	public void setValue(double value) {
		this.value = value;
		progress.setAttribute(PROGRESS_VALUE_ATTRIBUTE, Double.toString(value));
	}

	public void setProgress(double value) {
		setValue(value);
		percentage = value / max;
		percentageLabel.innerHTML = Utilities.applyPrecision(percentage, 3);
	}

}