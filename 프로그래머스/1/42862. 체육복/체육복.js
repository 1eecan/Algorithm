function solution(n, lost, reserve) {
    const obj = {};
    for (let i = 1; i <= n; i++) {
        obj[i] = 1;
    }
    lost.forEach(i => obj[i]--);
    reserve.forEach(i => obj[i]++);

    const obj1 = {...obj};
    const obj2 = {...obj};

    function giveCloth(student, object) {
        student = Number(student); // 숫자로 변환
        if (object[student] !== 2) return;
        if (student > 1 && object[student - 1] === 0) {
            object[student - 1]++;
            object[student]--;
            return;
        }
        if (student < n && object[student + 1] === 0) {
            object[student + 1]++;
            object[student]--;
            return;
        }
    }

    for (let student in obj) {
        giveCloth(student, obj1);
        giveCloth(n + 1 - student, obj2);
    }

    const len1 = Object.values(obj1).filter(i => i > 0).length;
    const len2 = Object.values(obj2).filter(i => i > 0).length;

    return len1 > len2 ? len1 : len2;
}
