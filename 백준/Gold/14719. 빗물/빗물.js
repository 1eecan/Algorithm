let input = require("fs").readFileSync('/dev/stdin').toString().split("\n");
let size = input[0].split(" ").map(Number);
let block = input[1].split(" ").map(Number);
let ground = [...block];
let index = size[0];
let rain = 0;
let highest = [];
while (index >= 0) {
  //가장 높은 블록의 갯수가 짝수개여야 고임
  highest = [];
  for (let i = 0; i < ground.length; i++) {
    if (ground[i] == index) {
      highest.push(i);
      ground[i]--;
    }
  }
  if (highest.length > 1) {
    for (let j = 0; j < highest.length - 1; j++) {
      rain += highest[j + 1] - highest[j] - 1;
    }
  }
  index--;
}
console.log(rain);
