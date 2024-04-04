(() => {
  type UserID = string | number | boolean;
  let userId: UserID;

  function greeting(myText: UserID) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLocaleLowerCase()}`);
    }
  }

  // literal types
  type Size = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Size;
  shirtSize = 'M';
  // error because it's not a Size value
  // shirtSize = 's';
})();
