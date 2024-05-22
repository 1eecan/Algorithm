function solution(s) {
    let time = 0;
    let count = 0;
    
    function getDeletedZero(){
        const deletedZero = s.split("").reduce((acc,cur)=>{
            if(cur==="0") return acc+1;
            else return acc;
        },0);
        s = (s.split("").filter(x=>x==="1").join("").length).toString(2);
        return deletedZero;
    }

    while(s!=="1"){
        count+=getDeletedZero();
        time++;
    }
    return [time,count];
}