"use client";
import React, { useState } from "react";
import { FaFileInvoice } from "react-icons/fa";
import { IoIosMore, IoIosSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { LuArrowDownUp } from "react-icons/lu";
const invoice = () => {
  const [activeNav, setActiveMenu] = useState<string>("All");
  const NavMenubar = ["All", "Paid", "Pending", "Overdue", "Partially Paid"];
  const menuIcon = [IoIosSearch, IoFilterSharp, LuArrowDownUp, IoIosMore];
  return (
    <section className="mx-5">
      <div className="font-inter flex flex-col">
        {/* Header */}
        <div className="flex items-center my-7 pl-2 text-xl md:text-2xl">
          <FaFileInvoice />
          <h4 className="font-bold ms-3">Invoice</h4>
        </div>
        {/* Navigation Menu & Icons */}
        <nav className="flex gap-2 justify-between items-start lg:items-center">
          {/* Navigation Tabs */}
          <div className="bg-gray-300 bg-opacity-70 w-[200px] lg:w-[548px] rounded-lg">
            <ul className="listMenu">
              {NavMenubar.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setActiveMenu(item)}
                  className="cursor-pointer"
                >
                  <a
                    href="#"
                    className={`block px-4 md:px-6 py-1 rounded-lg transition ${
                      activeNav === item ? "bg-white" : "hover:bg-gray-100"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Icons Section */}
          <div className="flex space-x-2 mt-3 lg:mt-0 ">
            {menuIcon.map((Icon, id) => (
              <div key={id} className="iconMenu">
                <Icon className="text-xl" />
              </div>
            ))}
          </div>
        </nav>
      </div>
      <div className="mt-4 flex space-x-4">Header</div>
    </section>
  );
};

export default invoice;
