// http://api.openweathermap.org/data/2.5/weather?q=buga&appid=700367c59f833d4814d7f025d13afbfc&units=metric
//a4a63d987a7e8af14df9da323969afcc

export async function weather(lat, lon) {
	let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=700367c59f833d4814d7f025d13afbfc&units=metric`;

	const getWeather = await fetch(url);
	const response = await getWeather.json();

	// console.log(response);
}
