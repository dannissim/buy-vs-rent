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
