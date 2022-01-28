#!/bin/bash

# creates a new file called "index.html" and stores the following content until it reaches EOF
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
b="You can use command substitutions such as \$(command)."
c="This will evaulate the expression as a command rather than as literal strings."
d="For example \$date_time is executed and returns: "$date_time

# the body tag is where the displayed content will be stored
# and the variables [a, b, c, d] will be displayed on the web page
sed -i -e "\@</body>@i\\$a<br>$b<br>$c<br>$d" *.html