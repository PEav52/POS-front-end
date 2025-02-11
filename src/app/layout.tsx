// RootLayout.tsx
import React from "react";
import Link from "next/link";
import Sidebar from "../_Sidebar";
import { BiSearch, BiX, BiBell, BiCart } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import "./globals.css";
import Navbar from './components/Navbar';

export const metadata = {
  title: "nib-pos-project",
  description: "Sale/Rentals Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ marginLeft: "14%", width: "86%"}}>
          {/* <div style={{ marginLeft: "12%", width: "100%" }}> */}
            <header>
              <div>
              <Navbar />
              </div>
            </header>
            {children}
          </div>
        </div>
        {/* </div> */}
      </body>
    </html>
  );
}
