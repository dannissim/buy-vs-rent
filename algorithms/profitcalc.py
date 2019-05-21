"""
vars that are still not updated to be precise:
- start amount a
- rent a
- rent growth a
- savings return a
- net salary x
- house price a
- house price growth a
- mortgage interest (currently close estimation, not precise) a
- annual mortgage payment (percentage of net income, plus every 6 years from the keren hishtalmut (maybe)) a

I should make a graph of asset value over time comparing buying and renting a house
I should also make several graphs with varying parameter values to check each parameter's influence
It seems that the two variables that have the largest influence are house price growth rate and the amount
of years to save.
Should add functionality of adaptive savings return rate corresponding with number of years to invest x
Should fork off of salaryCalc x
should add salary growth rate, adaptive mortgage payment budget, adaptive rent calculation x

years until pension is also relevant as during pension don't need to pay for mortgage, but do need to pay rent.
should build an app with gui that receives changeable parameters from user and builds personal profile. Gives
financial information and graphs and conclusions.
Maybe need to build a function that calculates potentially the minimum number of years until retirement.

# More things to do:
- let the computer give you the house/rent price you can afford, give you an estimated retirement age, asset value
at age of retirement.
- Visualize results for all variable combinations - this is the most important now.
- graph of mortgage left over time
- Create many different offline profiles according to variables values and upload them to the app,
and classify new user to existing profile, giving the user the exhaustive computation conclusions
corresponding to that profile.

What the user will receive after inputing information:
Many relevant graphs to download, Written message with program conclusions and interpretations according to profile.
 
Expansive Methodology page, as well as open source code.

Useful Graphs:
assets over time, house price affordability checking bar graph, graphs that fix all variables but one and check
impact on assets and decision, for example assets by years to save before purchase. pca graph and others to learn.

Retirement age variables:
current assets value, bruto salary, long term savings return rate, yearly expenses - which depends on whether you
rent or purchased a home, current age, life expectancy

I may need to change to the end result. Instead of assets value at age 80, receive age of retirement and assets value
at age of retirement.
What financial consequences are possible from the decision of renting vs buying:
retirement age, assets value at retirement, assets over time, maybe risk factors, 
"""

import core
import vars_module

#vars = vars_module.vars




'''compound interest calculator: args: starting amnt, number of periods to compound and to add, interest rate, 
    and additions to amnt each period, and annual additions increase rate
    results_lst should be of size periods + 1
    explain args and return:
    '''
def compound_interest(start, periods, rate, const_additions=0, additions_increase_rate=0,
                         additions_lst : list = None, results_lst : list = None):
    
    if rate == 0 and additions_increase_rate == 0:
        return start + const_additions * periods
    if periods == 0:
        if results_lst is not None:
            results_lst[0] = start
        return start
    if additions_increase_rate==0 and additions_lst is None:
        # compound interest formula
        return int((start + const_additions/rate) * (1 + rate) ** periods - const_additions/rate)
    if results_lst is not None:
        if len(results_lst) != periods + 1: # input validation
            return -1   # error, should not happen
        results_lst[0] = start
    res = start
    for i in range(periods):
        if additions_lst is not None:
            res = (additions_lst[i] + res) * (1 + rate)
        elif additions_increase_rate != 0:
            res = (const_additions + res) * (1 + rate)
            const_additions = const_additions * (1 + additions_increase_rate)
        if results_lst is not None:
            results_lst[i+1] = int(res)
    return int(res)
    '''
    if const_additions != 0:  # may not need this
        new_start = (start + const_additions) * (1+rate)
        new_addition = const_additions*(1+additions_increase_rate)
        return compound_interest(new_start, periods - 1, rate, new_addition, additions_increase_rate) 
    if additions_lst is not None:
        # should maybe change to be iterative instead of recursive
        new_start = (start + additions_lst[0]) * (1+rate)
        del additions_lst[0]
        if results_lst is not None:
            results_lst[i] = new_start
        return compound_interest(new_start, periods - 1, rate, additions_lst= additions_lst)
    res = start
    '''
# returns number of years to pay off mortgage, if fourth arg is entered,
#  function returns the amount of mortgage left to pay after timeperiod years
def mortgage_calc(vars, amnt, payment, timeperiod=float('inf'), payment_increase_rate=0):
    hishtalmut_savings_return = 0.05  # savings return in keren hishtalmut - 6 year investment
    # until mortgage is paid off, save only in keren hishtalmut
    monthly_savings_after_purch = int(0.1 * vars['Bruto Salary'])  
    annual_savings_after_purch = 12 * monthly_savings_after_purch
    hishtalmut_balance = compound_interest(0, 6, hishtalmut_savings_return, const_additions= annual_savings_after_purch,
                                            additions_increase_rate= vars['Salary Growth']) # no need to change here
    i = counter = 0
    while amnt > 0:
        if counter % 6 == 0 and counter != 0:  # every six years empty hishtalmut balance to mortgage
            i = 1
        new_amnt = int((amnt - payment - i * hishtalmut_balance) * (1 + vars['Mortgage Interest']))
        if amnt < new_amnt:
            return -1   #will never be able to pay off mortgage
        amnt = new_amnt
        counter += 1
        payment *= (1 + payment_increase_rate)
        if counter == timeperiod:  # timeperiod < mortgage length => func returns amount of mortgage left
            # return mortgage left minus hishtalmut fund remainder
            return int(amnt - compound_interest(0, counter % 6, hishtalmut_savings_return,\
                 const_additions= annual_savings_after_purch, additions_increase_rate= vars['Salary Growth']))    # no need to change here
        i = 0
    return counter  # return length in years to pay off mortgage

