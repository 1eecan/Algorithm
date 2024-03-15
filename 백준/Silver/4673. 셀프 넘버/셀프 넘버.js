let answer = "";

function d(n) {
  const str = n.toString();
  const arr = str.split("");
  return n + arr.reduce((acc, cur) => (acc += Number(cur)), 0);
}

const arr = new Array(10001).fill(true);
arr[0] = false;

let flag = 1;

while (flag <= 10000) {
  arr[d(flag)] = false;
  flag++;
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i]) answer += `${i}\n`;
}

console.log(answer);
