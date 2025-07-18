/*\58. Length of Last Word
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6. */

function StrLength(s){
//  newS = s.trim().split(" ")
//     return newS[newS.length-1].length

let i = s.length-1
let length = 0

while(i >= 0 && s[i] == " ") i--   // skip trailing spaces
while(i >= 0 && s[i] !== " "){   // count length of last word
    length++
    i--
}
return length

}

let s = "hello world"
let s2 = "   fly me   to   the moon  "
let s3 =  "luffy is still joyboy"
console.log(StrLength(s2));
console.log(StrLength(s));
console.log(StrLength(s3));
