package org.pepstock.charba.showcase.j2cl.cases.miscellaneous;

import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.HorizontalBarDataset;

public final class MyHorizontalBarDataset extends HorizontalBarDataset {

	public MyHorizontalBarDataset() {
		super(MyHorizontalBarController.TYPE, Dataset.DEFAULT_HIDDEN);
	}

}
