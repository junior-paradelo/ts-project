import _ from 'lodash';

const data = [
  { username: 'jpa', role: 'admin' },
  { username: 'kmv', role: 'seller' },
  { username: 'pfs', role: 'customer' },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
