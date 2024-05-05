import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Navbar from "./components/Navbar";
import TopBar from './components/TopBar'

export const metadata: Metadata = {
  title: "Zubair Dev | Front-End Web Developer Portfolio",
  description: "Explore the portfolio of Zubair Dev, a skilled front-end web developer, showcasing a collection of projects, skills, and experience in creating modern and user-friendly web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <TopBar />
        <Navbar />
        <div className="px-14">
          {children}
        </div>
      </body>
    </html>
  );
}
