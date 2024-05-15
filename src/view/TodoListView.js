// @ts-check
import { TodoItemModel } from "../model/TodoItemModel.js";
import { element } from "./html-util.js";
import { TodoItemView } from "./TodoItemView.js";

export class TodoListView {
	/**
	 * @param {TodoItemModel[]} todoItems
	 */
	createElement(todoItems, { onUpdateTodo, onDeleteTodo }) {
		const todoListElement = element`<ul><ul>`;
		todoItems.forEach((item) => {
			const todoItemView = new TodoItemView();
			const todoItemElement = todoItemView.createElement(item, {
				onUpdateTodo,
				onDeleteTodo,
			});
			todoListElement.appendChild(todoItemElement);
		});
		return todoListElement;
	}
}
