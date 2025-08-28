import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Code, 
  Copy, 
  CheckCircle,
  BookOpen,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState } from "react";
import { cheatSheetsData, getCheatSheetByLanguage, type CheatSheet } from "@/data/cheatSheets";
import { useToast } from "@/hooks/use-toast";

const CheatSheet = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("Python");
  const [expandedSections, setExpandedSections] = useState(new Set<string>());
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const { toast } = useToast();

  const languages = ["Python", "JavaScript", "Java", "C++"];
  const currentCheatSheet = getCheatSheetByLanguage(selectedLanguage);

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionTitle)) {
        newSet.delete(sectionTitle);
      } else {
        newSet.add(sectionTitle);
      }
      return newSet;
    });
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(text);
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard`,
      });
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  if (!currentCheatSheet) {
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold mb-4">Cheat Sheet Not Available</h2>
          <p className="text-muted-foreground">
            Cheat sheet for {selectedLanguage} is coming soon!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Programming Cheat Sheets</h2>
          <p className="text-xl text-muted-foreground">
            Quick reference guides for essential programming concepts
          </p>
        </div>

        {/* Language Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-2 bg-muted/50 rounded-lg">
            {languages.map((language) => (
              <Button
                key={language}
                variant={selectedLanguage === language ? "gaming" : "ghost"}
                size="sm"
                onClick={() => setSelectedLanguage(language)}
                className="flex items-center gap-2"
              >
                <Code className="h-4 w-4" />
                {language}
              </Button>
            ))}
          </div>
        </div>

        {/* Cheat Sheet Content */}
        <div className="grid gap-6">
          {currentCheatSheet.sections.map((section) => (
            <Card key={section.title} className="game-card">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => toggleSection(section.title)}
              >
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    {section.title}
                  </div>
                  {expandedSections.has(section.title) ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </CardTitle>
              </CardHeader>
              
              {expandedSections.has(section.title) && (
                <CardContent className="animate-slide-up">
                  <div className="space-y-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-l-4 border-primary/30 pl-6">
                        <div className="flex items-center gap-4 mb-3">
                          <h4 className="text-lg font-semibold gradient-text">
                            {item.concept}
                          </h4>
                          <Badge variant="outline" className="text-xs">
                            {selectedLanguage}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Syntax */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-secondary">Syntax:</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => copyToClipboard(item.syntax, "Syntax")}
                              className="h-8 px-2"
                            >
                              {copiedCode === item.syntax ? (
                                <CheckCircle className="h-3 w-3 text-success" />
                              ) : (
                                <Copy className="h-3 w-3" />
                              )}
                            </Button>
                          </div>
                          <pre className="bg-muted/80 p-3 rounded-lg text-sm font-mono overflow-x-auto border">
                            <code>{item.syntax}</code>
                          </pre>
                        </div>

                        {/* Example */}
                        {item.example && (
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-warning">Example:</span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => copyToClipboard(item.example!, "Example")}
                                className="h-8 px-2"
                              >
                                {copiedCode === item.example ? (
                                  <CheckCircle className="h-3 w-3 text-success" />
                                ) : (
                                  <Copy className="h-3 w-3" />
                                )}
                              </Button>
                            </div>
                            <pre className="bg-primary/10 p-3 rounded-lg text-sm font-mono overflow-x-auto border border-primary/30">
                              <code>{item.example}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Expand/Collapse All */}
        <div className="text-center mt-8">
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              onClick={() => setExpandedSections(new Set(currentCheatSheet.sections.map(s => s.title)))}
            >
              <ChevronDown className="mr-2 h-4 w-4" />
              Expand All
            </Button>
            <Button
              variant="outline"
              onClick={() => setExpandedSections(new Set())}
            >
              <ChevronUp className="mr-2 h-4 w-4" />
              Collapse All
            </Button>
          </div>
        </div>

        {/* Download/Print Options */}
        <Card className="game-card mt-8 border-secondary/30">
          <CardContent className="p-6 text-center">
            <FileText className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Need a quick reference?</h3>
            <p className="text-muted-foreground mb-4">
              Keep these cheat sheets handy while coding!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary">
                <FileText className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
              <Button variant="outline">
                <Code className="mr-2 h-4 w-4" />
                Print Version
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CheatSheet;