import React from "react";

const THead = ({ children }: { children?: React.ReactNode }) => {
  return (
    <thead
      className="
        text-xs 
        font-semibold 
        tracking-wide 
        text-left 
        text-gray-500 
        uppercase 
        border-b 
        border-gray-200 
        dark:border-gray-700 
        bg-gray-100 
        dark:text-gray-400 
        dark:bg-gray-800"
    >
      {children}
    </thead>
  );
};

export default THead;
