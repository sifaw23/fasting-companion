
import { Link, useLocation } from "react-router-dom";
import { Home, Calendar, Compass, BookOpen, Moon } from "lucide-react";
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
      icon: BookOpen
    },
    {
      name: "Duas",
      path: "/duas",
      icon: Moon
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-xl border-t">
      <nav className="max-w-md mx-auto bg-ramadan-950/5 rounded-full px-2 py-1 backdrop-blur-md border border-ramadan-200">
        <ul className="flex justify-between items-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex flex-col items-center p-2 rounded-full transition-all duration-300",
                    isActive 
                      ? "bg-ramadan-600 text-white" 
                      : "text-ramadan-900/70 hover:bg-ramadan-100"
                  )}
                >
                  <item.icon 
                    className={cn(
                      "w-5 h-5 transition-transform duration-300",
                      isActive ? "scale-110" : "scale-100"
                    )} 
                  />
                  <span className={cn(
                    "text-[10px] font-medium mt-1 transition-opacity",
                    isActive ? "opacity-100" : "opacity-70"
                  )}>
                    {item.name}
                  </span>
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
