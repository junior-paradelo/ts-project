(() => {
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };
  login({ email: 'email@email.com', password: 123 });

  type Size = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];
  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Size;
  }) => {
    products.push(data);
  };
  addProduct({ title: 'P1', createdAt: new Date(), stock: 10 });
  addProduct({ title: 'P2', createdAt: new Date(), stock: 2, size: 'S' });
  console.log('products:', products);
})();
