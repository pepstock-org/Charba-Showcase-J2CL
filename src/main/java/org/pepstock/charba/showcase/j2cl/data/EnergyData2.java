package org.pepstock.charba.showcase.j2cl.data;

import org.pepstock.charba.client.resources.AbstractInjectableResource;

public class EnergyData2 extends AbstractInjectableResource {

	static final String ID = "sankeyEnergyData2";

	private static final String[] CONTENT = { "["
			, " {\"from\": \"District heating\", \"to\": \"Industry\", \"flow\": 10.639},"
			, " {\"from\": \"District heating\", \"to\": \"Heating and cooling - commercial\", \"flow\": 22.505},"
			, " {\"from\": \"District heating\", \"to\": \"Heating and cooling - homes\", \"flow\": 46.184},"
			, " {\"from\": \"Electricity grid\", \"to\": \"Over generation / exports\", \"flow\": 104.453},"
			, " {\"from\": \"Electricity grid\", \"to\": \"Heating and cooling - homes\", \"flow\": 113.726},"
			, " {\"from\": \"Electricity grid\", \"to\": \"H2 conversion\", \"flow\": 27.14},"
			, " {\"from\": \"Electricity grid\", \"to\": \"Industry\", \"flow\": 342.165},"
			, " {\"from\": \"Electricity grid\", \"to\": \"Road transport\", \"flow\": 37.797},"
			, " {\"from\": \"Electricity grid\", \"to\": \"Agriculture\", \"flow\": 4.412},"
			, " {\"from\": \"Electricity grid\", \"to\": \"Heating and cooling - commercial\", \"flow\": 40.858},"
			, " {\"from\": \"Electricity grid\", \"to\": \"Losses\", \"flow\": 56.691},"
			, " {\"from\": \"Electricity grid\", \"to\": \"Rail transport\", \"flow\": 7.863},"
			, " {\"from\": \"Electricity grid\", \"to\": \"Lighting & appliances - commercial\", \"flow\": 90.008},"
			, " {\"from\": \"Electricity grid\", \"to\": \"Lighting & appliances - homes\", \"flow\": 93.494},"
			, " {\"from\": \"Pumped heat\", \"to\": \"Heating and cooling - homes\", \"flow\": 193.026},"
			, " {\"from\": \"Pumped heat\", \"to\": \"Heating and cooling - commercial\", \"flow\": 70.672},"
			, " {\"from\": \"Solar Thermal\", \"to\": \"Heating and cooling - homes\", \"flow\": 19.263},"
			, " {\"from\": \"Solar\", \"to\": \"Solar Thermal\", \"flow\": 19.263},"
			, " {\"from\": \"Solar\", \"to\": \"Solar PV\", \"flow\": 59.901}"
			, "]"};
	
	public EnergyData2() {
		super(ID, CONTENT);
	}

}
