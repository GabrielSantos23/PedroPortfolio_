'use client';

import { createContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import MobileSidebar from './MobileSidebar';

interface LayoutProps {
  children: React.ReactNode;
}
export const MyContext = createContext({ language: '' });

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  function toggleLanguage() {
    const newLanguage = language === 'en' ? 'pt' : 'en';
    setLanguage(newLanguage);

    localStorage.setItem('language', newLanguage);
  }

  return (
    <MyContext.Provider value={{ language }}>
      <div className='h-full flex items-center justify-center overflow-auto overflow-y-auto w-full'>
        <Sidebar toggleLanguage={toggleLanguage} language={language}>
          <MobileSidebar />

          <div className='flex justify-center'>{children}</div>
        </Sidebar>
      </div>
    </MyContext.Provider>
  );
};
