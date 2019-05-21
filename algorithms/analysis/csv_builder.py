'''
In this module we will simulate profitcalc.assets and graphscreator for every possible variation of the global
variables defined in vars

Here we assume house price is known. Should add another module which recommends house price budget.
'''
import csv
import numpy as np
import vars_module
import profitcalc_nocomments
import copy
#import graphscreator

def build_csv():
    vars = copy.deepcopy(vars_module.vars)
    vars_range = vars_module.vars_range
    '''
    #personal variables that are constant per user
    years_save_range = np.arange(0, 10, 1) #np.aragne(0,10,2) - may be constant 0
    net_savings_range = np.around(np.linspace(0.0, 0.5, num = 6), 2) #start from 0, jumps of 10%, may be constant
    salary_growth_range = np.around(np.linspace(0.0, 0.03, num = 4), 2) # may be constant
    rent_range = np.arange(3000, 6001, 500) #jumps of 1000, may be constant
    house_price_range = np.arange(1.25e6, 3.6e6, 250000).astype(int)    # may be constant
    
    rent_growth_range = np.around(np.linspace(0.01, 0.06, num = 6), 2)  # jumps of 2%-3%, may be constant
    long_ret_rate_range = np.around(np.linspace(0.04, 0.1, num = 7), 2) # may be constant - not constant
    mortgage_inter_range = np.around(np.linspace(0.02, 0.07, num = 6), 3) #2-7, jumps 1
    house_growth_range = np.around(np.linspace(0.0, 0.07, num = 5), 2)
    '''
    first_row = ['Savings_Rate_From_Net', 'Rent_Growth', 'Rent', 'Long_Term_Return_Rate', 'Mortgage_Rate',\
        'Salary_Growth', 'House_Price', 'House_Growth', 'Assets_Value_If_Purchase',\
            'Assets_Value_If_Rent']
    
    
    first_row = ['Rent_Growth', 'Long_Term_Return_Rate', 'Mortgage_Rate', 'House_Growth', 'House Price', 'Rent',\
                'Assets_Value_If_Purchase', 'Assets_Value_If_Rent']
    
    with open('lessVarsTest.csv', 'w') as testFile:
        writer = csv.writer(testFile)
        writer.writerow(first_row)
        for i0 in vars_range['Rent Growth']:
            for i1 in vars_range['Long Term Savings Return']:
                for i2 in vars_range['Mortgage Interest']:
                    for i3 in vars_range['House Price Growth']:
                        for i4 in vars_range['House Price']:
                            for i5 in vars_range['Rent']:
                                new_row = [i0, i1, i2, i3, i4, i5, 0, 0]

                                vars['Rent Growth'] = i0
                                vars['Long Term Savings Return'] = i1
                                vars['Mortgage Interest'] = i2
                                vars['House Price Growth'] = i3
                                vars['House Price'] = i4
                                vars['Rent'] = i5

                                new_row[6] = profitcalc_nocomments.assets(vars)
                                new_row[7] = profitcalc_nocomments.rent_savings(vars)
                                writer.writerow(new_row)

        
    '''
    with open('newtest.csv', 'w') as testFile:
        writer = csv.writer(testFile)
        writer.writerow(first_row)
        for i0 in vars_range['Savings Rate From Net']:
            for i1 in vars_range['Rent Growth']:
                for i2 in vars_range['Rent']:
                    for i3 in vars_range['Long Term Savings Return']:
                        for i4 in vars_range['Mortgage Interest']:
                            for i5 in vars_range['Salary Growth']:
                                for i6 in vars_range['House Price']:
                                    for i7 in vars_range['House Price Growth']:
                                        new_row = [i0, i1, i2, i3, i4, i5, i6, i7, 0, 0]

                                        vars['Savings Rate From Net'] = i0
                                        vars['Rent Growth'] = i1
                                        vars['Rent'] = i2
                                        vars['Long Term Savings Return'] = i3
                                        vars['Mortgage Interest'] = i4
                                        vars['Salary Growth'] = i5
                                        vars['House Price'] = i6
                                        vars['House Price Growth'] = i7

                                        new_row[8] = profitcalc.assets(vars)
                                        new_row[9] = profitcalc.rent_savings(vars)
                                        writer.writerow(new_row)
    '''

    testFile.close()

build_csv()