// RootLayout.tsx
import React from "react";
import Link from "next/link";
import Sidebar from "./_Sidebar";

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
          <div style={{ marginLeft: "14%", width: "86%", padding: "10px" }}>
            <header>
              <div>
                <div style={{display: "flex", backgroundColor: "#9EEEA6", height: 50, paddingBottom: 20}}>
                  <div style={{paddingRight: 30, paddingLeft: 20}}>
                    <h1>KHCode</h1>
                  </div>
                  <div style={{display: "flex", paddingRight: 100, marginTop: 10, gap: 10}}>
                    <h3><Link href={"/"}>Home</Link></h3>
                  </div>
                </div>
              </div>
            </header>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}