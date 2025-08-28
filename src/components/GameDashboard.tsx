import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Flame, 
  Star, 
  Code, 
  BookOpen, 
  Target,
  ChevronRight,
  Award,
  Zap
} from "lucide-react";

const GameDashboard = () => {
  const userStats = {
    level: 15,
    xp: 2450,
    nextLevelXp: 3000,
    streak: 12,
    totalBadges: 8,
    completedChallenges: 47,
    rank: 156
  };

  const recentBadges = [
    { name: "Python Basics", icon: "🐍", rarity: "common" },
    { name: "Loop Master", icon: "🔄", rarity: "rare" },
    { name: "Debug Champion", icon: "🐛", rarity: "epic" }
  ];

  const languages = [
    { name: "Python", progress: 75, color: "text-success", bgColor: "bg-success/20" },
    { name: "JavaScript", progress: 60, color: "text-warning", bgColor: "bg-warning/20" },
    { name: "Java", progress: 40, color: "text-primary", bgColor: "bg-primary/20" },
    { name: "C++", progress: 25, color: "text-secondary", bgColor: "bg-secondary/20" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Your Learning Journey</h2>
          <p className="text-xl text-muted-foreground">Track your progress and celebrate achievements</p>
        </div>

        {/* User Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="game-card border-primary/20">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="h-5 w-5 text-xp" />
                Level & XP
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold xp-text mb-2">
                Level {userStats.level}
              </div>
              <div className="text-sm text-muted-foreground mb-3">
                {userStats.xp} / {userStats.nextLevelXp} XP
              </div>
              <Progress 
                value={(userStats.xp / userStats.nextLevelXp) * 100} 
                className="h-2"
              />
            </CardContent>
          </Card>

          <Card className="game-card border-warning/20">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Flame className="h-5 w-5 text-warning" />
                Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-warning mb-2">
                {userStats.streak} days
              </div>
              <p className="text-sm text-muted-foreground">
                Keep it going! 🔥
              </p>
            </CardContent>
          </Card>

          <Card className="game-card border-success/20">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Trophy className="h-5 w-5 text-success" />
                World Rank
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success mb-2">
                #{userStats.rank}
              </div>
              <p className="text-sm text-muted-foreground">
                Global ranking
              </p>
            </CardContent>
          </Card>

          <Card className="game-card border-secondary/20">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Award className="h-5 w-5 text-secondary" />
                Badges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary mb-2">
                {userStats.totalBadges}
              </div>
              <p className="text-sm text-muted-foreground">
                Earned badges
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Language Progress */}
          <Card className="game-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Language Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {languages.map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{lang.name}</span>
                    <span className={`font-bold ${lang.color}`}>
                      {lang.progress}%
                    </span>
                  </div>
                  <div className="relative">
                    <Progress value={lang.progress} className="h-3" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card className="game-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-xp" />
                Recent Badges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentBadges.map((badge, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted/80 transition-colors"
                >
                  <div className="text-2xl">{badge.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{badge.name}</h4>
                    <Badge 
                      variant={badge.rarity === 'epic' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {badge.rarity}
                    </Badge>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <Trophy className="mr-2 h-4 w-4" />
                View All Badges
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Button variant="gaming" size="lg" className="h-20 flex-col gap-2">
            <BookOpen className="h-6 w-6" />
            Study Flashcards
          </Button>
          <Button variant="hero" size="lg" className="h-20 flex-col gap-2">
            <Target className="h-6 w-6" />
            Take a Quiz
          </Button>
          <Button variant="success" size="lg" className="h-20 flex-col gap-2">
            <Trophy className="h-6 w-6" />
            View Leaderboard
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameDashboard;