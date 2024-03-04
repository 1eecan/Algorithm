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
    
    friends.forEach(give=>{
        let temp = 0;
        friends.forEach(take=>{
            if(giftTable[give][take]>giftTable[take][give]) temp++;
            else if((giftTable[give][take]===giftTable[take][give])&&(giftParams[give]>giftParams[take])) temp++;
        });
        if(temp>answer) answer = temp;
    })
    
    return answer;
}