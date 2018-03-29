const { sum, 
	range, 
	multipleOf, 
	integers, 
	lessThan, 
	takeWhile, 
	apply } = require('./utils');



function fib(n){
	let  [a, b] = [0, 1]
	while(n > 0){
		[a, b] = [b, a + b];
		n -= 1;
	}

	return a;

}






function main(){
	const fibs = apply(fib, integers());
	const lessThanFourMillion = lessThan(4000000);
	const isEven = multipleOf(2);
	const fibsLessThanFourMillion = takeWhile(lessThanFourMillion ,fibs);
	const s = sum(Array.from(fibsLessThanFourMillion).filter(isEven));
	console.log(s);
}


main();
