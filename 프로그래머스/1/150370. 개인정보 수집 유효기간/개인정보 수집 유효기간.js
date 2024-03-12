function solution(today, terms, privacies) {
    var answer = [];
    
    const termsMap = Object.fromEntries(terms.map(term=>term.split(" ")));
    const dueDate = [];
    
    for(privacy of privacies){
        const [date, alphabet] = privacy.split(" ");
        let count = 0;
        date.split(".").forEach((item,index)=>{
            if(index===0) count += item*12*28;
            else if(index===1) count += parseInt(item)*28;
            else count += parseInt(item);
        });
        count+=termsMap[alphabet]*28;
        dueDate.push(count);
    }
    let todayCount = 0;
    today.split(".").forEach((item,index)=>{
        if(index===0) todayCount += item*12*28;
        else if(index===1) todayCount += parseInt(item)*28;
        else todayCount += parseInt(item);
    });
    
    dueDate.forEach((item,index)=>{
        if(item<=todayCount) answer.push(index+1);
    })
    
    return answer;
}