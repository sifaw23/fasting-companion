
import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  const [isRedirecting, setIsRedirecting] = useState(false);

  // If we're still loading auth state, show loading indicator
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white/60 backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ramadan-600"></div>
          <p className="text-ramadan-800 font-medium">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  // If user is not authenticated and we're not already redirecting, store current path and redirect to auth
  if (!user && !isRedirecting) {
    // Store the current location for redirect after login
    sessionStorage.setItem('redirectAfterLogin', location.pathname);
    setIsRedirecting(true);
    return <Navigate to="/auth" replace />;
  }

  // If we get here, user is authenticated or we're in the process of redirecting
  return <>{children}</>;
};

export default ProtectedRoute;
