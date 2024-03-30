import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/styles/main.css";
import DarkModeProvider from "./_providers/DarkModeProvider";
import Navbar from "./_components/navbar/Navbar";

const font = Open_Sans({
  subsets: ["latin"],
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
      <body className={font.className}>
        <DarkModeProvider>
          <div className="bg-gray-50 dark:bg-gray-900 h-screen flex">
            {/* sidebar */}
            <div className="flex flex-col flex-1 w-full">
              <Navbar />
              {children}
            </div>
          </div>
        </DarkModeProvider>
      </body>
    </html>
  );
}
