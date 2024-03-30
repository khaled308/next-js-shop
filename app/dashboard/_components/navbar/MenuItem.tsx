import React from "react";
import Link from "next/link";

const MenuItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li className="justify-between font-serif font-medium py-2 pl-4 transition-colors duration-150 hover:bg-gray-100 text-gray-500 hover:text-emerald-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
      <Link href={href}>
        <span className="flex items-center text-sm">{children}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
