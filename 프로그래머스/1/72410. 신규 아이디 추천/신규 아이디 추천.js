function solution(new_id) {
    let id = new_id;
    //1
    id = id.toLowerCase();
    //2
    const notAllowedString = "~!@#$%^&*()=+[{]}:?,<>/";
    const notAllowedStringArray = notAllowedString.split("");
    for(let str of notAllowedStringArray){
        id = id.replaceAll(str,"");
    }
    //3
    const deleteDotArray = [];
    for(let str of id){
        if(str === "." && deleteDotArray[deleteDotArray.length-1] === ".") continue;
        else deleteDotArray.push(str);
    }
    id = deleteDotArray.join("");
    //4
    id = id.split("");
    while(id[id.length-1] === ".") id.pop();
    id = id.reverse();
    while(id[id.length-1] === ".") id.pop();
    id = id.reverse().join("");
    //5
    if(id === "") id = "a";
    //6
    id = id.split("");
    if(id.length > 15) id = id.slice(0,15);
    if(id[id.length-1] === ".") id.pop();
    id = id.join("");
    //7
    if(id.length<3) while(id.length<3) id+=id[id.length-1];
    
    return id;
}