import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GameDashboard from "@/components/GameDashboard";
import LanguageSelector from "@/components/LanguageSelector";
import FlashcardComponent from "@/components/Flashcard";
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
        <Leaderboard />
      </main>
    </div>
  );
};

export default Index;