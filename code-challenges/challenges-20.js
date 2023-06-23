'use stict';

// -------------------------------------------------------------------------------------------------------
// Challenge 20 LeetCode:
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
//
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
//
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

const containsDuplicate = function(nums) {
    let count = 0
  let array = nums.sort();
  
  for(let i = 0; i < array.length-1; i++){
      if(array[i] === array[i + 1]){
        count++ 
    }
  }
  
   return count >= 1;
};