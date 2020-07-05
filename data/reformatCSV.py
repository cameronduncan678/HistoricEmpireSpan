import csv

##variables for formating
##Edit these values for specific files

# Path to the csv file 
csvFile = 'historicalEmpireData_Copy.csv'
#Path to new file
newFile = 'historicalEmpireData_Format.csv'
# Row of element to format
csvRow = 3
# Character to remove
csvChar = '%'

##function that returns string with char removed
def removeChar(char, String):
    newString = String.replace(char, '')
    return newString

raw = open(csvFile)
new = open(newFile, 'w')

readerObject = csv.reader(raw)
for row in readerObject:
    if readerObject.line_num == 1:
        newLine = ','.join(row)
        new.write(newLine + '\n')
        continue
    row[csvRow] = removeChar(csvChar, row[csvRow])
    newLine = ','.join(row)
    new.write(newLine +'\n')
    
raw.close()
new.close()

