function solution(wallpaper) {
    let arr=[];
    wallpaper.forEach(function(items,i){
        items=items.split("");
        items.forEach(function(item,j){
            if(item=="#"){
                    arr.push([i,j]);
               }
        });
    });
    let left=[],right=[],top=[],bottom=[];
    top=[...arr].sort((x,y)=>{
    return x[0]<y[0]?-1:1; }
                    );
    bottom=[...arr].sort((x,y)=>{
    return x[0]<y[0]?1:-1; }
                    );
    left=[...arr].sort((x,y)=>{
    return x[1]<y[1]?-1:1; }
                    );
    right=[...arr].sort((x,y)=>{
    return x[1]<y[1]?1:-1; }
                    );
    return ([top[0][0],left[0][1],bottom[0][0]+1,right[0][1]+1]);
}