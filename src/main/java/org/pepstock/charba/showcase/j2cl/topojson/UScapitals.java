package org.pepstock.charba.showcase.j2cl.topojson;

import org.pepstock.charba.client.resources.AbstractInjectableResource;

public class UScapitals extends AbstractInjectableResource {

	static final String ID = "uscapitals";

	private static final String[] CONTENT = {
			"name,description,latitude,longitude\n",
			"Alabama,Montgomery,32.377716,-86.300568\n",
			"Alaska,Juneau,58.301598,-134.420212\n",
			"Arizona,Phoenix,33.448143,-112.096962\n",
			"Arkansas,Little Rock,34.746613,-92.288986\n",
			"California,Sacramento,38.576668,-121.493629\n",
			"Colorado,Denver,39.739227,-104.984856\n",
			"Connecticut,Hartford,41.764046,-72.682198\n",
			"Delaware,Dover,39.157307,-75.519722\n",
			"Hawaii,Honolulu,21.307442,-157.857376\n",
			"Florida,Tallahassee,30.438118,-84.281296\n",
			"Georgia,Atlanta,33.749027,-84.388229\n",
			"Idaho,Boise,43.617775,-116.199722\n",
			"Illinois,Springfield,39.798363,-89.654961\n",
			"Indiana,Indianapolis,39.768623,-86.162643\n",
			"Iowa,Des Moines,41.591087,-93.603729\n",
			"Kansas,Topeka,39.048191,-95.677956\n",
			"Kentucky,Frankfort,38.186722,-84.875374\n",
			"Louisiana,Baton Rouge,30.457069,-91.187393\n",
			"Maine,Augusta,44.307167,-69.781693\n",
			"Maryland,Annapolis,38.978764,-76.490936\n",
			"Massachusetts,Boston,42.358162,-71.063698\n",
			"Michigan,Lansing,42.733635,-84.555328\n",
			"Minnesota,St. Paul,44.955097,-93.102211\n",
			"Mississippi,Jackson,32.303848,-90.182106\n",
			"Missouri,Jefferson City,38.579201,-92.172935\n",
			"Montana,Helena,46.585709,-112.018417\n",
			"Nebraska,Lincoln,40.808075,-96.699654\n",
			"Nevada,Carson City,39.163914,-119.766121\n",
			"New Hampshire,Concord,43.206898,-71.537994\n",
			"New Jersey,Trenton,40.220596,-74.769913\n",
			"New Mexico,Santa Fe,35.68224,-105.939728\n",
			"North Carolina,Raleigh,35.78043,-78.639099\n",
			"North Dakota,Bismarck,46.82085,-100.783318\n",
			"New York,Albany,42.652843,-73.757874\n",
			"Ohio,Columbus,39.961346,-82.999069\n",
			"Oklahoma,Oklahoma City,35.492207,-97.503342\n",
			"Oregon,Salem,44.938461,-123.030403\n",
			"Pennsylvania,Harrisburg,40.264378,-76.883598\n",
			"Rhode Island,Providence,41.830914,-71.414963\n",
			"South Carolina,Columbia,34.000343,-81.033211\n",
			"South Dakota,Pierre,44.367031,-100.346405\n",
			"Tennessee,Nashville,36.16581,-86.784241\n",
			"Texas,Austin,30.27467,-97.740349\n",
			"Utah,Salt Lake City,40.777477,-111.888237\n",
			"Vermont,Montpelier,44.262436,-72.580536\n",
			"Virginia,Richmond,37.538857,-77.43364\n",
			"Washington,Olympia,47.035805,-122.905014\n",
			"West Virginia,Charleston,38.336246,-81.612328\n",
			"Wisconsin,Madison,43.074684,-89.384445\n",
			"Wyoming,Cheyenne,41.140259,-104.820236\n"
	};

	public UScapitals() {
		super(ID, CONTENT);
	}

}
