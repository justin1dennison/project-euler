from itertools import count, takewhile
import operator as op

def multiple_of(n):
    return lambda x: x % n == 0

def main():
    s = sum((x for x in range(1, 1000) 
        if multiple_of(3)(x) or multiple_of(5)(x)))         
    print(s)
    


     

if __name__ == '__main__':
    main()
