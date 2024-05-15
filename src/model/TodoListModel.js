import { EventEmitter } from "../EventEmitter.js";

export class TodoListModel extends EventEmitter {
	#items;
	constructor(items = []) {
		super();
		this.#items = items;
	}
	getTotalCount() {
		console.log("getTotalCount");
		return this.#items.length;
	}
	getTodoItems() {
		console.log("getTodoItems");
		return this.#items;
	}
	onChange(listener) {
		this.addEventListener("change", listener);
		console.log("onChange");
	}
	emitChange() {
		this.emit("change");
		console.log("emitChange");
	}
	addTodo(todoItem) {
		console.log(todoItem);
		this.#items.push(todoItem);
		this.emitChange();
	}
	updateTodo({ id, completed }) {
		const todoItem = this.#items.find((todo) => todo.id === id);
		if (!todoItem) {
			return;
		}
		todoItem.completed = completed;
		this.emitChange();
	}
	deleteTodo({ id }) {
		this.#items = this.#items.filter((todo) => todo.id !== id);
		this.emitChange();
	}
}
