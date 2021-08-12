package org.pepstock.charba.showcase.j2cl.cases.commons;

public class Toast {

	private final ToastingOptions options = new ToastingOptions();

	public Toast(String title, String message) {
		this(title, message, "success");
	}

	public Toast(String title, String message, String level) {
		options.setTitle(title);
		options.setText(message);
		options.setType(level);	
	}

	public void show() {
		Toasting.show(options);
	}
}