# define and calculate several variables

# returns assets value given vars dictionary.
# If timeperiod param is entered, the func returns assets value after timeperiod
def assets(vars): #timeperiod=vars.vars['YEARS_TO_FUTURE']):
    vars_module.validate_vars(vars) # input validation
    if vars['Rent'] > core.net_income(vars['Bruto Salary']) * vars['Savings Rate From Net']:    # input validation
        return 0    # can't afford rent. Saving Rate From Net var is to small or rent is too high
    
    #monthly_savings_before_purch = int(0.1 * vars['Bruto Salary'] + vars['Savings Rate From Net'] * net_salary
    #                                    - vars['Rent'])
    #annual_savings_before_purch = 12 * monthly_savings_before_purch

    prepurch_savings_return = prepurch_savings_return_calc(vars['Years To Save'])

    annual_savings = annual_savings_lst(vars, vars['Years To Future'])
    results_lst = [0 for i in range(vars['Years To Future'] + 1)]
    compound_interest(vars['Start Amount'], vars['Years To Future'], prepurch_savings_return,\
                                    additions_lst=annual_savings, results_lst= results_lst)
    # results_lst is a list of length Years To Future + 1, now holds the savings amount for each year
    #  before purchase, until Years To Future
    
    # now we need to calculate years_save = minimum years we need to save to have enough for minimum down payment
    years_save = -1
    for i in range(vars['Years To Future']):
        if results_lst[i] >= 0.25 * house_value_calc(vars, i):
            years_save = i
            break
    if years_save == -1:
        return 0    # can't afford home, will never save enough for down payment
    years_save = max(years_save, vars['Years To Save'])
    '''    
    # savings_amnt is results_lst[
    # prepurch_savings_return = 0.05

    purch_price = house_value_calc(vars, vars['Years To Save'])  # price of house at purchase time
    #savings_before_purch = compound_interest(vars['Start Amount'], vars['Years To Save'], prepurch_savings_return,\
    #                                          annual_savings_before_purch, vars['Salary Growth'])

    # take care of case when starting amount is less than 25% of house price (minimum down payment),
    # save until have enough for down payment
    years_save = vars['Years To Save'] # number of years to save for minimum down payment
    amnt = savings_before_purch
    house_price = purch_price
    if savings_before_purch < 0.25 * purch_price:   # minimum down payment is 25%
        while amnt < 0.25 * house_price:
            prepurch_savings_return = prepurch_savings_return_calc(years_save)
            years_save += 1
            amnt = compound_interest(vars['Start Amount'], years_save, prepurch_savings_return,\
                                    annual_savings_before_purch, vars['Salary Growth'])
            house_price = house_value_calc(vars, years_save)
            if years_save == vars['Years To Future']:
                return 0    # can't afford the home
    '''

    ''' may want to add this: if input is less than the minimum num of years to save for down payment, return 0
    if vars['years_save'] < years_save:
        return 0    # need to save more years in order to buy home
    '''

    #years_save now depicts vars['years_save'] + additional years to save for minimum down payment
    if vars['Years To Future'] <= years_save:   # didn't buy home yet
        #return int(compound_interest(vars['Start Amount'], vars['Years To Future'], prepurch_savings_return,\
        #     annual_savings_before_purch, vars['Salary Growth']))
        return results_lst[vars['Years To Future']]
    '''
    if years_save >= vars['Years To Future']:   # also didn't buy home yet, but waited longer, change investment return
        return int(compound_interest(vars['Start Amount'], vars['Years To Future'], vars['Long Term Savings Return'],\
             annual_savings_before_purch, vars['Salary Growth']))
    '''
    if years_save >= vars['Years To Future']:
        return 0    # didn't have enough time to buy home

    purch_price = house_value_calc(vars, years_save)
    savings_amnt_at_purchase = results_lst[years_save]

    # annual mortgage payment = monthly savings before purch. + rent fee (no longer need to pay rent)
    #  - keren hishtalmut savings

    #mortgage payment is effected by salary growth, not by rent growth
    mortgage_payment = net_salary_after_time(vars, years_save) * vars['Savings Rate From Net'] * 12
    mortgage_amnt = purch_price - savings_amnt_at_purchase
    #print('house price ', int(house_price), 'amount ', int(amnt), 'mortgage amnt ', int(mortgage_amnt), 'years save ', years_save)
    # print("mortgage amount: " + str(mortgage_amnt))

    # should maybe change mortage payment to be list of mortgage payment, because payment is effected by salary growth
    # and by rent growth
    mortgage_len = mortgage_calc(vars, mortgage_amnt, mortgage_payment, payment_increase_rate=vars['Salary Growth'])
    if mortgage_len == -1:
        return 0    #will never be able to pay off mortgage

    if vars['Years To Future'] <= years_save + mortgage_len:    #means bought house, but still hasn't paid off mortgage
        # the timeperiod arg may be need to be fixed
        # assets value = (house value at YEARS_TO_FUTURE) - (mortgage left to pay)
        return int(house_value_calc(vars, vars['Years To Future']) - mortgage_calc(vars, mortgage_amnt, mortgage_payment,
                                                        vars['Years To Future'] - years_save, vars['Salary Growth']))
    # timeperiod > years to save + mortgage length
    # print("years to pay mortgage: " + str(mortgage_len))
    # how much would have paid if still renting
    #rent_after_mortgage = compound_interest(vars['Rent'], years_save + mortgage_len,
    #                                         vars['Rent Growth'])
    # might need to update to make salary increase at certain rate over time
    #monthly_savings_after_mortgage = vars['Savings Rate From Net'] * net_salary_after_time(vars,\
    #                                                                 years_save + mortgage_len)\
    #                                 + rent_after_mortgage
    
    
    #annual_savings_after_mortgage = 12 * monthly_savings_after_mortgage
    #print(timeperiod, years_save, mortgage_len, years_down_payment)
    #print( timeperiod - (years_save + mortgage_len + years_down_payment), annual_savings_after_mortgage)

    annual_savings_after_mortgage = net_salary_after_time(vars, vars['Years To Future']) * \
                                    vars['Savings Rate From Net'] * 12

    savings_after_mortgage = compound_interest(0, vars['Years To Future'] - (years_save + mortgage_len),
                                    vars['Long Term Savings Return'], const_additions= annual_savings_after_mortgage,
                                                                    additions_increase_rate=vars['Salary Growth'])
    # print("savings before purchase: " + str(savings_before_purch))
    # print("savings after mortgage: " + str(savings_after_mortgage))
    # print("house worth after 50 years: " + str(end_price))
    # print("total assets value: " + str(assets_value))
    return int(house_value_calc(vars, vars['Years To Future']) + savings_after_mortgage)

