/*151. Reverse Words in a String
Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


 */

function reverseStr(str){
   return str
        .trim()
        .split(/\s+/)      // split by one or more spaces
        .reverse()         // reverse the words
        .join(" "); 
}

let s = "the sky is blue"
console.log(reverseStr(s));

