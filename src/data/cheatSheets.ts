export interface CheatSheetSection {
  title: string;
  items: CheatSheetItem[];
}

export interface CheatSheetItem {
  concept: string;
  syntax: string;
  example?: string;
  description: string;
}

export interface CheatSheet {
  language: string;
  sections: CheatSheetSection[];
}

export const cheatSheetsData: CheatSheet[] = [
  {
    language: "Python",
    sections: [
      {
        title: "Variables & Data Types",
        items: [
          {
            concept: "Variable Declaration",
            syntax: "variable_name = value",
            example: "name = 'Alice'\nage = 25\nheight = 5.8",
            description: "Python uses dynamic typing - no need to declare types explicitly"
          },
          {
            concept: "String Operations",
            syntax: "string_methods",
            example: "text = 'Hello World'\nprint(text.upper())  # HELLO WORLD\nprint(text.split())  # ['Hello', 'World']",
            description: "Common string methods for manipulation and formatting"
          },
          {
            concept: "List Operations",
            syntax: "list_methods",
            example: "numbers = [1, 2, 3]\nnumbers.append(4)    # [1, 2, 3, 4]\nnumbers.remove(2)    # [1, 3, 4]",
            description: "Lists are mutable sequences that can store any data type"
          }
        ]
      },
      {
        title: "Control Flow",
        items: [
          {
            concept: "If Statement",
            syntax: "if condition:\n    # code",
            example: "age = 18\nif age >= 18:\n    print('Adult')\nelse:\n    print('Minor')",
            description: "Conditional execution based on boolean expressions"
          },
          {
            concept: "For Loop",
            syntax: "for item in iterable:\n    # code",
            example: "for i in range(5):\n    print(i)  # 0, 1, 2, 3, 4\n\nfor char in 'hello':\n    print(char)",
            description: "Iterate over sequences like lists, strings, or ranges"
          },
          {
            concept: "While Loop",
            syntax: "while condition:\n    # code",
            example: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1",
            description: "Repeat code block while condition remains true"
          }
        ]
      },
      {
        title: "Functions & Classes",
        items: [
          {
            concept: "Function Definition",
            syntax: "def function_name(parameters):\n    return value",
            example: "def greet(name, greeting='Hello'):\n    return f'{greeting}, {name}!'\n\nprint(greet('Alice'))  # Hello, Alice!",
            description: "Functions encapsulate reusable code with optional parameters"
          },
          {
            concept: "Class Definition",
            syntax: "class ClassName:\n    def __init__(self):\n        pass",
            example: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def introduce(self):\n        return f'Hi, I\\'m {self.name}'",
            description: "Classes define blueprints for creating objects with attributes and methods"
          }
        ]
      }
    ]
  },
  {
    language: "JavaScript",
    sections: [
      {
        title: "Variables & Data Types",
        items: [
          {
            concept: "Variable Declaration",
            syntax: "let/const/var name = value",
            example: "let name = 'John';        // Can be reassigned\nconst PI = 3.14159;      // Cannot be reassigned\nvar oldStyle = 'avoid';   // Function scoped",
            description: "Use let for variables, const for constants, avoid var in modern JS"
          },
          {
            concept: "Array Methods",
            syntax: "array.method()",
            example: "const arr = [1, 2, 3];\narr.push(4);           // [1, 2, 3, 4]\narr.map(x => x * 2);   // [2, 4, 6, 8]",
            description: "Arrays have powerful built-in methods for manipulation"
          },
          {
            concept: "Object Destructuring",
            syntax: "const {prop} = object",
            example: "const person = {name: 'Alice', age: 25};\nconst {name, age} = person;\nconsole.log(name); // Alice",
            description: "Extract object properties into variables efficiently"
          }
        ]
      },
      {
        title: "Functions",
        items: [
          {
            concept: "Arrow Functions",
            syntax: "const func = (params) => expression",
            example: "const add = (a, b) => a + b;\nconst square = x => x * x;\nconst greet = () => 'Hello!'",
            description: "Concise function syntax with lexical this binding"
          },
          {
            concept: "Higher-Order Functions",
            syntax: "array.method(callback)",
            example: "const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(x => x * 2);\nconst evens = numbers.filter(x => x % 2 === 0);",
            description: "Functions that take other functions as arguments"
          }
        ]
      },
      {
        title: "Async Programming",
        items: [
          {
            concept: "Promises",
            syntax: "new Promise((resolve, reject) => {})",
            example: "const fetchData = () => {\n  return new Promise(resolve => {\n    setTimeout(() => resolve('Data'), 1000);\n  });\n};",
            description: "Handle asynchronous operations with promises"
          },
          {
            concept: "Async/Await",
            syntax: "async function() { await promise }",
            example: "async function getData() {\n  try {\n    const result = await fetchData();\n    return result;\n  } catch (error) {\n    console.error(error);\n  }\n}",
            description: "Cleaner syntax for working with promises"
          }
        ]
      }
    ]
  },
  {
    language: "Java",
    sections: [
      {
        title: "Basic Syntax",
        items: [
          {
            concept: "Class Structure",
            syntax: "public class ClassName {}",
            example: "public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
            description: "Every Java program starts with a class definition"
          },
          {
            concept: "Variable Declaration",
            syntax: "type variableName = value;",
            example: "int age = 25;\nString name = \"John\";\nboolean isActive = true;\ndouble price = 19.99;",
            description: "Java is statically typed - must declare variable types"
          },
          {
            concept: "Array Declaration",
            syntax: "type[] arrayName = new type[size];",
            example: "int[] numbers = new int[5];\nString[] names = {\"Alice\", \"Bob\", \"Charlie\"};\nint[] scores = new int[]{90, 85, 92};",
            description: "Arrays store multiple values of the same type"
          }
        ]
      },
      {
        title: "Object-Oriented Programming",
        items: [
          {
            concept: "Class & Constructor",
            syntax: "public class Name { public Name() {} }",
            example: "public class Person {\n    private String name;\n    \n    public Person(String name) {\n        this.name = name;\n    }\n}",
            description: "Constructors initialize objects when created"
          },
          {
            concept: "Inheritance",
            syntax: "class Child extends Parent {}",
            example: "public class Student extends Person {\n    private int studentId;\n    \n    public Student(String name, int id) {\n        super(name);\n        this.studentId = id;\n    }\n}",
            description: "Child classes inherit properties and methods from parent classes"
          },
          {
            concept: "Interface Implementation",
            syntax: "class Name implements Interface {}",
            example: "interface Drawable {\n    void draw();\n}\n\nclass Circle implements Drawable {\n    public void draw() {\n        System.out.println(\"Drawing circle\");\n    }\n}",
            description: "Interfaces define contracts that classes must implement"
          }
        ]
      },
      {
        title: "Exception Handling",
        items: [
          {
            concept: "Try-Catch Block",
            syntax: "try { } catch (Exception e) { }",
            example: "try {\n    int result = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(\"Cannot divide by zero!\");\n} finally {\n    System.out.println(\"Always executes\");\n}",
            description: "Handle runtime errors gracefully with try-catch blocks"
          }
        ]
      }
    ]
  },
  {
    language: "C++",
    sections: [
      {
        title: "Basic Syntax",
        items: [
          {
            concept: "Program Structure",
            syntax: "#include <iostream>\nusing namespace std;",
            example: "#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello, World!\" << endl;\n    return 0;\n}",
            description: "Basic C++ program structure with main function"
          },
          {
            concept: "Variable Declaration",
            syntax: "type variableName = value;",
            example: "int age = 25;\nfloat price = 19.99f;\nchar grade = 'A';\nbool isActive = true;",
            description: "C++ requires explicit type declaration for variables"
          },
          {
            concept: "Arrays",
            syntax: "type arrayName[size];",
            example: "int numbers[5] = {1, 2, 3, 4, 5};\nstring names[] = {\"Alice\", \"Bob\", \"Charlie\"};\nint scores[10]; // Uninitialized",
            description: "Fixed-size arrays store elements of the same type"
          }
        ]
      },
      {
        title: "Pointers & References",
        items: [
          {
            concept: "Pointer Declaration",
            syntax: "type* pointerName;",
            example: "int x = 42;\nint* ptr = &x;       // ptr stores address of x\ncout << *ptr;        // prints 42 (dereference)\ncout << ptr;         // prints address",
            description: "Pointers store memory addresses of variables"
          },
          {
            concept: "Reference Declaration",
            syntax: "type& refName = variable;",
            example: "int x = 10;\nint& ref = x;        // ref is alias for x\nref = 20;            // changes x to 20\ncout << x;           // prints 20",
            description: "References are aliases for existing variables"
          }
        ]
      },
      {
        title: "Classes & Objects",
        items: [
          {
            concept: "Class Definition",
            syntax: "class ClassName { private: public: };",
            example: "class Rectangle {\nprivate:\n    int width, height;\npublic:\n    Rectangle(int w, int h) : width(w), height(h) {}\n    int area() { return width * height; }\n};",
            description: "Classes encapsulate data and functions together"
          },
          {
            concept: "Inheritance",
            syntax: "class Derived : public Base {}",
            example: "class Shape {\nprotected:\n    int x, y;\npublic:\n    virtual void draw() = 0;\n};\n\nclass Circle : public Shape {\npublic:\n    void draw() override {\n        cout << \"Drawing circle\";\n    }\n};",
            description: "Derived classes inherit from base classes"
          }
        ]
      }
    ]
  }
];

export const getCheatSheetByLanguage = (language: string) => {
  return cheatSheetsData.find(sheet => sheet.language === language);
};