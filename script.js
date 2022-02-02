//------------Simple Search in Array (Big O notation - O(n))----------------//

const RandomArray = Array.from({length: 20}, () => Math.floor(Math.random() * 1000));

let max = RandomArray[0];
let maxIndex = 0;
let replacements = 0;
let comparisons = 0;

for (let i = 0; i < RandomArray.length; i++){
    if(RandomArray[i] > max){
        max = RandomArray[i];
        maxIndex = i;
        replacements++;
    }
    comparisons++;
}
console.log('Simple Search in Array');
console.log(RandomArray);
console.log('Max element: ' + max);
console.log('Max element index: ' + maxIndex);
console.log('Comparisons: ' + comparisons);
console.log('Replacment: ' + replacements);


//------------ Binary Search in Array (Big O notation - O(log n))----------------//
 

  console.log('');
  console.log('Binary Search in Array');
  let array = [1,3,5,8,7,28,90,123];
  console.log(array);
  let targetValue = 5;

  function binarySearch(array, targetValue){
    let start = 0
    let end = (array.length -1)
    let middle = Math.floor((start + end) / 2)
    while (array[middle] !== targetValue && start <= end){
      if (targetValue < array[middle]){
        end = middle - 1;
      } else {
        start = middle + 1;
      }
      middle = Math.floor((start + end)/2);
    }
    if(array[middle] === targetValue){
      return middle;
    }
    return "Value not found"
  }
  console.log('Target Value: ' + targetValue);
  console.log('Index of Target Value: ' + binarySearch(array, targetValue));


 //------------ Bubble Sort in Array (Big O notation - O(n**2))----------------//

 function bubbleSort(arr){
    
    let i, j;
    let len = arr.length;
      
    let isSwapped = false;
      
    for(i =0; i < len; i++){
        
      isSwapped = false;
        
      for(j = 0; j < len; j++){
          if(arr[j] > arr[j + 1]){
            let temp = arr[j]
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            isSwapped = true;
          }
      }

      if(!isSwapped){
        break;
      }
    }
    console.log(arr)
}

let NonSortArray = [233, 45, 23, 343, 3, 53346, 356, 566, 89];
console.log('');
console.log(NonSortArray);
console.log('Sorted Array: ');
let SortArray = bubbleSort(NonSortArray);
console.log(SortArray);
