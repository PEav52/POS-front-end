"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaChartBar, FaBox, FaTags, FaShoppingCart, FaCreditCard, FaUndo, FaFileInvoice, FaBell, FaComments, FaCog } from "react-icons/fa"; // Import icons from react-icons

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState<string>("");

  const menuItems = [
    { name: "Overview", icon: <FaHome /> },
    { name: "Analytics", icon: <FaChartBar /> },
    { name: "Products", icon: <FaBox /> },
    { name: "Sale", icon: <FaTags /> },
    { name: "Rent", icon: <FaShoppingCart /> },
    { name: "Payment", icon: <FaCreditCard /> },
    { name: "Return", icon: <FaUndo /> },
    { name: "Invoice", icon: <FaFileInvoice /> },
    { name: "Notifications", icon: <FaBell /> },
    { name: "Feedback", icon: <FaComments /> },
    { name: "Setting", icon: <FaCog /> }
  ];

  return (
    <aside style={{ width: "12%", height: "100vh", backgroundColor: "#F3F3F3", padding: "20px", paddingTop: "50px", color: "black", position: "fixed", top: 0, left: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
      {menuItems.map((item) => (
        <Link 
          href={`/${item.name.toLowerCase()}`} 
          key={item.name} 
          style={{
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "5px",
            transition: "background 0.3s",
            textDecoration: "none",
            color: "black",
            display: "flex", // Use flex to position the icon and text together
            alignItems: "center", // Center align the items vertically
            backgroundColor: activeMenu === item.name ? "#A0EDA8" : "transparent" // Active item styling
          }}
          onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = "#A0EDA8"} // Hover effect
          onMouseLeave={(e) => {
            if (activeMenu !== item.name) {
              (e.target as HTMLElement).style.backgroundColor = "transparent";
            }
          }}
          onClick={() => setActiveMenu(item.name)} // Set active item on click
        >
          <span style={{ marginRight: "10px" }}>{item.icon}</span> {/* Icon with margin */}
          {item.name}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
