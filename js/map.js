export default function map() {
	mapboxgl.accessToken =
		"pk.eyJ1IjoibWFnZXIxOSIsImEiOiJja2txMHl4NGwwZG51MzFudGl4N3U2aDF5In0.d2NnB6LbNtIznISAfovkOQ";
	var geocoder = new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		types: "country,region,place,postcode,locality,neighborhood",
	});

	geocoder.addTo("#geocoder");

	return geocoder;
}
