# 1

def multiple_of_three(number):
    if number % 3 == 0:
        return True
    else:
        return False


print(multiple_of_three(39))

# 2


def get_currency_symbol_from_code(currency):
    uppercase_currency = currency.upper()
    if uppercase_currency == "GEL":
        return "ლ"
    elif uppercase_currency == "USD":
        return "$"
    elif uppercase_currency == "EUR":
        return "€"
    else:
        return "write currency correctly"


print(get_currency_symbol_from_code("usd"))

# 3


def transform_to_uppercase(string):
    uppercase_string = string.upper()
    print(uppercase_string)


transform_to_uppercase("my name is joe")

# 4


def profit(price_for_sale, price_for_company):
    company_profit = price_for_sale - price_for_company
    profit_in_percents = company_profit / price_for_company * 100
    result = f'company profit for this sale is {profit_in_percents}%'
    print(result)


profit(1250, 1000)

# 5

unfiltered_numbers = [2342, 234, 5123, 42356, 1345, 8939, 3434, 9843]


def even_numbers(number):
    return number % 2 == 0


filtered_numbers = list(filter(even_numbers, unfiltered_numbers))
print(filtered_numbers)

# 6

players = [
    {
        "name": "khvicha kvaratskhelia",
        "rank": "pro",
        "goals": 142,
    },
    {
        "name": "victor osimen",
        "rank": "pro",
        "goals": 192,
    },
    {
        "name": "gia suramelashvili",
        "rank": "legend",
        "goals": 323,
    }
]

# 6


def search_in_array(array):
    search_player = next(
        (player for player in array if player['name'] == "victor osimen"), None)
    print(search_player)


search_in_array(players)
