
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
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// AuthCheck component with improved stability
const AuthCheck = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  const [hasCheckedAuth, setHasCheckedAuth] = useState(false);
  
  useEffect(() => {
    if (!isLoading) {
      // Mark that we've checked auth to prevent flickering
      setHasCheckedAuth(true);
    }
  }, [isLoading]);
  
  // Always show loading state until auth check is complete
  if (isLoading || !hasCheckedAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white/60 backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ramadan-600"></div>
          <p className="text-ramadan-800 font-medium">Checking authentication...</p>
        </div>
      </div>
    );
  }
  
  // Only redirect after we've confirmed auth state
  if (user) {
    const redirectPath = sessionStorage.getItem('redirectAfterLogin') || '/';
    sessionStorage.removeItem('redirectAfterLogin');
    return <Navigate to={redirectPath} replace />;
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
          <div className="min-h-[100dvh] pb-16">
            <Routes>
              <Route path="/auth" element={
                <AuthCheck>
                  <Auth />
                </AuthCheck>
              } />
              <Route path="/" element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              } />
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
              <Route path="*" element={
                <ProtectedRoute>
                  <NotFound />
                </ProtectedRoute>
              } />
            </Routes>
            <NavMenu />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
