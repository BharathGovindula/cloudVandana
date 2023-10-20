// Perform sorting of an array in descending order. 

function sortArrayDescending(arr) {
    const len = arr.length;
    
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        // Compare adjacent elements and swap them if they are in the wrong order
        if (arr[j] < arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  // Example usage:
  const arrayToSort = [5, 2, 9, 1, 5, 6];
  sortArrayDescending(arrayToSort);
  console.log(arrayToSort);