import type { Metadata } from "next";
import "./globals.css";
import Profile from "../components/Profile";
import "../styles/styles.css";

export const metadata: Metadata = {
  title: "Yasin's Blog",
  description: "Created by Yasin Davids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pastel">
        <Profile />
        {children}
      </body>
    </html>
  );
}
