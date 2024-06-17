function solution(clothes) {
    const clothesObj = {};
    
    clothes.forEach(([name, part]) => {
        clothesObj[part] = (clothesObj[part] || 0) + 1;
    });
    
    let combinations = 1;

    for (const count of Object.values(clothesObj)) {
        combinations *= (count + 1);
    }

    return combinations - 1;
}
