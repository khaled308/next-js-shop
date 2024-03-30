import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-slate-700 p-4">
      <div className="container flex justify-between gap-3 flex-wrap">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Shop Categories
          </h2>
          <ul className="space-y-2">
            <li>Phones</li>
            <li>Laptops</li>
            <li>Watches</li>
            <li>TVs</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Customer Service
          </h2>
          <ul className="space-y-2">
            <li>Contact US</li>
            <li>Shipping</li>
            <li>Return Policy</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Follow US</h2>
          <ul className="flex gap-2">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
