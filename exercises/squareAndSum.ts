function squareNSum(numbers: number[]) {
  let sum = 0;
  for (var n of numbers) {
    sum += n * n;
  }
  console.log(sum);
}

squareNSum([1, 2, 3]);
