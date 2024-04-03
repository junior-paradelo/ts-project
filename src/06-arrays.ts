(() => {
  let prices = [1, 2, 3];
  prices.push(4);

  let mixed: (string | boolean | number)[] = ['hola', true];
  mixed.push(1);
  console.log('mixed:', mixed);
})();
