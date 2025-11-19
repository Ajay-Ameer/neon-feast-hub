import React from 'react';
import { Loader2 } from 'lucide-react';

export const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-subtle via-cream-soft to-coral-subtle">
      <div className="text-center space-y-6">
        {/* Animated Food Icon */}
        <div className="relative w-24 h-24 mx-auto">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-full border-4 border-emerald-light animate-spin" 
               style={{ borderTopColor: 'hsl(var(--emerald-deep))', animationDuration: '1.5s' }}></div>
          
          {/* Middle rotating ring */}
          <div className="absolute inset-2 rounded-full border-4 border-coral-light animate-spin" 
               style={{ borderTopColor: 'hsl(var(--coral-warm))', animationDuration: '2s', animationDirection: 'reverse' }}></div>
          
          {/* Inner pulsing core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-soft to-coral-warm animate-pulse flex items-center justify-center">
              <div className="text-2xl">🍽️</div>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="text-4xl font-playfair font-bold bg-gradient-to-r from-emerald-deep via-emerald-rich to-coral-warm bg-clip-text text-transparent">
            ZestyMonk
          </h1>
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
