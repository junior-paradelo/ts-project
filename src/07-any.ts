(() => {
  // any type 'disabled' ts :( it's for migration's mode
  let changeVariable: any;
  changeVariable = true;
  changeVariable = null;
  changeVariable = {};
  changeVariable = 'now my variable is a string';
  console.log('changeVariable: ', changeVariable);

  // 2 forms to strict type
  const rta = (changeVariable as string).toLocaleUpperCase();
  console.log('rta: ', rta);

  changeVariable = 7;
  const rta2 = (<number>changeVariable).toFixed();
  console.log('rta2: ', rta2);
})();
