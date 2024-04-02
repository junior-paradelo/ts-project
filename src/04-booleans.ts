(() => {
  let isEnable = true;
  //isEnable = 123;

  let isNew: boolean = false;

  const random = Math.random();
  isNew = random >= 0.5 ? true : false;
  console.log('random: ', random);
  console.log('isNew: ', isNew);
})();
