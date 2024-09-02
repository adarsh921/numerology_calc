function noOfDigits(num) {
  return Math.floor(Math.log10(Math.abs(num))) + 1; //Logarithmic approach to calculate no of digits
}

function digitsToArray(num) {
  return num.toString().split("").map(Number);
}

function reduceToOne(num) {
  const arr = digitsToArray(num);
  const sum = arr.reduce(
    (accumulator, currValue) => accumulator + currValue,
    0
  );
  return sum;
}

function Calculations(num) {
  let ans = num;
  if (noOfDigits(num) === 1) {
    return num;
  } else {
    while (noOfDigits(ans) !== 1) {
      ans = reduceToOne(ans);
    }
    return ans;
  }
}
export { Calculations };