""""
def savings_after_mortgage(years_save, mortgage_len, long_savings_return, annual_savings_after_mortgage):
    return compound_interest(0, YEARS_TO_FUTURE - (years_save + mortgage_len),\
                             long_savings_return, annual_savings_after_mortgage)
"""

# returns value of house after timeperiod
def house_value_calc(vars, timeperiod):
    #print(timeperiod)
    return compound_interest(vars['House Price'], timeperiod, vars['House Price Growth'])

def net_salary_after_time(vars, timeperiod):
    return core.net_income(compound_interest(vars['Bruto Salary'], timeperiod, vars['Salary Growth']))

# sets savings return rate before house purchase, according to years saving
def prepurch_savings_return_calc(years_save):
    '''
    if years_save < 5:
        return 0.03
    elif years_save < 10:
        return 0.05
    elif years_save < 15:
        return 0.07
    else:
        return 0.08
    '''
    return 0.05
# only rent without buying a house
def rent_savings(vars):
    vars_module.validate_vars(vars)
    #net_salary_after_rent = core.net_income(vars['Bruto Salary'])
    #monthly_savings = int(0.1 * vars['Bruto Salary'] + vars['Savings Rate From Net'] * net_salary_after_rent - vars['Rent'])
    #annual_savings = 12 * monthly_savings
    annual_savings = annual_savings_lst(vars, vars['Years To Future'])
    #problem that annual_savings list has negative values

    savings = compound_interest(vars['Start Amount'], vars['Years To Future'], vars['Long Term Savings Return'],\
                                 additions_lst= annual_savings)
    # print("total savings when only renting: " + str(savings))
    return int(savings)

def annual_savings_lst(vars, years):
    res = [0 for i in range(years)]
    bruto_salary = vars['Bruto Salary']
    net_salary = core.net_income(bruto_salary)
    rent = vars['Rent']
    for i in range(years):
        res[i] = int(0.1 * bruto_salary + vars['Savings Rate From Net'] * net_salary - rent) * 12
        rent *= (1 + vars['Rent Growth'])
        bruto_salary *= (1 + vars['Salary Growth'])
        net_salary *= (1 + vars['Salary Growth'])
    return res

# run function
# print(assets(0))
# rent_savings() 