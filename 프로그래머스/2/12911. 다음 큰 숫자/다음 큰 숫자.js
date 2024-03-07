function solution(n) {
    let next=n;
    let n_binary_one = n.toString(2).replace(/0/g,"").length;
    while(next++){
        if(n_binary_one == next.toString(2).replace(/0/g,"").length){
            return next;
        }
    }
}