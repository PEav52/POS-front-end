"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaHome, FaChartBar, FaBox, FaTags, FaShoppingCart, FaCreditCard, FaUndo, FaFileInvoice, FaBell, FaComments, FaCog } from "react-icons/fa"; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string>("");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
    <>
      {/* Sidebar Toggle Button (Mobile Only) */}
      <button 
        className="fixed top-4 left-4 z-50 bg-green-500 text-white p-2 rounded-md md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full bg-gray-200 p-6 pt-14 transition-transform duration-300 z-40 w-64 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-60`}
      >
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={`/${item.name.toLowerCase()}`} 
                className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition 
                  ${activeMenu === item.name ? "bg-green-300" : "hover:bg-green-200"}`}
                onClick={() => {
                  setActiveMenu(item.name);
                  setIsOpen(false); // Close sidebar on mobile when clicking a link
                }}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay (Mobile Only) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
