import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ArrowLeft, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import authCollage from '@/assets/auth-food-collage.jpg';

const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { resetPassword } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    const { error } = await resetPassword(data.email);
    
    if (!error) {
      setEmailSent(true);
    }
    setIsLoading(false);
  };

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
            Reset Your Password
          </h2>
          <p className="text-lg opacity-90">
            We'll help you get back to your healthy meals
          </p>
        </div>
      </div>

      {/* Right Side - Forgot Password Form */}
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
              <CardTitle className="text-2xl font-bold text-foreground">
                {emailSent ? 'Check your email' : 'Forgot password'}
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                {emailSent
                  ? `We've sent a password reset link to ${getValues('email')}`
                  : 'Enter your email address and we\'ll send you a reset link'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {emailSent ? (
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Didn't receive the email? Check your spam folder or try again.
                  </p>
                  <Button
                    onClick={() => setEmailSent(false)}
                    variant="outline"
                    className="w-full border-2 border-emerald-light hover:bg-emerald-subtle"
                  >
                    Try again
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      {...register('email')}
                      className={`bg-background border-2 ${errors.email ? 'border-destructive' : 'border-emerald-light focus:border-emerald-soft'}`}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-soft to-emerald-rich hover:from-emerald-rich hover:to-emerald-deep text-white font-semibold"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Send reset link'}
                  </Button>
                </form>
              )}

              <div className="mt-6 text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center text-sm text-emerald-rich hover:text-emerald-deep transition-colors font-medium"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
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

export default ForgotPassword;