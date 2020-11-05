import { Car } from './vehicle-service/vehicles';
import { TodoService } from './todo-service/todo-service';
import { run as runStrategy } from './design-patterns/behavioral-strategy/index';
import { run as runComposite } from './design-patterns/structural-composite/index';
import { run as runDecorator } from './design-patterns/structural-decorator';

// runStrategy();

// runComposite();

runDecorator();

// const car = new Car();

// car.drive();

// const todoService = new TodoService();

// todoService.add(todoService.create('TODO 1'));
// todoService.add(todoService.create('TODO 2'));
// todoService.add(todoService.create('TODO 3'));

// const allTodos = todoService.getAll();

// console.log(`${allTodos.map((t) => t.name).join(', ')}`);
