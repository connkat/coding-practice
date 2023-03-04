# Binary Search Tree

## Overview

The binary search tree is an algorithm used for analyzing the node and its left and right branches and returning the value. The BST is devised on the architecture of a basic binary search algorithm, so it enables faster lookups, insertions, and removals of nodes. It is made up of multiple nodes and the following attributes: 

* Nodes of the tree are represented in a parent-child relationship.
* Each parent node can have zero child nodes or a maximum of two subnodes or subtrees on the left and right sides. 
* Every sub-tree (aka binary search tree) has sub-branches on the right and left of themselves. 
* All nodes are linked with key-value pairs. 
* The keys of the nodes present on the left subtree are smaller than the kets of their parent node. 
* Similarly, the left sub-tree nodes' keys have lesser values than their parent node's keys. 

```
tree =   10
	   /    \
	  5      15
	/  \    /  \
   2    5  13   22
  /         \
 1           14
 ```

 * The top of the tree (10) is the main or top level node. It has left and right sub-trees. 
* The right sub-stree (15) has a value greater than the node. 
* The left sub-tree (7) has a value less than the node.

## Why do we need a BST?
Answer: speed and accuracy

Due to the fact that the BS is in branch-like formation with parent-child relations, the algorithm knows in which location of the tree the lelments need to be searched. This decreases the number of key-value comparisons the program has to make to locate the desire element. The left side of the tree is always less and the right side always more.

## Types of BTs
* Complete binary tree: all levels in the trees are full of last level's possible exceptions. Similarly, all the node are full, direcrting the far left. 
* Full BT: All nodes have 2 child nodes except the lead. 
* Balanced or Perfect binary tree: In the tree all the nodes have 2 children. Besides, there is the same level of each sub-node. 

## How BST Works
The tree always has a root node and further child nodes. The algorithm performs all the operations by comparing the values with the root and its further child nodes in the left or right sub-tree accordingly. BST primarily offers: Search, Insert, Delete. Each operation has its own structure and method of execution/analysis, but the most complex if Delete. 

### Search: 
Always initiated at the root node and then moves right or left depending on the elemnet to be located based on value: 
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

### Delete: 