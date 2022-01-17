# crude solution to reading CSV and converting to table due to CORS security rules for JavaScript
import csv

# modify directory depending on OS / IDE
dir = ".\\module\\part c\\demo webpage\\"
file = open(dir + "delta.csv")
csvreader = csv.reader(file)

# clears output.txt
destination = open(dir + "output.txt", "w")
destination.truncate(0)

# reads the content of the csv and saves into output.txt
header = []
header = next(csvreader)
destination.write("<tr>\n")
for head in header:
    destination.write("<th>" + head + "</th>\n")
destination.write("</tr>\n")

for row in csvreader:
    destination.write("<tr>\n")
    for element in row:
        destination.write("<td>" + element + "</td>\n")
    destination.write("</tr>")