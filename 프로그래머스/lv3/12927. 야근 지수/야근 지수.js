function solution(n, works) {
  works.sort((x, y) => y - x);
  for (let i = 0; i < n; i++) {
    if (works[0] >= works[1]) {
      works[0]--;
    } else {
      let j = 1;//맨 처음 요소와 비교할 것이므로 2번째 요소부터 가리키게 인덱스 설정
      while (works[0] < works[j]) {
        j++;//ex) 2 3 3 2 1 1 와 같은 상황이면 j이 된다.
      }
      works.splice(j, 0, works[0]);//뒤의 요소보다 같거나 큰 곳에 넣어주고
      works.shift();//맨 앞의 요소는 옮겨진것이니까 shift를 써준다. 만약에 내림차순으로
      				//문제를 풀었다면 pop을 썼을 테니까 시간이 더 줄었을까? length를 매번
                    //계산했어야 하니까 잘 모르겠다.
      works[0]--;//맨 앞에 있는 가장 큰 값을 역시 빼준다.
    }
    if (works[0] < 0) return 0;
  }
  return works.map((el) => (el = el ** 2)).reduce((acc, cur) => acc + cur, 0);
}
