import { element, render } from "./view/html-util.js";
console.log("App.js loaded");
export class App {
	mount() {
		const formElement = document.getElementById("js-form");
		const inputElement = document.getElementById("js-form-input");
		const containerElement = document.getElementById("js-todo-list");
		const todoItemCountElement = document.getElementById("js-todo-count");
		const todoListElement = element`<ul><ul>`;
		let todoItemCount = 0;
		formElement.addEventListener("submit", (event) => {
			event.preventDefault();
			const todoItemElement = element`<li>${inputElement.value}</li>`;
			todoListElement.appendChild(todoItemElement);
			render(todoListElement, containerElement);
			++todoItemCount;
			todoItemCountElement.textContent = `Todoアイテム数: ${todoItemCount}`;
			inputElement.value = "";
		});
	}
}
