function solution(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    const regex = /^[a-z]+$/;
    
    const obj1 = {};
    const obj2 = {};
    
    for(let i=0;i<str1.length-1;i++){
        const char = str1[i]+str1[i+1];
        if(regex.test(char)) obj1[char]==undefined ? obj1[char]=1 : obj1[char]++;
    }
    
    for(let i=0;i<str2.length-1;i++){
        const char = str2[i]+str2[i+1];
        if(regex.test(char)) obj2[char]==undefined ? obj2[char]=1 : obj2[char]++;
    }
    
    function intersection(obj1,obj2){
        const obj = {};
        for(const key in obj1){
            if(obj2[key]!==undefined && obj1[key]<=obj2[key]) obj[key] = obj1[key];
            if(obj2[key]!==undefined && obj1[key]>obj2[key]) obj[key] = obj2[key];
        }
        return Object.keys(obj).reduce((acc,cur)=>acc+obj[cur],0);
    }
    
    function union(obj1,obj2){
        const obj = {};
        for(const key in obj1){
            if(obj2[key]!==undefined && obj1[key]<obj2[key]) obj[key] = obj2[key];
            else if(obj2[key]!==undefined && obj1[key]>=obj2[key]) obj[key] = obj1[key];
            else obj[key] = obj1[key];
        }
        for(const key in obj2){
            if(obj1[key]!==undefined && obj1[key]<obj2[key]) obj[key] = obj2[key];
            else if(obj1[key]!==undefined && obj1[key]>=obj2[key]) obj[key] = obj1[key];
            else obj[key] = obj2[key];
        }
        return Object.keys(obj).reduce((acc,cur)=>acc+obj[cur],0);
    }
    
    if(intersection(obj1,obj2)===0 && union(obj1,obj2)===0) return 65536;
    if(intersection(obj1,obj2)===0) return 0;
    return Math.floor((intersection(obj1,obj2)/union(obj1,obj2))*65536);
}