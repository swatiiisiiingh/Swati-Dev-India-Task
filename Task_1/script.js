let counter = 0;
let isProcessing = false;

async function processItem(item) {
  if (isProcessing) return;
  isProcessing = true;
  
  await someAsyncOperation(item);
  counter++;
  isProcessing = false;
}
