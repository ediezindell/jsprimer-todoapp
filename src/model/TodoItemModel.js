let todoIndex = 0;
export class TodoItemModel {
	id;
	title;
	completed;
	constructor({ title, completed }) {
		this.id = ++todoIndex;
		this.title = title;
		this.completed = completed;
	}
}
