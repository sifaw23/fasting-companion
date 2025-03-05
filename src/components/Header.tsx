
import { useState, useEffect } from "react";
import { Bell, ChevronLeft, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
}

export const Header = ({ title, subtitle, showBackButton }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

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
        "sticky top-0 z-40 w-full transition-all duration-300 py-5 px-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container max-w-md mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {showBackButton && (
            <button 
              onClick={() => navigate(-1)}
              className="mr-3 w-10 h-10 rounded-full flex items-center justify-center bg-white hover:bg-ramadan-50 border border-ramadan-100 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-ramadan-800" />
            </button>
          )}
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-ramadan-950">{title}</h1>
            {subtitle && (
              <p className="text-sm text-ramadan-600/80">{subtitle}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white hover:bg-ramadan-50 border border-ramadan-100 transition-colors">
            <Bell className="h-5 w-5 text-ramadan-800" />
          </button>
          
          <button className="w-10 h-10 rounded-full flex items-center justify-center bg-white hover:bg-ramadan-50 border border-ramadan-100 transition-colors">
            <User className="h-5 w-5 text-ramadan-800" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
