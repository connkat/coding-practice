# Built-in Data Structures

## Objects
Unordered key-value pairs
When to use: when you don't need order and you need fast access for insersion/removal
* Inserions O(1)
* Removal O(1)
* Searching O(n) --linear time
* Access O(1)

JS is able to add and store, retrieve, remove, and update all in constant time. There is no beginning or end of the object.

Accessing with a key is contant time where as searching is linear. We might have to check every value to get that answer. 

* Object.keys O(n) --as the number of items grows, we will need to add this to the array
* Object.values O(n)
* Object.entries O(n)
* hasOwnProperty O(1) --constant time

## Arrays
Ordered Lists
Use when you need order r when you need a fast access/insertion and removal
let names = ["Joe", "Melissa", "Anne"];
let values = [true, {}, 2, "cool"];

* Searching = O(n)
* Access = O(1) --doesn't matter how long the array is, this is constant time. 
* Insertion = ? 
* Removal = ?

Inserting onto the end of an array is constant time. However, if you try to insert anywhere else, you will have to re-index all other index of the array. .push() + .pop() are always faster than .shift() and .unshift() 

* O(1): 
	- push, pop
* O(n): 
	- shift, unshift, concat, slice, splice
	- forEach/map/filter/reduce/etc
* O(n * log n): 
	- sort