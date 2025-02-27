/*You are given two integers L and R, your task is to find the XOR of elements of the range [L, R]. 
Input: 
L = 4, R = 8 
Output:
8 
Explanation:
4 ^ 5 ^ 6 ^ 7 ^ 8 = 8*/

function oper1(n){
   if(n % 4 === 1) return 1;
   else if(n % 4 === 2) return n + 1;
   else if (n % 4 === 3) return 0
   else return n
}
// console.log(oper1(10));

function xorOp(l,r){
    // let ans = 0
    // for(let i = l; i <= r; i++){
        
        
    //     ans = ans ^ i
    // }
    // return ans
   return oper1(l - 1) ^ oper1(r)
}
console.log(xorOp(4,9));
