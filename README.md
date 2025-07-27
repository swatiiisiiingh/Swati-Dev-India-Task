# Swati-Dev-India-Task

Task-1
Given code:-
let counter = 0;
let isProcessing = false;

async function processItem(item) {
  if (isProcessing) return;
  isProcessing = true;
  
  await someAsyncOperation(item);
  counter++;
  isProcessing = false;
}

for the given code:-
1. Create the implementaion for the given code.
2. Create an implementation for someAsyncOperation.
3. What is the problem with expected vs actual.
4. How should i fix it.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Task-2
Create a linked list with a loop in it. Now give an algorithm or steps to find the loop in the given linked list.

