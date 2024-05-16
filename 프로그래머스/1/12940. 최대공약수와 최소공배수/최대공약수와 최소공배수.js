function solution(n, m) {
    const [num1,num2] = [n,m].sort((x,y)=>x-y);
    function getGCD(num1,num2){
        //num2 is larger than num1
        let GCD = 1;
        let temp = 1;
        while(temp<=num2){
            if(num1%temp===0&&num2%temp===0) GCD=temp;
            temp++;
        }
        return GCD;
    }
    //최소공배수 구하기
    function getLCM(num1,num2){
        //num2 is larger than num1
        if(num1===num2) return num1;
        let LCM = 1;
        let temp1 = num1;
        let temp2 = num2;
        let divider = 2;
        
        while(1){
            if(temp1%divider===0&&temp2%divider===0){
                LCM*=divider;
                temp1/=divider;
                temp2/=divider;
            }else if(divider<=num2){
                divider++;
            }else{
                LCM *= temp1*temp2;
                break;
            }
        }
        return LCM;
    }
    return [getGCD(num1,num2),getLCM(num1,num2)];
}