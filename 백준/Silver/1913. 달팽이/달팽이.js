let input = require("fs").readFileSync('/dev/stdin').toString().split("\n");
let n = parseInt(input[0]);
let search = parseInt(input[1]);
let arr = new Array(n);
for (let i = 0; i < n; i++) {
  arr[i] = new Array(n);
}

let max = n ** 2;
let count = n - 1;
let index = 0;

arr[Math.floor(n / 2)][Math.floor(n / 2)] = 1;

while (count != 0) {
  for (let i = 0; i < count; i++) {
    arr[index + i][index] = max--;
  }
  for (let i = 0; i < count; i++) {
    arr[index + count][index + i] = max--;
  }
  for (let i = 0; i < count; i++) {
    arr[index + count - i][index + count] = max--;
  }
  for (let i = 0; i < count; i++) {
    arr[index][index + count - i] = max--;
  }
  count = count - 2;
  index++;
}
let coordinate = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j] == search) {
      coordinate = [i + 1, j + 1];
    }
  }
  console.log(arr[i].join(" "));
}
process.stdout.write(`${coordinate[0]} ${coordinate[1]}`);