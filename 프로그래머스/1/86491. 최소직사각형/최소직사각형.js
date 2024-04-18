function solution(sizes) {
    const arr = [...sizes];
    for(let i=0;i<arr.length;i++){
        if(arr[i][0]<arr[i][1]) [arr[i][0],arr[i][1]] = [arr[i][1],arr[i][0]];
    }
    const width = arr.sort((x,y)=>y[0]-x[0])[0][0];
    const height = arr.sort((x,y)=>y[1]-x[1])[0][1];
    
    return width*height;
}