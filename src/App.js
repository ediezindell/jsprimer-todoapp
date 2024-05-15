console.log("App.js loaded");
export class App {
	mount() {
		const formElement = document.getElementById("js-form");
		const inputElement = document.getElementById("js-form-input");
		formElement.addEventListener("submit", (event) => {
			event.preventDefault();
			console.log(`入力欄の値: ${inputElement.value}`);
		});
	}
}
