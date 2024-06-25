function getAllPermutations(arr) {
  const results = [];

  function getPermutations(arr, selectNumber) {
    const permutations = [];

    if (selectNumber === 1) {
      return arr.map((element) => [element]);
    }

    arr.forEach((fixed, index, original) => {
      const rest = [...original.slice(0, index), ...original.slice(index + 1)];
      const subPermutations = getPermutations(rest, selectNumber - 1);
      const attached = subPermutations.map((permutation) => [fixed, ...permutation]);
      permutations.push(...attached);
    });

    return permutations;
  }

  for (let i = 1; i <= arr.length; i++) {
    const permutations = getPermutations(arr, i);
    results.push(...permutations);
  }

  return results;
}

function solution(numbers) {
    var answer = 0;
    const arr = numbers.split("");
    const num = [...new Set(getAllPermutations(arr).map(arr=>Number(arr.join(""))).filter(el=>el>1))];
    num.forEach(el=>{
        let flag = true;
        const sqrt = Math.sqrt(el);
        for(let i=2;i<=sqrt;i++){
            if(el%i===0){
                flag = false;
                break;
            }
        }
        if(flag) answer++;
    });
    return answer;
}