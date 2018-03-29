from itertools import product

def is_palindrome(number):
    s = str(number)
    middle = len(s) // 2
    return s[:middle] == s[middle::][::-1]

def main():
    three_digits = range(1000, 100, -1)
    largest_palindrome = 0
    palindromes = (i*j for i,j in product(three_digits, three_digits)
                    if is_palindrome(i * j))
    largest_palindrome = max(palindromes)
    print(largest_palindrome)
            


if __name__ == '__main__':
    main()
