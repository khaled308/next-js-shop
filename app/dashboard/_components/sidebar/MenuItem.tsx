import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface Props {
  href: string;
  children?: React.ReactNode;
}

const MenuItem = ({ href, children }: Props) => {
  return (
    <li className="py-3 text-gray-900 dark:text-gray-400">
      <Link
        href={href}
        className="px-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-emerald-700 dark:hover:text-gray-200"
      >
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;
