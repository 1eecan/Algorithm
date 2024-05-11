function solution(n) {
    const root = Math.sqrt(n);
    return Math.floor(root) === root ? (root+1)*(root+1) : -1;
}