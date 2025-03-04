
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { LogOut, User } from 'lucide-react';

interface Profile {
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
}

export const UserProfile = () => {
  const { user, signOut } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('username, full_name, avatar_url')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching profile:', error);
          return;
        }

        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Error",
        description: "There was an error signing out",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="glass-card rounded-2xl p-4 flex flex-col items-center justify-center space-y-4 animate-pulse">
        <div className="w-16 h-16 rounded-full bg-muted"></div>
        <div className="h-4 w-24 bg-muted rounded"></div>
      </div>
    );
  }

  if (!user || !profile) {
    return null;
  }

  return (
    <div className="glass-card rounded-2xl p-4 flex flex-col items-center justify-center space-y-4">
      <div className="w-16 h-16 rounded-full bg-ramadan-50 flex items-center justify-center">
        {profile.avatar_url ? (
          <img 
            src={profile.avatar_url} 
            alt={profile.full_name || 'User'} 
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <User className="w-8 h-8 text-ramadan-600" />
        )}
      </div>
      
      <div className="text-center">
        <h3 className="font-medium">{profile.full_name || 'User'}</h3>
        <p className="text-sm text-muted-foreground">{user.email}</p>
      </div>
      
      <button
        onClick={handleSignOut}
        className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <LogOut className="w-4 h-4" />
        <span>Sign Out</span>
      </button>
    </div>
  );
};

export default UserProfile;
