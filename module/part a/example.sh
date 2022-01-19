#!/bin/bash

# create a empty HTML file
touch index.html
cat > index.html << EOF
<!DOCTYPE html>
<html lang="en-us">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Cloud Computing Practice</title>
</head>

<body>
</body>

</html>
EOF

date_time=$(date +"%m-%d-%y %T")
a="Hello, this is an example Bash script."
b="It is very simple and can display the current time: "$date_time
c="It can also store the content into a HTML file."

echo $a
echo $b
echo $c

# appends the text into the body of the HTML
sed -i -e "\@</body>@i\\$a<br>$b<br>$c" *.html