// @ts-check
import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListView } from "./view/TodoListView.js";
import { render } from "./view/html-util.js";

console.log("App.js loaded");

export class App {
	#todoListModel = new TodoListModel();
	mount() {
		const formElement = document.getElementById("js-form");
		const inputElement = document.getElementById("js-form-input");
		const containerElement = document.getElementById("js-todo-list");
		const todoItemCountElement = document.getElementById("js-todo-count");
		const onUpdateTodo = ({ id, completed }) => {
			this.#todoListModel.updateTodo({
				id: id,
				completed: !completed,
			});
		};
		const onDeleteTodo = ({ id }) => {
			this.#todoListModel.deleteTodo({ id });
		};
		const todoListView = new TodoListView();
		this.#todoListModel.onChange(() => {
			const todoListElement = todoListView.createElement(
				this.#todoListModel.getTodoItems(),
				{ onUpdateTodo, onDeleteTodo },
			);
			render(todoListElement, containerElement);
			const todoItemCount = this.#todoListModel.getTotalCount();
			console.log(todoItemCount);
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
