(() => {
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };
  login({ email: 'email@email.com', password: 123 });

  type Size = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Size;
  };
  // replace any for Product type
  const products: Product[] = [];
  const addProduct = (data: Product) => {
    products.push(data);
  };
  addProduct({ title: 'P1', createdAt: new Date(), stock: 10 });
  addProduct({ title: 'P2', createdAt: new Date(), stock: 2, size: 'S' });
  addProduct({ title: 'P3', createdAt: new Date(1994, 8, 9), stock: 4, size: 'XL' });
  console.log('products:', products);
})();
