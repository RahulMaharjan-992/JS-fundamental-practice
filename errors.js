//with console.log
// Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
function getLaterFirstLetter(string1, string2) {
  const firstLetter1 = string1.charAt(0);
  const firstLetter2 = string2.charAt(0);
  console.log(firstLetter1);
  console.log(firstLetter2);
  if (firstLetter1 === firstLetter2) {
    return null;
  } else if (firstLetter1 > firstLetter2) {
    return string1;
  } else {
    return string2;
  }
}

// return "blueberry"
console.log("getLaterFirstLetter('avocado', 'blueberry') returns: " + getLaterFirstLetter('avocado', 'blueberry'));

// return "zebra"
console.log("getLaterFirstLetter('zebra', 'aardvark') returns : " + getLaterFirstLetter('zebra', 'aardvark'));

//  return null
console.log("getLaterFirstLetter('astro', 'afar') returns: " + getLaterFirstLetter('astro', 'afar'));

//runtime errors
console.log('This message will be printed to the console.');
function throwError () {
  return notDefinedVar;
}
throwError();
console.log('Because of the error, this will not be printed!');

//constructing an error
console.log(new Error('User missing name'));
console.log('Will logging the error stop our program from running?');

//throw keyword
throw Error('Username or password does not match');

//try and catch statement
try{
  throw new Error('hi');
}catch(e){
  console.log(e);
}

//handling try and catch
function capAllElements(arr){
	try{arr.forEach((el, index, array) => {
    array[index] = el.toUpperCase();
  });
}catch(error){
  console.log(error);
}
}
capAllElements('Incorrect argument');

