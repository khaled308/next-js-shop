import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

const TableHeader = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg mb-5 shadow">
      <div className="p-4 flex justify-between items-center">
        {/* filter */}
        <div></div>
        <Link
          href="/dashboard/products/new"
          className="btn text-white bg-emerald-500 hover:bg-emerald-600 flex gap-3 w-fit"
        >
          <FaPlus />
          <span className="text-sm">Add</span>
        </Link>
      </div>
    </div>
  );
};

export default TableHeader;
