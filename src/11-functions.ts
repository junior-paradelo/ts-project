(() => {
  type Size = 'S' | 'M' | 'L' | 'XL';
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Size
  ) {
    return { title, createdAt, stock, size };
  }

  const product = createProductToJson('P1', new Date(), 12, 'L');
  console.log('product: ', product);

  // better use arrow function
  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Size
  ) => {
    return { title, createdAt, stock, size };
  };
  const product2 = createProductToJsonV2('P2', new Date(), 5);
  console.log('product2: ', product2);
})();
