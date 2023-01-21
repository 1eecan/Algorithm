function solution(n, arr1, arr2) {
    var answer = [];
    let bi_arr1 = arr1.map((el)=>el.toString(2));
    let bi_arr2 = arr2.map((el)=>el.toString(2));
    let temp = temp1 = temp2 = [];
    for(let i =0;i<n;i++){
        temp1 = bi_arr1[i].split("");
        temp2 = bi_arr2[i].split("");
        while(temp1.length != n){
            temp1.unshift(0);
        }
        while(temp2.length != n){
            temp2.unshift(0);
        }
        for(let j = 0;j<n;j++){
            if(temp1[j]== 0&&temp2[j]== 0){
                temp.push(" ");
            }
            else{
                temp.push("#");
            }
            
        }
        answer[i]=temp.join("");
        temp = temp1 = temp2 =[];
    }
    return answer;
}