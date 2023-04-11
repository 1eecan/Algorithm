function solution(players, callings) {
    let map = new Map();
    players.forEach(function(player,idx){
        map.set(player,idx);
    });
    callings.forEach(function(calling){
        map.set(players[map.get(calling)-1],map.get(calling));
        players[map.get(calling)]= players[map.get(calling)-1];
        players[map.get(calling)-1]=calling;
        map.set(calling,map.get(calling)-1);
        
    })
    for(let key of map){
    players[map.get(key)]=key;
    }
    return players;
}