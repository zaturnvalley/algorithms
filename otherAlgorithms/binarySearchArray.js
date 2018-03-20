// Unsorted Array
let array = [3,4,5,2,3,645,4,3,6,7,8757,65,3];

// Sorted Array
let sorted = array.sort(function(a,b){ return a - b});

// Binary Search 
function binarySearch(arr, value){
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;

  while( low <= high ) {
    mid = Math.floor((high + low) / 2);
    // Check if Middle value is equal to value looking for
    if (arr[mid] == value){
      return arr[mid];
    } else if (value > arr[mid]) {
    // Move low up one
      low = mid + 1;
    } else {
      // Move the high down one
      high = mid - 1;
    }
  }
  return -1;
}

let didYouFindIt = binarySearch(sorted, 645);

console.log(didYouFindIt);