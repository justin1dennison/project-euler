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

function *takeWhile(pred, iterable){
	for(let el of iterable){
		if(!pred(el)) return;
		yield el;
	}	
}

function lessThan(bound){
	return number => number < bound;
}

function *integers(start=1){
	while(true){
		yield start;
		start += 1;
	}	
}

function *apply(transform, iterable){
	for(let element of iterable){
		yield transform(element);	
	}
}

module.exports = {
    range,
    sum,
    multipleOf,
    or,
    takeWhile,
    integers,
    lessThan,
    apply    
}
