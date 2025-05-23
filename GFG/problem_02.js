/*Sorted Array Search
Input: arr[] = [1, 2, 3, 4, 6], k = 6
Output: true
Exlpanation: Since, 6 is present in the array at index 4 (0-based indexing), output is true.
 */

// function searchArr(arr,k){
//     // arr.map((item)=>{
//     //     if(item === k) return true

//     // })
//     for(let i = 0; i < arr.length; i++){
//         // console.log(arr[i]);
//         if(arr[i] === k) return true

//     }
//     return false
// }

// console.log(searchArr( [1, 2, 3, 4, 6],6));
// console.log(searchArr( [1, 2, 4, 6],3));

/* Given a string s, convert the first letter of each word in the string to uppercase. */

class Node{
    constructor(data,next){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    insertAtFirst(data){
        this.head = new Node(data, this.head)
        this.size++
    }

    insertAtLast(data){
        let node = new Node(data)
        let current ;

        if(!this.head){
            this.head = node
        }else{
            current = this.head

            while(current.next){
                current = current.next
                
            }
            current.next = node
        }
        this.size++
    }

    printListData(){
        let current = this.head

        while(current){
            console.log(current.data);
            
            current = current.next
        }
     }
}


const ll = new LinkedList()

ll.insertAtFirst(300)
ll.insertAtLast(2000)
ll.printListData()
console.log(ll);
