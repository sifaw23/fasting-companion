
import { useState } from "react";
import { Moon, Search, Filter, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { DUA_CATEGORIES, getFeaturedDuas, type Dua } from "@/utils/duaData";

export const DuaCollection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  const featuredDuas = getFeaturedDuas();
  
  // Filter duas based on category and search term
  const filteredDuas = featuredDuas.filter((dua) => {
    const matchesCategory = activeCategory === "All" || dua.category === activeCategory;
    const matchesSearch = dua.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         dua.translation.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="w-full animate-in">
      <div className="relative mb-4">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          placeholder="Search duas..."
          className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-ramadan-200 focus:border-ramadan-300 transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="overflow-x-auto pb-2 -mx-4 px-4 mb-6">
        <div className="flex space-x-2 min-w-max">
          <button
            className={cn(
              "px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
              activeCategory === "All"
                ? "bg-ramadan-600 text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
            onClick={() => setActiveCategory("All")}
          >
            All Duas
          </button>
          
          {DUA_CATEGORIES.map((category) => (
            <button
              key={category}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap",
                activeCategory === category
                  ? "bg-ramadan-600 text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="space-y-4 mb-6">
        {filteredDuas.length > 0 ? (
          filteredDuas.map((dua) => (
            <DuaCard key={dua.id} dua={dua} />
          ))
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-muted mx-auto flex items-center justify-center mb-3">
              <Moon className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium">No duas found</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Try adjusting your filters or search term
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

interface DuaCardProps {
  dua: Dua;
}

const DuaCard = ({ dua }: DuaCardProps) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="glass-card rounded-2xl p-4 hover-scale">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-ramadan-50 flex items-center justify-center mr-3">
            <Moon className="w-4 h-4 text-ramadan-600" />
          </div>
          <div>
            <h3 className="text-sm font-medium">{dua.title}</h3>
            {dua.occasion && (
              <p className="text-xs text-muted-foreground">{dua.occasion}</p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-xs bg-ramadan-50 text-ramadan-700 px-2 py-0.5 rounded-full">
            {dua.category}
          </span>
          <button className="p-1.5 rounded-full hover:bg-ramadan-50 transition-colors">
            <Heart className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
      
      <p className="text-right font-arabic text-lg leading-relaxed mb-2">
        {dua.arabic}
      </p>
      
      <div className={expanded ? "block" : "hidden"}>
        <p className="text-sm italic mb-2">
          {dua.transliteration}
        </p>
        
        <p className="text-sm text-muted-foreground mb-2">
          {dua.translation}
        </p>
        
        {dua.reference && (
          <p className="text-xs text-muted-foreground mt-2">
            Source: {dua.reference}
          </p>
        )}
      </div>
      
      <button
        className="w-full text-center text-sm text-ramadan-600 font-medium mt-2"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Show translation"}
      </button>
    </div>
  );
};

export default DuaCollection;
