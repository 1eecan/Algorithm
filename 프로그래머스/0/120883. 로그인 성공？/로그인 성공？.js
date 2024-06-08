function solution(id_pw, db) {
    const obj = {};
    db.forEach(([id,pw])=>{
        obj[id] = pw;
    });
    const [id,pw] = id_pw;
    
    if(obj[id]===undefined) return "fail";
    if(obj[id]==pw) return "login";
    if(obj[id]!==pw) return "wrong pw";
    
}