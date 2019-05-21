from .profitcalc_nocomments import assets, rent_savings
from .vars_module import translate, vars_range
import copy
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np
from io import BytesIO
from base64 import b64encode


# vars = copy.deepcopy(vars_module.default_vars)

'''
x1 = np.arange(0, 30, 1)
z1 = np.empty(len(x1))
for i in range(len(x1)):
    vars['years_save'] = x1[i]
    z1[i] = profitcalc.assets(vars)   
#z1 = [profitcalc.assets(i) for i in x1]
y1 = [profitcalc.rent_savings(vars)] * len(x1)
plt.plot(x1, y1, label='Rent For Life')
plt.plot(x1, z1, label='Purchase house after x years')
plt.xlabel('Num. of years to save before purchasing house')
plt.ylabel('Assets Value (NIS) after ' + str(vars['YEARS_TO_FUTURE']) + ' years')
plt.legend(loc='lower left')
plt.savefig("assetgraph.png")
plt.show()


### second graph
x2 = np.arange(0, vars['YEARS_TO_FUTURE'], 1)
y2 = np.empty(len(x2))
z2 = np.empty(len(x2))
for i in range(len(x2)):
    vars['YEARS_TO_FUTURE'] = x2[i]
    y2[i] = profitcalc.assets(vars)
    z2[i] = profitcalc.rent_savings(vars)
plt.plot(x2, y2, label='Purchase house')
plt.plot(x2, z2, label='Rent For Life')
plt.legend(loc='upper left')
plt.xlabel('Years')
plt.ylabel('Assets Value (NIS)')
plt.savefig("assets_over_time.png")
plt.show()


# Lets try to optimize house price:
prices = np.arange(1250000, 3500001, 250000)
#print(prices.shape)
y = np.empty(10)
for i in range(10):
	vars['crnt_house_price'] = prices[i]
    #print(vars.start_amnt, prices[i], prices[i]//4)
	y[i] = profitcalc.assets(vars)
    #print(y[i], prices[i])

bar = plt.bar(prices, y, width= 1e5)
plt.xlabel('House Price (NIS)')
plt.ylabel('Assets Value (NIS)')
# add numbers above the bars in the graph
for rect in bar:
    height = rect.get_height()
    plt.text(rect.get_x() + rect.get_width()/2.0, height, '%d' % int(height), ha='center', va='bottom')
plt.show()


x4 = np.around(np.linspace(0.02, 0.07, num = 6), 3) #2-7, jumps 1
y4 = np.empty(len(x4))
for i in range(len(x4)):
    vars['mortgage_interest'] = x4[i]
    y4[i] = profitcalc.assets(vars)
bar = plt.bar(x4, y4, width = 0.005)#, width= 1e5)
plt.xlabel('Annual Mortgage Rate')
plt.ylabel('Assets Value (NIS)')
# add numbers above the bars in the graph
for rect in bar:
    height = rect.get_height()
    plt.text(rect.get_x() + rect.get_width()/2.0, height, '%d' % int(height), ha='center', va='bottom')
plt.show()


x5 = np.around(np.linspace(0.0, 0.07, num = 5), 2)
y5 = np.empty(len(x5))
for i in range(len(x5)):
    vars['house_price_growth'] = x5[i]
    y5[i] = profitcalc.assets(vars)
bar = plt.bar(x5, y5, width = 0.01)
plt.xlabel('Annual House Price Growth')
plt.ylabel('Assets Value (NIS)')
# add numbers above the bars in the graph
for rect in bar:
    height = rect.get_height()
    plt.text(rect.get_x() + rect.get_width()/2.0, height, '%d' % int(height), ha='center', va='bottom')
plt.show()
'''
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
    y1 = np.empty(param_range_len)
    y2 = np.empty(param_range_len)
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
    image_bytes.seek(0)
    plt.clf()
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
        i += 1
    # print (encoded_images_dict.keys())
    return encoded_images_dict
#vars['Start Amount'] = 1e6
#build_all_graphs(vars)
#build_graph(vars, 'Mortgage Interest', vars_module.vars_range['Mortgage Interest'])