// write a function that calculates the
// sum of the digits of a given number

// 237 => 2 + 3 + 7 = 12

function sumOfDigits(number){
  let numstr = number.toString().split("")
//   console.log(numstr);
//   console.log(numArr);

  let arrLength = numstr.length;
   let sum = 0
  for(let i = 0; i < arrLength; i++){
    
    // console.log(numArr[i]);

    sum += parseInt(numstr[i])
    
    
  }
  console.log(`The sum of the digits of a  ${number} is : `,sum);
  
  
}
sumOfDigits(12345)
sumOfDigits(104)


// write  a function thats find the reverse of a given number,
// if the no. is negative the reverse no. should also be negative

// ex 435 => 534
// -21 => -12


function reverseNumber(n){
  let numberStr = n.toString().split("").reverse().join('')

//   console.log(numberStr);

  let revNum = parseInt(numberStr) * Math.sign(n)  
  // return sign of the number +, - , or zero
  console.log(`The reverse of the given ${n} is :`,revNum);
  


}
reverseNumber(234)
reverseNumber(-34)



// wap that taje string as a input and
// check it is palindrome or not if yes => true , not => false


function isPalindrome(str) {
  str = str.toLowerCase().replace(/\W/g, "");
  //   /\W/g => replace all space , special character
  // except word to empty str  and /\w/g vice versa
  //   console.log(str);

  let revString = str.split("").reverse().join("");
  //  console.log(revString);

  return str === revString ? true : false;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));



// write a js function that takes a array of
// a numbers as input and return 
// the max number in the arr


function maxNum(arr){
//  let maxN = Math.max()
//  for(let i = 0; i< arr.length; i++){
//     if(arr[i] > maxN){
//         maxN = arr[i]
//     }
//  }
//  return maxN

 return Math.max(...arr) // ... is used to spred a array
 //  into simple number 

}
console.log(maxNum([5]));

console.log(maxNum([2,4,6,8,1909]));
console.log(maxNum([-10,-5,-2,-9,-3,0]));
