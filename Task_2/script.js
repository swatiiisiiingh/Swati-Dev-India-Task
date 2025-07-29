//find a loop in a given linked list.
//Give Linked List.
// --------------------------------------------------------
// 1. Define the ListNode class for our linked list nodes
// --------------------------------------------------------
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null; // Initially, points to null
    }
}

// --------------------------------------------------------
// 2. Function to create a linked list with a loop (as per the example image)
//    Input: head -> 1 -> 2 -> 3 -> 4 -> 5, pos = 1 (node with value 2)
//    Output: The tail (node 5) points back to node 2.
// --------------------------------------------------------
function createLinkedListWithLoop() {
    let head = new ListNode(1);
    let node2 = new ListNode(2);
    let node3 = new ListNode(3);
    let node4 = new ListNode(4);
    let node5 = new ListNode(5); // This will be the tail

    // Build the initial straight chain
    head.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node5;
    
    // Create the loop: node5 (tail) connects to node2 (which is at index 1, value 2)
    node5.next = node2; 

    console.log("Linked List Created (with loop from 5 to 2)");
    // Note: Directly printing a looped list can cause infinite loops in console,
    // so we'll just confirm its creation.
    return head;
}

// --------------------------------------------------------
// 3. Function to create a linked list without a loop (for testing no-loop scenario)
// --------------------------------------------------------
function createLinkedListWithoutLoop() {
    let head = new ListNode(10);
    let node2 = new ListNode(20);
    let node3 = new ListNode(30);

    head.next = node2;
    node2.next = node3;
    node3.next = null; // Explicitly null to ensure no loop
    console.log("Linked List Created (without loop)");
    return head;
}


// --------------------------------------------------------
// 4. Implement Floyd's Cycle-Finding Algorithm (Tortoise and Hare)
// --------------------------------------------------------
/**
 * Detects if a cycle exists in a singly linked list using the Tortoise and Hare algorithm.
 * * @param {ListNode} head The head of the linked list.
 * @returns {boolean} True if a cycle is detected, false otherwise.
 */
function hasCycleTortoiseAndHare(head) {
    // Edge case: Empty list or list with only one node cannot have a cycle
    if (head === null || head.next === null) {
        return false;
    }

    let slow = head;       // Moves one step at a time
    let fast = head;       // Moves two steps at a time

    // Loop until fast pointer reaches the end of the list or encounters null.
    // fast.next !== null is crucial because fast moves two steps, so it needs
    // to ensure there's a next.next node.
    while (fast !== null && fast.next !== null) {
        slow = slow.next;        // Slow pointer moves one step
        fast = fast.next.next;   // Fast pointer moves two steps

        // If the pointers meet, a cycle is detected
        if (slow === fast) {
            return true;
        }
    }

    // If the loop finishes, it means fast reached the end (null),
    // so no cycle was found.
    return false;
}


// --------------------------------------------------------
// 5. Demonstrate the functions
// --------------------------------------------------------

console.log("--- Testing Linked List with a Loop ---");
let headWithLoop = createLinkedListWithLoop();
let hasLoop = hasCycleTortoiseAndHare(headWithLoop);
console.log("Does the linked list have a cycle (Tortoise and Hare)?", hasLoop); // Expected Output: true

console.log("\n--- Testing Linked List without a Loop ---");
let headWithoutLoop = createLinkedListWithoutLoop();
let noLoop = hasCycleTortoiseAndHare(headWithoutLoop);
console.log("Does the linked list have a cycle (Tortoise and Hare)?", noLoop); // Expected Output: false

console.log("\n--- Testing Edge Cases ---");
// Test an empty list
console.log("Does an empty list have a cycle?", hasCycleTortoiseAndHare(null)); // Expected: false

// Test a list with a single node
let singleNode = new ListNode(99);
console.log("Does a single-node list have a cycle?", hasCycleTortoiseAndHare(singleNode)); // Expected: false

// Test a single node with a self-loop
let selfLoopNode = new ListNode(100);
selfLoopNode.next = selfLoopNode;
console.log("Does a single-node list with a self-loop have a cycle?", hasCycleTortoiseAndHare(selfLoopNode)); // Expected: true