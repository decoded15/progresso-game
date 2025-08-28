import { Button } from "@/components/ui/button";
import { Code, Trophy, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-programming.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Programming learning platform hero image"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-pulse-slow delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-xp/20 rounded-full animate-pulse-slow delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Learn to <span className="gradient-text">Code</span>
            <br />
            Like a <span className="gradient-text">Game</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Master programming languages through gamified learning. Earn XP, unlock badges, 
            compete on leaderboards, and level up your coding skills!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="animate-bounce-in">
              <Zap className="mr-2 h-5 w-5" />
              Start Learning Now
            </Button>
            <Button variant="outline" size="xl" className="animate-bounce-in delay-200">
              <Trophy className="mr-2 h-5 w-5" />
              View Leaderboard
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="game-card animate-bounce-in delay-300">
              <Code className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold gradient-text mb-2">5+</h3>
              <p className="text-muted-foreground">Programming Languages</p>
            </div>
            
            <div className="game-card animate-bounce-in delay-500">
              <Users className="h-8 w-8 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold gradient-text mb-2">10K+</h3>
              <p className="text-muted-foreground">Active Learners</p>
            </div>
            
            <div className="game-card animate-bounce-in delay-700">
              <Trophy className="h-8 w-8 text-xp mx-auto mb-4" />
              <h3 className="text-2xl font-bold xp-text mb-2">500+</h3>
              <p className="text-muted-foreground">Achievements to Unlock</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-1/4 left-10 opacity-30 animate-pulse-slow">
        <code className="text-primary font-mono">&lt;learn /&gt;</code>
      </div>
      <div className="absolute top-1/3 right-16 opacity-30 animate-pulse-slow delay-1000">
        <code className="text-secondary font-mono">function() {}</code>
      </div>
      <div className="absolute bottom-1/3 left-1/3 opacity-30 animate-pulse-slow delay-2000">
        <code className="text-xp font-mono">console.log("success");</code>
      </div>
    </section>
  );
};

export default Hero;