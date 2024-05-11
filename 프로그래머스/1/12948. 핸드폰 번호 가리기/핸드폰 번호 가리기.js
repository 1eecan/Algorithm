function solution(phone_number) {
    return new Array(phone_number.length-4).fill("*").join("")+phone_number.split("").splice(phone_number.length-4,phone_number.length).join("");
}