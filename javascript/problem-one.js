function* range(start, stop, step = 1) {
	while (start < stop) {
		yield start;
		start += step;
	}
}

function sum(iterable, start = 0) {
	return iterable.reduce((acc, n) => acc + n, start);
}

function multipleOf(n) {
	return x => x % n === 0;
}

function or(...preds){
	return x => preds.reduce((acc, n) => acc || n(x), false);
}

function main() {
	const s = sum(
		Array.from(range(1, 1000))
		     .filter(or(multipleOf(3), multipleOf(5)))
	)
	console.log(s);
}

main();
