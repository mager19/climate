let container = document.querySelector("#messages");

export default function messages(message, type) {
	let element = document.createElement("div");
	if (type == "error") {
		element.classList.add("alert", "alert-danger", "mt-3");
	} else {
		element.classList.add("alert", "alert-success", "mt-3");
	}

	element.textContent = `${message}`;
	container.appendChild(element);

	setTimeout(() => {
		container.innerHTML = "";
	}, 3000);
}
