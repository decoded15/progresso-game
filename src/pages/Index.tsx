import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GameDashboard from "@/components/GameDashboard";
import LanguageSelector from "@/components/LanguageSelector";
import FlashcardComponent from "@/components/Flashcard";
import Quiz from "@/components/Quiz";
import CheatSheet from "@/components/CheatSheet";
import Leaderboard from "@/components/Leaderboard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <GameDashboard />
        <LanguageSelector />
        <FlashcardComponent />
        <Quiz />
        <CheatSheet />
        <Leaderboard />
      </main>
    </div>
  );
};

export default Index;