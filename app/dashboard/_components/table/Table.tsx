import React from "react";

const Table = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className="
        w-full 
        overflow-hidden 
        border 
        border-gray-200 
        dark:border-gray-700 
        rounded-lg 
        my-4
        mb-8"
    >
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">{children}</table>
      </div>
    </div>
  );
};

export default Table;
