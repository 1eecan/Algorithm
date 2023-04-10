function solution(picks, minerals) {

  if ((picks[0] + picks[1] + picks[2]) * 5 < minerals.length) {
    minerals = minerals.splice(0, (picks[0] + picks[1] + picks[2]) * 5);
  }

  let newMinerals = splitIntoChunk(minerals, 5);

  
    newMinerals.sort((x, y) => {
      return x.tired > y.tired ? -1 : 1;
    });
  
  return (getScore(newMinerals, picks));
}
function getScore(array, picks) {
  let score = 0;
  for (let i = 0; i < array.length; i++) {
    if (picks[0] == 0 && picks[1] == 0 && picks[2] == 0) {
      break;
    }
    if (picks[0] != 0) {
      score += array[i].info[0] + array[i].info[1] + array[i].info[2];
      picks[0]--;
      continue;
    } else if (picks[1] != 0) {
      score += array[i].info[0] * 5 + array[i].info[1] + array[i].info[2];
      picks[1]--;
      continue;
    } else if (picks[2] != 0) {
      score += array[i].info[0] * 25 + array[i].info[1] * 5 + array[i].info[2];
      picks[2]--;
      continue;
    }
  }
  return score;
}

function splitIntoChunk(arr, chunk) {
  const result = [];
  for (index = 0; index < arr.length; index += chunk) {
    let tempArray;
    tempArray = arr.slice(index, index + chunk);

    let diaCount = tempArray.reduce(
      (cnt, element) => cnt + ("diamond" === element),
      0
    );
    let ironCount = tempArray.reduce(
      (cnt, element) => cnt + ("iron" === element),
      0
    );
    let stoneCount = tempArray.reduce(
      (cnt, element) => cnt + ("stone" === element),
      0
    );
    result.push({
      minerals: tempArray,
      info: [diaCount, ironCount, stoneCount],
      tired: diaCount * 25 + ironCount * 5 + stoneCount,
    });
    diaCount = ironCount = stoneCount = 0;
  }

  return result;
}