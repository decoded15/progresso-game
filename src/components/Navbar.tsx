import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Trophy, 
  BookOpen, 
  Target, 
  FileText, 
  User,
  Zap,
  Menu
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userXP = 2450;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">CodeQuest</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Button variant="ghost" size="sm">
              <BookOpen className="mr-2 h-4 w-4" />
              Flashcards
            </Button>
            <Button variant="ghost" size="sm">
              <Target className="mr-2 h-4 w-4" />
              Quizzes
            </Button>
            <Button variant="ghost" size="sm">
              <FileText className="mr-2 h-4 w-4" />
              Cheat Sheets
            </Button>
            <Button variant="ghost" size="sm">
              <Trophy className="mr-2 h-4 w-4" />
              Leaderboard
            </Button>
          </div>

          {/* User Info & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* XP Display */}
            <Badge variant="outline" className="hidden sm:flex gap-2 py-2 px-3">
              <Zap className="h-4 w-4 text-xp" />
              <span className="xp-text">{userXP} XP</span>
            </Badge>

            {/* Profile */}
            <Button variant="outline" size="sm" className="hidden md:flex">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Button>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-slide-up">
            <div className="flex flex-col gap-2">
              <Button variant="ghost" size="sm" className="justify-start">
                <BookOpen className="mr-2 h-4 w-4" />
                Flashcards
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                <Target className="mr-2 h-4 w-4" />
                Quizzes
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Cheat Sheets
              </Button>
              <Button variant="ghost" size="sm" className="justify-start">
                <Trophy className="mr-2 h-4 w-4" />
                Leaderboard
              </Button>
              <Button variant="outline" size="sm" className="justify-start mt-2">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;