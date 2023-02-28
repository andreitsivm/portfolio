import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-flow-row h-screen grid-rows-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
