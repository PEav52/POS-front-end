// RootLayout.tsx
import React from "react";
import Link from "next/link";
import Sidebar from "./_Sidebar";
import { BiSearch, BiX, BiBell, BiCart } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import "./globals.css";

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
          <div style={{ marginLeft: "15%", width: "86%"}}>
          <div style={{ marginLeft: "12%", width: "100%" }}>
            <header>
              <div>
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#9EEEA6",
                    height: 50,
                    alignItems: "center",
                  }}
                >
                  <div style={{ paddingRight: 30, paddingLeft: 20 }}>
                    <h1>KHCode</h1>
                  </div>
                  <div>
                    <h3>
                      <Link href={"/"}>Home</Link>
                    </h3>
                  </div>
                </div>
              </div>
            </header>
            {children}
          </div>
        </div>
        </div>
      </body>
    </html>
  );
}
