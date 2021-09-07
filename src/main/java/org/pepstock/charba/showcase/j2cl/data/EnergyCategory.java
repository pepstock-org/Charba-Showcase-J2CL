package org.pepstock.charba.showcase.j2cl.data;

import org.pepstock.charba.client.resources.AbstractInjectableResource;

public class EnergyCategory extends AbstractInjectableResource {

	static final String ID = "sankeyEnergyCategory";

	private static final String[] CONTENT = { "{"
			, " \"Agricultural 'waste'\": \"Agricultural\","
			, " \"Bio-conversion\": \"Bio-conversion\","
			, " \"Liquid\": \"Liquid\","
			, " \"Losses\": \"Losses\","
			, " \"Solid\": \"Solid\","
			, " \"Gas\": \"Gas\","
			, " \"Biofuel imports\": \"Biofuel\","
			, " \"Biomass imports\": \"Biomass\","
			, " \"Coal imports\": \"Coal\","
			, " \"Coal\": \"Coal\","
			, " \"Coal reserves\": \"Coal\","
			, " \"District heating\": \"District\","
			, " \"Industry\": \"Industry\","
			, " \"Heating and cooling - commercial\": \"Heating\","
			, " \"Heating and cooling - homes\": \"Heating\","
			, " \"Electricity grid\": \"Electricity\","
			, " \"Over generation / exports\": \"Over\","
			, " \"H2 conversion\": \"H2\","
			, " \"Road transport\": \"Road\","
			, " \"Agriculture\": \"Agriculture\","
			, " \"Rail transport\": \"Rail\","
			, " \"Lighting & appliances - commercial\": \"Lighting\","
			, " \"Lighting & appliances - homes\": \"Lighting\","
			, " \"Gas imports\": \"Gas\","
			, " \"Ngas\": \"Ngas\","
			, " \"Gas reserves\": \"Gas\","
			, " \"Thermal generation\": \"Thermal\","
			, " \"Geothermal\": \"Geothermal\","
			, " \"H2\": \"H2\","
			, " \"Hydro\": \"Hydro\","
			, " \"International shipping\": \"International\","
			, " \"Domestic aviation\": \"Domestic\","
			, " \"International aviation\": \"International\","
			, " \"National navigation\": \"National\","
			, " \"Marine algae\": \"Marine\","
			, " \"Nuclear\": \"Nuclear\","
			, " \"Oil imports\": \"Oil\","
			, " \"Oil\": \"Oil\","
			, " \"Oil reserves\": \"Oil\","
			, " \"Other waste\": \"Other\","
			, " \"Pumped heat\": \"Pumped\","
			, " \"Solar PV\": \"Solar\","
			, " \"Solar Thermal\": \"Solar\","
			, " \"Solar\": \"Solar\","
			, " \"Tidal\": \"Tidal\","
			, " \"UK land based bioenergy\": \"UK\","
			, " \"Wave\": \"Wave\","
			, " \"Wind\": \"Wind\""
			, "}"};
	
	public EnergyCategory() {
		super(ID, CONTENT);
	}

}
