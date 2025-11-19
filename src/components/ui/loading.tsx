import React from 'react';
import { Loader2 } from 'lucide-react';
import logo from '@/assets/zesty-monk-logo.png';

export const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-subtle via-cream-soft to-coral-subtle">
      <div className="text-center space-y-6">
        {/* Animated Logo */}
        <div className="relative w-32 h-32 mx-auto">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-4 border-emerald-light animate-spin" 
               style={{ borderTopColor: 'hsl(var(--emerald-deep))', animationDuration: '1.5s' }}></div>
          
          {/* Middle rotating ring */}
          <div className="absolute inset-2 rounded-full border-4 border-coral-light animate-spin" 
               style={{ borderTopColor: 'hsl(var(--coral-warm))', animationDuration: '2s', animationDirection: 'reverse' }}></div>
          
          {/* Logo with pulse */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src={logo} 
              alt="ZestyMonk Logo" 
              className="w-20 h-20 animate-pulse drop-shadow-2xl brightness-110"
              style={{ filter: 'drop-shadow(0 0 20px rgba(255, 107, 53, 0.6))' }}
            />
          </div>
        </div>

        {/* Brand Text */}
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm font-exo">
            Preparing your fresh experience...
          </p>
        </div>

        {/* Loading dots */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-soft animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-coral-warm animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 rounded-full bg-gold-accent animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};
