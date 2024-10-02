/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
	const addNodes = (node1, node2, carry) => {
		if (node1 === null && node2 === null && carry === 0) return null;

		let sum = carry;
		if (node1 != null) {
			sum += node1.val;
			node1 = node1.next;
		}
		if (node2 != null) {
			sum += node2.val;
			node2 = node2.next;
		}

		let newNode = new ListNode(sum % 10);

		newNode.next = addNodes(node1, node2, Math.floor(sum / 10));

		return newNode;
	};
	return addNodes(l1, l2, 0);
}
