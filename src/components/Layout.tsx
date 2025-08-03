import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: string;
  onScreenChange: (screen: string) => void;
  cartItemsCount: number;
}

const Layout: React.FC<LayoutProps> = ({ children, currentScreen, onScreenChange, cartItemsCount }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentScreen={currentScreen} 
        onScreenChange={onScreenChange}
        cartItemsCount={cartItemsCount}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout;