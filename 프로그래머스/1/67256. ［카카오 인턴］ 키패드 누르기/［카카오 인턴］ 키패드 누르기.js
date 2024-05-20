function solution(numbers, hand) {
    let answer = "";
    
    function getDistance([x1,y1],[x2,y2]){
        return Math.abs(x1-x2) + Math.abs(y1-y2);
    }

    let leftHand = [-1,0];
    let rightHand = [1,0];
    
    const num = {
        0: [0,0],
        1: [-1,3],
        2: [0,3],
        3: [1,3],
        4: [-1,2],
        5: [0,2],
        6: [1,2],
        7: [-1,1],
        8: [0,1],
        9: [1,1],
    }
    
    for(let i=0;i<numbers.length;i++){
        const currentNum = num[numbers[i]];
        if([1,4,7].indexOf(numbers[i])!==-1){
            leftHand = currentNum;
            answer += "L";
        }else if([3,6,9].indexOf(numbers[i])!==-1){
            rightHand = currentNum;
            answer += "R";
        }else if(getDistance(currentNum,leftHand)<getDistance(currentNum,rightHand)){
            leftHand = currentNum;
            answer += "L";
        }else if(getDistance(currentNum,leftHand)>getDistance(currentNum,rightHand)){
            rightHand = currentNum;
            answer += "R";
        }else{
            if(hand==="left"){
                leftHand = currentNum;
                answer += "L";
            }else{
                rightHand = currentNum;
                answer += "R";
            }
        }
    }
    
    return answer;
}