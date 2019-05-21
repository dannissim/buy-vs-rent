import numpy as np
from bidi import algorithm as bidialg # this module fixes rtl text in python

default_vars = {    # vars dictionary - var name : var default value, this dictionary can be changed
            # overall 15 parameters
    # Unchangeable personal parameters:
    # "Age" : 25, # need to use
    # "Life Expectancy" : 100,    # need to use, not surely relevant
    "Years Until Retirement" : 30,  # need to use
    "Years To Save" : 0,    # it seems that 0 is optimal for everyone
    
    "Start Amount" : 150000,  # seems to have less effect on final asset value
    "Gross Salary" : 20000,
    "Years To Future" : 50,  # number of years ahead to calcuate/compare assets value

    # deciding changeable parameters
    "Rent" : 4000,  # monthly rent fee
    "Rent Growth" : 0.04,  # 3% annual rent rate growth, influences asset value less
    "House Price" : 1.5e6,
    "House Price Growth" : 0.05,  # 5% annual purchase fee growth
    "Long Term Savings Return" : 0.08,
    # (annual), seems not to effect asset value very much
    "Mortgage Interest" : 0.035,
    # percentage of net income to go to rent + extra savings, or % of net to go to mortgage 
    "Savings Rate From Net" : 0.5,
    # less sensitive but also important parameters
    # short_savings_return = 0.05  # 5% annual rate of return from savings
    "Salary Growth" : 0.02  # annual salary growth
}

'''
Vars that effect RFL Value: Rent, Rent Growth, Long Savings Return
Vars that effect Buying Value: Rent, Rent growth, House Price, House Price Growth
Vars to test: Rent, Rent Growth, House Price Growth, House Price, Long Term Savings Return, Mortgage Interest
'''
# the order of this dict is the order in which the graphs will be shown in the results page
vars_range = {  #vars range dictionary - var name : var possible range, this dictionary should not be changed
    "Years To Future" : np.arange(1, 50, 1), # recently added

    "Years To Save" : np.arange(0, 10, 1), #np.aragne(0,10,2) - may be constant 0 *
    "Rent" : np.arange(3000, 6001, 500), #jumps of 1000, may be constant
    "Rent Growth" : np.around(np.linspace(0.0, 0.06, num = 7), 2),  # jumps of 2%-3%, may be constant linspace(0.0, 0.06, num = 7)
    "House Price Growth" : np.around(np.linspace(0.0, 0.08, num = 5), 5), #linspace(0.0, 0.07, num = 5)
    "House Price" : np.arange(1.25e6, 3.6e6, 250000).astype(int),    # may be constant
    "Long Term Savings Return" : np.around(np.linspace(0.04, 0.1, num = 7), 2), # may be constant - not constant
    "Mortgage Interest" : np.around(np.linspace(0.02, 0.07, num = 6), 3), #2-7, jumps 1 linspace(0.02, 0.07, num = 6)
    "Savings Rate From Net" : np.around(np.linspace(0.25, 0.7, num = 5), 2), #start from 0, jumps of 10%, may be constant *
    "Salary Growth" : np.around(np.linspace(0.0, 0.03, num = 4), 2) # may be constant *
}

class InvalidVarException(Exception):
    pass
def validate_vars(vars):
    # if not 17 < vars['Age'] < 100:
    #     raise InvalidVarException('invalid age arg')
    if not -1 < vars['Years Until Retirement'] < 60:
        raise InvalidVarException('invalid years-to-retirement arg')
    # if not 50 < vars['Life Expectancy'] < 121:
    #     raise InvalidVarException('invalid life expectancy arg')
    if not 4000 < vars['Gross Salary'] < 71000:
        raise InvalidVarException('invalid bruto salary arg')
    if not -1 < vars['Years To Save'] < 51:
        raise InvalidVarException('invalid years-to-save arg')
    if not 0 <= vars['Start Amount'] <= 5e6:
        raise InvalidVarException('invalid start amount arg')
    if not 1 <= vars['Years To Future'] <= 100:
        raise InvalidVarException('invalid years-to-future arg')
    if not 1500 <= vars['Rent'] <= 10000:
        raise InvalidVarException('invalid rent arg')
    if not -0.05 < vars['Rent Growth'] < 0.11:
        raise InvalidVarException('invalide rent growth arg')
    if not 1e6 <= vars['House Price'] <= 5e6:
        raise InvalidVarException('invalid house price arg')
    if not -0.1 <= vars['House Price Growth'] <= 0.1:
        raise InvalidVarException('invalid house price growth arg')
    if not 0.01 <= vars['Long Term Savings Return'] <= 0.16:
        raise InvalidVarException('invalid long-term return rate arg')
    if not 0.01 <= vars['Mortgage Interest'] <= 0.09:
        raise InvalidVarException('invalid mortgage interest arg')
    if not 0.1 <= vars['Savings Rate From Net'] <= 0.95:
        raise InvalidVarException('invalid savings rate from net arg')
    if not -0.01 <= vars['Salary Growth'] <= 0.10:
        raise InvalidVarException('invalid salary growth rate arg')

