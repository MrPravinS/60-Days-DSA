/* print all divisors of a given number
ex => 36 => [1,2,3,4,6,9,12,18,36]
 */

/*
function allDivisors(n){
    let arr = []
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            
            arr.push(i)
            
        }
    }
    console.log("All Divisors: ", arr)
}


allDivisors(36)
allDivisors(35)
*/

function printAllDiv(n){
    let arr = []

    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            arr.push(i)
            if(Math.floor(n / i) !== i){
                arr.push(n/i)
            }
        }
    }
    return arr.sort((a,b)=>a-b)
}

console.log(printAllDiv(36))