import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Star, Lock, ChevronRight } from "lucide-react";

interface Language {
  name: string;
  icon: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  progress: number;
  totalLessons: number;
  completedLessons: number;
  xpReward: number;
  isLocked: boolean;
  description: string;
}

const languages: Language[] = [
  {
    name: "Python",
    icon: "🐍",
    difficulty: "Beginner",
    progress: 75,
    totalLessons: 24,
    completedLessons: 18,
    xpReward: 50,
    isLocked: false,
    description: "Perfect for beginners. Learn programming fundamentals with clean syntax."
  },
  {
    name: "JavaScript",
    icon: "⚡",
    difficulty: "Beginner",
    progress: 60,
    totalLessons: 32,
    completedLessons: 19,
    xpReward: 50,
    isLocked: false,
    description: "Master web development with the most popular programming language."
  },
  {
    name: "Java",
    icon: "☕",
    difficulty: "Intermediate",
    progress: 40,
    totalLessons: 28,
    completedLessons: 11,
    xpReward: 75,
    isLocked: false,
    description: "Learn object-oriented programming with enterprise-grade language."
  },
  {
    name: "C++",
    icon: "⚙️",
    difficulty: "Advanced",
    progress: 25,
    totalLessons: 36,
    completedLessons: 9,
    xpReward: 100,
    isLocked: false,
    description: "Master system programming and performance-critical applications."
  },
  {
    name: "Rust",
    icon: "🦀",
    difficulty: "Advanced",
    progress: 0,
    totalLessons: 30,
    completedLessons: 0,
    xpReward: 100,
    isLocked: true,
    description: "Modern systems programming with memory safety and performance."
  },
  {
    name: "Go",
    icon: "🐹",
    difficulty: "Intermediate",
    progress: 0,
    totalLessons: 22,
    completedLessons: 0,
    xpReward: 75,
    isLocked: true,
    description: "Simple, fast, and reliable language for modern applications."
  }
];

const LanguageSelector = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-success bg-success/20';
      case 'Intermediate': return 'text-warning bg-warning/20';
      case 'Advanced': return 'text-destructive bg-destructive/20';
      default: return 'text-muted-foreground bg-muted/20';
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose Your Language</h2>
          <p className="text-xl text-muted-foreground">
            Select a programming language to start your coding journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((lang) => (
            <Card 
              key={lang.name}
              className={`game-card relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                lang.isLocked ? 'opacity-60' : 'hover:shadow-primary cursor-pointer'
              }`}
            >
              {lang.isLocked && (
                <div className="absolute top-4 right-4 z-10">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                </div>
              )}

              <CardContent className="p-6">
                {/* Language Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{lang.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold gradient-text">{lang.name}</h3>
                      <Badge className={`${getDifficultyColor(lang.difficulty)} text-xs`}>
                        {lang.difficulty}
                      </Badge>
                    </div>
                  </div>
                  
                  {!lang.isLocked && lang.progress > 0 && (
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-xp fill-current" />
                      <span className="text-sm font-semibold text-xp">{lang.progress}%</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {lang.description}
                </p>

                {/* Progress */}
                {!lang.isLocked && (
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-semibold">
                        {lang.completedLessons}/{lang.totalLessons} lessons
                      </span>
                    </div>
                    <Progress value={lang.progress} className="h-2" />
                  </div>
                )}

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{lang.totalLessons}</div>
                    <div className="text-xs text-muted-foreground">Total Lessons</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold xp-text">+{lang.xpReward} XP</div>
                    <div className="text-xs text-muted-foreground">Per Lesson</div>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant={lang.isLocked ? "outline" : lang.progress > 0 ? "gaming" : "hero"}
                  className="w-full"
                  disabled={lang.isLocked}
                >
                  {lang.isLocked ? (
                    <>
                      <Lock className="mr-2 h-4 w-4" />
                      Unlock at Level 20
                    </>
                  ) : lang.progress > 0 ? (
                    <>
                      <Code className="mr-2 h-4 w-4" />
                      Continue Learning
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <Star className="mr-2 h-4 w-4" />
                      Start Learning
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">More Languages Coming Soon!</h3>
          <p className="text-muted-foreground mb-6">
            We're working hard to bring you more programming languages. Stay tuned!
          </p>
          <div className="flex justify-center gap-6 text-4xl opacity-50">
            <span title="Swift">🍎</span>
            <span title="Kotlin">🤖</span>
            <span title="Ruby">💎</span>
            <span title="PHP">🐘</span>
            <span title="C#">🔷</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageSelector;