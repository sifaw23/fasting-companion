
import { useState } from "react";
import { Book, Bookmark, MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { generateRamadanReadingPlan, featuredVerses } from "@/utils/quranData";

export const QuranGuide = () => {
  const [activeDay, setActiveDay] = useState(1);
  const readingPlan = generateRamadanReadingPlan();
  
  return (
    <div className="w-full animate-in">
      <div className="glass-card rounded-3xl overflow-hidden mb-6">
        <div className="bg-gradient-to-br from-ramadan-800 to-ramadan-navy p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium opacity-90">Quran Reading Plan</h3>
            <div className="bg-white/20 rounded-full px-3 py-1 text-xs font-medium">Day {activeDay}</div>
          </div>
          
          <div className="mt-2">
            <h2 className="text-2xl font-semibold">Juz {readingPlan[activeDay - 1].juz.number}</h2>
            <p className="text-sm opacity-80 mt-1">{readingPlan[activeDay - 1].juz.name}</p>
          </div>
          
          <div className="mt-4 p-3 bg-white/10 rounded-xl">
            <p className="text-sm">
              {readingPlan[activeDay - 1].description}
            </p>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h3 className="text-lg font-semibold">30-Day Plan</h3>
            <div className="flex items-center space-x-2">
              <button 
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-lg transition-colors",
                  "bg-ramadan-50 text-ramadan-700"
                )}
              >
                By Juz
              </button>
              <button 
                className={cn(
                  "px-3 py-1.5 text-sm font-medium rounded-lg transition-colors",
                  "text-muted-foreground hover:bg-muted"
                )}
              >
                By Surah
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-6 gap-2 mb-4">
            {Array.from({ length: 30 }, (_, i) => (
              <button
                key={i}
                className={cn(
                  "aspect-square rounded-lg flex items-center justify-center font-medium text-sm transition-all",
                  i + 1 === activeDay
                    ? "bg-ramadan-600 text-white"
                    : i + 1 < activeDay
                    ? "bg-ramadan-100 text-ramadan-600"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
                onClick={() => setActiveDay(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center px-2 mt-8 mb-4">
        <h3 className="text-lg font-semibold">Ramadan Verses</h3>
        <button className="flex items-center text-sm text-ramadan-600 font-medium hover:text-ramadan-700 transition-colors">
          View all <MoveRight className="ml-1 w-4 h-4" />
        </button>
      </div>
      
      <div className="space-y-4 mb-6">
        {featuredVerses.map((verse, index) => (
          <div key={index} className="glass-card p-4 rounded-2xl hover-scale">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-ramadan-50 flex items-center justify-center mr-3">
                  <Book className="w-4 h-4 text-ramadan-600" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Surah {verse.surah}</h4>
                  <p className="text-xs text-muted-foreground">Verse {verse.verse}</p>
                </div>
              </div>
              <button className="p-1.5 rounded-full hover:bg-ramadan-50 transition-colors">
                <Bookmark className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
            
            <p className="text-right font-arabic text-lg leading-relaxed mb-2">
              {verse.text}
            </p>
            
            <p className="text-sm text-muted-foreground">
              {verse.translation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuranGuide;
