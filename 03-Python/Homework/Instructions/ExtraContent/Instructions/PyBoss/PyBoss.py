import os
import csv

dataFilePath = os.path.join('employee_data.csv')
writeFilePath = os.path.join('employee_data_converted.csv')

us_state_abbrev = {
    'Alabama': 'AL',
    'Alaska': 'AK',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'Florida': 'FL',
    'Georgia': 'GA',
    'Hawaii': 'HI',
    'Idaho': 'ID',
    'Illinois': 'IL',
    'Indiana': 'IN',
    'Iowa': 'IA',
    'Kansas': 'KS',
    'Kentucky': 'KY',
    'Louisiana': 'LA',
    'Maine': 'ME',
    'Maryland': 'MD',
    'Massachusetts': 'MA',
    'Michigan': 'MI',
    'Minnesota': 'MN',
    'Mississippi': 'MS',
    'Missouri': 'MO',
    'Montana': 'MT',
    'Nebraska': 'NE',
    'Nevada': 'NV',
    'New Hampshire': 'NH',
    'New Jersey': 'NJ',
    'New Mexico': 'NM',
    'New York': 'NY',
    'North Carolina': 'NC',
    'North Dakota': 'ND',
    'Ohio': 'OH',
    'Oklahoma': 'OK',
    'Oregon': 'OR',
    'Pennsylvania': 'PA',
    'Rhode Island': 'RI',
    'South Carolina': 'SC',
    'South Dakota': 'SD',
    'Tennessee': 'TN',
    'Texas': 'TX',
    'Utah': 'UT',
    'Vermont': 'VT',
    'Virginia': 'VA',
    'Washington': 'WA',
    'West Virginia': 'WV',
    'Wisconsin': 'WI',
    'Wyoming': 'WY',
}

resultsList = [['Emp', 'First Name', 'Last Name', 'DOB', 'SSN', 'State']]

with open(dataFilePath, mode='r') as csvFile:
    csvReader = csv.reader(csvFile, delimiter=',')
    
    next(csvReader)
    
    for line in csvReader:
        resultsRow = []
        resultsRow.append(line[0])
        resultsRow.append(line[1].split(' ')[0])
        resultsRow.append(line[1].split(' ')[1])
        resultsRow.append(line[2].split('-')[1] + '/' + line[2].split('-')[2] + '/' + line[2].split('-')[0])
        resultsRow.append('###-##-' + line[3].split('-')[2])
        resultsRow.append(us_state_abbrev[line[4]])
        resultsList.append(resultsRow)

        
with open(writeFilePath, 'w', newline='') as csvFile:
    csvWriter = csv.writer(csvFile)
    csvWriter.writerows(resultsList)
        
with open(writeFilePath, mode='r') as csvFile:
    csvReader = csv.reader(csvFile, delimiter=',')
    for line in csvReader:
        print(line)