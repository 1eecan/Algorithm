function solution(s) {
    s=s.replace(/{/g,"").replace(/},/g,"*").replace(/}/g,"").split("*").sort((x,y)=>x.length-y.length).map(el=>el.split(","));
    let set = new Set();
for (let i = 0; i < s.length; i++) {
  for (el of s[i]) {
    el = parseInt(el);
    set.add(el);
  }
}
    return [...set];
}
