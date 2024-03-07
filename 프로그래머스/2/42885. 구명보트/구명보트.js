function solution(people, limit) {
    people.sort((x,y)=>y-x);
    let start=0;
    let end = people.length-1;
    let boat = 0;
    while(start<end){
        if(people[start]+people[end]<=limit){
            start++;
            end--;
            boat++;
        }else{
            start++;
            boat++;
        }
    }
    if(start==end){
        boat++;
    }
    return boat;
}