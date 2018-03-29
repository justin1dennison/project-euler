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

module.exports = {
    range,
    sum,
    multipleOf,
    or
}
