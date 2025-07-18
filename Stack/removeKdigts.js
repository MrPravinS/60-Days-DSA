/**
402. Remove K Digits
Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.
Example 1:
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:
Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:
Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
*/

function removeKDigits(arr, k){
    let stack = []

    for(let digit of arr){
        while(k > 0 && stack.length && stack[stack.length - 1] > digit){
            stack.pop()
            k--
        }
        stack.push(digit)
    }

    while(k > 0){
        stack.pop()
        k--
    }

    let result = stack.join("").replace(/^0+/,"")
    return result === "" ? "0":result
}

let arr = "1432219"
let arr2 = "112"
let arr4 = "10"
let k = 2
console.log(removeKDigits(arr4,k));
