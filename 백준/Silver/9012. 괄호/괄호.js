let input = require("fs").readFileSync('/dev/stdin').toString().split("\n");
let answer = "";
let reps = 0;
let testCase=Number(input[0]);
for (let i = 1; i <= testCase; i++) {
  reps = input[i].length / 2;
  for (let j = 0; j < reps; j++) {
    input[i] = input[i].replace(/\(\)/g, "");
  }
  if (input[i].length === 0) {
    answer += "YES" + "\n";
  } else {
    answer += "NO" + "\n";
  }
}

console.log(answer);
