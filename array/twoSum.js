/*
Two Sum find the elements thats sum are = target
arr = [2,6,4,8,11]  target = 14
 */


// function twoSum(arr,target){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === target) return [arr[i],arr[j]]
//         }
//     }
// }

// let arr = [2,6,4,8,11]
// let target = 15
// console.log(twoSum(arr,target));


let arr = [2,6,4,8,11]



var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        let complement  = target - nums[i]
        if(map.has(complement)){
            return [map.get(complement),i]
        }
        map.set(nums[i],i)
    }
    return []
};

console.log(twoSum(arr,14));
