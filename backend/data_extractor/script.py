import csv
import pandas as pd

print('OPENING FILE...')
with open('sinonimos-mod.dat', "rt", encoding='utf-8') as infile:
    print('SUCCESS!')
    setOfSynonyms = []
    synonymCsv = csv.reader(infile, delimiter=',')
    
    print('Reshaping Data...')
    for row in synonymCsv :
        synonymsInRow = []
        if('(Sinônimo)' in row[0]):
            for element in row:
                if (element != ''):
                    synonymsInRow.append(element)
            setOfSynonyms.append(synonymsInRow)

    print('DONE!')

print('Creating dataframe')
df = pd.DataFrame(setOfSynonyms)
df = df.set_index(0)

print('Cleaning Data')
df.index = df.index.str.replace("(Sinônimo)", "")
df.index = df.index.str.replace("(", "")
df.index = df.index.str.replace(")", "")

print('Saving dataframe to CSV')
df.to_csv('dicionario_final.csv')
print('The file [dicionario_final.csv] was created')
print('END OF SCRIPT;')