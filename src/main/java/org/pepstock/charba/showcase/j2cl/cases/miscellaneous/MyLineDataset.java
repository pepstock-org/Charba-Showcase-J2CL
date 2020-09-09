package org.pepstock.charba.showcase.j2cl.cases.miscellaneous;

import org.pepstock.charba.client.data.Dataset;
import org.pepstock.charba.client.data.LineDataset;

public final class MyLineDataset extends LineDataset {

	public MyLineDataset() {
		super(MyLineChart.TYPE, Dataset.DEFAULT_HIDDEN);
	}

}
