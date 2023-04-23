function filterOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
const arr = [1, 6, 9, 12, 15, 16, 20, 25, 31, 40];
const oddNumbers = filterOddNumbers(arr);
console.log(oddNumbers); 