function solution(board) {
    let safe = board.flat().length;
    board.forEach((arr,row)=>{
        arr.forEach((el,col)=>{
            if(row-1>=0 && col-1>=0 && board[row-1][col-1]===1) safe--;
            else if(row-1>=0 && board[row-1][col]===1) safe--;
            else if(row-1>=0 && col+1<arr.length && board[row-1][col+1]===1) safe--;
            else if(col-1>=0 && board[row][col-1]===1) safe--;
            else if(board[row][col]===1) safe--;
            else if(col+1<arr.length && board[row][col+1]===1) safe--;
            else if(row+1<arr.length && col-1>=0 && board[row+1][col-1]===1) safe--;
            else if(row+1<arr.length && board[row+1][col]===1) safe--;
            else if(row+1<arr.length && col+1<arr.length && board[row+1][col+1]===1) safe--;
        });
    });
    return safe;
}