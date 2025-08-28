import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RotateCcw, ChevronLeft, ChevronRight, Star, Code, BookOpen, Filter } from "lucide-react";
import { useState } from "react";
import { flashcardsData, getFlashcardsByLanguage, type FlashcardData } from "@/data/flashcards";

const FlashcardComponent = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completedCards, setCompletedCards] = useState(new Set<number>());
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");

  const languages = ["All", "Python", "JavaScript", "Java", "C++"];
  const difficulties = ["All", "beginner", "intermediate", "advanced"];

  // Filter flashcards based on selections
  const getFilteredFlashcards = (): FlashcardData[] => {
    let filtered = flashcardsData;
    
    if (selectedLanguage !== "All") {
      filtered = getFlashcardsByLanguage(selectedLanguage);
    }
    
    if (selectedDifficulty !== "All") {
      filtered = filtered.filter(card => card.difficulty === selectedDifficulty);
    }
    
    return filtered;
  };

  const filteredFlashcards = getFilteredFlashcards();
  const currentFlashcard = filteredFlashcards[currentCard] || flashcardsData[0];
  const progress = (completedCards.size / filteredFlashcards.length) * 100;

  const nextCard = () => {
    if (currentCard < filteredFlashcards.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    } else if (filteredFlashcards.length > 0) {
      // Loop back to first card
      setCurrentCard(0);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
    } else if (filteredFlashcards.length > 0) {
      // Go to last card
      setCurrentCard(filteredFlashcards.length - 1);
      setIsFlipped(false);
    }
  };

  const markAsKnown = () => {
    setCompletedCards(prev => new Set([...prev, currentFlashcard.id]));
    nextCard();
  };

  // Reset when filters change
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setCurrentCard(0);
    setIsFlipped(false);
  };

  const handleDifficultyChange = (difficulty: string) => {
    setSelectedDifficulty(difficulty);
    setCurrentCard(0);
    setIsFlipped(false);
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
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Language:</span>
              <div className="flex gap-1">
                {languages.map((lang) => (
                  <Button
                    key={lang}
                    variant={selectedLanguage === lang ? "gaming" : "outline"}
                    size="sm"
                    onClick={() => handleLanguageChange(lang)}
                  >
                    {lang}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Difficulty:</span>
              <div className="flex gap-1">
                {difficulties.map((diff) => (
                  <Button
                    key={diff}
                    variant={selectedDifficulty === diff ? "gaming" : "outline"}
                    size="sm"
                    onClick={() => handleDifficultyChange(diff)}
                    className="capitalize"
                  >
                    {diff}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Progress</span>
              <span className="text-sm font-semibold">{completedCards.size}/{filteredFlashcards.length}</span>
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
                      <p className="text-lg text-foreground leading-relaxed mb-4">
                        {currentFlashcard.answer}
                      </p>
                      {currentFlashcard.code && (
                        <pre className="bg-muted/50 p-4 rounded-lg text-sm font-mono text-left max-w-md mx-auto overflow-x-auto">
                          <code>{currentFlashcard.code}</code>
                        </pre>
                      )}
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
            disabled={filteredFlashcards.length === 0}
            className="w-full sm:w-auto"
          >
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Card Counter */}
        <div className="text-center mt-6">
          <span className="text-muted-foreground">
            Card {currentCard + 1} of {filteredFlashcards.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default FlashcardComponent;