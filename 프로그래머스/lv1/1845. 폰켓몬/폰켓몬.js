function solution(nums) {
    let length = nums.length/2;
    nums = new Set(nums);
    return nums.size<length?nums.size:length;
}