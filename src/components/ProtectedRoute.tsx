
import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    // Only set isCheckingAuth to false after we've confirmed the auth state
    if (!isLoading) {
      // Small delay to ensure consistent behavior
      const timer = setTimeout(() => {
        setIsCheckingAuth(false);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // If we're still loading auth state or checking auth, show loading indicator
  if (isLoading || isCheckingAuth) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white/60 backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ramadan-600"></div>
          <p className="text-ramadan-800 font-medium">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  // If user is not authenticated, store current path and redirect to auth
  if (!user) {
    sessionStorage.setItem('redirectAfterLogin', location.pathname);
    return <Navigate to="/auth" replace />;
  }

  // If we get here, user is authenticated
  return <>{children}</>;
};

export default ProtectedRoute;
