function fizzBuzz(x) {
  if (x % 15 === 0) {
    return console.log('Fizz Buzz');
  } else if (x % 3 === 0) {
    return console.log('Fizz');
  } else if (x % 5 === 0) {
    return console.log('Buzz');
  } else {
    console.log(x);
  }
}

fizzBuzz(433);