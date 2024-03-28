import Link from "next/link";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { Redressed } from "next/font/google";
import { Search } from "./Search";

const redressed = Redressed({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-slate-200 shadow-sm">
      <div className="container">
        <div className="flex justify-between items-center border-b py-3">
          <Link
            href="/"
            className={`text-2xl font-bold ${redressed.className}`}
          >
            Shop
          </Link>
          <Search />
          <div className="flex gap-2 text-xl font-bold">
            <Link href="#">
              <CiShoppingCart />
            </Link>
            <div>
              <CiUser className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center"></div>
      </div>
    </nav>
  );
};

export default Navbar;
