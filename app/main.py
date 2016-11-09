#!/usr/bin/env python3

import re

class Nabeatsu_Number() :
    STR_DIC = {(False, False): 'smart', (False, True): 'stupid', (True, False): 'idiot', (True, True): 'dumb'}
    NOT_NUMBER = 'invalid'
    BASE_NUMBER = '3'

    def __init__(self, number) :
        self.number = str(number)

    def __str__(self) :
        if(not self.is_integer()) :
            return self.NOT_NUMBER
        else :
            return self.STR_DIC[(self.is_divisibility_by_base_number(), self.is_contains_base_number())]

    def is_divisibility_by_base_number(self) :
        _number = int(self.number)
        _base = int(self.BASE_NUMBER)
        return ((_number % _base) == 0)

    def is_contains_base_number(self) :
        return (not self.number.count(self.BASE_NUMBER) == 0)

    def is_integer(self) :
        return True if re.match('^[0-9]{1,}$', self.number) else False


def main(argv):
    for v in argv :
        print(Nabeatsu_Number(v))
