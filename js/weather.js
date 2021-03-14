// http://api.openweathermap.org/data/2.5/weather?q=buga&appid=700367c59f833d4814d7f025d13afbfc&units=metric
//a4a63d987a7e8af14df9da323969afcc

async function weather(lat, lon) {
	let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=700367c59f833d4814d7f025d13afbfc&units=metric`;

	const getWeather = await fetch(url);
	const response = await getWeather.json();

	showInfo(response);
}

async function showInfo(response) {
	const info = await response;

	let content = document.createElement("div");
	content.classList.add("content");

	let containerInfo = document.querySelector("#info");

	/*add title city */
	let title = document.createElement("div");
	title.classList.add("title__city");
	title.innerHTML = `
        <h2>${info.name}</h2>
    `;
	content.appendChild(title);

	console.log(content);

	/*add weather and icon */
	let weather__container = document.createElement("div");
	let weather = document.createElement("div");

	let icon = `<img src="http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png">`;
	weather__container.classList.add("weather__city");
	weather.innerHTML = `
        <h3>${info.weather[0].main}</h3>
    `;

	weather__container.innerHTML = icon;
	weather__container.appendChild(weather);

	content.appendChild(weather__container);

	/* add actual temp*/
	let now = document.createElement("div");
	now.classList.add("now");
	now.innerHTML = `
        <h4 class="py-3">Actual:<span>${info.main.temp.toFixed(0)}º</span></h4>
    `;
	content.appendChild(now);

	/*add feels like */
	let feels = document.createElement("div");
	feels.classList.add("feels");
	//toFixed(0) remove the decimails
	feels.innerHTML = `
        <h4 class="py-3">Feels Like:<span>${info.main.feels_like.toFixed(
			0
		)}º</span></h4>
    `;
	content.appendChild(feels);

	/*add humidity */
	let humidity = document.createElement("div");
	humidity.classList.add("humidity");
	//toFixed(0) remove the decimails
	humidity.innerHTML = `
        <h4 class="py-3">humidity Like:<span>${info.main.humidity}%</span></h4>
    `;
	content.appendChild(humidity);

	/* add min temp*/
	let min = document.createElement("div");
	min.classList.add("min");
	min.innerHTML = `
        <h4 class="py-3">Min:<span>${info.main.temp_min.toFixed(0)}º</span></h4>
    `;
	content.appendChild(min);

	/* add max temp*/
	let max = document.createElement("div");
	max.classList.add("max");
	max.innerHTML = `
        <h4 class="py-3">Max:<span>${info.main.temp_max.toFixed(0)}º</span></h4>
    `;
	content.appendChild(max);

	containerInfo.appendChild(content);
	console.log(info);
}

export { weather };
