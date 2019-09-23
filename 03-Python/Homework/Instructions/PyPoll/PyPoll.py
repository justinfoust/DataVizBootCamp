import os
import csv

dataFile = os.path.join('resources','election_data.csv')
writeFile = os.path.join('election_results.txt')

with open(dataFile, mode='r') as csvFile:
    csvReader = csv.reader(csvFile, delimiter=',')
    
    header = next(csvReader)
    totalVotes = 0
    resultsList = {}
    winner = {'name': '', 'votes': 0}

    for line in csvReader:
        totalVotes += 1    
        if line[2] not in resultsList.keys():
            resultsList[line[2]] = {'numVotes': 0, 'percentVotes': 0}
        if line[2] in resultsList.keys():
            resultsList[line[2]]['numVotes'] += 1

    resultsSummary = ['Total Votes: ' + str(totalVotes) + '\n']            
    
    for candidate in resultsList.keys():
        resultsList[candidate]['percentVotes'] = int(resultsList[candidate]['numVotes'] / totalVotes * 100)
        if resultsList[candidate]['numVotes'] > winner['votes']:
            winner['name'] = candidate
            winner['votes'] = resultsList[candidate]['numVotes']
        resultsSummary.append(\
            candidate + ': ' + \
            "{:.3f}".format(resultsList[candidate]['percentVotes']) + '% (' + \
            str(resultsList[candidate]['numVotes']) + ') ')

    resultsSummary.append('\nWinner: ' + winner['name'])    
    
    with open(writeFile, mode='w') as txtFile:
        txtFile.writelines(resultsSummary)

    with open(writeFile, mode='r') as txtFile:
        print(txtFile.read())