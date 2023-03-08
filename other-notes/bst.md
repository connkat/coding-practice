# Binary Search Tree

## Overview

The binary search tree is an algorithm used for analyzing the node and its left and right branches and returning the value. The BST is devised on the architecture of a basic binary search algorithm, so it enables faster lookups, insertions, and removals of nodes. It is made up of multiple nodes and the following attributes:

- Nodes of the tree are represented in a parent-child relationship.
- Each parent node can have zero child nodes or a maximum of two subnodes or subtrees on the left and right sides.
- Every sub-tree (aka binary search tree) has sub-branches on the right and left of themselves.
- All nodes are linked with key-value pairs.
- The keys of the nodes present on the left subtree are smaller than the kets of their parent node.
- Similarly, the left sub-tree nodes' keys have lesser values than their parent node's keys.

```
tree =   10
	   /    \
	  5      15
	/  \    /  \
   2    5  13   22
  /         \
 1           14
```

- The top of the tree (10) is the main or top level node. It has left and right sub-trees.
- The right sub-stree (15) has a value greater than the node.
- The left sub-tree (7) has a value less than the node.

## Why do we need a BST?

Answer: speed and accuracy

Due to the fact that the BS is in branch-like formation with parent-child relations, the algorithm knows in which location of the tree the lelments need to be searched. This decreases the number of key-value comparisons the program has to make to locate the desire element. The left side of the tree is always less and the right side always more.

## Types of BTs

- Complete binary tree: all levels in the trees are full of last level's possible exceptions. Similarly, all the node are full, direcrting the far left.
- Full BT: All nodes have 2 child nodes except the lead.
- Balanced or Perfect binary tree: In the tree all the nodes have 2 children. Besides, there is the same level of each sub-node.

## How BST Works

The tree always has a root node and further child nodes. The algorithm performs all the operations by comparing the values with the root and its further child nodes in the left or right sub-tree accordingly. BST primarily offers: Search, Insert, Delete. Each operation has its own structure and method of execution/analysis, but the most complex if Delete.

### Search:

Always initiated at the root node and then moves right or left depending on the elemnet to be located based on value:

EX: Searching for value 10.

- level 1: 10 < 12, go to left sub-tree
- level 2: 10 > 7, go to the right sub-tree
- level 3: 10 = 10, returns value.

```
tree =   12
	   /    \
	  7      19
	/  \ 
   5    9
         \
         10
```

### Pseudocoding for search in BST:

```
search(element, root)
     if !root
    	return -1
     if root.value == element
    	return 1
     if root.value < element
    	search(element, root.right)
      else
    	search(element, root.left)
```

### Insert:

This is a ver striaghtfroward operation, First, the root nose is inserted, then the next value is comared with the root node. If the value is greater than the root, it is added to the right sub-tree, and if it is lesser than the root, it is added to the left sub-tree.

### Pseudocoding for inserting in BST:

````
insert (element, root)
    Node x = root
    Node y = NULL
    while x:
    	y = x
    if x.value < element.value
        x = x.right
    else
        x = x.left
    if y.value < element
    	y.right = element
    else
    	y.left = element
```

### Delete:
For deleting a node from a BST, there are some cases, i.e. deleting a root or deleting a left node. Also, after deleting root we need to think about the root code. 

Say we need to delete a lead node, we can just delete it, but if we want to delete a root, we need to replace the root's value with another node. 

Ex:
* Case 1: Node with zero children: this is the easiest situation, you just need to delete the node. 
```
tree =   12					tree2 =   12
	   /    \					    / 
	  7      [19]				    7 
	/  \ 						  /  \ 
   5    9					     5     9
         \						        \
         10						         10
```
* Case 2: Node with one child: once you delete the node, simply connect its child node with the parent node of the deleted value. 

```
tree =   12					tree2 =   12
	   /    \					    /    \
	  7      19					   7      19 
	/  \ 						  /  \ 
   5    [9]					     5     10
          \
          10
```
* Case 3: Node with two children: It works on two rules: 
	- In Order Predecessor: you need to delete the node with the two children and replace it with the largest value on the left sub-tree of the deleted node
```
tree =  [12]				tree2 =   10
	   /    \					    /    \
	  7      19					   7      19 
	/  \ 						  /  \ 
   5     9					     5     9
          \
          10
```
	- In order Sucessor: you need to delete the node with the two children and replace it with the largest value on the right sub-tree of the deleted node. 
	```
tree =  [12]				tree2 =   19
	   /    \					    /
	  7      19					   7 
	/  \ 						  /  \ 
   5     9					     5     9
          \								\
          10							 10
```
### Pseudocoding for deleting in BST:
```
delete (value, root):
    Node x = root
    Node y = NULL
# searching the node
    while x:
    	y = x
    if x.value < value
        x = x.right
    else if x.value > value
        x = x.left
    else if value == x
        break
# if the node is not null, then replace it with successor
    if y.left or y.right:
    	newNode = GetInOrderSuccessor(y)
    	root.value = newNode.value
# After copying the value of successor to the root #we're deleting the successor
    	free(newNode)
    else
    	free(y)


## Summary
* BST is an advanced level algorithm that performs various operations based on the comparison of node values with the root node.
* Any of the points in a parent-child hierarchy represents the node. At least one parent or root node remains present all the time.
* There is a left sub-tree and right sub-tree. The left subtree contains values that are less than the root node and the right subtree contains a value that is greater than the root node.
* Each node can have either zero, one, or two children.
* A binary search tree facilitates primary operations like search, insert, and delete.
* Delete is the most complex have multiple cases, for instance, a node with no child, node with one child, and node with two children.
* The algorithm is utilized in real-world solutions like games, autocomplete data, and graphics.