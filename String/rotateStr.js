/*
796. Rotate String
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
A shift on s consists of moving the leftmost character of s to the rightmost position.
For example, if s = "abcde", then it will be "bcdea" after one shift.
Example 1:
Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:
Input: s = "abcde", goal = "abced"
Output: false
*/


function rotateStr(str,goal)
{
    if(str.length !== goal.length) return false
    return (s+s).includes(goal)
}


let s = "abcde", goal = "cdeab"
let s1 = "abcde", goal1 = "abced"
console.log(rotateStr(s,goal));
console.log(rotateStr(s1,goal1));
console.log(rotateStr("","a"));
