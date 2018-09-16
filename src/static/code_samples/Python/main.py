#!/usr/bin/env python

from fractions import Fraction
from functools import reduce


def fraction_product(fractions):
    """Returns the product of the list of fractions

    Args:
        fractions : list of fraction objects

    Returns:
        Fraction object representing the product

    """
    return reduce(lambda x,y:
                  Fraction(x.numerator * y.numerator,
                           x.denominator * y.denominator), fractions)


def main():
    count = int(input())
    fractions = [Fraction(input().replace(" ", "/")) for i in range(count)]
    print(fraction_product(fractions))


if __name__ == '__main__':
    main()
