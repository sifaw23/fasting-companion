
import { useState, useEffect } from "react";
import { Bell, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
}

export const Header = ({ title, subtitle, showBackButton }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300 py-4 px-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container max-w-md mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {showBackButton && (
            <button 
              onClick={() => navigate(-1)}
              className="mr-2 w-8 h-8 rounded-full flex items-center justify-center bg-secondary hover:bg-secondary/80 transition-colors"
            >
              <ChevronLeft className="h-4 w-4 text-foreground/80" />
            </button>
          )}
          <div className="flex flex-col">
            <h1 className="text-lg font-medium tracking-tight">{title}</h1>
            {subtitle && (
              <p className="text-xs text-muted-foreground">{subtitle}</p>
            )}
          </div>
        </div>
        <button className="w-9 h-9 rounded-full flex items-center justify-center bg-secondary hover:bg-secondary/80 transition-colors">
          <Bell className="h-4 w-4 text-foreground/80" />
        </button>
      </div>
    </header>
  );
};

export default Header;
