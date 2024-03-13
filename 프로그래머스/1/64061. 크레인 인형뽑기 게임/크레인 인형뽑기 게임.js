function solution(board, moves) {
    var answer = 0;
    var newBoard = [];
    
    for(let i=0;i<board[0].length;i++){
        newBoard.push([]);
        board.forEach(item=>{
            if(item[i]!==0) newBoard[i].unshift(item[i]);
        });
    }
    
    var cart = [];
    
    for(let i=0;i<moves.length;i++){
        if(newBoard[moves[i]-1].length!==0){
            cart.push(newBoard[moves[i]-1].pop());
        }
        if(cart.length>1&&cart[cart.length-1]===cart[cart.length-2]){
            cart.pop();
            cart.pop();
            answer+=2;
        }
    }

    return answer;
}