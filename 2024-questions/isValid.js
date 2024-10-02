function isValid(s) {
	let stack = [];
	for (let char of s) {
		if (char === "[" || char === "(" || char === "{") {
			stack.push(char);
		} else {
			if (
				!stack.length ||
				(char === ")" && stack[stack.length - 1] !== "(") ||
				(char === "]" && stack[stack.length - 1] !== "[") ||
				(char === "}" && stack[stack.length - 1] !== "{")
			) {
				return false;
			}
			stack.pop();
		}
	}

	return true;
}

let s = "()";

console.log(isValid(s));
