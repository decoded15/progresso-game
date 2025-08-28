export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index of correct answer
  explanation: string;
  language: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  code?: string;
  xpReward: number;
}

export const quizzesData: QuizQuestion[] = [
  // Python Quizzes
  {
    id: 1,
    question: "Which of the following is the correct way to define a function in Python?",
    options: [
      "function myFunc():",
      "def myFunc():",
      "define myFunc():",
      "func myFunc():"
    ],
    correctAnswer: 1,
    explanation: "In Python, functions are defined using the 'def' keyword followed by the function name and parameters.",
    language: "Python",
    difficulty: "beginner",
    category: "Functions",
    code: "def my_function():\n    print('Hello, World!')",
    xpReward: 25
  },
  {
    id: 2,
    question: "What will be the output of the following Python code?",
    options: ["10", "5", "Error", "None"],
    correctAnswer: 0,
    explanation: "The ** operator in Python is used for exponentiation. 2**3 + 2 = 8 + 2 = 10",
    language: "Python",
    difficulty: "beginner",
    category: "Operators",
    code: "result = 2**3 + 2\nprint(result)",
    xpReward: 25
  },
  {
    id: 3,
    question: "Which method is used to add an element to the end of a list in Python?",
    options: ["add()", "append()", "insert()", "push()"],
    correctAnswer: 1,
    explanation: "The append() method adds an element to the end of a list. add() and push() don't exist for lists, insert() adds at a specific position.",
    language: "Python",
    difficulty: "beginner",
    category: "Lists",
    code: "my_list = [1, 2, 3]\nmy_list.append(4)\nprint(my_list)  # [1, 2, 3, 4]",
    xpReward: 25
  },
  {
    id: 4,
    question: "What is the output of this list comprehension?",
    options: ["[0, 1, 4, 9, 16]", "[1, 2, 3, 4, 5]", "[0, 2, 4, 6, 8]", "[1, 4, 9, 16, 25]"],
    correctAnswer: 0,
    explanation: "List comprehension [x**2 for x in range(5)] creates squares of numbers 0 to 4: 0², 1², 2², 3², 4² = [0, 1, 4, 9, 16]",
    language: "Python",
    difficulty: "intermediate",
    category: "Lists",
    code: "squares = [x**2 for x in range(5)]\nprint(squares)",
    xpReward: 50
  },
  {
    id: 5,
    question: "What is the purpose of the 'self' parameter in Python class methods?",
    options: [
      "It's a reserved keyword",
      "It refers to the current instance of the class",
      "It's used for inheritance",
      "It's optional and can be omitted"
    ],
    correctAnswer: 1,
    explanation: "'self' refers to the current instance of the class, allowing access to the instance's attributes and methods.",
    language: "Python",
    difficulty: "intermediate",
    category: "Classes",
    code: "class MyClass:\n    def __init__(self, name):\n        self.name = name\n    \n    def greet(self):\n        return f'Hello, {self.name}!'",
    xpReward: 50
  },

  // JavaScript Quizzes
  {
    id: 6,
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: [
      "No difference",
      "== checks type, === doesn't",
      "== allows type coercion, === doesn't",
      "=== is for numbers only"
    ],
    correctAnswer: 2,
    explanation: "== performs type coercion (loose equality), while === checks both value and type without coercion (strict equality).",
    language: "JavaScript",
    difficulty: "beginner",
    category: "Operators",
    code: "console.log('5' == 5);   // true\nconsole.log('5' === 5);  // false",
    xpReward: 25
  },
  {
    id: 7,
    question: "Which method is used to add elements to the end of an array in JavaScript?",
    options: ["append()", "push()", "add()", "insert()"],
    correctAnswer: 1,
    explanation: "The push() method adds one or more elements to the end of an array and returns the new length.",
    language: "JavaScript",
    difficulty: "beginner",
    category: "Arrays",
    code: "const arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr); // [1, 2, 3, 4]",
    xpReward: 25
  },
  {
    id: 8,
    question: "What will this arrow function return?",
    options: ["undefined", "42", "Error", "{ value: 42 }"],
    correctAnswer: 1,
    explanation: "Arrow functions with single expressions automatically return the result. No need for explicit return statement.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "Functions",
    code: "const getValue = () => 42;\nconsole.log(getValue());",
    xpReward: 50
  },
  {
    id: 9,
    question: "What does this destructuring assignment do?",
    options: [
      "Creates an error",
      "a=1, b=2, c=[3,4,5]",
      "a=[1,2,3,4,5], b=undefined",
      "a=1, b=2, c=undefined"
    ],
    correctAnswer: 1,
    explanation: "Array destructuring assigns the first two elements to a and b, and the rest operator (...) collects remaining elements into array c.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "Destructuring",
    code: "const [a, b, ...c] = [1, 2, 3, 4, 5];\nconsole.log(a, b, c);",
    xpReward: 50
  },
  {
    id: 10,
    question: "What is the purpose of async/await in JavaScript?",
    options: [
      "To make functions run faster",
      "To handle asynchronous operations more readable",
      "To create multiple threads",
      "To handle errors only"
    ],
    correctAnswer: 1,
    explanation: "async/await provides a more readable way to work with Promises, making asynchronous code look like synchronous code.",
    language: "JavaScript",
    difficulty: "advanced",
    category: "Async Programming",
    code: "async function fetchData() {\n    const response = await fetch('/api/data');\n    const data = await response.json();\n    return data;\n}",
    xpReward: 75
  },

  // Java Quizzes
  {
    id: 11,
    question: "Which access modifier makes a member accessible only within the same class in Java?",
    options: ["public", "protected", "private", "default"],
    correctAnswer: 2,
    explanation: "The 'private' access modifier restricts access to the member only within the same class where it's declared.",
    language: "Java",
    difficulty: "beginner",
    category: "Access Modifiers",
    code: "public class MyClass {\n    private int value;  // Only accessible within MyClass\n    public void setValue(int v) {\n        this.value = v;\n    }\n}",
    xpReward: 25
  },
  {
    id: 12,
    question: "What is the correct way to create an array in Java?",
    options: [
      "int[] arr = new int[5];",
      "int arr[] = new int[5];",
      "int[] arr = {1, 2, 3, 4, 5};",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "Java supports multiple ways to declare and initialize arrays. All the given options are valid syntax.",
    language: "Java",
    difficulty: "beginner",
    category: "Arrays",
    code: "int[] arr1 = new int[5];\nint arr2[] = new int[5];\nint[] arr3 = {1, 2, 3, 4, 5};",
    xpReward: 25
  },
  {
    id: 13,
    question: "What is method overriding in Java?",
    options: [
      "Having multiple methods with same name in one class",
      "Changing the implementation of inherited method in subclass",
      "Deleting a method from parent class",
      "Creating static methods"
    ],
    correctAnswer: 1,
    explanation: "Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its parent class.",
    language: "Java",
    difficulty: "intermediate",
    category: "Inheritance",
    code: "class Animal {\n    public void sound() {\n        System.out.println(\"Animal makes sound\");\n    }\n}\n\nclass Dog extends Animal {\n    @Override\n    public void sound() {\n        System.out.println(\"Dog barks\");\n    }\n}",
    xpReward: 50
  },
  {
    id: 14,
    question: "What will happen if you don't handle a checked exception in Java?",
    options: [
      "Program runs normally",
      "Runtime error occurs",
      "Compilation error occurs",
      "Warning message appears"
    ],
    correctAnswer: 2,
    explanation: "Checked exceptions must be handled at compile time. If not handled with try-catch or declared with throws, compilation will fail.",
    language: "Java",
    difficulty: "intermediate",
    category: "Exception Handling",
    code: "// This won't compile without try-catch or throws\npublic void readFile() {\n    FileReader file = new FileReader(\"file.txt\");\n}",
    xpReward: 50
  },
  {
    id: 15,
    question: "What is the purpose of the 'final' keyword when applied to a class in Java?",
    options: [
      "The class cannot be instantiated",
      "The class cannot be extended/inherited",
      "The class becomes abstract",
      "The class can only have static methods"
    ],
    correctAnswer: 1,
    explanation: "When a class is declared as 'final', it cannot be extended or inherited by other classes. String class is a famous example.",
    language: "Java",
    difficulty: "advanced",
    category: "Keywords",
    code: "final class FinalClass {\n    // This class cannot be extended\n}\n\n// class SubClass extends FinalClass { } // Error!",
    xpReward: 75
  },

  // C++ Quizzes
  {
    id: 16,
    question: "What is the correct way to declare a pointer in C++?",
    options: [
      "int ptr;",
      "int* ptr;",
      "int &ptr;",
      "pointer int ptr;"
    ],
    correctAnswer: 1,
    explanation: "Pointers are declared using the * operator. int* ptr declares a pointer to an integer.",
    language: "C++",
    difficulty: "beginner",
    category: "Pointers",
    code: "int x = 42;\nint* ptr = &x;  // ptr points to x\ncout << *ptr;   // prints 42",
    xpReward: 25
  },
  {
    id: 17,
    question: "What is the difference between 'new' and 'malloc' in C++?",
    options: [
      "new is faster than malloc",
      "malloc calls constructors, new doesn't",
      "new calls constructors, malloc doesn't",
      "No difference"
    ],
    correctAnswer: 2,
    explanation: "'new' is a C++ operator that allocates memory and calls constructors. 'malloc' only allocates raw memory without calling constructors.",
    language: "C++",
    difficulty: "intermediate",
    category: "Memory Management",
    code: "// Using new\nint* ptr1 = new int(42);\ndelete ptr1;\n\n// Using malloc\nint* ptr2 = (int*)malloc(sizeof(int));\n*ptr2 = 42;\nfree(ptr2);",
    xpReward: 50
  },
  {
    id: 18,
    question: "What is a reference in C++?",
    options: [
      "A pointer that can be changed",
      "An alias for an existing variable",
      "A copy of a variable",
      "A function parameter only"
    ],
    correctAnswer: 1,
    explanation: "A reference is an alias (another name) for an existing variable. Once initialized, it cannot refer to another variable.",
    language: "C++",
    difficulty: "intermediate",
    category: "References",
    code: "int x = 10;\nint& ref = x;    // ref is an alias for x\nref = 20;        // changes x to 20\ncout << x;       // prints 20",
    xpReward: 50
  },
  {
    id: 19,
    question: "What is the output of this C++ code?",
    options: ["5", "10", "15", "Compilation error"],
    correctAnswer: 2,
    explanation: "The function takes a reference parameter, so changes to 'a' inside the function affect the original variable 'x'.",
    language: "C++",
    difficulty: "intermediate",
    category: "References",
    code: "void func(int& a) {\n    a = a + 10;\n}\n\nint main() {\n    int x = 5;\n    func(x);\n    cout << x;\n    return 0;\n}",
    xpReward: 50
  },
  {
    id: 20,
    question: "What is polymorphism in C++?",
    options: [
      "Having multiple constructors",
      "Ability of objects to take multiple forms",
      "Function overloading only",
      "Multiple inheritance"
    ],
    correctAnswer: 1,
    explanation: "Polymorphism allows objects of different classes to be treated as objects of a common base class, enabling runtime method selection.",
    language: "C++",
    difficulty: "advanced",
    category: "OOP",
    code: "class Shape {\npublic:\n    virtual void draw() = 0;  // Pure virtual\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override {\n        cout << \"Drawing Circle\";\n    }\n};",
    xpReward: 75
  }
];

export const getQuizzesByLanguage = (language: string) => {
  return quizzesData.filter(quiz => quiz.language === language);
};

export const getQuizzesByDifficulty = (difficulty: 'beginner' | 'intermediate' | 'advanced') => {
  return quizzesData.filter(quiz => quiz.difficulty === difficulty);
};

export const getRandomQuizzes = (count: number, language?: string) => {
  let quizzes = language ? getQuizzesByLanguage(language) : quizzesData;
  return quizzes.sort(() => Math.random() - 0.5).slice(0, count);
};