
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/Header';
import { Moon, Sun, User, Mail, Lock } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        navigate('/');
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
    <div className="min-h-screen">
      <Header
        title={isLogin ? "Sign In" : "Create Account"}
        subtitle={isLogin ? "Welcome back" : "Join the community"}
        showBackButton
      />

      <main className="container max-w-md mx-auto px-4 py-6">
        <div className="glass-card rounded-2xl p-6 space-y-6 animate-in">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-ramadan-50 flex items-center justify-center">
              {isLogin ? (
                <Moon className="w-10 h-10 text-ramadan-600" />
              ) : (
                <Sun className="w-10 h-10 text-ramadan-600" />
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-sm font-medium">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Your full name"
                    className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-ramadan-200 focus:border-ramadan-300 transition-all"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-ramadan-200 focus:border-ramadan-300 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-white/50 focus:outline-none focus:ring-2 focus:ring-ramadan-200 focus:border-ramadan-300 transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-ramadan-600 hover:bg-ramadan-700 text-white font-medium py-2 px-4 rounded-xl transition-colors flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="text-center">
            <button
              type="button"
              className="text-ramadan-600 hover:text-ramadan-800 text-sm font-medium"
              onClick={() => setIsLogin(!isLogin)}
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
