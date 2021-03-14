import map from "./map.js";
import getCoordinates from "./getCoor.js";
import messages from "./messages.js";
// import weather from "./weather.js";
import * as climate from "./weather.js";

//instance map
let geocoder = map();

let containerInfo = document.querySelector("#info");

button.addEventListener("click", () => {
	containerInfo.innerHTML = "";
	if (geocoder.lastSelected === null) {
		messages("sorry, you must do a valid search.", "error");
	} else {
		let coor = getCoordinates(geocoder);
		climate.weather(coor[1], coor[0]);
	}
});
