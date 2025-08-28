import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Trophy, Medal, Award, Crown, Flame, Star } from "lucide-react";

interface LeaderboardEntry {
  rank: number;
  username: string;
  xp: number;
  level: number;
  streak: number;
  badges: number;
  country: string;
  isCurrentUser?: boolean;
}

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, username: "CodeMaster2024", xp: 15750, level: 42, streak: 89, badges: 28, country: "🇺🇸" },
  { rank: 2, username: "PythonNinja", xp: 14200, level: 38, streak: 56, badges: 24, country: "🇯🇵" },
  { rank: 3, username: "JSWizard", xp: 13890, level: 37, streak: 45, badges: 22, country: "🇩🇪" },
  { rank: 4, username: "DataScienceGuru", xp: 12500, level: 34, streak: 67, badges: 20, country: "🇮🇳" },
  { rank: 5, username: "FullStackDev", xp: 11800, level: 32, streak: 23, badges: 19, country: "🇨🇦" },
  { rank: 156, username: "You", xp: 2450, level: 15, streak: 12, badges: 8, country: "🌍", isCurrentUser: true }
];

const Leaderboard = () => {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="h-6 w-6 text-xp" />;
      case 2: return <Trophy className="h-6 w-6 text-muted-foreground" />;
      case 3: return <Medal className="h-6 w-6 text-warning" />;
      default: return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank <= 3) return "text-xp bg-xp/20";
    if (rank <= 10) return "text-warning bg-warning/20";
    if (rank <= 50) return "text-primary bg-primary/20";
    return "text-muted-foreground bg-muted/20";
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Global Leaderboard</h2>
          <p className="text-xl text-muted-foreground">
            Compete with learners worldwide and climb the ranks!
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {leaderboardData.slice(0, 3).map((entry, index) => (
            <Card 
              key={entry.username}
              className={`game-card relative overflow-hidden ${
                index === 0 ? 'border-xp/30 shadow-glow animate-glow' : 
                index === 1 ? 'border-muted-foreground/30' : 'border-warning/30'
              }`}
            >
              {/* Rank Background */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                {getRankIcon(entry.rank)}
              </div>
              
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {getRankIcon(entry.rank)}
                </div>
                <CardTitle className="text-xl gradient-text">{entry.username}</CardTitle>
                <Badge className={`${getRankBadge(entry.rank)} font-bold`}>
                  #{entry.rank} Globally
                </Badge>
              </CardHeader>
              
              <CardContent className="text-center space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Level</span>
                  <span className="font-bold text-primary">{entry.level}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">XP</span>
                  <span className="font-bold xp-text">{entry.xp.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Flame className="h-4 w-4" /> Streak
                  </span>
                  <span className="font-bold text-warning">{entry.streak} days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Star className="h-4 w-4" /> Badges
                  </span>
                  <span className="font-bold text-secondary">{entry.badges}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card className="game-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              Complete Rankings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {leaderboardData.map((entry) => (
                <div
                  key={entry.username}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 hover:bg-muted/50 ${
                    entry.isCurrentUser ? 'bg-primary/10 border border-primary/30' : 'bg-muted/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 flex justify-center">
                      {entry.rank <= 3 ? getRankIcon(entry.rank) : (
                        <span className="text-lg font-bold text-muted-foreground">
                          #{entry.rank}
                        </span>
                      )}
                    </div>
                    
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                        {entry.username.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <div className="font-semibold flex items-center gap-2">
                        {entry.username}
                        {entry.isCurrentUser && (
                          <Badge variant="outline" className="text-xs">You</Badge>
                        )}
                        <span className="text-lg">{entry.country}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Level {entry.level} • {entry.badges} badges
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold xp-text text-lg">
                      {entry.xp.toLocaleString()} XP
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Flame className="h-3 w-3" />
                      {entry.streak} day streak
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Motivation Card */}
        <Card className="game-card mt-8 border-success/30">
          <CardContent className="p-6 text-center">
            <Award className="h-12 w-12 text-success mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Keep Climbing!</h3>
            <p className="text-muted-foreground">
              Complete more challenges, maintain your streak, and earn badges to improve your ranking!
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Leaderboard;