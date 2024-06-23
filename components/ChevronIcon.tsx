// components/ChevronIcon.tsx

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ChevronIcon = () => {
  const { theme } = useTheme();
  return (
    <div className={`chevron-icon ${theme === 'dark' ? 'text-primary' : 'text-primary'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
      </svg>
    </div>
  );
};

export default ChevronIcon;