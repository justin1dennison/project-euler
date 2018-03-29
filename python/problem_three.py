from math import ceil, sqrt, floor
from itertools import tee

def sieve(n):
    primes = [True] * n
    primes[:2] = [False, False]
    for i, is_prime in enumerate(primes):
        if is_prime:
            yield i
            for x in range(i * i, n, i):
                primes[x] = False

def main():
    target = 600851475143
    primes = sieve(floor(sqrt(target)))
    lower, upper = tee(primes, 2)
    lower_factors = (p for p in lower if target % p == 0)
    upper_factors = (target // p for p in upper 
                        if target % p == 0 
                        and not any((target // p) % n == 0 
                                    for n in sieve(floor(sqrt(target // p)))))
    prime_factors = list(lower_factors) + list(upper_factors)
    max_prime_factor = max(prime_factors)
    print(max_prime_factor)


if __name__ == '__main__':
    main()
