function solution(nums) {
    let length = nums.length/2;
    nums = [...new Set(nums)];
    return nums.length<length?nums.length:length;
}