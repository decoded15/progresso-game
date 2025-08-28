export interface FlashcardData {
  id: number;
  question: string;
  answer: string;
  language: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  code?: string;
}

export const flashcardsData: FlashcardData[] = [
  // Python Flashcards
  {
"id": 1,
"question": "Which of the following is the correct way to define a function in Python?",
"options": [
"function myFunc():",
"def myFunc():",
"define myFunc():",
"func myFunc():"
],
"correctAnswer": 1,
"explanation": "In Python, functions are defined using the 'def' keyword followed by the function name and parameters.",
"language": "Python",
"difficulty": "beginner",
"category": "Functions",
"code": "def my_function():\n    print('Hello, World!')",
"xpReward": 25
},
{
"id": 2,
"question": "What will be the output of the following Python code?",
"options": [
"10",
"5",
"Error",
"None"
],
"correctAnswer": 0,
"explanation": "The ** operator in Python is used for exponentiation. 23 + 2 = 8 + 2 = 10",
"language": "Python",
"difficulty": "beginner",
"category": "Operators",
"code": "result = 23 + 2\nprint(result)",
"xpReward": 25
},
{
"id": 3,
"question": "Which method is used to add an element to the end of a list in Python?",
"options": [
"add()",
"append()",
"insert()",
"push()"
],
"correctAnswer": 1,
"explanation": "The append() method adds an element to the end of a list. add() and push() don't exist for lists, insert() adds at a specific position.",
"language": "Python",
"difficulty": "beginner",
"category": "Lists",
"code": "my_list = [1, 2, 3]\nmy_list.append(4)\nprint(my_list)  # [1, 2, 3, 4]",
"xpReward": 25
},
{
"id": 4,
"question": "What is the output of this list comprehension?",
"options": [
"[0, 1, 4, 9, 16]",
"[1, 2, 3, 4, 5]",
"[0, 2, 4, 6, 8]",
"[1, 4, 9, 16, 25]"
],
"correctAnswer": 0,
"explanation": "List comprehension [x2 for x in range(5)] creates squares of numbers 0 to 4: 0², 1², 2², 3², 4² = [0, 1, 4, 9, 16]",
"language": "Python",
"difficulty": "intermediate",
"category": "Lists",
"code": "squares = [x2 for x in range(5)]\nprint(squares)",
"xpReward": 50
},
{
"id": 5,
"question": "What is the purpose of the 'self' parameter in Python class methods?",
"options": [
"It's a reserved keyword",
"It refers to the current instance of the class",
"It's used for inheritance",
"It's optional and can be omitted"
],
"correctAnswer": 1,
"explanation": "'self' refers to the current instance of the class, allowing access to the instance's attributes and methods.",
"language": "Python",
"difficulty": "intermediate",
"category": "Classes",
"code": "class MyClass:\n    def init(self, name):\n        self.name = name\n    \n    def greet(self):\n        return f'Hello, {self.name}!'",
"xpReward": 50
},
{
"id": 6,
"question": "Which of the following data types is mutable?",
"options": [
"string",
"tuple",
"list",
"frozenset"
],
"correctAnswer": 2,
"explanation": "A list is a mutable data type, meaning its elements can be changed after creation. Strings, tuples, and frozensets are all immutable.",
"language": "Python",
"difficulty": "beginner",
"category": "Data Types",
"code": "my_list = [1, 2, 3]\nmy_list[0] = 10\nprint(my_list) # [10, 2, 3]",
"xpReward": 25
},
{
"id": 7,
"question": "What is the correct way to open a file named 'data.txt' for reading?",
"options": [
"open('data.txt', 'r')",
"open('data.txt', 'read')",
"open('data.txt', 'o')",
"read('data.txt')"
],
"correctAnswer": 0,
"explanation": "The built-in open() function is used to open files. The second argument, 'r', specifies that the file should be opened in read mode.",
"language": "Python",
"difficulty": "intermediate",
"category": "File I/O",
"code": "with open('data.txt', 'r') as file:\n    content = file.read()",
"xpReward": 50
},
{
"id": 8,
"question": "What does pip stand for?",
"options": [
"Python Install Packages",
"Preferred Installer Program",
"Programming in Python",
"Package Information Protocol"
],
"correctAnswer": 1,
"explanation": "pip is the package installer for Python. Its name is a recursive acronym, standing for 'Pip Installs Packages' or 'Preferred Installer Program'.",
"language": "Python",
"difficulty": "beginner",
"category": "Modules and Packages",
"code": "pip install requests",
"xpReward": 25
},
{
"id": 9,
"question": "What will be the output of type(type(int))?",
"options": [
"<class 'int'>",
"<class 'type'>",
"Error",
"None"
],
"correctAnswer": 1,
"explanation": "type(int) returns the type of the int class, which is type. Therefore, type(type(int)) returns the type of type, which is also type.",
"language": "Python",
"difficulty": "advanced",
"category": "Data Types",
"code": "print(type(type(int)))",
"xpReward": 75
},
{
"id": 10,
"question": "How do you handle exceptions in Python?",
"options": [
"using 'try...catch' blocks",
"using 'if...else' statements",
"using 'try...except' blocks",
"using 'throw...catch' statements"
],
"correctAnswer": 2,
"explanation": "Python uses the try and except blocks to handle exceptions. The code that might raise an exception is placed in the try block, and the code to handle it is in the except block.",
"language": "Python",
"difficulty": "intermediate",
"category": "Exception Handling",
"code": "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero!')",
"xpReward": 50
},
{
"id": 11,
"question": "What is a generator in Python?",
"options": [
"A function that returns a value immediately.",
"A type of loop for creating lists.",
"A function that uses the yield keyword to return an iterator.",
"A built-in class for creating sequences."
],
"correctAnswer": 2,
"explanation": "A generator is a special type of function that returns an iterator. It uses the yield keyword to produce a series of values one at a time, saving memory.",
"language": "Python",
"difficulty": "advanced",
"category": "Functions",
"code": "def my_generator():\n    yield 1\n    yield 2\n    yield 3",
"xpReward": 75
},
{
"id": 12,
"question": "Which of the following is an example of a tuple?",
"options": [
"{1, 2, 3}",
"[1, 2, 3]",
"(1, 2, 3)",
"'1, 2, 3'"
],
"correctAnswer": 2,
"explanation": "A tuple is an immutable sequence of elements, defined by enclosing values in parentheses (). Lists use [], and sets use {}.",
"language": "Python",
"difficulty": "beginner",
"category": "Data Types",
"code": "my_tuple = ('apple', 'banana', 'cherry')\nprint(my_tuple[0]) # 'apple'",
"xpReward": 25
},
{
"id": 13,
"question": "What is the output of print(5 // 2)?",
"options": [
"2.5",
"2",
"3",
"Error"
],
"correctAnswer": 1,
"explanation": "The // operator performs floor division, which returns the integer part of the division result. 5
div2=2.5, so the floor is 2.",
"language": "Python",
"difficulty": "beginner",
"category": "Operators",
"code": "print(5 // 2)",
"xpReward": 25
},
{
"id": 14,
"question": "How do you create a dictionary in Python?",
"options": [
"my_dict = {key: value}",
"my_dict = [key: value]",
"my_dict = (key: value)",
"my_dict = key: value"
],
"correctAnswer": 0,
"explanation": "A dictionary is an unordered collection of key-value pairs, defined using curly braces {} with a colon : separating each key and its value.",
"language": "Python",
"difficulty": "beginner",
"category": "Data Types",
"code": "my_dict = {'name': 'Alice', 'age': 30}\nprint(my_dict['name']) # 'Alice'",
"xpReward": 25
},
{
"id": 15,
"question": "What is a lambda function?",
"options": [
"A function that returns a list.",
"A small, anonymous function defined with the lambda keyword.",
"A function for handling file I/O.",
"A function that always returns None."
],
"correctAnswer": 1,
"explanation": "A lambda function is a small, anonymous function. It can have any number of arguments but can only have one expression. It's often used for simple, short functions.",
"language": "Python",
"difficulty": "intermediate",
"category": "Functions",
"code": "add = lambda a, b: a + b\nprint(add(2, 3)) # 5",
"xpReward": 50
},
{
"id": 16,
"question": "Which loop is used to iterate over a sequence?",
"options": [
"while",
"for",
"do-while",
"loop-until"
],
"correctAnswer": 1,
"explanation": "The for loop is used to iterate over the items of any sequence (like a list, tuple, or string) or other iterable objects.",
"language": "Python",
"difficulty": "beginner",
"category": "Control Flow",
"code": "fruits = ['apple', 'banana', 'cherry']\nfor fruit in fruits:\n    print(fruit)",
"xpReward": 25
},
{
"id": 17,
"question": "What is the purpose of the pass statement?",
"options": [
"To end a loop or function.",
"To raise an exception.",
"To do nothing; it's a placeholder.",
"To exit the program."
],
"correctAnswer": 2,
"explanation": "The pass statement is a null operation. It's used as a placeholder when a statement is syntactically required but you don't want to execute any code.",
"language": "Python",
"difficulty": "beginner",
"category": "Control Flow",
"code": "def my_func():\n    pass # This function does nothing yet.",
"xpReward": 25
},
{
"id": 18,
"question": "What is a decorator in Python?",
"options": [
"A design pattern used to modify the behavior of a function or class.",
"A keyword used to define a new class.",
"A type of function that returns another function.",
"A way to add comments to code."
],
"correctAnswer": 0,
"explanation": "A decorator is a powerful design pattern in Python that allows you to wrap another function or class to extend or modify its behavior without permanently altering the original.",
"language": "Python",
"difficulty": "advanced",
"category": "Functions",
"code": "@my_decorator\ndef my_func():\n    pass",
"xpReward": 75
},
{
"id": 19,
"question": "What is the output of len('hello world')?",
"options": [
"11",
"10",
"12",
"Error"
],
"correctAnswer": 0,
"explanation": "The len() function returns the number of items in an object. The string 'hello world' has 11 characters, including the space.",
"language": "Python",
"difficulty": "beginner",
"category": "Strings",
"code": "print(len('hello world'))",
"xpReward": 25
},
{
"id": 20,
"question": "How do you create an empty set in Python?",
"options": [
"my_set = {}",
"my_set = set()",
"my_set = []",
"my_set = ()"
],
"correctAnswer": 1,
"explanation": "An empty dictionary is created with {}, so to create an empty set, you must use the set() constructor. my_set = {} creates an empty dictionary.",
"language": "Python",
"difficulty": "intermediate",
"category": "Data Types",
"code": "my_set = set()\nprint(type(my_set))",
"xpReward": 50
},
{
"id": 21,
"question": "What is the correct syntax for a simple if statement?",
"options": [
"if condition:",
"if condition then:",
"if (condition)",
"if condition"
],
"correctAnswer": 0,
"explanation": "An if statement requires a condition followed by a colon : and an indented block of code to be executed if the condition is true.",
"language": "Python",
"difficulty": "beginner",
"category": "Control Flow",
"code": "if 5 > 2:\n    print('True')",
"xpReward": 25
},
{
"id": 22,
"question": "What is the purpose of the __init__ method?",
"options": [
"It is a destructor for an object.",
"It is a special method called when a class is imported.",
"It is a constructor used to initialize an object's state.",
"It is a method for inheritance."
],
"correctAnswer": 2,
"explanation": "The __init__ method is a constructor. It's automatically called when a new instance of a class is created, allowing you to set up the object's initial attributes.",
"language": "Python",
"difficulty": "intermediate",
"category": "Classes",
"code": "class Dog:\n    def init(self, name):\n        self.name = name",
"xpReward": 50
},
{
"id": 23,
"question": "Which keyword is used to import a module?",
"options": [
"include",
"import",
"get",
"require"
],
"correctAnswer": 1,
"explanation": "The import keyword is used to bring modules or specific functions/classes from modules into the current namespace.",
"language": "Python",
"difficulty": "beginner",
"category": "Modules and Packages",
"code": "import math\nprint(math.pi)",
"xpReward": 25
},
{
"id": 24,
"question": "What is the output of [1, 2, 3] + [4, 5]?",
"options": [
"[1, 2, 3, 4, 5]",
"[5, 7, 3]",
"Error",
"1, 2, 3, 4, 5"
],
"correctAnswer": 0,
"explanation": "The + operator, when used with lists, performs concatenation, joining the two lists together to form a new single list.",
"language": "Python",
"difficulty": "beginner",
"category": "Lists",
"code": "list1 = [1, 2, 3]\nlist2 = [4, 5]\nprint(list1 + list2)",
"xpReward": 25
},
{
"id": 25,
"question": "What is a list comprehension?",
"options": [
"A way to create a list using a for loop inside a list literal.",
"A method for sorting a list.",
"A built-in function for list manipulation.",
"A way to compress a list."
],
"correctAnswer": 0,
"explanation": "A list comprehension provides a concise way to create lists. It consists of brackets containing an expression followed by a for clause, and then zero or more for or if clauses.",
"language": "Python",
"difficulty": "intermediate",
"category": "Lists",
"code": "squares = [x2 for x in range(10)]",
"xpReward": 50
},
{
"id": 26,
"question": "What is the main difference between range() and a list?",
"options": [
"range is faster for loops.",
"range generates numbers on demand (lazily), while a list stores all numbers in memory.",
"You can't use range in a for loop.",
"range is mutable, and a list is not."
],
"correctAnswer": 1,
"explanation": "range() generates numbers as they are needed, making it memory-efficient for large sequences. A list, in contrast, stores all its elements in memory at once.",
"language": "Python",
"difficulty": "intermediate",
"category": "Iterators",
"code": "my_range = range(1000000)\nmy_list = list(my_range) # This will take up a lot of memory.",
"xpReward": 50
},
{
"id": 27,
"question": "How do you cast an integer to a string?",
"options": [
"str(my_int)",
"string(my_int)",
"to_string(my_int)",
"my_int.str()"
],
"correctAnswer": 0,
"explanation": "The built-in str() function is used to convert an object into a string representation.",
"language": "Python",
"difficulty": "beginner",
"category": "Data Types",
"code": "my_int = 123\nmy_string = str(my_int)\nprint(my_string) # '123'",
"xpReward": 25
},
{
"id": 28,
"question": "Which of the following is an example of a keyword argument?",
"options": [
"my_func(1, 2)",
"my_func(a=1, b=2)",
"my_func(1, b=2)",
"my_func(1, (2,))"
],
"correctAnswer": 1,
"explanation": "A keyword argument is an argument passed to a function that is preceded by a variable name and an equals sign. The order of keyword arguments doesn't matter.",
"language": "Python",
"difficulty": "intermediate",
"category": "Functions",
"code": "def my_func(a, b):\n    print(f'a: {a}, b: {b}')\n\nmy_func(b=2, a=1)",
"xpReward": 50
},
{
"id": 29,
"question": "What is the purpose of the break statement?",
"options": [
"To end the program.",
"To skip the current iteration of a loop.",
"To exit the loop immediately.",
"To return from a function."
],
"correctAnswer": 2,
"explanation": "The break statement is used to exit the current for or while loop prematurely.",
"language": "Python",
"difficulty": "beginner",
"category": "Control Flow",
"code": "for i in range(5):\n    if i == 3:\n        break\n    print(i) # Prints 0, 1, 2",
"xpReward": 25
},
{
"id": 30,
"question": "What does the strip() method do to a string?",
"options": [
"Capitalizes the string.",
"Removes leading and trailing whitespace.",
"Splits the string into a list.",
"Replaces characters in the string."
],
"correctAnswer": 1,
"explanation": "The strip() method returns a copy of the string with all leading and trailing whitespace characters removed.",
"language": "Python",
"difficulty": "beginner",
"category": "Strings",
"code": "my_string = '  hello world  '\nprint(my_string.strip()) # 'hello world'",
"xpReward": 25
},
{
"id": 31,
"question": "How is a static method defined in a Python class?",
"options": [
"with the @staticmethod decorator",
"with the static keyword",
"without self as the first parameter",
"with the __static__ method"
],
"correctAnswer": 0,
"explanation": "A static method is a method that belongs to a class rather than an instance of the class. It is defined using the @staticmethod decorator and does not receive self as its first parameter.",
"language": "Python",
"difficulty": "advanced",
"category": "Classes",
"code": "class MyClass:\n    @staticmethod\n    def my_method():\n        print('Hello')",
"xpReward": 75
},
{
"id": 32,
"question": "What is the purpose of the finally block in exception handling?",
"options": [
"It executes if no exception is raised.",
"It executes only if an exception is raised.",
"It always executes, regardless of whether an exception occurred.",
"It is used to terminate the program."
],
"correctAnswer": 2,
"explanation": "The finally block always executes after the try and except blocks, making it ideal for clean-up operations like closing files, regardless of whether an exception was raised.",
"language": "Python",
"difficulty": "intermediate",
"category": "Exception Handling",
"code": "try:\n    file = open('test.txt', 'r')\n    file.read()\nexcept FileNotFoundError:\n    print('File not found')\nfinally:\n    file.close()",
"xpReward": 50
},
{
"id": 33,
"question": "What is a virtual environment in Python?",
"options": [
"A tool for running Python code online.",
"A way to install packages globally on a system.",
"A self-contained directory containing a Python installation and its own set of packages.",
"A type of virtual machine for running Python."
],
"correctAnswer": 2,
"explanation": "A virtual environment is a tool that keeps the dependencies required by different projects separate by creating isolated Python environments for them.",
"language": "Python",
"difficulty": "intermediate",
"category": "Modules and Packages",
"code": "python -m venv my_env",
"xpReward": 50
},
{
"id": 34,
"question": "What is the output of 'Python' * 3?",
"options": [
"PythonPythonPython",
"Python 3",
"Error",
"Python, Python, Python"
],
"correctAnswer": 0,
"explanation": "The * operator, when used with a string and an integer, performs string replication, repeating the string the specified number of times.",
"language": "Python",
"difficulty": "beginner",
"category": "Strings",
"code": "print('Python' * 3)",
"xpReward": 25
},
{
"id": 35,
"question": "How do you get the current working directory?",
"options": [
"os.get_current_directory()",
"os.getcwd()",
"os.current_dir()",
"os.pwd()"
],
"correctAnswer": 1,
"explanation": "The os module provides a portable way of using operating system-dependent functionality. The os.getcwd() method returns a string representing the current working directory.",
"language": "Python",
"difficulty": "intermediate",
"category": "File I/O",
"code": "import os\nprint(os.getcwd())",
"xpReward": 50
},
{
"id": 36,
"question": "What is the output of ['a', 'b', 'c'][1:]?",
"options": [
"['b']",
"['b', 'c']",
"['a', 'b']",
"['c']"
],
"correctAnswer": 1,
"explanation": "Slicing with [1:] returns a new list containing elements from the second element (index 1) to the end.",
"language": "Python",
"difficulty": "beginner",
"category": "Lists",
"code": "my_list = ['a', 'b', 'c']\nprint(my_list[1:])",
"xpReward": 25
},
{
"id": 37,
"question": "Which of these is a correct way to comment multiple lines in Python?",
"options": [
"// This is a comment",
"/* This is a comment /",
"'''This is a comment'''",
" This is a comment"
],
"correctAnswer": 2,
"explanation": "Python does not have a dedicated multi-line comment syntax like /* */. Multi-line strings enclosed in triple quotes (''' or \"\"\") are often used as a workaround for this purpose.",
"language": "Python",
"difficulty": "beginner",
"category": "Basics",
"code": "'''\nThis is a multi-line comment.\nIt can span multiple lines.\n'''",
"xpReward": 25
},
{
"id": 38,
"question": "What is the output of {'a': 1, 'b': 2}.get('c', 3)?",
"options": [
"None",
"Error",
"3",
"{'a': 1, 'b': 2, 'c': 3}"
],
"correctAnswer": 2,
"explanation": "The get() method returns the value for the given key. If the key is not found, it returns the optional default value, which is 3 in this case.",
"language": "Python",
"difficulty": "intermediate",
"category": "Dictionaries",
"code": "my_dict = {'a': 1, 'b': 2}\nprint(my_dict.get('c', 3))",
"xpReward": 50
},
{
"id": 39,
"question": "What is the purpose of the __name__ == '__main__' block?",
"options": [
"It is a required part of every Python script.",
"It prevents a script from being imported.",
"It ensures the code inside it only runs when the script is executed directly.",
"It is a block for global variables."
],
"correctAnswer": 2,
"explanation": "When a Python file is run directly, its __name__ variable is set to '__main__'. This block of code is a common idiom to ensure that certain code only runs when the script is not being imported as a module.",
"language": "Python",
"difficulty": "advanced",
"category": "Modules and Packages",
"code": "if name == 'main':\n    print('This code runs only when the file is executed.')",
"xpReward": 75
},
{
"id": 40,
"question": "What will be the output of this Python code?",
"options": [
"10",
"Error",
"15",
"5"
],
"correctAnswer": 0,
"explanation": "The nonlocal keyword is used to work with variables inside nested functions that are not local to the inner function, nor global.",
"language": "Python",
"difficulty": "advanced",
"category": "Functions",
"code": "def outer():\n    x = 5\n    def inner():\n        nonlocal x\n        x += 5\n    inner()\n    print(x)\n\nouter()",
"xpReward": 75
},
// JavaScript Quizzes
{
"id": 41,
"question": "What is the difference between 'let', 'const', and 'var'?",
"options": [
"'let' and 'const' are block-scoped, 'var' is function-scoped.",
"No difference, they are interchangeable.",
"'var' is block-scoped, 'let' and 'const' are global.",
"They are all block-scoped."
],
"correctAnswer": 0,
"explanation": "'let'** and 'const' are block-scoped (available only within the block they are defined in), while 'var' is function-scoped or global.",
"language": "JavaScript",
"difficulty": "intermediate",
"category": "Variables",
"code": "if (true) {\n    var a = 1; // accessible outside\n    let b = 2; // not accessible outside\n}\nconsole.log(a); // 1\nconsole.log(b); // ReferenceError",
"xpReward": 50
},
{
"id": 42,
"question": "What is the output of typeof null?",
"options": [
"'null'",
"'object'",
"'undefined'",
"Error"
],
"correctAnswer": 1,
"explanation": "This is a historical bug in JavaScript. The type of null is an object, although null itself is a primitive value representing the intentional absence of any object value.",
"language": "JavaScript",
"difficulty": "advanced",
"category": "Data Types",
"code": "console.log(typeof null);",
"xpReward": 75
},
{
"id": 43,
"question": "Which method is used to remove the last element from an array?",
"options": [
"slice()",
"pop()",
"shift()",
"removeLast()"
],
"correctAnswer": 1,
"explanation": "The pop() method removes the last element from an array and returns that element. shift() removes the first element.",
"language": "JavaScript",
"difficulty": "beginner",
"category": "Arrays",
"code": "const fruits = ['apple', 'banana', 'cherry'];\nconst last = fruits.pop();\nconsole.log(fruits); // ['apple', 'banana']",
"xpReward": 25
},
{
"id": 44,
"question": "What does hoisting mean in JavaScript?",
"options": [
"Moving variable declarations to the top of the scope before code execution.",
"Lifting a variable to a higher scope.",
"A type of function call.",
"Executing code in the browser's console."
],
"correctAnswer": 0,
"explanation": "Hoisting is JavaScript's default behavior of moving declarations (but not initializations) to the top of the current scope before code execution. This applies to var variables and function declarations.",
"language": "JavaScript",
"difficulty": "intermediate",
"category": "Execution Context",
"code": "console.log(a); // undefined\nvar a = 5;",
"xpReward": 50
},
{
"id": 45,
"question": "How do you check if a variable is an array?",
"options": [
"typeof myVar === 'array'",
"myVar.isArray()",
"Array.isArray(myVar)",
"myVar instanceof Array"
],
"correctAnswer": 2,
"explanation": "The static Array.isArray() method determines whether the passed value is an Array. It is a more reliable check than instanceof or typeof.",
"language": "JavaScript",
"difficulty": "intermediate",
"category": "Arrays",
"code": "const arr = [1, 2, 3];\nconsole.log(Array.isArray(arr)); // true",
"xpReward": 50
},
{
"id": 46,
"question": "What is the output of 0.1 + 0.2 in JavaScript?",
"options": [
"0.3",
"0.30000000000000004",
"0.12",
"Error"
],
"correctAnswer": 1,
"explanation": "Due to the nature of floating-point arithmetic (IEEE 754 standard), not all decimal numbers can be represented precisely in binary, leading to this common quirk.",
"language": "JavaScript",
"difficulty": "advanced",
"category": "Data Types",
"code": "console.log(0.1 + 0.2);",
"xpReward": 75
},
{
"id": 47,
"question": "Which of these is used to create a new object in JavaScript?",
"options": [
"new Object()",
"const obj = {}",
"const obj = new Object()",
"All of the above"
],
"correctAnswer": 3,
"explanation": "Both the object literal {} and the new Object() constructor are valid ways to create a new object. The literal notation is preferred for its brevity and readability.",
"language": "JavaScript",
"difficulty": "beginner",
"category": "Objects",
"code": "const obj1 = {};\nconst obj2 = new Object();",
"xpReward": 25
},
{
"id": 48,
"question": "What is the purpose of the bind() method?",
"options": [
"To call a function immediately.",
"To create a new function with a specific this context.",
"To change the this context of a function.",
"To bind a variable to a function."
],
"correctAnswer": 1,
"explanation": "The bind() method creates a new function that, when called, has its this keyword set to the provided value. It does not execute the function immediately.",
"language": "JavaScript",
"difficulty": "advanced",
"category": "Functions",
"code": "const person = { name: 'Alice', greet: function() { console.log(this.name); } };\nconst greetFunc = person.greet.bind({ name: 'Bob' });\ngreetFunc(); // Bob",
"xpReward": 75
},
{
"id": 49,
"question": "What is event bubbling?",
"options": [
"When an event is handled by the innermost element first, then propagates to parent elements.",
"When an event is handled by the outermost element first, then propagates inwards.",
"A way to prevent default browser behavior.",
"A method for adding event listeners."
],
"correctAnswer": 0,
"explanation": "Event bubbling is the process where an event starts at the target element and 'bubbles' up through its parent elements in the DOM tree until it reaches the root.",
"language": "JavaScript",
"difficulty": "intermediate",
"category": "DOM",
"code": "// A click on the child element will also trigger the parent's click handler.",
"xpReward": 50
},
{
"id": 50,
"question": "What is a Promise in JavaScript?",
"options": [
"A guarantee that a function will not fail.",
"An object representing the eventual completion or failure of an asynchronous operation.",
"A type of loop for asynchronous code.",
"A way to handle synchronous code."
],
"correctAnswer": 1,
"explanation": "A Promise is a proxy for a value not necessarily known when the promise is created. It represents an asynchronous operation that has either completed or failed.",
"language": "JavaScript",
"difficulty": "intermediate",
"category": "Async Programming",
"code": "const myPromise = new Promise((resolve, reject) => {\n    setTimeout(() => resolve('Done!'), 1000);\n});",
"xpReward": 50
},
{
"id": 51,
"question": "Which method is used to execute a function for each element in an array?",
"options": [
"loop()",
"iterate()",
"forEach()",
"run()"
],
"correctAnswer": 2,
"explanation": "The forEach() method executes a provided function once for each array element. It's often used as a simpler alternative to a for loop.",
"language": "JavaScript",
"difficulty": "beginner",
"category": "Arrays",
"code": "const arr = ['a', 'b'];\narr.forEach(el => console.log(el)); // prints 'a', then 'b'",
"xpReward": 25
},
{
"id": 52,
"question": "What is the purpose of the spread operator (...)?",
"options": [
"To divide an array into separate elements.",
"To combine multiple arrays into one.",
"To create a new array with an element added.",
"All of the above"
],
"correctAnswer": 3,
"explanation": "The spread operator expands an iterable into its individual elements. It's used to concatenate arrays, pass arguments to functions, or create new arrays and objects without mutating the original.",
"language": "JavaScript",
"difficulty": "intermediate",
"category": "Operators",
"code": "const arr1 = [1, 2];\nconst arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]",
"xpReward": 50
},
{
"id": 53,
"question": "What is the difference between call(), apply(), and bind()?",
"options": [
"They are identical and interchangeable.",
"call() and apply() execute immediately, bind() returns a new function. call() takes a list of arguments, apply() takes an array.",
"They all return a new function.",
"Only call() can be used with this."
],
"correctAnswer": 1,
"explanation": "All three are used to manipulate the this context. call() and apply() execute the function immediately, while bind() returns a new function. The key difference between call() and apply() is how they pass arguments: call() takes them as a comma-separated list, and apply() takes them as an array.",
"language": "JavaScript",
"difficulty": "advanced",
"category": "Functions",
"code": "function add(a, b) { return this.x + a + b; }\nconst obj = { x: 1 };\nadd.call(obj, 2, 3); // 6\nadd.apply(obj, [2, 3]); // 6",
"xpReward": 75
},
{
"id": 54,
"question": "How do you create a JavaScript class?",
"options": [
"class MyClass() {}",
"function MyClass() {}",
"class MyClass {}",
"def MyClass():"
],
"correctAnswer": 2,
"explanation": "Classes in JavaScript are defined using the class keyword. This syntax provides a cleaner and more object-oriented way to create objects compared to traditional prototype-based inheritance.",
"language": "JavaScript",
"difficulty": "intermediate",
"category": "Classes",
"code": "class Car {\n    constructor(make) {\n        this.make = make;\n    }\n}",
"xpReward": 50
},
{
"id": 55,
"question": "Which built-in function is used to parse a JSON string?",
"options": [
"JSON.parse()",
"JSON.stringify()",
"JSON.convert()",
"JSON.read()"
],
"correctAnswer": 0,
"explanation": "The JSON.parse() method is used to convert a JSON string into a JavaScript object. JSON.stringify() does the reverse.",
"language": "JavaScript",
"difficulty": "beginner",
"category": "JSON",
"code": "const jsonString = '{"name": "Alice"}';\nconst obj = JSON.parse(jsonString);\nconsole.log(obj.name); // Alice",
"xpReward": 25
},
// Java Quizzes
{
"id": 56,
"question": "What is the primary difference between ArrayList and a regular array in Java?",
"options": [
"ArrayList can only hold objects, while arrays can hold primitives.",
"The size of an ArrayList can change dynamically, while an array has a fixed size.",
"Arrays are faster than ArrayLists.",
"ArrayList is a primitive data type."
],
"correctAnswer": 1,
"explanation": "The main advantage of ArrayList is its dynamic size, which grows or shrinks as elements are added or removed. A standard array has a fixed size determined at initialization.",
"language": "Java",
"difficulty": "intermediate",
"category": "Collections",
"code": "ArrayList<String> list = new ArrayList<>();\nlist.add("hello"); // Adds an element dynamically",
"xpReward": 50
},
{
"id": 57,
"question": "What will be the output of System.out.println(10 / 3)?",
"options": [
"3.3333333333333335",
"3",
"3.0",
"Error"
],
"correctAnswer": 1,
"explanation": "When dividing two integers in Java, the result is an integer. The decimal part is truncated. To get a floating-point result, one of the operands must be a double or float (e.g., 10.0 / 3).",
"language": "Java",
"difficulty": "beginner",
"category": "Operators",
"code": "System.out.println(10 / 3);",
"xpReward": 25
},
{
"id": 58,
"question": "What is the purpose of the static keyword for a method?",
"options": [
"The method can be called without creating an instance of the class.",
"The method cannot be overridden.",
"The method belongs to a specific object.",
"The method is only accessible from within the same package."
],
"correctAnswer": 0,
"explanation": "A static method belongs to the class itself, not to any specific instance. You can call it using the class name directly without creating an object.",
"language": "Java",
"difficulty": "intermediate",
"category": "Keywords",
"code": "public class MathUtils {\n    public static int add(int a, int b) {\n        return a + b;\n    }\n}\nint sum = MathUtils.add(2, 3);",
"xpReward": 50
},
{
"id": 59,
"question": "What is the concept of encapsulation in Java?",
"options": [
"The ability to create multiple objects of the same class.",
"Wrapping data and code into a single unit.",
"Defining a blueprint for an object.",
"Hiding the implementation details of an object."
],
"correctAnswer": 1,
"explanation": "Encapsulation is the process of binding data (attributes) and the code that manipulates it (methods) into a single unit. It often involves using private access modifiers to hide implementation details and public methods to provide controlled access.",
"language": "Java",
"difficulty": "intermediate",
"category": "OOP",
"code": "public class Student {\n    private String name;\n    public String getName() {\n        return this.name;\n    }\n}",
"xpReward": 50
},
{
"id": 60,
"question": "Which of these is a checked exception?",
"options": [
"NullPointerException",
"ArrayIndexOutOfBoundsException",
"IOException",
"RuntimeException"
],
"correctAnswer": 2,
"explanation": "*IOException** is a checked exception. It must be handled at compile time. Unchecked exceptions like NullPointerException and RuntimeException do not need to be explicitly handled.",
"language": "Java",
"difficulty": "advanced",
"category": "Exception Handling",
"code": "try {\n    // Code that might throw IOException\n} catch (IOException e) {\n    e.printStackTrace();\n}",
"xpReward": 75
},
{
"id": 61,
"question": "What is the purpose of the super keyword?",
"options": [
"To access a static method of a superclass.",
"To call a constructor of a superclass.",
"To refer to the current object.",
"To define a new superclass."
],
"correctAnswer": 1,
"explanation": "The super keyword is used inside a subclass to refer to and access the members of its parent class. A common use is to call the parent class's constructor from within the subclass's constructor.",
"language": "Java",
"difficulty": "intermediate",
"category": "Inheritance",
"code": "class Dog extends Animal {\n    Dog(String name) {\n        super(name);\n    }\n}",
"xpReward": 50
},
{
"id": 62,
"question": "Which of the following is an interface?",
"options": [
"A class that cannot be instantiated.",
"A blueprint for a class, containing abstract methods and constants.",
"A concrete class with all methods implemented.",
"A class used for data storage."
],
"correctAnswer": 1,
"explanation": "An interface is a reference type in Java. It is a blueprint of a class. It contains abstract methods and static final constants. It cannot be instantiated, but a class can implement it to provide concrete implementations of its methods.",
"language": "Java",
"difficulty": "advanced",
"category": "Interfaces",
"code": "interface Drawable {\n    void draw();\n}",
"xpReward": 75
},
{
"id": 63,
"question": "What is the purpose of the public static void main(String[] args) method?",
"options": [
"It is a user-defined function.",
"It is the entry point for every Java application.",
"It is used for multi-threading.",
"It's a placeholder for the main logic."
],
"correctAnswer": 1,
"explanation": "The main method is the entry point for any Java program. When you run a Java class, the Java Virtual Machine (JVM) looks for this specific method to begin execution.",
"language": "Java",
"difficulty": "beginner",
"category": "Basics",
"code": "public class Main {\n    public static void main(String[] args) {\n        // Your code starts here\n    }\n}",
"xpReward": 25
},
{
"id": 64,
"question": "Which keyword is used to implement an interface?",
"options": [
"extend",
"implements",
"import",
"include"
],
"correctAnswer": 1,
"explanation": "The implements keyword is used to create a class that conforms to the contract of an interface. A class can implement multiple interfaces.",
"language": "Java",
"difficulty": "intermediate",
"category": "Interfaces",
"code": "class Dog implements Animal {\n    // Method implementations here\n}",
"xpReward": 50
},
{
"id": 65,
"question": "What is method overloading?",
"options": [
"Having multiple methods with the same name but different parameters.",
"Changing the implementation of an inherited method.",
"Defining a method in a subclass that is not in the superclass.",
"A method that can return multiple values."
],
"correctAnswer": 0,
"explanation": "Method overloading allows a class to have multiple methods with the same name but different numbers or types of parameters. This is a form of compile-time polymorphism.",
"language": "Java",
"difficulty": "intermediate",
"category": "Polymorphism",
"code": "class Calculator {\n    public int add(int a, int b) { return a + b; }\n    public double add(double a, double b) { return a + b; }\n}",
"xpReward": 50
},
{
"id": 66,
"question": "What is the final output of this C++ code?",
"options": [
"10",
"20",
"15",
"Compilation error"
],
"correctAnswer": 2,
"explanation": "The variable x is passed by value to func, so a copy is made. The function func modifies its local copy, not the original variable. The variable y is passed by reference, so the add_ten function modifies the original y and y becomes 20.",
"language": "C++",
"difficulty": "intermediate",
"category": "Functions",
"code": "void func(int a) {\n    a = a + 10;\n}\n\nvoid add_ten(int &a) {\n    a = a + 10;\n}\n\nint main() {\n    int x = 5;\n    int y = 10;\n    func(x);\n    add_ten(y);\n    cout << x + y;\n    return 0;\n}",
"xpReward": 50
},
{
"id": 67,
"question": "Which of these is the correct way to declare a constant in C++?",
"options": [
"const int x = 10;",
"#define x 10;",
"int const x = 10;",
"Both a and c"
],
"correctAnswer": 3,
"explanation": "Both const int x = 10; and int const x = 10; are valid ways to declare a constant integer in C++. The const keyword can appear before or after the type.",
"language": "C++",
"difficulty": "beginner",
"category": "Keywords",
"code": "const int x = 5;\nint const y = 10;",
"xpReward": 25
},
{
"id": 68,
"question": "What is the purpose of a destructor in C++?",
"options": [
"To create an object.",
"To free up memory allocated by a class object before it is destroyed.",
"To initialize class members.",
"To define the end of a class."
],
"correctAnswer": 1,
"explanation": "A destructor is a special member function of a class that is automatically called when a class object goes out of scope or is explicitly deleted. Its primary purpose is to free up resources, like memory or file handles, that the object acquired during its lifetime.",
"language": "C++",
"difficulty": "intermediate",
"category": "Memory Management",
"code": "class MyClass {\npublic:\n    ~MyClass() {\n        // Cleanup code here\n    }\n};",
"xpReward": 50
},
{
"id": 69,
"question": "Which header file is required to use std::cout?",
"options": [
"iostream",
"stdio.h",
"string",
"vector"
],
"correctAnswer": 0,
"explanation": "The <iostream> header file provides the standard input/output stream objects, including std::cin for input and std::cout for output.",
"language": "C++",
"difficulty": "beginner",
"category": "Basics",
"code": "#include <iostream>\nusing namespace std;\nint main() {\n    cout << "Hello";\n}",
"xpReward": 25
},
{
"id": 70,
"question": "What is a virtual function in C++?",
"options": [
"A function that cannot be overloaded.",
"A function that must be defined in every subclass.",
"A function declared with the virtual keyword, used to achieve runtime polymorphism.",
"A function that can be called only on a pointer."
],
"correctAnswer": 2,
"explanation": "A virtual function is a member function that is declared in a base class and is overridden by a derived class. It allows for dynamic dispatch (or runtime polymorphism), meaning the correct function version is chosen at runtime based on the object type, not the pointer type.",
"language": "C++",
"difficulty": "advanced",
"category": "Polymorphism",
"code": "class Animal {\npublic:\n    virtual void sound() {\n        cout << "Animal sound";\n    }\n};",
"xpReward": 75
},
{
"id": 71,
"question": "What is the difference between a class and a struct in C++?",
"options": [
"A struct can only hold data, a class can hold methods.",
"A struct is for simple data, a class is for complex data.",
"Members of a class are private by default, while members of a struct are public by default.",
"No difference, they are identical."
],
"correctAnswer": 2,
"explanation": "The main difference is the default member access specifier. For a class, it is private by default, and for a struct, it is public by default. Otherwise, they are functionally very similar.",
"language": "C++",
"difficulty": "intermediate",
"category": "OOP",
"code": "class MyClass { int a; }; // a is private\nstruct MyStruct { int b; }; // b is public",
"xpReward": 50
},
{
"id": 72,
"question": "How do you allocate memory for an array dynamically in C++?",
"options": [
"int arr = new int[10];",
"int* arr = new int[10];",
"int arr[] = new int[10];",
"int arr = (int*)malloc(10);"
],
"correctAnswer": 1,
"explanation": "The new operator is used to dynamically allocate memory for an array on the heap. It returns a pointer to the first element of the allocated memory.",
"language": "C++",
"difficulty": "intermediate",
"category": "Memory Management",
"code": "int* myArray = new int[5];\ndelete[] myArray; // Don't forget to free the memory",
"xpReward": 50
},
{
"id": 73,
"question": "What is a pure virtual function?",
"options": [
"A function that takes no arguments.",
"A virtual function that has no implementation.",
"A function that can only be called from a base class.",
"A function that returns a void value."
],
"correctAnswer": 1,
"explanation": "A pure virtual function is a virtual function in a base class that has no implementation. It is declared with = 0. A class containing at least one pure virtual function is considered an abstract class and cannot be instantiated.",
"language": "C++",
"difficulty": "advanced",
"category": "Polymorphism",
"code": "class Shape {\npublic:\n    virtual void draw() = 0;\n};",
"xpReward": 75
},
{
"id": 74,
"question": "What does the std namespace contain?",
"options": [
"Standard library functions and objects.",
"Only input/output functions.",
"Reserved C++ keywords.",
"Functions for parallel programming."
],
"correctAnswer": 0,
"explanation": "The std (standard) namespace contains the standard C++ library components, including I/O streams (cout, cin), containers (vector, list), algorithms, and more.",
"language": "C++",
"difficulty": "beginner",
"category": "Namespaces",
"code": "using namespace std;\ncout << "Hello";",
"xpReward": 25
},
{
"id": 75,
"question": "What is the purpose of the friend keyword in C++?",
"options": [
"To allow a function to be called from a different file.",
"To grant a function or class access to private and protected members of another class.",
"To create a new instance of a class.",
"To declare a function as non-member."
],
"correctAnswer": 1,
"explanation": "The friend keyword allows a function or an entire class to access the private and protected members of the class in which it is declared as a friend.",
"language": "C++",
"difficulty": "advanced",
"category": "Classes",
"code": "class MyClass {\nprivate:\n    int value;\n    friend void my_friend_func(MyClass& obj);\n};",
"xpReward": 75
}
];

export const getFlashcardsByLanguage = (language: string) => {
  return flashcardsData.filter(card => card.language === language);
};

export const getFlashcardsByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced') => {
  return flashcardsData.filter(card => card.difficulty === difficulty);
};

export const getFlashcardsByCategory = (category: string) => {
  return flashcardsData.filter(card => card.category === category);
};