import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import ProfilePic from "../components/ProfilePic";
import "../styles/styles.css";

export const metadata: Metadata = {
  title: "Yasin's Blog",
  description: "Created by Yasin Davids",
};
// dtubdtubtd
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pastel">
        <ProfilePic />
        {children}
      </body>
    </html>
  );
}
