import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Eye, EyeOff, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import authCollage from '@/assets/auth-food-collage.jpg';

const resetPasswordSchema = z.object({
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validSession, setValidSession] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  useEffect(() => {
    // Check if we have a valid session for password reset
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setValidSession(true);
      } else {
        toast.error('Invalid or expired reset link');
        navigate('/forgot-password');
      }
    };

    checkSession();
  }, [navigate]);

  const onSubmit = async (data: ResetPasswordFormData) => {
    setIsLoading(true);
    
    const { error } = await supabase.auth.updateUser({
      password: data.password
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success('Password updated successfully!');
      navigate('/');
    }
    
    setIsLoading(false);
  };

  if (!validSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-subtle via-cream-pure to-coral-subtle">
        <div className="text-center">
          <p className="text-muted-foreground">Checking reset link...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-emerald-subtle via-cream-pure to-coral-subtle">
      {/* Left Side - Food Collage */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img 
          src={authCollage} 
          alt="Fresh food preparation and delivery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep/20 via-transparent to-coral-warm/20"></div>
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h2 className="text-3xl font-playfair font-bold mb-2">
            Create a New Password
          </h2>
          <p className="text-lg opacity-90">
            Secure your account with a fresh password
          </p>
        </div>
      </div>

      {/* Right Side - Reset Password Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center">
            <Link to="/" className="inline-flex items-center space-x-2 group">
              <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-soft to-coral-warm">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-playfair font-bold bg-gradient-to-r from-emerald-deep to-coral-warm bg-clip-text text-transparent">
                ZestyMonk
              </span>
            </Link>
          </div>

          <Card className="border-2 border-emerald-light/50 shadow-xl">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold text-foreground">Reset password</CardTitle>
              <CardDescription className="text-muted-foreground">
                Enter your new password below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground">New Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter new password"
                      {...register('password')}
                      className={`bg-background border-2 ${errors.password ? 'border-destructive' : 'border-emerald-light focus:border-emerald-soft'}`}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-muted-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  {errors.password && (
                    <p className="text-sm text-destructive">{errors.password.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm new password"
                      {...register('confirmPassword')}
                      className={`bg-background border-2 ${errors.confirmPassword ? 'border-destructive' : 'border-emerald-light focus:border-emerald-soft'}`}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent text-muted-foreground"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-sm text-destructive">{errors.confirmPassword.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-soft to-emerald-rich hover:from-emerald-rich hover:to-emerald-deep text-white font-semibold"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? 'Updating...' : 'Update password'}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Link
                  to="/login"
                  className="text-sm text-emerald-rich hover:text-emerald-deep transition-colors font-medium"
                >
                  Back to sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;