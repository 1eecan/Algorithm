function solution(x1, x2, x3, x4) {
    function calc(x,y,arrow){
        if(x===y) return x;
        else if(arrow==="up") return false;
        else if(arrow==="down") return true;
    }
    return calc(calc(x1,x2,"down"),calc(x3,x4,"down"),"up");
}