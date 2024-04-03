(() => {
  let productPrice = 10;
  productPrice = 12;
  console.log('productPrice: ', productPrice);

  let customerAge: number = 29;
  //customerAge = customerAge + '1';
  customerAge = customerAge + 1;
  console.log('customerAge: ', customerAge);
/*
  let productInStock: number;
  console.log('productInStock: ', productInStock);
  if (productInStock > 10) {
    console.log('is greater!');
  }
*/
  // NaN in runtime
  let discount = parseInt('N');
  console.log('discount: ', discount);

  let hex = 0xfff;
  console.log('hex: ', hex);

  let binary = 0b1010;
  console.log('binary: ', binary);
})();
