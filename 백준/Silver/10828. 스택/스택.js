let input = require("fs").readFileSync('/dev/stdin').toString().split("\n");

function array(length) {
  this.arr = new Array(length);
  this.leng = 0;
}

array.prototype.push = function (str) {
  this.arr[this.leng] = str.split(" ")[1];
  this.leng++;
};

array.prototype.pop = function () {
  if (this.leng == 0) {
    return -1;
  } else {
    this.leng--;
    return this.arr[this.leng];
  }
};
array.prototype.empty = function () {
  if (this.leng) {
    return 0;
  } else {
    return 1;
  }
};
array.prototype.size = function () {
  return this.leng;
};
array.prototype.top = function () {
  if (this.leng == 0) {
    return -1;
  } else {
    return this.arr[this.leng - 1];
  }
};

let arr = new array(input[0]);
let answer = [];
for (let i = 1; i < input.length; i++) {
  if (input[i].length > 5) {
    arr.push(input[i]);
  } else if (input[i] == "top") {
    answer.push(arr.top());
  } else if (input[i] == "pop") {
    answer.push(arr.pop());
  } else if (input[i] == "size") {
    answer.push(arr.size());
  } else if (input[i] == "empty") {
    answer.push(arr.empty());
  }
}

console.log(answer.join("\n"));

