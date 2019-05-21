# house-purchase-profitability

Profitability of Buying a House

Application Goal: to maximize asset values after buying house and paying off mortgage, and some time afterwards, and to find the optimal only unknown variable of the app: years to rent and save for down payment.
Sub-Goal / Conclusion: check if it is profitable to buy a house and by how much.

Variables: 
-	starting amount 
-	years to rent and save for down payment
-	current rent fee
-	rent fee growth
-	annual rate of return on savings
-	monthly savings: not from pension fund (not accessible), only from Keren Hishtalmut + additional savings from net salary
-	current house price
-	expected house price at purchase time
-	expected house price after paying off mortgage
-	annual mortgage interest
-	annual mortgage payment (now we also know the number of years for paying off mortgage)

We assume that at time of buy we also stop renting. If this is not true we need to add the following variables:
-	number of years until moving in to newly bought house
-	rent income from newly bought house

Observations:

Savings ≠ mortgage payment. This is because we can’t use Keren Hishtalmut fund for mortgage payment because of early withdrawal tax penalty.

Home owners save more from their income than non home owners, because they don’t pay rent. This means that the profitability check for the conclusion should also occur at an even longer point of view (ex. Age 70).

Another question: How to figure out the maximum price I can afford for a house. The correctness of this Application and its conclusions depend on the precision of the “house price” variable. 

Uses salaryCalc repo
