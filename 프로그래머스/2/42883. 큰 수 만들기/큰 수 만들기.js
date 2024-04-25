function solution(number, k) {
    let stack = []; // 숫자를 저장할 스택
    let count = k; // 제거할 수 있는 숫자의 개수

    for (let i = 0; i < number.length; i++) {
        let current = number[i]; // 현재 숫자
        
        // 스택의 마지막 숫자가 현재 숫자보다 작고, 아직 제거할 수 있으면 제거
        while (stack.length > 0 && stack[stack.length - 1] < current && count > 0) {
            stack.pop();
            count--;
        }

        stack.push(current); // 현재 숫자를 스택에 삽입
    }

    // 제거할 숫자가 남았다면, 스택의 끝에서 해당 개수만큼 제거
    while (count > 0) {
        stack.pop();
        count--;
    }

    // 스택에 남은 숫자들을 문자열로 변환하여 반환
    return stack.join('');
}