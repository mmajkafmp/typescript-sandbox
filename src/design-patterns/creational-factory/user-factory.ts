import Employee from './Employee';
import Shopper from './Shopper';

// TODO: improve the return type, generics?
const userFactory = (
  name: string,
  money = 0,
  type: string = '',
  employer: string = '',
): any => {
  if (type === 'employee') {
    return new Employee(name, money, employer);
  } else {
    return new Shopper(name, money);
  }
};

export default userFactory;
