// let counter = 0;
// let isProcessing = false;

// async function processItem(item) {
//   if (isProcessing) return;
//   isProcessing = true;
  
//   await someAsyncOperation(item);
//   counter++;
//   isProcessing = false;
// }


//Implementation
let counter = 0;
let isProcessing = false; // Flag to indicate if an operation is in progress

async function processItem(item) {
  if (isProcessing) return; // If already processing, exit immediately
  isProcessing = true;       // Set flag to true: "We are now busy"
  
  await someAsyncOperation(item); // Perform the async task, pause here until it's done
  counter++;                     // Increment counter after successful completion
  isProcessing = false;          // Set flag back to false: "We are no longer busy"
}





//This code is designed to ensure that someAsyncOperation is not executed concurrently. If processItem is called while isProcessing is true, the new call should be ignored.
// A simple implementation of an async operation that takes 1 second
function someAsyncOperation(item) {
    console.log(`--- Starting processing for: ${item} ---`);
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`--- Finished processing for: ${item} ---`);
            resolve(); // Resolve the promise after 1 second
        }, 1000); // Simulate 1 second of work
    });
}