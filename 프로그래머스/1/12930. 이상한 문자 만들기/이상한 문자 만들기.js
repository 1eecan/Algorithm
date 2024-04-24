function solution(s) {
    let arr = s.split(" ");
    arr = arr.map((item)=>{
        const arr = item.split("");
        let flag=0;
        while(flag!==arr.length){
            if(flag%2===1) arr[flag] = arr[flag].toLowerCase();
            else arr[flag] = arr[flag].toUpperCase();
            flag++;
        }
        return arr.join("");
    });
    return arr.join(" ");
}