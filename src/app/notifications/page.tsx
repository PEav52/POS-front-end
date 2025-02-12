"use client";

import React, { useState } from "react";
import { FaFileInvoice } from "react-icons/fa";
import { IoIosMore, IoIosSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { LuArrowDownUp } from "react-icons/lu";
import { TfiMoreAlt } from "react-icons/tfi";

export default function Notifications() {
  const [activeNav, setActiveNav] = useState("All");
  const [selectedNotifications, setSelectedNotifications] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navMenubar = ["All", "Unread", "Read", "Important"];

  const notifications = [
    {
      id: "NOTI-001",
      type: "Payment",
      message: "Payment received: $50 from Borey Phan",
      customer: "Borey Phan",
      date: "2025-02-07 10:30 AM",
      status: "Read",
    },
    {
      id: "NOTI-002",
      type: "Rental",
      message: "Rental due soon: Dara Kim's tuxedo (Due: 2025-01-27)",
      customer: "Dara Kim",
      date: "2025-02-06 09:15 AM",
      status: "Unread",
    },
    {
      id: "NOTI-003",
      type: "Stock Alert",
      message: "Low stock: Only 2 wedding dresses left",
      customer: "Staff",
      date: "2025-02-05 08:00 PM",
      status: "Read",
    },
    {
      id: "NOTI-004",
      type: "Return",
      message: "Return request pending: Sokha Chan (Damaged Item)",
      customer: "Sokha Chan",
      date: "2025-02-04 02:45 PM",
      status: "Unread",
    },
    {
      id: "NOTI-005",
      type: "Overdue",
      message: "Overdue rental: Vanna Soeun's gown (3 days late)",
      customer: "Vanna Soeun",
      date: "2025-02-03 01:10 PM",
      status: "Read",
    },
  ];

  const statusStyles = {
    Read: "text-green-600",
    Unread: "text-red-600",
  };

  const statusIcons = {
    Read: "✅",
    Unread: "🔴",
  };

  const handleCheckboxChange = (notificationId: string) => {
    setSelectedNotifications((prevSelected) =>
      prevSelected.includes(notificationId)
        ? prevSelected.filter((id) => id !== notificationId)
        : [...prevSelected, notificationId]
    );
  };

  const handleAction = (action: string, notification: any) => {
    alert(`${action} clicked for ${notification.id}`);
    setOpenDropdown(null); // Close dropdown after action
  };

  const filteredNotifications = notifications.filter((item) => {
    if (activeNav === "All") return true;
    return item.status === activeNav;
  });

  return (
    <section className="mx-5">
      <div className="font-inter flex flex-col">
        {/* Header */}
        <div className="flex items-center my-7 pl-2 text-xl md:text-2xl">
          <FaFileInvoice />
          <h4 className="font-bold ms-3">Notifications</h4>
        </div>

        {/* Navigation Menu & Icons */}
        <nav className="flex justify-between items-center mb-4">
          {/* Navigation Tabs */}
          <div className="bg-gray-300 bg-opacity-70 rounded-lg">
            <ul className="flex space-x-2 p-2">
              {navMenubar.map((item) => (
                <li
                  key={item}
                  onClick={() => setActiveNav(item)}
                  className={`cursor-pointer px-4 py-1 rounded-lg transition ${
                    activeNav === item ? "bg-white" : "hover:bg-gray-100"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Icons Section */}
          <div className="flex items-center space-x-2 mt-3 lg:mt-0">
            <input
              type="text"
              placeholder="Search item"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-2 py-[5px] text-sm border border-gray-400 rounded w-52"
            />
            <IoIosSearch className="text-lg cursor-pointer" />
            <IoFilterSharp className="text-lg cursor-pointer" />
            <LuArrowDownUp className="text-lg cursor-pointer" />
            <IoIosMore className="text-lg cursor-pointer" />
          </div>
        </nav>
      </div>

      {/* Notifications Table Header */}
      <div className="mt-3 p-4 lg:p-5 bg-gray-300 bg-opacity-70 rounded-t-md">
        <div className="grid grid-cols-[auto_1fr_30px] items-center">
          <input type="checkbox" className="w-5 h-5 border-gray-500 rounded-md cursor-pointer" />
          <ul className="flex w-full text-sm font-sans justify-between">
            <li className="w-28 text-center">Notification ID</li>
            <li className="w-20">Type</li>
            <li className="w-48">Message</li>
            <li className="w-28">Customer / Staff</li>
            <li className="w-28">Date & Time</li>
            <li className="w-20">Status</li>
          </ul>
        </div>
      </div>

      {/* Notifications List */}
      <div className="scrollbar h-[550px] lg:h-[485px] overflow-y-scroll">
        {filteredNotifications.map((item) => (
          <div key={item.id} className="flex p-4 lg:px-5 mb-2 items-center border border-gray-400 shadow-md">
            <input
              type="checkbox"
              className="w-5 h-5 border-gray-500 rounded-md cursor-pointer"
              checked={selectedNotifications.includes(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <ul className="flex ms-3 w-full text-sm font-sans justify-between">
              <li className="w-28 pt-4">{item.id}</li>
              <li className="w-24 pt-4">{item.type}</li>
              <li className="w-56 pt-4 break-words">{item.message}</li>
              <li className="w-28 pt-4">{item.customer}</li>
              <li className="w-28 pt-4">{item.date}</li>
              <li className={`w-20 ${statusStyles[item.status]} flex items-center`}>
                <span className="mr-2">{item.status}</span>
                {statusIcons[item.status]}
              </li>
              {/* More Icon with Dropdown */}
              <li className="cursor-pointer pt-3 relative">
                <TfiMoreAlt
                  className="text-lg"
                  onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                />
                {openDropdown === item.id && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 shadow-md rounded-md z-10">
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleAction("view", item)}>View</li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleAction("edit", item)}>Edit</li>
                      <li className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer" onClick={() => handleAction("delete", item)}>Delete</li>
                      <li className="px-4 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer" onClick={() => setOpenDropdown(null)}>No Change</li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
