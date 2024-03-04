function solution(friends, gifts) {
    var answer = 0;

    const giftTable = Object.fromEntries(friends.map(friend=>[friend,
        Object.fromEntries(friends.map(friend=>[friend,0]))
    ]));
    const giftParams = Object.fromEntries(friends.map(friend=>[friend,0]));
    
    gifts.forEach(gift=>{
        const [give, take] = gift.split(" ");
        giftParams[give]++;
        giftParams[take]--;
        if(giftTable[give][take]!==undefined){
            giftTable[give][take]++;
        }else{
            giftTable[give][take] = 1;
        }
    });
    
    for(friend in giftTable){
        let temp = 0;
        for(give in giftTable[friend]){
            if(giftTable[friend][give] > giftTable[give][friend]) temp++;
            else if((giftTable[friend][give] === giftTable[give][friend]) && giftParams[friend]>giftParams[give]) temp++;
        }
        if(temp>answer) answer = temp;
    }
    
    return answer;
}