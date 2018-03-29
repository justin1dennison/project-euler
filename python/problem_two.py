from functools import lru_cache, partial
from itertools import count, takewhile


@lru_cache()
def fib(n):
    a,b = 0, 1
    while n > 0:
        a, b = b, a + b
        n -= 1
    return a

def is_even(n):
    return n % 2 == 0

def main():
    even_fibs = filter(is_even, map(fib, count()))
    even_fibs_under_four_million =  takewhile(lambda x: x < 4000000, even_fibs)
    s = sum(even_fibs_under_four_million)
    print(s)


if __name__ == '__main__':
    main()
