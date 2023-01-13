function solution(array, commands) {
   return commands.map((el)=>(array.slice(el[0]-1,el[1]).sort((x,y)=>x-y)[el[2]-1]));
    
}