def translate(var: str):
    switcher = {
        'Years To Future' : bidialg.get_display('שנים קדימה'),
        'Years Until Retirement' : bidialg.get_display('שנים עד יציאה לפנסיה'),
        'Gross Salary' : bidialg.get_display('שכר ברוטו'),
        'Years To Save' : bidialg.get_display('שנים לחסוך לפני רכישה'),
        'Start Amount' : bidialg.get_display('סכום התחלתי'),
        'Rent' : bidialg.get_display('שכירות'),
        'Rent Growth' : bidialg.get_display('קצב גדילת מחיר השכירות'),
        'House Price' : bidialg.get_display('מחיר דירה'),
        'House Price Growth' : bidialg.get_display('קצב גדילת מחירי הדיור'),
        'Long Term Savings Return' : bidialg.get_display('ריבית חסכון לתווך רחוק'),
        'Mortgage Interest' : bidialg.get_display('ריבית משכנתא'),
        'Savings Rate From Net' : bidialg.get_display('שעור חסכון משכר ברוטו'), 
        'Salary Growth' : bidialg.get_display('קצב גדילת השכר'),
        'Purchase House' : bidialg.get_display('לקנות דירה'),
        'Rent For Life' : bidialg.get_display('לשכור תמיד'),
        'Assets Value (₪)' : bidialg.get_display('שווי הנכסים בסוף התקופה (₪)')
    }
    return switcher[var]






''' overall 7 variables. Range of each variable (all ranges are inclusive):
Variables that we cannot optimize:
savings rate from net: 0.2 - 0.5 with jumps of 0.05 (7 options)
rent growth: 0.01 - 0.06 with jumps of 0.1 (6 options)
rent: 3000 - 6000 with jumps of 500 (7 options)
long term savings return rate: 0.04 - 0.1 with jumps of 0.1 (7 options)
mortgage interest: 0.03 - 0.04 with jumps of 0.02 (6 options)
salary growth: 0 - 0.03 with jumps of 0.01 (4 options)
Can maybe optimize:
house price: 1,250,000 - 3,500,000 with jumps of 250,000 (10 options)
another variable: years to save before purchasing home

overall ~ 500,000 variations, * 0.2 sec for each run ~ 24 hours

Build data frame with ~0.5m rows, 7-9(?) variable columns, and 2-4(?) result columns including assets if rent
and assets if buy.

Conclusions we could derive from the data frame: we can find if a variable is relevant to choosing to buy or rent,
do this by finding if in any of the data samples/simulations, there was one where the variable made the difference
between buying or selling
Other conclusions: min and max for variables in which a certain result occurred, for example, there was no
sample in which it is suggested to buy where variable x is less than (greater than) k. (different wording, 
For all samples where x is greater than k, we can conclude you should buy/rent.)
another: realize that some of the variables are not impactful at all and can nearly eliminate them from input.
another: 

Ideas for visualization: Run function for every variation of vairables, and save all of the results to a table.
Then try to apply a dimension reducing algorithm such as pca to visualise the data in a graph.
another: once we have a data frame, there are various techniques for visualizing data frames.
- should check if I should normalize the result data.

note - must have minimum 25% of house price for down payment x

note - after testing, optimal house price is mostly dependent on house price growth, pre-purchase savings return
rate, and salary

How does retirement age effect the data? When we retire, we no longer save, which means we have greater expenses
when we rent.
Implementation: add retirement age, add complete retirement savings amount including pension fund, 
simulate retirement and taking from fund, and check sums after 'Years To Future'

later features:
toggle Keren Hishtalmut, Web app with graphics, I need to add in to calculation the fact that in retirement
home owners have less expenses because no rent payment, which may mean that home owners can retire earlier.

Next things to do:
add in calculatoin retirement age. Begin to create web app. Try to derive information from csv table.
Make sure functions correctly, logically and reasonably.
'''
