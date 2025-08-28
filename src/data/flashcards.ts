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
    id: 1,
    question: "What is a variable in Python?",
    answer: "A variable is a named location in memory that stores a value. In Python, you create variables by assigning a value without declaring the type explicitly.",
    language: "Python",
    difficulty: "beginner",
    category: "Variables",
    code: "name = 'Alice'\nage = 25\nis_student = True"
  },
  {
    id: 2,
    question: "What are Python data types?",
    answer: "Python has several built-in data types: int (integers), float (decimals), str (strings), bool (True/False), list, tuple, dict, and set.",
    language: "Python",
    difficulty: "beginner",
    category: "Data Types",
    code: "number = 42        # int\nprice = 19.99     # float\nname = 'Python'   # str\nactive = True     # bool"
  },
  {
    id: 3,
    question: "How do you create a function in Python?",
    answer: "Use the 'def' keyword followed by the function name and parameters in parentheses. The function body is indented.",
    language: "Python",
    difficulty: "beginner",
    category: "Functions",
    code: "def greet(name):\n    return f'Hello, {name}!'\n\n# Call the function\nmessage = greet('Alice')"
  },
  {
    id: 4,
    question: "What is a Python list comprehension?",
    answer: "List comprehension is a concise way to create lists. It consists of brackets containing an expression followed by a for clause.",
    language: "Python",
    difficulty: "intermediate",
    category: "Lists",
    code: "# Traditional way\nsquares = []\nfor x in range(10):\n    squares.append(x**2)\n\n# List comprehension\nsquares = [x**2 for x in range(10)]"
  },
  {
    id: 5,
    question: "What is the difference between a list and tuple in Python?",
    answer: "Lists are mutable (can be changed) and use square brackets. Tuples are immutable (cannot be changed) and use parentheses.",
    language: "Python",
    difficulty: "intermediate",
    category: "Data Structures",
    code: "my_list = [1, 2, 3]    # Mutable\nmy_list[0] = 10        # Works\n\nmy_tuple = (1, 2, 3)   # Immutable\n# my_tuple[0] = 10     # Error!"
  },
  {
    id: 6,
    question: "What is a Python decorator?",
    answer: "A decorator is a function that takes another function and extends its behavior without explicitly modifying it. Uses @ symbol.",
    language: "Python",
    difficulty: "advanced",
    category: "Decorators",
    code: "def my_decorator(func):\n    def wrapper():\n        print('Before function')\n        func()\n        print('After function')\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print('Hello!')"
  },

  // JavaScript Flashcards
  {
    id: 7,
    question: "What is the difference between let, const, and var in JavaScript?",
    answer: "var has function scope and can be redeclared. let has block scope and can be reassigned. const has block scope and cannot be reassigned.",
    language: "JavaScript",
    difficulty: "beginner",
    category: "Variables",
    code: "var name = 'John';     // Function scoped\nlet age = 25;          // Block scoped\nconst PI = 3.14159;    // Block scoped, immutable"
  },
  {
    id: 8,
    question: "What is an arrow function in JavaScript?",
    answer: "Arrow functions are a shorter way to write functions using the => syntax. They don't have their own 'this' binding.",
    language: "JavaScript",
    difficulty: "beginner",
    category: "Functions",
    code: "// Traditional function\nfunction add(a, b) {\n    return a + b;\n}\n\n// Arrow function\nconst add = (a, b) => a + b;"
  },
  {
    id: 9,
    question: "What is array destructuring in JavaScript?",
    answer: "Destructuring allows you to extract values from arrays or objects into distinct variables using a syntax that mirrors array/object literals.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "Arrays",
    code: "const numbers = [1, 2, 3, 4, 5];\n\n// Destructuring\nconst [first, second, ...rest] = numbers;\n// first = 1, second = 2, rest = [3, 4, 5]"
  },
  {
    id: 10,
    question: "What is a Promise in JavaScript?",
    answer: "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, or rejected.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "Async Programming",
    code: "const fetchData = () => {\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            resolve('Data fetched!');\n        }, 1000);\n    });\n};\n\nfetchData().then(data => console.log(data));"
  },
  {
    id: 11,
    question: "What is async/await in JavaScript?",
    answer: "async/await is syntactic sugar for Promises. 'async' makes a function return a Promise, 'await' pauses execution until Promise resolves.",
    language: "JavaScript",
    difficulty: "advanced",
    category: "Async Programming",
    code: "async function fetchUserData(id) {\n    try {\n        const response = await fetch(`/api/users/${id}`);\n        const data = await response.json();\n        return data;\n    } catch (error) {\n        console.error('Error:', error);\n    }\n}"
  },
  {
    id: 12,
    question: "What is closure in JavaScript?",
    answer: "A closure is a function that has access to variables from an outer scope even after the outer function has finished executing.",
    language: "JavaScript",
    difficulty: "advanced",
    category: "Advanced Concepts",
    code: "function outerFunction(x) {\n    return function innerFunction(y) {\n        return x + y;\n    };\n}\n\nconst addFive = outerFunction(5);\nconsole.log(addFive(3)); // 8"
  },

  // Java Flashcards
  {
    id: 13,
    question: "What is a class in Java?",
    answer: "A class is a blueprint or template for creating objects. It defines the properties (fields) and behaviors (methods) that objects will have.",
    language: "Java",
    difficulty: "beginner",
    category: "Classes",
    code: "public class Car {\n    private String brand;\n    private int year;\n    \n    public Car(String brand, int year) {\n        this.brand = brand;\n        this.year = year;\n    }\n    \n    public void start() {\n        System.out.println(\"Car is starting\");\n    }\n}"
  },
  {
    id: 14,
    question: "What is method overloading in Java?",
    answer: "Method overloading allows a class to have multiple methods with the same name but different parameters (different type, number, or order).",
    language: "Java",
    difficulty: "intermediate",
    category: "Methods",
    code: "public class Calculator {\n    public int add(int a, int b) {\n        return a + b;\n    }\n    \n    public double add(double a, double b) {\n        return a + b;\n    }\n    \n    public int add(int a, int b, int c) {\n        return a + b + c;\n    }\n}"
  },
  {
    id: 15,
    question: "What is inheritance in Java?",
    answer: "Inheritance allows a class (subclass) to inherit properties and methods from another class (superclass) using the 'extends' keyword.",
    language: "Java",
    difficulty: "intermediate",
    category: "OOP",
    code: "public class Animal {\n    protected String name;\n    \n    public void eat() {\n        System.out.println(name + \" is eating\");\n    }\n}\n\npublic class Dog extends Animal {\n    public void bark() {\n        System.out.println(name + \" is barking\");\n    }\n}"
  },
  {
    id: 16,
    question: "What is an interface in Java?",
    answer: "An interface is a contract that defines what methods a class must implement. It contains abstract methods and constants.",
    language: "Java",
    difficulty: "advanced",
    category: "Interfaces",
    code: "public interface Drawable {\n    void draw();\n    default void print() {\n        System.out.println(\"Printing...\");\n    }\n}\n\npublic class Circle implements Drawable {\n    public void draw() {\n        System.out.println(\"Drawing circle\");\n    }\n}"
  },
  {
    id: 17,
    question: "What is exception handling in Java?",
    answer: "Exception handling uses try-catch blocks to handle runtime errors gracefully. 'try' contains risky code, 'catch' handles exceptions.",
    language: "Java",
    difficulty: "intermediate",
    category: "Exception Handling",
    code: "try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(\"Cannot divide by zero!\");\n} finally {\n    System.out.println(\"This always executes\");\n}"
  },

  // C++ Flashcards
  {
    id: 18,
    question: "What is a pointer in C++?",
    answer: "A pointer is a variable that stores the memory address of another variable. Use * to declare and dereference, & to get address.",
    language: "C++",
    difficulty: "intermediate",
    category: "Pointers",
    code: "int x = 42;\nint* ptr = &x;    // ptr stores address of x\ncout << *ptr;     // prints 42 (dereference)\ncout << ptr;      // prints address of x"
  },
  {
    id: 19,
    question: "What is the difference between new and malloc in C++?",
    answer: "new is a C++ operator that allocates memory and calls constructors. malloc is a C function that only allocates memory without calling constructors.",
    language: "C++",
    difficulty: "advanced",
    category: "Memory Management",
    code: "// Using new (C++)\nint* arr1 = new int[5];\ndelete[] arr1;\n\n// Using malloc (C style)\nint* arr2 = (int*)malloc(5 * sizeof(int));\nfree(arr2);"
  },
  {
    id: 20,
    question: "What is a reference in C++?",
    answer: "A reference is an alias for an existing variable. Once initialized, it cannot be changed to refer to another variable. Use & in declaration.",
    language: "C++",
    difficulty: "intermediate",
    category: "References",
    code: "int x = 10;\nint& ref = x;     // ref is a reference to x\nref = 20;         // changes x to 20\ncout << x;        // prints 20"
  },
  {
    id: 21,
    question: "What is function overloading in C++?",
    answer: "Function overloading allows multiple functions with the same name but different parameters. The compiler chooses the correct one based on arguments.",
    language: "C++",
    difficulty: "intermediate",
    category: "Functions",
    code: "int add(int a, int b) {\n    return a + b;\n}\n\ndouble add(double a, double b) {\n    return a + b;\n}\n\n// Usage\nadd(5, 3);        // calls int version\nadd(5.5, 3.2);    // calls double version"
  },
  {
    id: 22,
    question: "What is a class constructor in C++?",
    answer: "A constructor is a special method called when an object is created. It has the same name as the class and no return type.",
    language: "C++",
    difficulty: "beginner",
    category: "Classes",
    code: "class Rectangle {\nprivate:\n    int width, height;\npublic:\n    // Constructor\n    Rectangle(int w, int h) {\n        width = w;\n        height = h;\n    }\n    \n    int area() {\n        return width * height;\n    }\n};"
  },
  {
    id: 23,
    question: "What is virtual function in C++?",
    answer: "A virtual function enables runtime polymorphism. It allows derived classes to override base class methods, determined at runtime.",
    language: "C++",
    difficulty: "advanced",
    category: "Polymorphism",
    code: "class Animal {\npublic:\n    virtual void speak() {\n        cout << \"Animal speaks\";\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    void speak() override {\n        cout << \"Woof!\";\n    }\n};"
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