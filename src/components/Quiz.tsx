import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  XCircle, 
  ChevronRight, 
  Trophy, 
  Target, 
  Code,
  Filter,
  RotateCcw,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";
import { quizzesData, getQuizzesByLanguage, getRandomQuizzes, type QuizQuestion } from "@/data/quizzes";

const Quiz = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set<number>());
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All");
  const [quizType, setQuizType] = useState<string>("random");

  const languages = ["All", "Python", "JavaScript", "Java", "C++"];
  const quizTypes = ["random", "beginner", "intermediate", "advanced"];

  // Get quiz questions based on filters
  const getQuizQuestions = (): QuizQuestion[] => {
    if (quizType === "random") {
      return getRandomQuizzes(10, selectedLanguage === "All" ? undefined : selectedLanguage);
    } else {
      let filtered = selectedLanguage === "All" ? quizzesData : getQuizzesByLanguage(selectedLanguage);
      return filtered.filter(quiz => quiz.difficulty === quizType).slice(0, 10);
    }
  };

  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>(getQuizQuestions());
  const currentQuestion = quizQuestions[currentQuiz];
  const progress = ((currentQuiz + 1) / quizQuestions.length) * 100;

  // Reset quiz when filters change
  useEffect(() => {
    const newQuestions = getQuizQuestions();
    setQuizQuestions(newQuestions);
    setCurrentQuiz(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setTotalXP(0);
    setAnsweredQuestions(new Set());
  }, [selectedLanguage, quizType]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowResult(true);
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      setTotalXP(prev => prev + currentQuestion.xpReward);
    }
    
    setAnsweredQuestions(prev => new Set([...prev, currentQuestion.id]));
  };

  const handleNextQuestion = () => {
    if (currentQuiz < quizQuestions.length - 1) {
      setCurrentQuiz(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleRestartQuiz = () => {
    const newQuestions = getQuizQuestions();
    setQuizQuestions(newQuestions);
    setCurrentQuiz(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setTotalXP(0);
    setAnsweredQuestions(new Set());
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-success bg-success/20';
      case 'intermediate': return 'text-warning bg-warning/20';
      case 'advanced': return 'text-destructive bg-destructive/20';
      default: return 'text-muted-foreground bg-muted/20';
    }
  };

  const getOptionColor = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/50';
    }
    
    if (index === currentQuestion.correctAnswer) {
      return 'border-success bg-success/20 text-success-foreground';
    } else if (index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer) {
      return 'border-destructive bg-destructive/20 text-destructive-foreground';
    }
    
    return 'border-border opacity-60';
  };

  const isQuizComplete = currentQuiz >= quizQuestions.length - 1 && showResult;

  if (!currentQuestion) {
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">No Quiz Questions Available</h2>
          <p className="text-muted-foreground mb-6">
            Please try different filters or check back later for more content.
          </p>
          <Button variant="hero" onClick={handleRestartQuiz}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Programming Quiz</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Test your programming knowledge and earn XP!
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
                    onClick={() => setSelectedLanguage(lang)}
                  >
                    {lang}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Type:</span>
              <div className="flex gap-1">
                {quizTypes.map((type) => (
                  <Button
                    key={type}
                    variant={quizType === type ? "gaming" : "outline"}
                    size="sm"
                    onClick={() => setQuizType(type)}
                    className="capitalize"
                  >
                    {type}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Progress & Score */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{currentQuiz + 1}</div>
              <div className="text-sm text-muted-foreground">of {quizQuestions.length}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">{score}</div>
              <div className="text-sm text-muted-foreground">Correct</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold xp-text">{totalXP} XP</div>
              <div className="text-sm text-muted-foreground">Earned</div>
            </div>
          </div>

          <Progress value={progress} className="h-3 max-w-md mx-auto" />
        </div>

        {!isQuizComplete ? (
          /* Current Question */
          <Card className="game-card mb-8">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{currentQuestion.language}</span>
                </div>
                <div className="flex gap-2">
                  <Badge className={getDifficultyColor(currentQuestion.difficulty)}>
                    {currentQuestion.difficulty}
                  </Badge>
                  <Badge variant="outline">{currentQuestion.category}</Badge>
                  <Badge className="xp-text bg-xp/20">
                    <Zap className="mr-1 h-3 w-3" />
                    +{currentQuestion.xpReward} XP
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Question */}
              <div>
                <h3 className="text-xl font-semibold mb-4">{currentQuestion.question}</h3>
                
                {/* Code Example */}
                {currentQuestion.code && (
                  <pre className="bg-muted/50 p-4 rounded-lg text-sm font-mono overflow-x-auto mb-4">
                    <code>{currentQuestion.code}</code>
                  </pre>
                )}
              </div>

              {/* Options */}
              <div className="grid gap-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${getOptionColor(index)}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{option}</span>
                      {showResult && index === currentQuestion.correctAnswer && (
                        <CheckCircle className="h-5 w-5 ml-auto text-success" />
                      )}
                      {showResult && index === selectedAnswer && selectedAnswer !== currentQuestion.correctAnswer && (
                        <XCircle className="h-5 w-5 ml-auto text-destructive" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Explanation */}
              {showResult && (
                <div className="bg-muted/50 p-4 rounded-lg animate-slide-up">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    {selectedAnswer === currentQuestion.correctAnswer ? (
                      <CheckCircle className="h-5 w-5 text-success" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                    {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}
                  </h4>
                  <p className="text-muted-foreground">{currentQuestion.explanation}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-between items-center pt-4">
                <Button variant="outline" onClick={handleRestartQuiz}>
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Restart Quiz
                </Button>
                
                {!showResult ? (
                  <Button 
                    variant="gaming" 
                    onClick={handleSubmitAnswer}
                    disabled={selectedAnswer === null}
                  >
                    Submit Answer
                  </Button>
                ) : (
                  <Button variant="hero" onClick={handleNextQuestion}>
                    {currentQuiz < quizQuestions.length - 1 ? 'Next Question' : 'View Results'}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Quiz Complete */
          <Card className="game-card border-success/30">
            <CardContent className="p-8 text-center">
              <Trophy className="h-16 w-16 text-xp mx-auto mb-6 animate-bounce-in" />
              
              <h3 className="text-3xl font-bold mb-4">Quiz Complete!</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-md mx-auto mb-8">
                <div>
                  <div className="text-3xl font-bold text-success mb-2">{score}</div>
                  <div className="text-muted-foreground">Correct</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {Math.round((score / quizQuestions.length) * 100)}%
                  </div>
                  <div className="text-muted-foreground">Score</div>
                </div>
                <div>
                  <div className="text-3xl font-bold xp-text mb-2">{totalXP}</div>
                  <div className="text-muted-foreground">XP Earned</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" onClick={handleRestartQuiz}>
                  <Target className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
                <Button variant="success">
                  <Trophy className="mr-2 h-4 w-4" />
                  View Leaderboard
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default Quiz;