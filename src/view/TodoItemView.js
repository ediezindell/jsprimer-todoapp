import { element } from "./html-util.js";

export class TodoItemView {
	createElement(todoItem, { onUpdateTodo, onDeleteTodo }) {
		const todoItemElement = element`<li><input type="checkbox" class="checkbox" ${
			todoItem.completed ? "checked" : ""
		}>${todoItem.title}<button class="delete">x</button></li>`;
		const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
		inputCheckboxElement.addEventListener("change", () =>
			onUpdateTodo({ id: todoItem.id, completed: todoItem.completed }),
		);
		const deleteButtonElement = todoItemElement.querySelector(".delete");
		deleteButtonElement.addEventListener("click", () =>
			onDeleteTodo({ id: todoItem.id }),
		);
		return todoItemElement;
	}
}
