import { addProduct, calcStock, products } from './product.service';

addProduct({ title: 'P1', createdAt: new Date(), stock: 10 });
addProduct({ title: 'P2', createdAt: new Date(), stock: 2, size: 'S' });

console.log('products:', products);
const total = calcStock();
console.log('total stock: ', total);
