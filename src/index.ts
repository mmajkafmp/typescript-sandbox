import { Car } from './vehicle-service/vehicles';
import { TodoService } from './todo-service/todo-service';

const car = new Car();

car.drive();

const todoService = new TodoService();

todoService.add(todoService.create('TODO 1'));
todoService.add(todoService.create('TODO 2'));
todoService.add(todoService.create('TODO 3'));

const allTodos = todoService.getAll();

console.log(`${allTodos.map((t) => t.name).join(', ')}`);
