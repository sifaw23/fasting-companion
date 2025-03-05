
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/Header';
import { Sparkles, User, Mail, Lock, Loader2 } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [isProcessingAuth, setIsProcessingAuth] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Prevent multiple navigation attempts
  useEffect(() => {
    if (user && !isProcessingAuth) {
      setIsProcessingAuth(true);
      
      // Get redirect path if exists, otherwise go to home
      const redirectPath = sessionStorage.getItem('redirectAfterLogin') || '/';
      sessionStorage.removeItem('redirectAfterLogin');
      
      // Small delay to ensure UI is stable
      setTimeout(() => {
        navigate(redirectPath, { replace: true });
      }, 100);
    }
  }, [user, navigate, isProcessingAuth]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    
    setLoading(true);

    try {
      if (isLogin) {
        // Handle login
        const { error } = await signIn(email, password);
        if (error) throw error;
        
        toast({
          title: "Welcome back",
          description: "You've successfully signed in",
        });
      } else {
        // Handle signup
        if (!fullName) {
          toast({
            title: "Missing information",
            description: "Please provide your full name",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }

        const { error } = await signUp(email, password, fullName);
        if (error) throw error;
        
        toast({
          title: "Account created",
          description: "Please check your email to confirm your account",
        });
        setIsLogin(true);
      }
    } catch (error: any) {
      console.error('Authentication error:', error);
      toast({
        title: "Authentication error",
        description: error.message || "An error occurred during authentication",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pattern-dots relative">
      <div className="absolute inset-0 gradient-blur opacity-40"></div>
      
      <Header
        title={isLogin ? "Sign In" : "Create Account"}
        subtitle={isLogin ? "Welcome back" : "Join the community"}
        showBackButton
      />

      <main className="container max-w-md mx-auto px-4 py-6 relative z-10">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 border border-ramadan-100 shadow-xl animate-in">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ramadan-500 to-ramadan-700 flex items-center justify-center shadow-lg">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center mb-6 text-ramadan-900">
            {isLogin ? "Welcome Back" : "Create Your Account"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium text-ramadan-800">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ramadan-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Your full name"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-ramadan-200 bg-white focus:outline-none focus:ring-2 focus:ring-ramadan-400 focus:border-ramadan-500 transition-all"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-ramadan-800">
                Email
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ramadan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-ramadan-200 bg-white focus:outline-none focus:ring-2 focus:ring-ramadan-400 focus:border-ramadan-500 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-ramadan-800">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-ramadan-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-ramadan-200 bg-white focus:outline-none focus:ring-2 focus:ring-ramadan-400 focus:border-ramadan-500 transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-ramadan-600 to-ramadan-700 hover:from-ramadan-700 hover:to-ramadan-800 text-white font-medium py-3 px-4 rounded-xl transition-all flex items-center justify-center shadow-md hover:shadow-lg"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center">
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
                  Processing...
                </span>
              ) : isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="text-center mt-8">
            <button
              type="button"
              className="text-ramadan-600 hover:text-ramadan-800 text-sm font-medium transition-colors"
              onClick={() => setIsLogin(!isLogin)}
              disabled={loading}
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;
