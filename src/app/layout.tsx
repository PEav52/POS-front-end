// RootLayout.tsx
import React from "react";
import Link from "next/link";
import Sidebar from "./_Sidebar";
import { BiSearch, BiX, BiBell, BiCart } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

export const metadata = {
  title: "nib-pos-project",
  description: "Sale/Rentals Management System"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return(
    <html lang="en">
      <body>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ marginLeft: "15%", width: "86%"}}>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}