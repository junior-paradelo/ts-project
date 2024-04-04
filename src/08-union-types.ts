(() => {
  let userId: string | number;
  userId = 123;
  userId = 'name';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLocaleLowerCase()}`);
    } else {
      console.log(`string ${myText.toFixed(1)}`);
    }
  }

  greeting('Junior');
  greeting(1.25);

})();
