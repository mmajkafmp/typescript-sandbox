enum TodoState {
  New = 1,
  Active,
  Complete,
  Deleted,
}

interface Todo {
  id: number;
  name: string;
  state: TodoState;
}

export class TodoService {
  static lastId: number = 0;
  todos: Todo[];

  constructor() {
    this.todos = [];
  }

  create(name: string): Todo {
    return {
      id: TodoService.getNextId(),
      name: name,
      state: TodoState.New,
    };
  }

  add(todo: Todo) {
    this.todos.push(todo);
  }

  getAll() {
    return this.todos;
  }

  static getNextId() {
    return (TodoService.lastId += 1);
  }
}
