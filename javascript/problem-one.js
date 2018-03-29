const { or, sum, range, multipleOf } = require('./utils');

function main() {
	const s = sum(
		Array.from(range(1, 1000))
		     .filter(or(multipleOf(3), multipleOf(5)))
	)
	console.log(s);
}

main();
