import os
import csv

dataFile = os.path.join('resources','budget_data.csv')
writeFile = os.path.join('budget_data_analysis.txt')

with open(dataFile, mode='r') as csvFile:
    csvReader = csv.reader(csvFile, delimiter=',')
    
    header = next(csvReader)
    
    monthTotal = 0
    netChange = 0
    greatestChange = {
        'iValue': 0,
        'iDate': '',
        'dValue': 0,
        'dDate': ''
    }
    results = []
    
    for line in csvReader:
        monthTotal += 1
        netChange += int(line[1])
        if int(line[1]) > greatestChange['iValue']:
            greatestChange['iValue'] = int(line[1])
            greatestChange['iDate'] = line[0]
        elif int(line[1]) < greatestChange['dValue']:
            greatestChange['dValue'] = int(line[1])
            greatestChange['dDate'] = line[0]
        
    results = [\
        'Total Months: ' + str(monthTotal) + '\n', \
        'Total: $' + str(netChange) + '\n', \
        'Average Change: $' + str(netChange/monthTotal) + '\n', \
        'Greatest Increase in Profits: ' + greatestChange["iDate"] + ' ($'+str(greatestChange["iValue"]) + '\n', \
        'Greatest Decrease in Profits: ' + str(greatestChange["dDate"]) + ' ($' + str(greatestChange["dValue"]) + ')' \
    ]

with open(writeFile, mode='w') as txtFile:
    txtFile.writelines(results)

with open(writeFile, mode='r') as txtFile:
    print(txtFile.read())