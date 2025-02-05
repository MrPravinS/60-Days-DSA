let nums = [-1, 0, 3, 5, 9, 12];
target = 9;

// const binarySearch = nums.forEach(element => {
//     nums[element] === target;
//     return element
// });

// console.log(binarySearch);

// for(let i = 0; i < nums.length; i++){
//     if(nums[i] === target) {
//         console.log(i);

//     }
//     return -1
// }
/*
// find target element in the array using binary search
function binarySearch(arr,target){
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] === target) return i;
    // }
    // return -1

    let n = arr.length;
    let low = 0;
    let high = n - 1;
    
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
        console.log(mid);
        

        if(arr[mid] === target) return mid;
        else if(target > arr[mid]) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
console.log(binarySearch(nums,target));
*/

// lower bound
//Given a sorted array arr[] (with unique elements) and
// an integer k, find the index (0-based) of the
//  largest element in arr[] that is less than or equal to k.
// This element is called the "floor" of k.
// If such an element does not exist, return -1.
// arr <= k

function findFloor(arr, k) {
  // your code here
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= k) {
      ans = mid;
      low = mid + 1;
    } else {
      
      high = mid - 1;
    }
  }
  return ans;
}

console.log(findFloor([1, 2, 8, 10, 11, 12, 19],5));
