
import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, isLoading } = useAuth();
  const [isReady, setIsReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Only set ready after we've confirmed authentication state
    if (!isLoading) {
      if (!user) {
        navigate('/auth');
      } else {
        setIsReady(true);
      }
    }
  }, [user, isLoading, navigate]);

  // Show loading state until authentication is confirmed
  if (isLoading || !isReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ramadan-600"></div>
      </div>
    );
  }

  // If we've reached here, user is authenticated and we're ready to render
  return <>{children}</>;
};

export default ProtectedRoute;
