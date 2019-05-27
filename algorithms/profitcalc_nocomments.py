from .salarycalc.core import net_income
from .vars_module import validate_vars

'''compound interest calculator: args: starting amnt, number of periods to compound and to add, interest rate, 
    and additions to amnt each period, and annual additions increase rate
    results_lst should be of size periods + 1
    explain args and return:
    if enter additions_lst, cannot enter const_additions or additions_increase_rate
    if enter const_additions cannot enter additions_lst or results_lst

    '''
def compound_interest(start, periods, rate, const_additions=0, additions_increase_rate=0,
                         additions_lst : list = None, results_lst : list = None):
    
    if rate == 0 and additions_increase_rate == 0 or periods == 0:
        if results_lst is not None:
            for i in range(periods):
                results_lst[i] = start
        return start + const_additions * periods
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

# returns number of years to pay off mortgage, if fourth arg is entered,
#  function returns the amount of mortgage left to pay after timeperiod years from begining of mortgage payment

#need to fix hishtalmut balance to update over time with salary growth
def mortgage_calc(vars, amnt, payment, timeperiod=float('inf'), payment_increase_rate=0):
    hishtalmut_savings_return = 0.05  # savings return in keren hishtalmut - 6 year investment
    # until mortgage is paid off, save only in keren hishtalmut
    i = counter = 0
    hishtalmut_balance = 0
    while amnt > 0:
        if counter % 6 == 0 and counter != 0:  # every six years empty hishtalmut balance to mortgage
            bruto_salary = bruto_salary_after_time(vars, counter)
            hishtalmut_balance = compound_interest(0, 6, hishtalmut_savings_return,
             const_additions= int(bruto_salary * 0.1), additions_increase_rate= vars['Salary Growth'])
           
            i = 1
        new_amnt = int((amnt - payment - i * hishtalmut_balance) * (1 + vars['Mortgage Interest']))
        if amnt < new_amnt:
            return -1   #will never be able to pay off mortgage
        amnt = new_amnt
        counter += 1
        payment *= (1 + payment_increase_rate)
        if counter == timeperiod:  # timeperiod < mortgage length => func returns amount of mortgage left
            bruto_salary = bruto_salary_after_time(vars, counter)
            # return mortgage left minus hishtalmut fund remainder
            return int(amnt - compound_interest(0, counter % 6, hishtalmut_savings_return,\
                 const_additions= int(bruto_salary * 0.1), additions_increase_rate= vars['Salary Growth']))
        i = 0
    return counter  # return length in years to pay off mortgage

# returns assets value given vars dictionary.
# If timeperiod param is entered, the func returns assets value after timeperiod
def assets(vars): #timeperiod=vars.vars['YEARS_TO_FUTURE']):
    validate_vars(vars) # input validation
    if vars['Rent'] > net_income(vars['Gross Salary']) * vars['Savings Rate From Net']:    # input validation
        return 0    # can't afford rent. Saving Rate From Net var is to small or rent is too high
    prepurch_savings_return = 0.03

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
    
    #years_save now depicts vars['years_save'] + additional years to save for minimum down payment
    if vars['Years To Future'] <= years_save:   # didn't buy home yet
        return results_lst[vars['Years To Future']]
   
    if years_save >= vars['Years To Future']:
        return 0    # didn't have enough time to buy home

    purch_price = house_value_calc(vars, years_save)
    savings_amnt_at_purchase = results_lst[years_save]

    mortgage_payment = int(net_salary_after_time(vars, years_save) * vars['Savings Rate From Net'] * 12)#yearly payment
    mortgage_amnt = purch_price - savings_amnt_at_purchase
    mortgage_len = mortgage_calc(vars, mortgage_amnt, mortgage_payment, payment_increase_rate=vars['Salary Growth'])
    if mortgage_len == -1:
        return 0    #will never be able to pay off mortgage

    if vars['Years To Future'] <= years_save + mortgage_len:    #means bought house, but still hasn't paid off mortgage
        # assets value = (house value at YEARS_TO_FUTURE) - (mortgage left to pay)
        return int(house_value_calc(vars, vars['Years To Future']) - mortgage_calc(vars, mortgage_amnt, mortgage_payment,
                                                        vars['Years To Future'], vars['Salary Growth']))
                    # may need to subtract years_save from timeperiod arg in mortgage_calc - should be correct though

    #   need to change to make additions arr instead of constant additions
    annual_savings_after_mortgage = net_salary_after_time(vars, vars['Years To Future']) * \
                                    vars['Savings Rate From Net'] * 12

    savings_after_mortgage = compound_interest(0, vars['Years To Future'] - (years_save + mortgage_len),
                                    vars['Long Term Savings Return'], const_additions= annual_savings_after_mortgage,
                                                                    additions_increase_rate=vars['Salary Growth'])

    result = int(house_value_calc(vars, vars['Years To Future']) + savings_after_mortgage)
    return result
    # may want to add this later:
    # return max(result, 0)

# returns value of house after timeperiod
def house_value_calc(vars, timeperiod):
    return compound_interest(vars['House Price'], timeperiod, vars['House Price Growth'])

def net_salary_after_time(vars, timeperiod):
    return net_income(compound_interest(vars['Gross Salary'], timeperiod, vars['Salary Growth']))

def bruto_salary_after_time(vars, timeperiod):
    return compound_interest(vars['Gross Salary'], timeperiod, vars['Salary Growth'])

# only rent without buying a house
def rent_savings(vars):
    validate_vars(vars)
    annual_savings = annual_savings_lst(vars, vars['Years To Future'])
    #problem that annual_savings list has negative values

    savings = compound_interest(vars['Start Amount'], vars['Years To Future'], vars['Long Term Savings Return'],\
                                 additions_lst= annual_savings)
    result = int(savings)
    return result
    # may want to add this later:
    # return max(result, 0)


def annual_savings_lst(vars, years):
    res = [0 for i in range(years)]
    bruto_salary = vars['Gross Salary']
    net_salary = net_income(bruto_salary)
    rent = vars['Rent']
    for i in range(years):
        res[i] = int(0.1 * bruto_salary + vars['Savings Rate From Net'] * net_salary - rent) * 12
        rent *= (1 + vars['Rent Growth'])
        bruto_salary *= (1 + vars['Salary Growth'])
        net_salary = net_income(bruto_salary)
    #print(res)
    return res