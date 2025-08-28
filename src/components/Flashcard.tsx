import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RotateCcw, ChevronLeft, ChevronRight, Star, Code } from "lucide-react";
import { useState } from "react";

interface FlashcardData {
  id: number;
  question: string;
  answer: string;
  language: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

const flashcardsData: FlashcardData[] = [
  {
    id: 1,
    question: "What is a variable in Python?",
    answer: "A variable is a named location in memory that stores a value. In Python, you create variables by assigning a value: x = 5",
    language: "Python",
    difficulty: "beginner",
    category: "Variables"
  },
  {
    id: 2,
    question: "What is the difference between == and === in JavaScript?",
    answer: "== compares values with type coercion (loose equality), while === compares both value and type without coercion (strict equality). Example: '5' == 5 is true, but '5' === 5 is false.",
    language: "JavaScript",
    difficulty: "intermediate",
    category: "Operators"
  },
  {
    id: 3,
    question: "What is a loop in programming?",
    answer: "A loop is a programming construct that repeats a block of code until a certain condition is met. Common types include for loops, while loops, and do-while loops.",
    language: "General",
    difficulty: "beginner",
    category: "Control Flow"
  }
];

const FlashcardComponent = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completedCards, setCompletedCards] = useState(new Set<number>());

  const currentFlashcard = flashcardsData[currentCard];
  const progress = (completedCards.size / flashcardsData.length) * 100;

  const nextCard = () => {
    if (currentCard < flashcardsData.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
    }
  };

  const markAsKnown = () => {
    setCompletedCards(prev => new Set([...prev, currentFlashcard.id]));
    nextCard();
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-success text-success-foreground';
      case 'intermediate': return 'bg-warning text-warning-foreground';
      case 'advanced': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Practice Flashcards</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Master programming concepts one card at a time
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm font-semibold">{completedCards.size}/{flashcardsData.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Flashcard */}
        <div className="relative mb-8">
          <Card 
            className={`game-card min-h-[400px] cursor-pointer transition-all duration-500 transform-gpu ${
              isFlipped ? 'animate-bounce-in' : ''
            }`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <CardContent className="p-8 h-full flex flex-col">
              {/* Card Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{currentFlashcard.language}</span>
                </div>
                <div className="flex gap-2">
                  <Badge className={getDifficultyColor(currentFlashcard.difficulty)}>
                    {currentFlashcard.difficulty}
                  </Badge>
                  <Badge variant="outline">
                    {currentFlashcard.category}
                  </Badge>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  {!isFlipped ? (
                    <>
                      <h3 className="text-2xl font-bold mb-4 gradient-text">Question</h3>
                      <p className="text-lg text-foreground leading-relaxed">
                        {currentFlashcard.question}
                      </p>
                      <p className="text-sm text-muted-foreground mt-4">
                        Click to reveal answer
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold mb-4 text-success">Answer</h3>
                      <p className="text-lg text-foreground leading-relaxed">
                        {currentFlashcard.answer}
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="flex justify-center">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFlipped(!isFlipped);
                  }}
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Flip Card
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation & Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Button 
            variant="outline" 
            onClick={prevCard}
            disabled={currentCard === 0}
            className="w-full sm:w-auto"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          <div className="flex gap-2">
            <Button 
              variant="success" 
              onClick={markAsKnown}
              disabled={completedCards.has(currentFlashcard.id)}
              className="flex items-center gap-2"
            >
              <Star className="h-4 w-4" />
              {completedCards.has(currentFlashcard.id) ? 'Known' : 'Mark as Known'}
            </Button>
          </div>

          <Button 
            variant="outline" 
            onClick={nextCard}
            disabled={currentCard === flashcardsData.length - 1}
            className="w-full sm:w-auto"
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Card Counter */}
        <div className="text-center mt-6">
          <span className="text-muted-foreground">
            Card {currentCard + 1} of {flashcardsData.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default FlashcardComponent;