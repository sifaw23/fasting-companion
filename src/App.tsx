
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { useAuth } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Schedule from "./pages/Schedule";
import Prayers from "./pages/Prayers";
import Quran from "./pages/Quran";
import Duas from "./pages/Duas";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import NavMenu from "./components/NavMenu";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect, useState } from "react";

// Create a new QueryClient to manage queries
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false, // Don't retry failed queries to avoid looping issues
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Add an AuthCheck component to handle auth redirects at the route level
const AuthCheck = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Only set ready when we have definitively determined auth status
    if (!isLoading) {
      if (user) {
        // If there's a saved redirect path, navigate there
        const redirectPath = sessionStorage.getItem('redirectAfterLogin');
        if (redirectPath) {
          sessionStorage.removeItem('redirectAfterLogin');
          window.location.href = redirectPath; // Use direct location change to avoid React Router issues
          return; // Don't set isReady yet, we're redirecting
        }
      }
      setIsReady(true);
    }
  }, [user, isLoading]);
  
  // Don't render anything while checking authentication
  if (isLoading || !isReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ramadan-600"></div>
      </div>
    );
  }
  
  // Redirect if already logged in and no redirect path was found
  if (user) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-[100dvh] pb-16"> {/* Add container with bottom padding for NavMenu */}
            <Routes>
              <Route path="/auth" element={
                <AuthCheck>
                  <Auth />
                </AuthCheck>
              } />
              <Route path="/" element={<Index />} />
              <Route path="/schedule" element={
                <ProtectedRoute>
                  <Schedule />
                </ProtectedRoute>
              } />
              <Route path="/prayers" element={
                <ProtectedRoute>
                  <Prayers />
                </ProtectedRoute>
              } />
              <Route path="/quran" element={
                <ProtectedRoute>
                  <Quran />
                </ProtectedRoute>
              } />
              <Route path="/duas" element={
                <ProtectedRoute>
                  <Duas />
                </ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <NavMenu />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
