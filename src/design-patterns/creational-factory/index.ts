import Employee from './z-employee';
import userFactory from './user-factory';

function run() {
  var alex = userFactory('Alex Banks', 100);
  var eve = userFactory(
    'Eve Porcello',
    100,
    'employee',
    'This and That',
  ) as Employee;

  eve.payDay(100);

  console.log(alex.toString());
  console.log(eve.toString());
}

export default run;
