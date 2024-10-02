function isValid(s) {
	let stack = [];
	for (let char of s) {
		if (char === "[" || char === "(" || char === "{") {
			stack.push(char);
		} else {
			if (
				(char === ")" && stack[stack.length - 1] !== "(") ||
				(char === "]" && stack[stack.length - 1] !== "[") ||
				(char === "}" && stack[stack.length - 1] !== "{")
			) {
				return false;
			}
			stack.pop();
		}
	}
	console.log(stack);
	if (stack.length === 1 || 0) {
		return false;
	} else {
		return !stack.length;
	}
}

let s = "((";

console.log(isValid(s));
