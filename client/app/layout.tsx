import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import SideBar from "@/app/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <head>
        <title>Payment</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${inter.className} min-h-screen h-full w-full dark:bg-gray-900`}
      >
        <header>
          <Navbar />
        </header>
        <main className="flex">
          <SideBar />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
