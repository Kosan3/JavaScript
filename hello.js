function sum(...nums) {
  let result = 0;
  for (let num of nums) {
    result += num;
  }
  return result;
}

console.log(sum(3,5,1,5,6));