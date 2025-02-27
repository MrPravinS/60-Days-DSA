/*You are given two integers L and R, your task is to find the XOR of elements of the range [L, R]. 
Input: 
L = 4, R = 8 
Output:
8 
Explanation:
4 ^ 5 ^ 6 ^ 7 ^ 8 = 8*/

function xorOp(l,r){
    let ans = 0
    for(let i = l; i <= r; i++){
        
        
        ans = ans ^ i
    }
    return ans
}
console.log(xorOp(4,8));
