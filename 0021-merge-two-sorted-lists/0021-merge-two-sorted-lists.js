/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
    
    //initialize a new LinkedList with a dummy ListNode
    let result = new ListNode(0);
    
    //Maintain a ref to the head of the new LinkedList
    let resHead = result;
    
    //Whilst both of the passed in lists contain more elements
    while (l1 != null && l2!= null) {
        //If l1's val is smaller
        if (l1.val <l2.val) {
            
            //Add l1's value to the new list
            result.next = l1;
            
            //Move l1 to its next node
            l1 = l1.next;
            
        } else {
            
            //Add l2's val to the new list
            result.next = l2;
            
            //Move l2 to its next node
            l2 = l2.next;
            
        }
        
        //Move into the next level of result list
        result = result.next
        
    }
    
    //If l1 runs out of elements
    if (l1 == null) {
        //append l1 to the new list
        result.next = l2;
    }
    //if l2 has run out of elements
    else {
        //append l1 to the new list
        result.next = l1;
    }
    
    return resHead.next;
    
};