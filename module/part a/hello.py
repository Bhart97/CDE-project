from datetime import datetime

def function():
    a = "this is an example Python script"
    b  = datetime.now().strftime('%m-%d-%y %H:%M:%S')
    return a, b
input, date = function()

print(f"Hello, {input}.")
print(f"It is very simple and can display the current time: {date}.")