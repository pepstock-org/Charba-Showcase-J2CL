package org.pepstock.charba.showcase.j2cl.data;

import org.pepstock.charba.client.resources.AbstractInjectableResource;

public class TreeDataColors extends AbstractInjectableResource {

	static final String ID = "sankeyTreeColors";

	private static final String[] CONTENT = { "{"
			, "   \"one\": \"#a4dd00\","
			, "   \"oneThenTwo\": \"#68bc00\","
			, "   \"oneThenTwoThenFour\": \"#009CE0\","
			, "   \"oneThenTwoThenFive\": \"#009CE0\","
			, "   \"oneThenTwoThenSix\": \"#68bc00\","
			, "   \"oneThenTwoThenSeven\": \"#aea1ff\","
			, "   \"oneThenTwoThenEight\": \"#aea1ff\","
			, "   \"oneThenTwoThenNine\": \"#68bc00\","
			, "   \"oneThenThree\": \"#009CE0\","
			, "   \"oneThenThreeThenFive\": \"#009CE0\","
			, "   \"oneThenThreeThenFour\": \"#009CE0\","
			, "   \"oneThenThreeThenSix\": \"#68bc00\","
			, "   \"oneThenThreeThenSeven\": \"#aea1ff\","
			, "   \"oneThenThreeThenEight\": \"#aea1ff\","
			, "   \"oneThenThreeThenNine\": \"#68bc00\""
			, "}"};
	
	public TreeDataColors() {
		super(ID, CONTENT);
	}

}
