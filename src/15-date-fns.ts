import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28);
const result = subDays(date, 3);
const str = format(result, 'yyyy/MM/dd');
console.log('result:', result);
