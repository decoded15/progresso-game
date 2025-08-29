export interface FlashcardData {
  id: number;
  question: string;
  answer: string;
  language: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  code?: string;
  xpReward: number;
}

export const flashcardsData: FlashcardData[] = [
  // Python Flashcards (30 cards)
  {
    id: 1,
    question: "What keyword is used to define a function in Python?",
    answer: "The 'def' keyword is used to define functions in Python.",
    language: "Python",
    difficulty: "beginner",
    category: "Functions",
    code: "def my_function():\n    print('Hello, World!')",
    xpReward: 25
  },
  {
    id: 2,
    question: "What are Python lists?",
    answer: "Lists are ordered, mutable collections that can store multiple items of different data types.",
    language: "Python",
    difficulty: "beginner",
    category: "Data Types",
    code: "my_list = [1, 'hello', 3.14, True]",
    xpReward: 25
  },
  {
    id: 3,
    question: "How do you create a dictionary in Python?",
    answer: "Dictionaries are created using curly braces {} with key-value pairs separated by colons.",
    language: "Python",
    difficulty: "beginner",
    category: "Data Types",
    code: "my_dict = {'name': 'John', 'age': 30}",
    xpReward: 25
  },
  {
    id: 4,
    question: "What is the difference between '==' and 'is' in Python?",
    answer: "'==' compares values while 'is' compares object identity (memory location).",
    language: "Python",
    difficulty: "intermediate",
    category: "Operators",
    code: "a = [1, 2, 3]\nb = [1, 2, 3]\nprint(a == b)  # True\nprint(a is b)  # False",
    xpReward: 35
  },
  {
    id: 5,
    question: "What are Python decorators?",
    answer: "Decorators are functions that modify or extend the behavior of other functions without changing their code.",
    language: "Python",
    difficulty: "advanced",
    category: "Advanced Concepts",
    code: "@my_decorator\ndef my_function():\n    pass",
    xpReward: 50
  },
  {
    id: 6,
    question: "How do you handle exceptions in Python?",
    answer: "Use try-except blocks to catch and handle exceptions gracefully.",
    language: "Python",
    difficulty: "intermediate",
    category: "Error Handling",
    code: "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')",
    xpReward: 35
  },
  {
    id: 7,
    question: "What is a lambda function in Python?",
    answer: "Lambda functions are anonymous functions defined using the 'lambda' keyword for simple operations.",
    language: "Python",
    difficulty: "intermediate",
    category: "Functions",
    code: "square = lambda x: x ** 2\nprint(square(5))  # 25",
    xpReward: 35
  },
  {
    id: 8,
    question: "What are Python generators?",
    answer: "Generators are functions that use 'yield' to return values one at a time, saving memory.",
    language: "Python",
    difficulty: "advanced",
    category: "Advanced Concepts",
    code: "def count_up_to(n):\n    i = 1\n    while i <= n:\n        yield i\n        i += 1",
    xpReward: 50
  },
  {
    id: 9,
    question: "How do you create a class in Python?",
    answer: "Use the 'class' keyword followed by the class name and a colon.",
    language: "Python",
    difficulty: "intermediate",
    category: "Object-Oriented Programming",
    code: "class Person:\n    def __init__(self, name):\n        self.name = name",
    xpReward: 35
  },
  {
    id: 10,
    question: "What is list comprehension in Python?",
    answer: "List comprehension is a concise way to create lists using a single line of code.",
    language: "Python",
    difficulty: "intermediate",
    category: "Data Structures",
    code: "squares = [x**2 for x in range(10)]",
    xpReward: 35
  },
  {
    id: 11,
    question: "What are Python modules?",
    answer: "Modules are files containing Python code that can be imported and reused in other programs.",
    language: "Python",
    difficulty: "beginner",
    category: "Modules",
    code: "import math\nprint(math.pi)",
    xpReward: 25
  },
  {
    id: 12,
    question: "What is the difference between append() and extend() in Python lists?",
    answer: "append() adds a single element, while extend() adds multiple elements from an iterable.",
    language: "Python",
    difficulty: "beginner",
    category: "Data Structures",
    code: "list1 = [1, 2]\nlist1.append([3, 4])  # [1, 2, [3, 4]]\nlist2 = [1, 2]\nlist2.extend([3, 4])  # [1, 2, 3, 4]",
    xpReward: 25
  },
  {
    id: 13,
    question: "What are Python sets?",
    answer: "Sets are unordered collections of unique elements, useful for removing duplicates.",
    language: "Python",
    difficulty: "beginner",
    category: "Data Types",
    code: "my_set = {1, 2, 3, 3, 4}\nprint(my_set)  # {1, 2, 3, 4}",
    xpReward: 25
  },
  {
    id: 14,
    question: "What is the Global Interpreter Lock (GIL) in Python?",
    answer: "GIL is a mutex that protects Python objects, allowing only one thread to execute Python code at a time.",
    language: "Python",
    difficulty: "advanced",
    category: "Advanced Concepts",
    xpReward: 50
  },
  {
    id: 15,
    question: "How do you format strings in Python?",
    answer: "Use f-strings (f''), .format() method, or % formatting for string interpolation.",
    language: "Python",
    difficulty: "beginner",
    category: "Strings",
    code: "name = 'Alice'\nage = 30\nprint(f'Hello, {name}! You are {age} years old.')",
    xpReward: 25
  },
  {
    id: 16,
    question: "What are Python metaclasses?",
    answer: "Metaclasses are classes whose instances are classes themselves, controlling class creation.",
    language: "Python",
    difficulty: "advanced",
    category: "Advanced Concepts",
    code: "class Meta(type):\n    pass\n\nclass MyClass(metaclass=Meta):\n    pass",
    xpReward: 50
  },
  {
    id: 17,
    question: "What is the difference between shallow and deep copy in Python?",
    answer: "Shallow copy creates a new object but references to nested objects remain the same. Deep copy creates entirely new objects.",
    language: "Python",
    difficulty: "intermediate",
    category: "Memory Management",
    code: "import copy\noriginal = [[1, 2], [3, 4]]\nshallow = copy.copy(original)\ndeep = copy.deepcopy(original)",
    xpReward: 35
  },
  {
    id: 18,
    question: "What are Python context managers?",
    answer: "Context managers handle resource management using 'with' statements, ensuring proper cleanup.",
    language: "Python",
    difficulty: "intermediate",
    category: "Advanced Concepts",
    code: "with open('file.txt', 'r') as f:\n    content = f.read()\n# File automatically closed",
    xpReward: 35
  },
  {
    id: 19,
    question: "What is multiple inheritance in Python?",
    answer: "Multiple inheritance allows a class to inherit from multiple parent classes.",
    language: "Python",
    difficulty: "intermediate",
    category: "Object-Oriented Programming",
    code: "class A:\n    pass\n\nclass B:\n    pass\n\nclass C(A, B):\n    pass",
    xpReward: 35
  },
  {
    id: 20,
    question: "What are Python iterators?",
    answer: "Iterators are objects that implement __iter__() and __next__() methods to traverse collections.",
    language: "Python",
    difficulty: "intermediate",
    category: "Advanced Concepts",
    code: "class Counter:\n    def __init__(self, max):\n        self.max = max\n        self.num = 0\n    \n    def __iter__(self):\n        return self\n    \n    def __next__(self):\n        if self.num < self.max:\n            self.num += 1\n            return self.num\n        raise StopIteration",
    xpReward: 35
  },
  {
    id: 21,
    question: "What is the purpose of __init__.py files?",
    answer: "__init__.py makes a directory a Python package and can contain initialization code.",
    language: "Python",
    difficulty: "beginner",
    category: "Modules",
    xpReward: 25
  },
  {
    id: 22,
    question: "What are Python property decorators?",
    answer: "Property decorators allow methods to be accessed like attributes while maintaining encapsulation.",
    language: "Python",
    difficulty: "intermediate",
    category: "Object-Oriented Programming",
    code: "class Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    \n    @property\n    def radius(self):\n        return self._radius",
    xpReward: 35
  },
  {
    id: 23,
    question: "What is the difference between *args and **kwargs?",
    answer: "*args captures variable positional arguments as a tuple, **kwargs captures keyword arguments as a dictionary.",
    language: "Python",
    difficulty: "intermediate",
    category: "Functions",
    code: "def func(*args, **kwargs):\n    print(args)    # (1, 2, 3)\n    print(kwargs)  # {'a': 4, 'b': 5}\n\nfunc(1, 2, 3, a=4, b=5)",
    xpReward: 35
  },
  {
    id: 24,
    question: "What are Python descriptors?",
    answer: "Descriptors are objects that define how attribute access is handled using __get__, __set__, and __delete__ methods.",
    language: "Python",
    difficulty: "advanced",
    category: "Advanced Concepts",
    code: "class Descriptor:\n    def __get__(self, obj, objtype):\n        return 'descriptor value'\n    \n    def __set__(self, obj, value):\n        pass",
    xpReward: 50
  },
  {
    id: 25,
    question: "What is monkey patching in Python?",
    answer: "Monkey patching is dynamically modifying classes or modules at runtime to change their behavior.",
    language: "Python",
    difficulty: "advanced",
    category: "Advanced Concepts",
    code: "import datetime\n# Monkey patch the datetime module\ndatetime.datetime.is_weekend = lambda self: self.weekday() >= 5",
    xpReward: 50
  },
  {
    id: 26,
    question: "What are Python async/await keywords?",
    answer: "async/await enable asynchronous programming, allowing non-blocking code execution.",
    language: "Python",
    difficulty: "advanced",
    category: "Concurrency",
    code: "import asyncio\n\nasync def main():\n    await asyncio.sleep(1)\n    print('Done')\n\nasyncio.run(main())",
    xpReward: 50
  },
  {
    id: 27,
    question: "What is the difference between is and == in Python?",
    answer: "'is' checks identity (same object in memory), '==' checks equality (same value).",
    language: "Python",
    difficulty: "beginner",
    category: "Operators",
    code: "a = [1, 2, 3]\nb = [1, 2, 3]\nprint(a == b)  # True\nprint(a is b)  # False",
    xpReward: 25
  },
  {
    id: 28,
    question: "What are Python slots?",
    answer: "__slots__ restricts the attributes an instance can have, saving memory and improving performance.",
    language: "Python",
    difficulty: "advanced",
    category: "Memory Management",
    code: "class Person:\n    __slots__ = ['name', 'age']\n    \n    def __init__(self, name, age):\n        self.name = name\n        self.age = age",
    xpReward: 50
  },
  {
    id: 29,
    question: "What is the difference between staticmethod and classmethod?",
    answer: "@staticmethod doesn't receive any automatic arguments, @classmethod receives the class as first argument.",
    language: "Python",
    difficulty: "intermediate",
    category: "Object-Oriented Programming",
    code: "class MyClass:\n    @staticmethod\n    def static_method():\n        pass\n    \n    @classmethod\n    def class_method(cls):\n        pass",
    xpReward: 35
  },
  {
    id: 30,
    question: "What are Python closures?",
    answer: "Closures are nested functions that capture and remember variables from their enclosing scope.",
    language: "Python",
    difficulty: "intermediate",
    category: "Functions",
    code: "def outer(x):\n    def inner(y):\n        return x + y\n    return inner\n\nadd_five = outer(5)\nprint(add_five(3))  # 8",
    xpReward: 35
  },

  // JavaScript Flashcards (30 cards)
  {
    id: 31,
    question: "What is the difference between var, let, and const in JavaScript?",
    answer: "var is function-scoped and can be redeclared, let is block-scoped and can be reassigned, const is block-scoped and cannot be reassigned.",
    language: "JavaScript",
    difficulty: "beginner",
    category: "Variables",
    code: "var x = 1;    // Function scoped\nlet y = 2;    // Block scoped\nconst z = 3;  // Block scoped, immutable",
    xpReward: 25
  },
  {
    id: 32,
    question: "What are JavaScript arrow functions?",
    answer: "Arrow functions are a concise way to write functions with implicit return and lexical 'this' binding.",
    language: "JavaScript",
    difficulty: "beginner",
    category: "Functions",
    code: "const add = (a, b) => a + b;\nconst greet = name => `Hello, ${name}!`;",
    xpReward: 25
  },
  {
    id: 33,
    question: "What is destructuring in JavaScript?",
    answer: "Destructuring allows extracting values from arrays or properties from objects into distinct variables.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "ES6 Features",
    code: "const [a, b] = [1, 2];\nconst {name, age} = {name: 'John', age: 30};",
    xpReward: 35
  },
  {
    id: 34,
    question: "What are JavaScript promises?",
    answer: "Promises represent the eventual completion or failure of an asynchronous operation.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "Asynchronous Programming",
    code: "const promise = new Promise((resolve, reject) => {\n  setTimeout(() => resolve('Success!'), 1000);\n});",
    xpReward: 35
  },
  {
    id: 35,
    question: "What is async/await in JavaScript?",
    answer: "async/await provides a cleaner syntax for working with promises, making asynchronous code look synchronous.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "Asynchronous Programming",
    code: "async function fetchData() {\n  try {\n    const data = await fetch('/api/data');\n    return await data.json();\n  } catch (error) {\n    console.error(error);\n  }\n}",
    xpReward: 35
  },
  {
    id: 36,
    question: "What is the difference between == and === in JavaScript?",
    answer: "== performs type coercion before comparison, === compares both value and type without coercion.",
    language: "JavaScript",
    difficulty: "beginner",
    category: "Operators",
    code: "console.log(5 == '5');   // true (type coercion)\nconsole.log(5 === '5');  // false (strict equality)",
    xpReward: 25
  },
  {
    id: 37,
    question: "What are JavaScript closures?",
    answer: "Closures give functions access to variables from their outer (enclosing) scope even after the outer function returns.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "Functions",
    code: "function outer(x) {\n  return function inner(y) {\n    return x + y;\n  };\n}\nconst addFive = outer(5);\nconsole.log(addFive(3)); // 8",
    xpReward: 35
  },
  {
    id: 38,
    question: "What is the 'this' keyword in JavaScript?",
    answer: "'this' refers to the object that is executing the current function, its value depends on how the function was called.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "Object-Oriented Programming",
    code: "const obj = {\n  name: 'John',\n  greet() {\n    console.log(`Hello, ${this.name}`);\n  }\n};\nobj.greet(); // Hello, John",
    xpReward: 35
  },
  {
    id: 39,
    question: "What are JavaScript prototypes?",
    answer: "Prototypes allow objects to inherit properties and methods from other objects, forming a prototype chain.",
    language: "JavaScript",
    difficulty: "advanced",
    category: "Object-Oriented Programming",
    code: "function Person(name) {\n  this.name = name;\n}\nPerson.prototype.greet = function() {\n  return `Hello, ${this.name}`;\n};",
    xpReward: 50
  },
  {
    id: 40,
    question: "What is hoisting in JavaScript?",
    answer: "Hoisting moves variable and function declarations to the top of their containing scope during compilation.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "JavaScript Engine",
    code: "console.log(x); // undefined (not error)\nvar x = 5;\n\n// Equivalent to:\n// var x;\n// console.log(x);\n// x = 5;",
    xpReward: 35
  },
  {
    id: 41,
    question: "What are JavaScript modules?",
    answer: "Modules allow you to export and import functionality between files, promoting code reusability and organization.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "Modules",
    code: "// math.js\nexport const add = (a, b) => a + b;\n\n// main.js\nimport { add } from './math.js';\nconsole.log(add(2, 3));",
    xpReward: 35
  },
  {
    id: 42,
    question: "What is event delegation in JavaScript?",
    answer: "Event delegation uses event bubbling to handle events on child elements by attaching a single event listener to a parent element.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "DOM Manipulation",
    code: "document.getElementById('parent').addEventListener('click', function(e) {\n  if (e.target.classList.contains('button')) {\n    console.log('Button clicked!');\n  }\n});",
    xpReward: 35
  },
  {
    id: 43,
    question: "What are JavaScript generators?",
    answer: "Generators are functions that can be paused and resumed, yielding values one at a time using yield keyword.",
    language: "JavaScript",
    difficulty: "advanced",
    category: "Advanced Features",
    code: "function* numberGenerator() {\n  let i = 0;\n  while (true) {\n    yield i++;\n  }\n}\nconst gen = numberGenerator();\nconsole.log(gen.next().value); // 0",
    xpReward: 50
  },
  {
    id: 44,
    question: "What is the spread operator in JavaScript?",
    answer: "The spread operator (...) expands iterables (arrays, strings) into individual elements or object properties.",
    language: "JavaScript",
    difficulty: "beginner",
    category: "ES6 Features",
    code: "const arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]\nconst obj = {a: 1, ...{b: 2, c: 3}};",
    xpReward: 25
  },
  {
    id: 45,
    question: "What is the rest parameter in JavaScript?",
    answer: "Rest parameters (...) collect multiple arguments into an array, allowing functions to accept variable numbers of arguments.",
    language: "JavaScript",
    difficulty: "beginner",
    category: "Functions",
    code: "function sum(...numbers) {\n  return numbers.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3, 4)); // 10",
    xpReward: 25
  },
  {
    id: 46,
    question: "What are JavaScript template literals?",
    answer: "Template literals use backticks (`) to create strings with embedded expressions and multi-line support.",
    language: "JavaScript",
    difficulty: "beginner",
    category: "Strings",
    code: "const name = 'Alice';\nconst age = 30;\nconst message = `Hello, ${name}!\nYou are ${age} years old.`;",
    xpReward: 25
  },
  {
    id: 47,
    question: "What is the difference between null and undefined in JavaScript?",
    answer: "undefined means a variable has been declared but not assigned a value, null is an intentional absence of value.",
    language: "JavaScript",
    difficulty: "beginner",
    category: "Data Types",
    code: "let x; // undefined\nlet y = null; // intentionally empty\nconsole.log(typeof x); // 'undefined'\nconsole.log(typeof y); // 'object'",
    xpReward: 25
  },
  {
    id: 48,
    question: "What are JavaScript symbols?",
    answer: "Symbols are unique primitive values used as object property keys to avoid naming collisions.",
    language: "JavaScript",
    difficulty: "advanced",
    category: "Data Types",
    code: "const sym1 = Symbol('description');\nconst sym2 = Symbol('description');\nconsole.log(sym1 === sym2); // false\n\nconst obj = {\n  [sym1]: 'value'\n};",
    xpReward: 50
  },
  {
    id: 49,
    question: "What is currying in JavaScript?",
    answer: "Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument.",
    language: "JavaScript",
    difficulty: "advanced",
    category: "Functional Programming",
    code: "const multiply = (a) => (b) => (c) => a * b * c;\nconst multiplyBy2 = multiply(2);\nconst multiplyBy2And3 = multiplyBy2(3);\nconsole.log(multiplyBy2And3(4)); // 24",
    xpReward: 50
  },
  {
    id: 50,
    question: "What is the event loop in JavaScript?",
    answer: "The event loop handles asynchronous operations by managing the call stack, callback queue, and Web APIs.",
    language: "JavaScript",
    difficulty: "advanced",
    category: "JavaScript Engine",
    code: "console.log('1');\nsetTimeout(() => console.log('2'), 0);\nPromise.resolve().then(() => console.log('3'));\nconsole.log('4');\n// Output: 1, 4, 3, 2",
    xpReward: 50
  },
  {
    id: 51,
    question: "What are JavaScript Maps and Sets?",
    answer: "Map stores key-value pairs with any type of keys, Set stores unique values of any type.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "Data Structures",
    code: "const map = new Map();\nmap.set('key', 'value');\n\nconst set = new Set([1, 2, 2, 3]);\nconsole.log(set); // Set {1, 2, 3}",
    xpReward: 35
  },
  {
    id: 52,
    question: "What is debouncing in JavaScript?",
    answer: "Debouncing delays function execution until after a specified time has passed since the last invocation.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "Performance",
    code: "function debounce(func, delay) {\n  let timeoutId;\n  return function(...args) {\n    clearTimeout(timeoutId);\n    timeoutId = setTimeout(() => func.apply(this, args), delay);\n  };\n}",
    xpReward: 35
  },
  {
    id: 53,
    question: "What are JavaScript proxies?",
    answer: "Proxies allow you to intercept and customize operations performed on objects (property lookup, assignment, etc.).",
    language: "JavaScript",
    difficulty: "advanced",
    category: "Advanced Features",
    code: "const handler = {\n  get: function(target, prop) {\n    return prop in target ? target[prop] : 'Property not found';\n  }\n};\nconst proxy = new Proxy({name: 'John'}, handler);",
    xpReward: 50
  },
  {
    id: 54,
    question: "What is memoization in JavaScript?",
    answer: "Memoization caches function results to avoid expensive recalculations for the same inputs.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "Performance",
    code: "function memoize(fn) {\n  const cache = {};\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (key in cache) return cache[key];\n    cache[key] = fn.apply(this, args);\n    return cache[key];\n  };\n}",
    xpReward: 35
  },
  {
    id: 55,
    question: "What are WeakMap and WeakSet in JavaScript?",
    answer: "WeakMap and WeakSet hold weak references to objects, allowing garbage collection when no other references exist.",
    language: "JavaScript",
    difficulty: "advanced",
    category: "Memory Management",
    code: "const weakMap = new WeakMap();\nconst obj = {};\nweakMap.set(obj, 'some value');\n// obj can be garbage collected if no other references exist",
    xpReward: 50
  },
  {
    id: 56,
    question: "What is the Observer pattern in JavaScript?",
    answer: "Observer pattern defines a one-to-many dependency between objects, notifying dependents of state changes.",
    language: "JavaScript",
    difficulty: "advanced",
    category: "Design Patterns",
    code: "class Subject {\n  constructor() {\n    this.observers = [];\n  }\n  subscribe(observer) {\n    this.observers.push(observer);\n  }\n  notify(data) {\n    this.observers.forEach(observer => observer(data));\n  }\n}",
    xpReward: 50
  },
  {
    id: 57,
    question: "What is throttling in JavaScript?",
    answer: "Throttling limits function execution to once per specified time interval, regardless of how often it's called.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "Performance",
    code: "function throttle(func, delay) {\n  let lastCall = 0;\n  return function(...args) {\n    const now = Date.now();\n    if (now - lastCall >= delay) {\n      lastCall = now;\n      func.apply(this, args);\n    }\n  };\n}",
    xpReward: 35
  },
  {
    id: 58,
    question: "What are JavaScript iterators?",
    answer: "Iterators are objects that implement the iterator protocol with a next() method returning {value, done}.",
    language: "JavaScript",
    difficulty: "advanced",
    category: "Advanced Features",
    code: "const iterator = {\n  current: 0,\n  last: 3,\n  next() {\n    if (this.current <= this.last) {\n      return { value: this.current++, done: false };\n    }\n    return { done: true };\n  }\n};",
    xpReward: 50
  },
  {
    id: 59,
    question: "What is the Fetch API in JavaScript?",
    answer: "Fetch API provides a modern way to make HTTP requests, returning promises for handling responses.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "Web APIs",
    code: "fetch('/api/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Error:', error));",
    xpReward: 35
  },
  {
    id: 60,
    question: "What are JavaScript service workers?",
    answer: "Service workers are scripts that run in the background, enabling features like offline functionality and push notifications.",
    language: "JavaScript",
    difficulty: "advanced",
    category: "Web APIs",
    code: "// Register service worker\nif ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/sw.js')\n    .then(registration => console.log('SW registered'))\n    .catch(error => console.log('SW registration failed'));\n}",
    xpReward: 50
  },

  // Java Flashcards (30 cards)
  {
    id: 61,
    question: "What is the main method signature in Java?",
    answer: "public static void main(String[] args) is the entry point for Java applications.",
    language: "Java",
    difficulty: "beginner",
    category: "Basic Syntax",
    code: "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
    xpReward: 25
  },
  {
    id: 62,
    question: "What are the primitive data types in Java?",
    answer: "Java has 8 primitive types: byte, short, int, long, float, double, boolean, and char.",
    language: "Java",
    difficulty: "beginner",
    category: "Data Types",
    code: "int number = 42;\nboolean flag = true;\nchar letter = 'A';\ndouble price = 19.99;",
    xpReward: 25
  },
  {
    id: 63,
    question: "What is the difference between == and equals() in Java?",
    answer: "== compares references (memory addresses), equals() compares object content/values.",
    language: "Java",
    difficulty: "intermediate",
    category: "Object Comparison",
    code: "String s1 = new String(\"hello\");\nString s2 = new String(\"hello\");\nSystem.out.println(s1 == s2);      // false\nSystem.out.println(s1.equals(s2)); // true",
    xpReward: 35
  },
  {
    id: 64,
    question: "What is inheritance in Java?",
    answer: "Inheritance allows a class to inherit properties and methods from another class using the 'extends' keyword.",
    language: "Java",
    difficulty: "intermediate",
    category: "Object-Oriented Programming",
    code: "class Animal {\n    void eat() { System.out.println(\"Eating...\"); }\n}\n\nclass Dog extends Animal {\n    void bark() { System.out.println(\"Barking...\"); }\n}",
    xpReward: 35
  },
  {
    id: 65,
    question: "What are interfaces in Java?",
    answer: "Interfaces define contracts that classes must implement, supporting multiple inheritance of type.",
    language: "Java",
    difficulty: "intermediate",
    category: "Object-Oriented Programming",
    code: "interface Drawable {\n    void draw();\n}\n\nclass Circle implements Drawable {\n    public void draw() {\n        System.out.println(\"Drawing circle\");\n    }\n}",
    xpReward: 35
  },
  {
    id: 66,
    question: "What is method overloading in Java?",
    answer: "Method overloading allows multiple methods with the same name but different parameter lists in the same class.",
    language: "Java",
    difficulty: "beginner",
    category: "Methods",
    code: "class Calculator {\n    int add(int a, int b) {\n        return a + b;\n    }\n    \n    double add(double a, double b) {\n        return a + b;\n    }\n}",
    xpReward: 25
  },
  {
    id: 67,
    question: "What is method overriding in Java?",
    answer: "Method overriding allows a subclass to provide a specific implementation of a method defined in its superclass.",
    language: "Java",
    difficulty: "intermediate",
    category: "Object-Oriented Programming",
    code: "class Animal {\n    void makeSound() {\n        System.out.println(\"Animal sound\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    void makeSound() {\n        System.out.println(\"Woof!\");\n    }\n}",
    xpReward: 35
  },
  {
    id: 68,
    question: "What are access modifiers in Java?",
    answer: "Access modifiers control visibility: public (everywhere), private (same class), protected (package + subclasses), default (package).",
    language: "Java",
    difficulty: "beginner",
    category: "Access Control",
    code: "public class Example {\n    private int privateVar;\n    protected int protectedVar;\n    public int publicVar;\n    int defaultVar; // package-private\n}",
    xpReward: 25
  },
  {
    id: 69,
    question: "What is the finally block in Java?",
    answer: "The finally block executes regardless of whether an exception occurs, typically used for cleanup operations.",
    language: "Java",
    difficulty: "intermediate",
    category: "Exception Handling",
    code: "try {\n    // risky code\n} catch (Exception e) {\n    // handle exception\n} finally {\n    // always executes\n    System.out.println(\"Cleanup\");\n}",
    xpReward: 35
  },
  {
    id: 70,
    question: "What are Java generics?",
    answer: "Generics provide type safety by allowing classes, interfaces, and methods to operate on different types while maintaining type checking.",
    language: "Java",
    difficulty: "intermediate",
    category: "Generics",
    code: "List<String> strings = new ArrayList<String>();\nstrings.add(\"Hello\");\n// strings.add(123); // Compile error\n\nclass Box<T> {\n    private T item;\n    public void set(T item) { this.item = item; }\n    public T get() { return item; }\n}",
    xpReward: 35
  },
  {
    id: 71,
    question: "What is the difference between ArrayList and LinkedList?",
    answer: "ArrayList uses dynamic arrays (fast random access), LinkedList uses doubly-linked lists (fast insertion/deletion).",
    language: "Java",
    difficulty: "intermediate",
    category: "Collections",
    code: "ArrayList<String> arrayList = new ArrayList<>();\nLinkedList<String> linkedList = new LinkedList<>();\n\n// ArrayList: O(1) random access\n// LinkedList: O(1) insertion at ends",
    xpReward: 35
  },
  {
    id: 72,
    question: "What is the String pool in Java?",
    answer: "String pool is a special memory area where string literals are stored to optimize memory usage through string interning.",
    language: "Java",
    difficulty: "intermediate",
    category: "Memory Management",
    code: "String s1 = \"hello\";        // Stored in string pool\nString s2 = \"hello\";        // References same object\nString s3 = new String(\"hello\"); // Creates new object\n\nSystem.out.println(s1 == s2); // true\nSystem.out.println(s1 == s3); // false",
    xpReward: 35
  },
  {
    id: 73,
    question: "What are Java annotations?",
    answer: "Annotations provide metadata about code elements, influencing compilation, runtime behavior, or code generation.",
    language: "Java",
    difficulty: "intermediate",
    category: "Annotations",
    code: "@Override\npublic String toString() {\n    return \"Custom string representation\";\n}\n\n@Deprecated\npublic void oldMethod() {\n    // Legacy code\n}",
    xpReward: 35
  },
  {
    id: 74,
    question: "What is the difference between abstract classes and interfaces?",
    answer: "Abstract classes can have concrete methods and instance variables, interfaces (before Java 8) could only have abstract methods.",
    language: "Java",
    difficulty: "intermediate",
    category: "Object-Oriented Programming",
    code: "abstract class Animal {\n    abstract void makeSound();\n    void sleep() { System.out.println(\"Sleeping...\"); }\n}\n\ninterface Flyable {\n    void fly(); // abstract by default\n}",
    xpReward: 35
  },
  {
    id: 75,
    question: "What are lambda expressions in Java?",
    answer: "Lambda expressions provide a concise way to represent anonymous functions, introduced in Java 8.",
    language: "Java",
    difficulty: "intermediate",
    category: "Functional Programming",
    code: "// Traditional way\nRunnable r1 = new Runnable() {\n    public void run() { System.out.println(\"Hello\"); }\n};\n\n// Lambda expression\nRunnable r2 = () -> System.out.println(\"Hello\");",
    xpReward: 35
  },
  {
    id: 76,
    question: "What are Java streams?",
    answer: "Streams provide a functional approach to processing collections with operations like filter, map, and reduce.",
    language: "Java",
    difficulty: "advanced",
    category: "Streams",
    code: "List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);\nList<Integer> evenSquares = numbers.stream()\n    .filter(n -> n % 2 == 0)\n    .map(n -> n * n)\n    .collect(Collectors.toList());",
    xpReward: 50
  },
  {
    id: 77,
    question: "What is the difference between checked and unchecked exceptions?",
    answer: "Checked exceptions must be handled at compile time, unchecked exceptions (RuntimeException) are handled at runtime.",
    language: "Java",
    difficulty: "intermediate",
    category: "Exception Handling",
    code: "// Checked exception - must handle\ntry {\n    FileReader file = new FileReader(\"file.txt\");\n} catch (FileNotFoundException e) {\n    // Handle exception\n}\n\n// Unchecked exception - optional handling\nint result = 10 / 0; // ArithmeticException",
    xpReward: 35
  },
  {
    id: 78,
    question: "What is the synchronized keyword in Java?",
    answer: "synchronized ensures thread safety by allowing only one thread to access a method or block at a time.",
    language: "Java",
    difficulty: "advanced",
    category: "Concurrency",
    code: "public class Counter {\n    private int count = 0;\n    \n    public synchronized void increment() {\n        count++;\n    }\n    \n    public synchronized int getCount() {\n        return count;\n    }\n}",
    xpReward: 50
  },
  {
    id: 79,
    question: "What are Java enums?",
    answer: "Enums define a fixed set of constants, providing type safety and additional functionality over simple constants.",
    language: "Java",
    difficulty: "beginner",
    category: "Enums",
    code: "enum Day {\n    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY\n}\n\nDay today = Day.MONDAY;\nswitch (today) {\n    case MONDAY:\n        System.out.println(\"Start of work week\");\n        break;\n}",
    xpReward: 25
  },
  {
    id: 80,
    question: "What is garbage collection in Java?",
    answer: "Garbage collection automatically reclaims memory used by objects that are no longer reachable or referenced.",
    language: "Java",
    difficulty: "intermediate",
    category: "Memory Management",
    code: "// Object becomes eligible for GC when no references exist\nString str = new String(\"Hello\");\nstr = null; // Original string object now eligible for GC\n\n// Suggest GC (not guaranteed)\nSystem.gc();",
    xpReward: 35
  },
  {
    id: 81,
    question: "What are static variables and methods in Java?",
    answer: "Static members belong to the class rather than instances, shared among all objects of the class.",
    language: "Java",
    difficulty: "beginner",
    category: "Static Members",
    code: "class Counter {\n    private static int count = 0; // Shared among all instances\n    \n    public static void increment() {\n        count++;\n    }\n    \n    public static int getCount() {\n        return count;\n    }\n}",
    xpReward: 25
  },
  {
    id: 82,
    question: "What is the difference between HashMap and TreeMap?",
    answer: "HashMap offers O(1) average access with no ordering, TreeMap offers O(log n) access with sorted keys.",
    language: "Java",
    difficulty: "intermediate",
    category: "Collections",
    code: "Map<String, Integer> hashMap = new HashMap<>(); // No ordering\nMap<String, Integer> treeMap = new TreeMap<>(); // Sorted by keys\n\nhashMap.put(\"c\", 3);\nhashMap.put(\"a\", 1);\nhashMap.put(\"b\", 2);\n// Order: c, a, b (insertion order or random)\n\ntreeMap.put(\"c\", 3);\ntreeMap.put(\"a\", 1);\ntreeMap.put(\"b\", 2);\n// Order: a, b, c (sorted)",
    xpReward: 35
  },
  {
    id: 83,
    question: "What are constructors in Java?",
    answer: "Constructors are special methods called when objects are created, used to initialize object state.",
    language: "Java",
    difficulty: "beginner",
    category: "Constructors",
    code: "class Person {\n    private String name;\n    private int age;\n    \n    // Default constructor\n    public Person() {\n        this.name = \"Unknown\";\n        this.age = 0;\n    }\n    \n    // Parameterized constructor\n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}",
    xpReward: 25
  },
  {
    id: 84,
    question: "What is the difference between String, StringBuilder, and StringBuffer?",
    answer: "String is immutable, StringBuilder is mutable and not thread-safe, StringBuffer is mutable and thread-safe.",
    language: "Java",
    difficulty: "intermediate",
    category: "Strings",
    code: "String str = \"Hello\"; // Immutable\nstr += \" World\"; // Creates new String object\n\nStringBuilder sb = new StringBuilder(\"Hello\");\nsb.append(\" World\"); // Modifies existing buffer\n\nStringBuffer sbf = new StringBuffer(\"Hello\");\nsbf.append(\" World\"); // Thread-safe modification",
    xpReward: 35
  },
  {
    id: 85,
    question: "What are Java packages?",
    answer: "Packages organize related classes and interfaces, providing namespace management and access control.",
    language: "Java",
    difficulty: "beginner",
    category: "Packages",
    code: "package com.example.myapp;\n\nimport java.util.List;\nimport java.util.ArrayList;\n\npublic class MyClass {\n    private List<String> items = new ArrayList<>();\n}",
    xpReward: 25
  },
  {
    id: 86,
    question: "What is polymorphism in Java?",
    answer: "Polymorphism allows objects of different types to be treated as instances of the same type through inheritance or interfaces.",
    language: "Java",
    difficulty: "intermediate",
    category: "Object-Oriented Programming",
    code: "Animal animal1 = new Dog();\nAnimal animal2 = new Cat();\n\nanimal1.makeSound(); // Calls Dog's implementation\nanimal2.makeSound(); // Calls Cat's implementation\n\n// Runtime polymorphism through method overriding",
    xpReward: 35
  },
  {
    id: 87,
    question: "What are nested classes in Java?",
    answer: "Nested classes are classes defined within other classes, including static nested classes and inner classes.",
    language: "Java",
    difficulty: "advanced",
    category: "Nested Classes",
    code: "class Outer {\n    private int outerVar = 10;\n    \n    // Static nested class\n    static class StaticNested {\n        void display() { System.out.println(\"Static nested\"); }\n    }\n    \n    // Inner class\n    class Inner {\n        void display() { System.out.println(outerVar); }\n    }\n}",
    xpReward: 50
  },
  {
    id: 88,
    question: "What is the volatile keyword in Java?",
    answer: "volatile ensures that variable reads and writes are directly to main memory, providing visibility across threads.",
    language: "Java",
    difficulty: "advanced",
    category: "Concurrency",
    code: "class SharedResource {\n    private volatile boolean flag = false;\n    \n    public void setFlag(boolean value) {\n        this.flag = value; // Immediately visible to other threads\n    }\n    \n    public boolean isFlag() {\n        return flag; // Always reads from main memory\n    }\n}",
    xpReward: 50
  },
  {
    id: 89,
    question: "What are functional interfaces in Java?",
    answer: "Functional interfaces have exactly one abstract method and can be used with lambda expressions and method references.",
    language: "Java",
    difficulty: "intermediate",
    category: "Functional Programming",
    code: "@FunctionalInterface\ninterface Calculator {\n    int calculate(int a, int b);\n}\n\n// Using lambda expression\nCalculator add = (a, b) -> a + b;\nCalculator multiply = (a, b) -> a * b;\n\nint result = add.calculate(5, 3); // 8",
    xpReward: 35
  },
  {
    id: 90,
    question: "What is the difference between final, finally, and finalize?",
    answer: "final is a keyword for constants/inheritance prevention, finally is a block that always executes, finalize is a method called by GC.",
    language: "Java",
    difficulty: "intermediate",
    category: "Keywords",
    code: "final int CONSTANT = 10; // Cannot be changed\n\ntry {\n    // code\n} finally {\n    // Always executes\n}\n\nclass MyClass {\n    @Override\n    protected void finalize() throws Throwable {\n        // Called by garbage collector\n        super.finalize();\n    }\n}",
    xpReward: 35
  },

  // C++ Flashcards (30 cards)
  {
    id: 91,
    question: "What is the basic structure of a C++ program?",
    answer: "A C++ program includes headers, namespace declarations, and a main() function as the entry point.",
    language: "C++",
    difficulty: "beginner",
    category: "Basic Syntax",
    code: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello, World!\" << endl;\n    return 0;\n}",
    xpReward: 25
  },
  {
    id: 92,
    question: "What are pointers in C++?",
    answer: "Pointers are variables that store memory addresses of other variables, enabling indirect access to values.",
    language: "C++",
    difficulty: "intermediate",
    category: "Pointers",
    code: "int x = 42;\nint* ptr = &x;  // ptr points to address of x\ncout << *ptr;   // prints 42 (dereference)\ncout << ptr;    // prints address of x",
    xpReward: 35
  },
  {
    id: 93,
    question: "What is the difference between references and pointers in C++?",
    answer: "References are aliases that must be initialized and cannot be reassigned, pointers can be reassigned and can be null.",
    language: "C++",
    difficulty: "intermediate",
    category: "References vs Pointers",
    code: "int x = 10, y = 20;\nint& ref = x;    // Reference must be initialized\nint* ptr = &x;   // Pointer can be reassigned\n\nref = y;         // Changes x to 20\nptr = &y;        // ptr now points to y",
    xpReward: 35
  },
  {
    id: 94,
    question: "What are classes and objects in C++?",
    answer: "Classes are user-defined types that encapsulate data and functions, objects are instances of classes.",
    language: "C++",
    difficulty: "beginner",
    category: "Object-Oriented Programming",
    code: "class Rectangle {\nprivate:\n    int width, height;\npublic:\n    Rectangle(int w, int h) : width(w), height(h) {}\n    int area() { return width * height; }\n};\n\nRectangle rect(5, 3);\ncout << rect.area(); // 15",
    xpReward: 25
  },
  {
    id: 95,
    question: "What is dynamic memory allocation in C++?",
    answer: "Dynamic memory allocation uses 'new' and 'delete' operators to allocate and deallocate memory at runtime.",
    language: "C++",
    difficulty: "intermediate",
    category: "Memory Management",
    code: "int* arr = new int[10];  // Allocate array of 10 integers\nfor (int i = 0; i < 10; i++) {\n    arr[i] = i * i;\n}\ndelete[] arr;  // Deallocate memory",
    xpReward: 35
  },
  {
    id: 96,
    question: "What are constructors and destructors in C++?",
    answer: "Constructors initialize objects when created, destructors clean up resources when objects are destroyed.",
    language: "C++",
    difficulty: "beginner",
    category: "Constructors/Destructors",
    code: "class MyClass {\npublic:\n    MyClass() { cout << \"Constructor called\" << endl; }\n    ~MyClass() { cout << \"Destructor called\" << endl; }\n};\n\nMyClass obj; // Constructor called automatically\n// Destructor called when obj goes out of scope",
    xpReward: 25
  },
  {
    id: 97,
    question: "What is inheritance in C++?",
    answer: "Inheritance allows classes to inherit properties and methods from base classes, promoting code reuse.",
    language: "C++",
    difficulty: "intermediate",
    category: "Inheritance",
    code: "class Animal {\nprotected:\n    string name;\npublic:\n    void eat() { cout << \"Eating...\" << endl; }\n};\n\nclass Dog : public Animal {\npublic:\n    void bark() { cout << \"Woof!\" << endl; }\n};",
    xpReward: 35
  },
  {
    id: 98,
    question: "What are virtual functions in C++?",
    answer: "Virtual functions enable runtime polymorphism, allowing derived classes to override base class methods.",
    language: "C++",
    difficulty: "advanced",
    category: "Polymorphism",
    code: "class Shape {\npublic:\n    virtual void draw() { cout << \"Drawing shape\" << endl; }\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override { cout << \"Drawing circle\" << endl; }\n};\n\nShape* shape = new Circle();\nshape->draw(); // Calls Circle's draw()",
    xpReward: 50
  },
  {
    id: 99,
    question: "What are function templates in C++?",
    answer: "Function templates allow writing generic functions that work with different data types.",
    language: "C++",
    difficulty: "intermediate",
    category: "Templates",
    code: "template <typename T>\nT maximum(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint maxInt = maximum(10, 20);        // Works with int\ndouble maxDouble = maximum(3.14, 2.71); // Works with double",
    xpReward: 35
  },
  {
    id: 100,
    question: "What is the Standard Template Library (STL) in C++?",
    answer: "STL provides containers, algorithms, and iterators for common data structures and operations.",
    language: "C++",
    difficulty: "intermediate",
    category: "STL",
    code: "#include <vector>\n#include <algorithm>\n\nvector<int> numbers = {3, 1, 4, 1, 5, 9};\nsort(numbers.begin(), numbers.end());\n\nfor (int num : numbers) {\n    cout << num << \" \";\n}",
    xpReward: 35
  },
  {
    id: 101,
    question: "What are operator overloading in C++?",
    answer: "Operator overloading allows custom classes to define behavior for built-in operators like +, -, ==, etc.",
    language: "C++",
    difficulty: "advanced",
    category: "Operator Overloading",
    code: "class Complex {\nprivate:\n    double real, imag;\npublic:\n    Complex(double r = 0, double i = 0) : real(r), imag(i) {}\n    \n    Complex operator+(const Complex& other) {\n        return Complex(real + other.real, imag + other.imag);\n    }\n};\n\nComplex c1(3, 4);\nComplex c2(1, 2);\nComplex c3 = c1 + c2; // Uses overloaded + operator",
    xpReward: 50
  },
  {
    id: 102,
    question: "What are smart pointers in C++?",
    answer: "Smart pointers automatically manage memory, preventing memory leaks and dangling pointers.",
    language: "C++",
    difficulty: "advanced",
    category: "Smart Pointers",
    code: "#include <memory>\n\nstd::unique_ptr<int> ptr1 = std::make_unique<int>(42);\nstd::shared_ptr<int> ptr2 = std::make_shared<int>(100);\nstd::weak_ptr<int> ptr3 = ptr2;\n\n// Memory automatically freed when smart pointers go out of scope",
    xpReward: 50
  },
  {
    id: 103,
    question: "What is the difference between stack and heap memory?",
    answer: "Stack memory is automatically managed and faster, heap memory is manually managed and larger but slower.",
    language: "C++",
    difficulty: "intermediate",
    category: "Memory Management",
    code: "int stackVar = 10;           // Stored on stack\nint* heapVar = new int(20);  // Stored on heap\n\n// Stack variables automatically cleaned up\n// Heap variables must be manually deleted\ndelete heapVar;",
    xpReward: 35
  },
  {
    id: 104,
    question: "What are const and static keywords in C++?",
    answer: "const makes variables immutable, static gives variables class-level scope or function-level persistence.",
    language: "C++",
    difficulty: "beginner",
    category: "Keywords",
    code: "class MyClass {\nprivate:\n    static int count;        // Shared among all instances\n    const int id;           // Cannot be changed after initialization\n    \npublic:\n    MyClass(int i) : id(i) { count++; }\n    static int getCount() { return count; }\n};\n\nint MyClass::count = 0;",
    xpReward: 25
  },
  {
    id: 105,
    question: "What are inline functions in C++?",
    answer: "Inline functions are expanded at compile time instead of being called, reducing function call overhead.",
    language: "C++",
    difficulty: "intermediate",
    category: "Functions",
    code: "inline int square(int x) {\n    return x * x;\n}\n\n// Compiler replaces square(5) with (5 * 5)\nint result = square(5); // Expanded to: int result = 25;",
    xpReward: 35
  },
  {
    id: 106,
    question: "What are namespaces in C++?",
    answer: "Namespaces group related code and prevent naming conflicts by providing separate scopes.",
    language: "C++",
    difficulty: "beginner",
    category: "Namespaces",
    code: "namespace Math {\n    int add(int a, int b) {\n        return a + b;\n    }\n    const double PI = 3.14159;\n}\n\nint result = Math::add(5, 3);\ndouble circumference = 2 * Math::PI * radius;",
    xpReward: 25
  },
  {
    id: 107,
    question: "What is multiple inheritance in C++?",
    answer: "Multiple inheritance allows a class to inherit from multiple base classes, inheriting features from all.",
    language: "C++",
    difficulty: "advanced",
    category: "Multiple Inheritance",
    code: "class Flyable {\npublic:\n    virtual void fly() = 0;\n};\n\nclass Swimmable {\npublic:\n    virtual void swim() = 0;\n};\n\nclass Duck : public Flyable, public Swimmable {\npublic:\n    void fly() override { cout << \"Duck flying\" << endl; }\n    void swim() override { cout << \"Duck swimming\" << endl; }\n};",
    xpReward: 50
  },
  {
    id: 108,
    question: "What are abstract classes in C++?",
    answer: "Abstract classes contain at least one pure virtual function and cannot be instantiated directly.",
    language: "C++",
    difficulty: "advanced",
    category: "Abstract Classes",
    code: "class Shape {  // Abstract class\npublic:\n    virtual void draw() = 0;  // Pure virtual function\n    virtual double area() = 0;\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override { cout << \"Drawing circle\" << endl; }\n    double area() override { return 3.14 * radius * radius; }\n};",
    xpReward: 50
  },
  {
    id: 109,
    question: "What are friend functions in C++?",
    answer: "Friend functions can access private and protected members of a class, breaking encapsulation when needed.",
    language: "C++",
    difficulty: "intermediate",
    category: "Friend Functions",
    code: "class Box {\nprivate:\n    int width;\n    friend void printWidth(Box& b);  // Friend function declaration\n    \npublic:\n    Box(int w) : width(w) {}\n};\n\nvoid printWidth(Box& b) {\n    cout << \"Width: \" << b.width << endl;  // Can access private member\n}",
    xpReward: 35
  },
  {
    id: 110,
    question: "What is the this pointer in C++?",
    answer: "The this pointer is an implicit parameter that points to the current object instance within member functions.",
    language: "C++",
    difficulty: "intermediate",
    category: "This Pointer",
    code: "class MyClass {\nprivate:\n    int value;\n    \npublic:\n    void setValue(int value) {\n        this->value = value;  // Distinguish between parameter and member\n    }\n    \n    MyClass& getReference() {\n        return *this;  // Return reference to current object\n    }\n};",
    xpReward: 35
  },
  {
    id: 111,
    question: "What are copy constructors in C++?",
    answer: "Copy constructors create new objects as copies of existing objects, handling deep vs shallow copying.",
    language: "C++",
    difficulty: "intermediate",
    category: "Copy Constructor",
    code: "class MyClass {\nprivate:\n    int* data;\n    \npublic:\n    MyClass(int val) : data(new int(val)) {}\n    \n    // Copy constructor for deep copy\n    MyClass(const MyClass& other) {\n        data = new int(*other.data);\n    }\n    \n    ~MyClass() { delete data; }\n};",
    xpReward: 35
  },
  {
    id: 112,
    question: "What are lambda expressions in C++?",
    answer: "Lambda expressions create anonymous functions that can capture variables from their surrounding scope.",
    language: "C++",
    difficulty: "advanced",
    category: "Lambda Expressions",
    code: "auto add = [](int a, int b) -> int {\n    return a + b;\n};\n\nint x = 10;\nauto addX = [x](int y) -> int {\n    return x + y;  // Captures x by value\n};\n\nint result = addX(5); // 15",
    xpReward: 50
  },
  {
    id: 113,
    question: "What is RAII in C++?",
    answer: "RAII (Resource Acquisition Is Initialization) ties resource management to object lifetime, ensuring cleanup.",
    language: "C++",
    difficulty: "advanced",
    category: "RAII",
    code: "class FileManager {\nprivate:\n    FILE* file;\n    \npublic:\n    FileManager(const char* filename) {\n        file = fopen(filename, \"r\");  // Acquire resource\n    }\n    \n    ~FileManager() {\n        if (file) fclose(file);  // Release resource\n    }\n};",
    xpReward: 50
  },
  {
    id: 114,
    question: "What are move semantics in C++11?",
    answer: "Move semantics allow efficient transfer of resources from temporary objects, avoiding unnecessary copying.",
    language: "C++",
    difficulty: "advanced",
    category: "Move Semantics",
    code: "class MyClass {\nprivate:\n    int* data;\n    \npublic:\n    // Move constructor\n    MyClass(MyClass&& other) noexcept {\n        data = other.data;      // Steal the resource\n        other.data = nullptr;   // Leave other in valid state\n    }\n    \n    // Move assignment operator\n    MyClass& operator=(MyClass&& other) noexcept {\n        if (this != &other) {\n            delete data;\n            data = other.data;\n            other.data = nullptr;\n        }\n        return *this;\n    }\n};",
    xpReward: 50
  },
  {
    id: 115,
    question: "What are variadic templates in C++?",
    answer: "Variadic templates allow functions and classes to accept a variable number of template arguments.",
    language: "C++",
    difficulty: "advanced",
    category: "Variadic Templates",
    code: "template<typename... Args>\nvoid print(Args... args) {\n    ((cout << args << \" \"), ...);\n    cout << endl;\n}\n\nprint(1, 2.5, \"hello\", 'c'); // Prints: 1 2.5 hello c\n\ntemplate<typename T, typename... Args>\nT sum(T first, Args... args) {\n    return first + sum(args...);\n}",
    xpReward: 50
  },
  {
    id: 116,
    question: "What is the difference between struct and class in C++?",
    answer: "struct members are public by default, class members are private by default. Otherwise, they're identical.",
    language: "C++",
    difficulty: "beginner",
    category: "Struct vs Class",
    code: "struct Point {  // Members public by default\n    int x, y;\n    Point(int x, int y) : x(x), y(y) {}\n};\n\nclass Rectangle {  // Members private by default\n    int width, height;\npublic:\n    Rectangle(int w, int h) : width(w), height(h) {}\n};",
    xpReward: 25
  },
  {
    id: 117,
    question: "What are auto and decltype keywords in C++11?",
    answer: "auto automatically deduces variable types, decltype deduces the type of an expression.",
    language: "C++",
    difficulty: "intermediate",
    category: "Type Deduction",
    code: "auto x = 42;           // x is int\nauto y = 3.14;         // y is double\nauto z = \"hello\";      // z is const char*\n\nint a = 10;\ndecltype(a) b = 20;    // b is int\ndecltype(a + b) c = 30; // c is int",
    xpReward: 35
  },
  {
    id: 118,
    question: "What are constexpr functions in C++?",
    answer: "constexpr functions can be evaluated at compile time if given constant expressions as arguments.",
    language: "C++",
    difficulty: "advanced",
    category: "Constexpr",
    code: "constexpr int factorial(int n) {\n    return (n <= 1) ? 1 : n * factorial(n - 1);\n}\n\nconstexpr int result = factorial(5); // Computed at compile time\nstatic_assert(result == 120, \"Error in factorial\");",
    xpReward: 50
  },
  {
    id: 119,
    question: "What are range-based for loops in C++11?",
    answer: "Range-based for loops provide a concise way to iterate over containers and arrays.",
    language: "C++",
    difficulty: "beginner",
    category: "Range-based For",
    code: "vector<int> numbers = {1, 2, 3, 4, 5};\n\n// Range-based for loop\nfor (const auto& num : numbers) {\n    cout << num << \" \";\n}\n\n// Traditional for loop equivalent\nfor (size_t i = 0; i < numbers.size(); ++i) {\n    cout << numbers[i] << \" \";\n}",
    xpReward: 25
  },
  {
    id: 120,
    question: "What are the different types of casts in C++?",
    answer: "C++ provides static_cast, dynamic_cast, const_cast, and reinterpret_cast for different casting scenarios.",
    language: "C++",
    difficulty: "advanced",
    category: "Casting",
    code: "// static_cast - compile time type conversion\nfloat f = 3.14;\nint i = static_cast<int>(f);\n\n// dynamic_cast - runtime type checking\nBase* base = new Derived();\nDerived* derived = dynamic_cast<Derived*>(base);\n\n// const_cast - remove/add const\nconst int x = 10;\nint* px = const_cast<int*>(&x);\n\n// reinterpret_cast - reinterpret bit pattern\nint* ptr = reinterpret_cast<int*>(0x12345678);",
    xpReward: 50
  }
];

export const getFlashcardsByLanguage = (language: string): FlashcardData[] => {
  if (language === "All") return flashcardsData;
  return flashcardsData.filter(card => card.language === language);
};

export const getFlashcardsByDifficulty = (difficulty: string): FlashcardData[] => {
  if (difficulty === "All") return flashcardsData;
  return flashcardsData.filter(card => card.difficulty === difficulty);
};