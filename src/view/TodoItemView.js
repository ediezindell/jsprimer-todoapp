import { element } from "./html-util.js";

export class TodoItemView {
	createElement(todoItem, { onUpdateTodo, onDeleteTodo }) {
		const todoItemElement = element`<li><input type="checkbox" class="checkbox" ${
			todoItem.completed ? "checked" : ""
		}>${todoItem.title}<button class="delete">x</button></li>`;
		const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
		inputCheckboxElement.addEventListener("change", onUpdateTodo);
		const deleteButtonElement = todoItemElement.querySelector(".delete");
		deleteButtonElement.addEventListener("click", onDeleteTodo);
		return todoItemElement;
	}
}
