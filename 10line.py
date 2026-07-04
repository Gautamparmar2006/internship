name = input("Enter your name: ")
print("Hello", name + "!")
num = int(input("Enter a number: "))
print("Multiplication Table:")
for i in range(1, 11):
    result = num * i
    print(f"{num} x {i} = {result}")
print("Thank you,", name + "!")
print("Program ended.")
