function solution(id_list, report, k) {
let answer = [];
answer = new Array(id_list.length);
let result_arr = [];

for (let i = 0; i < id_list.length; i++) {
  result_arr[i] = new Object();
  result_arr[i].name = id_list[i];
  result_arr[i].ban_acc = 0;
  result_arr[i].return_acc = 0;
}

result_arr.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

let information_arr = [];
let temp = [];

for (let i = 0; i < report.length; i++) {
  information_arr[i] = new Object();
  temp = report[i].split(" ");
  information_arr[i].key = temp[0];
  information_arr[i].value = temp[1];
  information_arr[i].ban = false;
  temp = [];
}

 

information_arr.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});
information_arr.sort(function (a, b) {
  if (a.key > b.key) {
    return 1;
  }
  if (a.key < b.key) {
    return -1;
  }
  return 0;
});

for (let i = 0; i < information_arr.length - 1; i++) {
  if (information_arr[i].key == information_arr[i + 1].key) {
    if (information_arr[i].value == information_arr[i + 1].value) {
      delete information_arr[i];
    }
  }
}

information_arr.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

while (information_arr[information_arr.length - 1] === undefined) {
  information_arr.pop();
}

for (let i = 0; i < information_arr.length; i++) {
  for (let j = 0; j < result_arr.length; j++) {
    if (result_arr[j].name == information_arr[i].value) {
      result_arr[j].ban_acc++;
    }
  }
}

for (let i = 0; i < result_arr.length; i++) {
  for (let j = 0; j < information_arr.length; j++) {
    if (
      information_arr[j].value == result_arr[i].name &&
      result_arr[i].ban_acc >= k
    ) {
      information_arr[j].ban = true;
    }
  }
}

for (let i = 0; i < information_arr.length; i++) {
  for (let j = 0; j < result_arr.length; j++) {
    if (
      result_arr[j].name == information_arr[i].key &&
      information_arr[i].ban == true
    ) {
      result_arr[j].return_acc++;
    }
  }
}

for (let i = 0; i < id_list.length; i++) {
  for (let j = 0; j < result_arr.length; j++) {
    if (id_list[i] == result_arr[j].name) {
      answer[i] = result_arr[j].return_acc;
    }
  }
}

return answer;
}