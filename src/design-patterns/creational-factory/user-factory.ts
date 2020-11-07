import Employee from './Employee';
import Shopper from './Shopper';

function userFactory(
  name: string,
  money = 0,
  type: string = '',
  employer: string = '',
): Employee | Shopper {
  if (type === 'employee') {
    return new Employee(name, money, employer);
  } else {
    return new Shopper(name, money);
  }
}

export default userFactory;
