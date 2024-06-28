function solution(polynomial) {
    polynomial = polynomial.split(" + ");
    let prefix = 0;
    let number = 0;
    polynomial.forEach(el=>{
        if(el[el.length-1]==="x") prefix+=Number(el.substr(0,el.length-1)) || 1;
        else number+=Number(el);
    });
    if(prefix === 0 && number !== 0) return `${number}`;
    if(prefix === 1 && number === 0) return 'x';
    if(prefix === 1 && number !== 0) return `x + ${number}`;
    if(number === 0) return `${prefix}x`
    return `${prefix}x + ${number}`;
}