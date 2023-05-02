'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

const findMax = (arr)=>{
    let max = arr[0];
    let index = 0;
    // write your code here
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
            index = i;
            // console.log("The max is: ", max, " in the index: " , index);
        }
        // else{
        //     console.log("Not found in the array");
        // }
    }
    return max;
}

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  
let arr = [20, '234', 'car', 41, 20, 'chair'];
const sumNums = (arr)=>{
    let sum = 0;
    // write your code here
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'number'){
            sum += arr[i];
        }
    }
    return sum;
}


// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  Required:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr) => {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  
    // const arr2 = [];
    // for (let i = 0; i < arr.length; i++) {
    //   let j = arr.length - i - 1;
    //   arr2[j] = arr[i];
    // }
    // return arr2;
  };
  
// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};