import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoItemView } from "./view/TodoItemView.js";
import { element, render } from "./view/html-util.js";

console.log("App.js loaded");

export class App {
	#todoListModel = new TodoListModel();
	mount() {
		const todoItemView = new TodoItemView();
		const formElement = document.getElementById("js-form");
		const inputElement = document.getElementById("js-form-input");
		const containerElement = document.getElementById("js-todo-list");
		const todoItemCountElement = document.getElementById("js-todo-count");
		this.#todoListModel.onChange(() => {
			const todoListElement = element`<ul><ul>`;
			const todoItems = this.#todoListModel.getTodoItems();
			todoItems.forEach((item) => {
				const onUpdateTodo = () => {
					this.#todoListModel.updateTodo({
						id: item.id,
						completed: !item.completed,
					});
				};
				const onDeleteTodo = () => {
					this.#todoListModel.deleteTodo({ id: item.id });
				};
				const todoItemElement = todoItemView.createElement(item, {
					onUpdateTodo,
					onDeleteTodo,
				});
				todoListElement.appendChild(todoItemElement);
			});
			render(todoListElement, containerElement);
			const todoItemCount = this.#todoListModel.getTotalCount();
			todoItemCountElement.textContent = `Todoアイテム数: ${todoItemCount}`;
		});
		formElement.addEventListener("submit", (event) => {
			event.preventDefault();
			this.#todoListModel.addTodo(
				new TodoItemModel({
					title: inputElement.value,
					completed: false,
				}),
			);
			inputElement.value = "";
		});
	}
}
