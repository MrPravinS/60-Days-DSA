// write a function that takes a string as a input
// and find longest word in the string

function longestWord(str){
    if(str.trim().length === 0) return false
    
   let words = str.split(" ")
//     words = words.sort((a,b)=>{
//         b.length - a.length
//         // console.log(a)
//         // console.log(b);
//         // console.log(a.length);
//         console.log(a);
        
        
//     })
//     return words.at(-1)
// //    console.log(words);
return words.reduce((acc,cur)=> cur.length > acc.length? cur:acc)
   
   
}
console.log(longestWord("I am pravin Shegamwar"));



// 02 write a js function to find all the factors of a given number 

function findFactor(number){
    let factor = []
  for(let i = 1; i <= 12; i++){
    // if(number % i == 0) console.log(i);

    if(number % i == 0){
       factor.push(i)
    }
        
        
  }
  console.log(`Factors of a number ${number}:- `,...factor);
  
  
  /// join method 
  console.log(`Factors of a number ${number}:- `,factor.join(" "));
  // join saperate by ,
  console.log(`Factors of a number ${number}:- `, factor.join(", "));
  
}
findFactor(12)
findFactor(5)
findFactor(10)


// wap to sum of all even number from 1 to n

/*
function sumOfEven(n){
    let sum = 0
    const numbers = []
 for(let i = 1; i <= n; i++){
    
    if(i % 2 == 0){
        // console.log(i);
        
         sum += i
         numbers.push(i)  // gives only even no. bcs condition
    }
    // numbers.push(i)  // gives all numbers bcos there is no condition so every i push in array numbers
      
 }
 console.log(numbers);
 
//  console.log(numbers.join(" "));
 
 console.log(`The sum of even number from 1 to ${n} : `,sum);
}
sumOfEven(6)
*/
// sumOfEven(10)

// wap to add sum of odd number from 1 to n
/*
const  sumOfOddNumber = (number)=>{
   
    let sum = 0
    // for loop for traversing
    for(let i = 1; i <= number; i++){
        
        if(i % 2 !== 0) sum += i;
        // console.log(i);
  
    }
    console.log(`The sum of odd number from 1 to ${number} :`,sum);
}
sumOfOddNumber(5)
*/

// wap to create multiplication table of the given number
/*
function multiPlication(a){
// use for loop for traversing
  
 for(let i = 1; i <= 10; i++){
    console.log(`${a} * ${i} :-`, a * i);
    }
 
}

multiPlication(3)
*/

// wap function that take string as a inp and generate # at prefix and
// string first letter convert into uppercase with no spaces
// ex :- inp = i am pravin shegamwar
// op :- #IAmPravinShegamwar

function hasGenerator(str) {
    if (str.length >= 258 || str.trim() === 0) return false;
  
    str = str.split(" ");  // split convert string into array with space 
    str = str.map(     // map create copy of existing array
      (curEl) =>
        //   curEl.replace(curEl[0],curEl[0].toUpperCase())
        curEl.charAt(0).toUpperCase() + curEl.slice(1)   // slice give the element after 1 position
    );
    str = `#${str.join("")}`;   // join joint the element inside (", ") what you put with that
    console.log(str);
  
    // return str
  }
  console.log(hasGenerator("i am pravin shegamwar"));
  
  
  
