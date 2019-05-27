from .profitcalc_nocomments import assets, rent_savings
from .vars_module import translate, vars_range
import copy
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np
from io import BytesIO
from base64 import b64encode


'''
I will now build a function that receives a parameter name, parameter range for x axis, x axis label,
return graph of assets value on y axis
May want to add plot type

Have Problems with parameters: rent growth, house price growth, mortgage interest
'''



def build_graph(vars: dict, lan: str, parameter: str, param_range: list):
    en = True if lan == 'en' else False
    vars = copy.deepcopy(vars)
    param_range_len = len(param_range)
    # y1 = np.empty(param_range_len)
    # y2 = np.empty(param_range_len)
    y1 = [0] * param_range_len
    y2 = [0] * param_range_len
    for i in range(param_range_len):
        #print(parameter, param_range[i])
        vars[parameter] = param_range[i]
        y1[i] = assets(vars)
        y2[i] = rent_savings(vars)
    plt.plot(param_range, y1, label=('Purchase House' if en else translate('Purchase House')), color='#00766c')
    plt.plot(param_range, y2, label=('Rent For Life' if en else translate('Rent For Life')), color='#64d8cb')
    plt.legend(loc='upper left')
    plt.xlabel(parameter if en else translate(parameter))
    plt.ylabel('Assets Value (₪)' if en else translate('Assets Value (₪)'))
    #plt.savefig("assets_over_time.png")
    # plt.show()
    image_bytes = BytesIO()
    plt.savefig(image_bytes, format= 'png')
    # image_bytes.seek(0)
    plt.clf()
    # plt.close()
    del vars
    b64_encoding = b64encode(image_bytes.getvalue()).decode()
    return b64_encoding

'''
I will now build a function that iterates through all the vars and saves a graph showing the change of assets value,
if we change a single variable throughout a range
'''
'''
I will now edit build_all_graphs, and build_graph to return a list of base64 encodings of each graph it generates
'''
def build_all_graphs(vars, lan):
    # encoded_images_lst = [None] * len(vars_range)
    encoded_images_dict = dict()
    i = 0
    for var_label in vars_range:
        encoded_images_dict[var_label] = build_graph(vars, lan, var_label, vars_range[var_label])
        # build_graph(vars, lan, var_label, vars_range[var_label])
        i += 1
    # print (encoded_images_dict.keys())
    return encoded_images_dict
#vars['Start Amount'] = 1e6
#build_all_graphs(vars)
#build_graph(vars, 'Mortgage Interest', vars_module.vars_range['Mortgage Interest'])

def build_test_graph(vars, lan):
    return {'House Price' : build_graph(vars, lan, 'House Price', vars_range['House Price'])}

# test_vars={
#     "Years Until Retirement" : 50,  # need to use
#     "Years To Save" : 0,    # it seems that 0 is optimal for everyone
    
#     "Start Amount" : 50000,  # seems to have less effect on final asset value
#     "Gross Salary" : 50000,
#     "Years To Future" : 50,  # number of years ahead to calcuate/compare assets value

#     # deciding changeable parameters
#     "Rent" : 5000,  # monthly rent fee
#     "Rent Growth" : 0.05,  # 3% annual rent rate growth, influences asset value less
#     "House Price" : 5e6,
#     "House Price Growth" : 0.05,  # 5% annual purchase fee growth
#     "Long Term Savings Return" : 0.05,
#     # (annual), seems not to effect asset value very much
#     "Mortgage Interest" : 0.05,
#     # percentage of net income to go to rent + extra savings, or % of net to go to mortgage 
#     "Savings Rate From Net" : 0.5,
#     # less sensitive but also important parameters
#     # short_savings_return = 0.05  # 5% annual rate of return from savings
#     "Salary Growth" : 0.05  # annual salary growth
# }

# if __name__ == 'main':
# build_test_graph(test_vars, 'en')
# build_all_graphs(test_vars, 'en')