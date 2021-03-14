import messages from "./messages.js";

//return coordinates on array [lat, long]
export default function getCoordinates(geocoder) {
	let selected = JSON.parse(geocoder.lastSelected);
	let coordinates = selected.geometry.coordinates;
	messages(`Wheater Information on ${selected.place_name}`, "success");

	return coordinates;
}
