
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Schedule from "./pages/Schedule";
import Prayers from "./pages/Prayers";
import Quran from "./pages/Quran";
import Duas from "./pages/Duas";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import NavMenu from "./components/NavMenu";
import ProtectedRoute from "./components/ProtectedRoute";

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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-[100dvh] pb-16"> {/* Add container with bottom padding for NavMenu */}
            <Routes>
              <Route path="/auth" element={<Auth />} />
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
