"use client"
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center align-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      <div className="ml-2 text-gray-900">Loading...</div>
    </div>
  );
};

export default LoadingSpinner;
