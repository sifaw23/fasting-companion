
import { Link, useLocation } from "react-router-dom";
import { Calendar, Book, Home, Moon, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

export const NavMenu = () => {
  const location = useLocation();
  
  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: Home
    },
    {
      name: "Schedule",
      path: "/schedule",
      icon: Calendar
    },
    {
      name: "Prayers",
      path: "/prayers",
      icon: Compass
    },
    {
      name: "Quran",
      path: "/quran",
      icon: Book
    },
    {
      name: "Duas",
      path: "/duas",
      icon: Moon
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 py-2 px-4 bg-white/80 backdrop-blur-lg border-t border-border shadow-lg">
      <nav className="max-w-md mx-auto">
        <ul className="flex justify-between items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex flex-col items-center p-2 rounded-xl transition-all duration-300",
                    isActive 
                      ? "text-ramadan-600" 
                      : "text-muted-foreground hover:text-ramadan-500"
                  )}
                >
                  <item.icon 
                    className={cn(
                      "w-5 h-5 mb-1 transition-transform duration-300",
                      isActive ? "scale-110" : "scale-100"
                    )} 
                  />
                  <span className="text-xs font-medium">{item.name}</span>
                  
                  {isActive && (
                    <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-ramadan-600" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
