(() => {
  // let myNumber: number = undefined;
  // let myString: string = null;
  let myNull = null; // -> is any type
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null; // correct for initialize with null value, same to undefined
  myNumber = 12;

  function hi(name: string | null) {
    let hello: string = 'Hi ';

    if (name) {
      hello += name + '!';
    } else {
      hello += 'nobody!';
    }
    console.log(hello);
  }

  function hi2(name: string | null) {
    let hello = 'Hi ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hi('Robot');
  hi2('Roboto');
})();
