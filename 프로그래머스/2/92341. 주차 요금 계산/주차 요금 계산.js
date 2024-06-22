function convertToMinute(hourMinute){
    const [hour,minute] = hourMinute.split(":");
    return Number(hour) * 60 + Number(minute);
}

function fee(fees,time){
    const [basicTime,basicCharge,unitTime,unitPrice] = fees;
    if(time<=basicTime) return basicCharge;
    return basicCharge + Math.ceil((time-basicTime)/unitTime)*unitPrice;
}

function solution(fees, records) {
    
    const inObj = {};
    const outObj = {};
    const obj = {};
    records.forEach(info=>{
        const [time,number,state] = info.split(" ");
        if(state === "IN") inObj[number] ? inObj[number].push(convertToMinute(time)) : inObj[number] = [convertToMinute(time)];
        if(state === "OUT") outObj[number] ? outObj[number].push(convertToMinute(time)) : outObj[number] = [convertToMinute(time)];
    });
    for(const number in inObj){
        if(outObj[number]===undefined) outObj[number] = [convertToMinute("23:59")];
        else if(inObj[number].length !== outObj[number].length) outObj[number].push(convertToMinute("23:59"));
        obj[number] = 0;
        outObj[number].forEach(el=>obj[number]+=el);
        inObj[number].forEach(el=>obj[number]-=el);
        obj[number] = fee(fees,obj[number]);
        
    }
    return Object.keys(obj).sort((x,y)=>x-y).map(key=>obj[key]);
}