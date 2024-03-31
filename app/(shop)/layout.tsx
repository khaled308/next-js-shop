import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./main.css";
import Navbar from "./_components/nav/Navbar";
import Footer from "./_components/footer/Footer";
import ToasterProvider from "../shared/providers/ToasterProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Shop",
  description: "Electronics Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col min-h-screen">
          <ToasterProvider />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
