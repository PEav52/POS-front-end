"use client";
import React, { useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { IoIosMore, IoIosSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { LuArrowDownUp } from "react-icons/lu";
import { MdMoreHoriz } from "react-icons/md";
import { TfiMoreAlt } from "react-icons/tfi";

const Payment = () => {
  const [activeNav, setActiveMenu] = useState<string>("All");
  const NavMenubar = [
    "All",
    "Paid",
    "Pending",
    "Overdue",
    "Refunded",
    "Canceled",
  ];

  const atrituteTitle = [
    "Transaction ID",
    "Customer Name",
    "Type (Sale/Rental)",
    "Items",
    "Payment Method",
    "Total Paid",
    "Status",
    "Date & Time",
    "Staff Name",
  ];
  const EntityValue = [
    {
      TransactionID: "TXN 1",
      CustomerName: "John Doe",
      Type: "Sale",
      Items: "Product 1",
      PaymentMethod: "Credit Card",
      TotalPaid: "$150.00",
      Status: "Paid",
      Date_Time: "2022-01-01 10:00:00",
      StaffName: "John Doe",
    },
    {
      TransactionID: "TXN 2",
      CustomerName: "John Doe",
      Type: "Sale",
      Items: "Product 1",
      PaymentMethod: "Credit Card",
      TotalPaid: "$150.00",
      Status: "Paid",
      Date_Time: "2022-01-01 10:00:00",
      StaffName: "John Doe",
    },
    {
      TransactionID: "TXN 2",
      CustomerName: "John Doe",
      Type: "Sale",
      Items: "ProducthhhManagement",
      PaymentMethod: "Credit Card",
      TotalPaid: "$150.00",
      Status: "Paid",
      Date_Time: "2022-01-01 10:00:00",
      StaffName: "John Doe",
    },
    {
      TransactionID: "TXN 3",
      CustomerName: "John Doe",
      Type: "Sale",
      Items: "Product 1",
      PaymentMethod: "Credit Card",
      TotalPaid: "$150.00",
      Status: "Paid",
      Date_Time: "2022-01-01 10:00:00",
      StaffName: "John Doe",
    },
    {
      TransactionID: "TXN 3",
      CustomerName: "John Doe",
      Type: "Sale",
      Items: "Product 1",
      PaymentMethod: "Credit Card",
      TotalPaid: "$150.00",
      Status: "Paid",
      Date_Time: "2022-01-01 10:00:00",
      StaffName: "John Doe",
    },
    {
      TransactionID: "TXN 3",
      CustomerName: "John Doe",
      Type: "Sale",
      Items: "Product 1",
      PaymentMethod: "Credit Card",
      TotalPaid: "$150.00",
      Status: "Paid",
      Date_Time: "2022-01-01 10:00:00",
      StaffName: "John Doe",
    },
    {
      TransactionID: "TXN 3",
      CustomerName: "John Doe",
      Type: "Sale",
      Items: "Product 1",
      PaymentMethod: "Credit Card",
      TotalPaid: "$150.00",
      Status: "Paid",
      Date_Time: "2022-01-01 10:00:00",
      StaffName: "John Doe",
    },
  ];

  const menuIcon = [IoIosSearch, IoFilterSharp, LuArrowDownUp, TfiMoreAlt];
  return (
    <section className="mx-5">
      <div className="font-inter flex flex-col">
        {/* Header */}
        <div className="flex items-center my-6 pl-2 text-xl md:text-2xl">
          <FaCreditCard />
          <h4 className="font-bold ms-3">Payment</h4>
        </div>
        {/* ==============Navigation Menu & Icons ==========*/}
        <nav className="flex gap-2 justify-between items-start lg:items-center">
          {/* Navigation Tabs */}
          <div className="bg-gray-300 bg-opacity-70 w-[200px] lg:w-[660px] rounded">
            <ul className="listMenu">
              {NavMenubar.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setActiveMenu(item)}
                  className="cursor-pointer"
                >
                  <a
                    href="#"
                    className={`block px-4 md:px-7 py-[6px] text-sm   rounded transition ${
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
                <Icon className="text-lg" />
              </div>
            ))}
          </div>
        </nav>
        {/* ===============atribute ========================*/}
        <div className="mt-3 p-4 lg:p-5 bg-gray-300 bg-opacity-70 rounded-t-md">
          <div className="grid grid-cols-[auto_1fr_30px] items-center">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="all"
                className="w-5 h-5 border-2 border-gray-500 rounded-md cursor-pointer"
              />
            </label>
            <ul className="flex ms-3 w-full text-xs md:text-sm lg:text-[14px] font-sans  items-center justify-between mr-14">
              {atrituteTitle.map((title, index) => (
                <li key={index} className="w-auto lg:w-auto xl:w-28">
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* =================Table=========================== */}
      <div className="scrollbar h-[550px] lg:h-[485px]  overflow-y-scroll">
        {EntityValue.map((item, index) => (
          <div
            key={index}
            className="flex p-4 lg:h-[4.5rem] lg:px-5 mb-2 items-center border border-gray-400 shadow-md shadow-gray-300"
          >
            {/* ==========Checkbox =========================*/}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="item"
                className="w-5 h-5 border-2 border-gray-500 rounded-md cursor-pointer"
              />
            </label>

            {/*============ Transaction Data ==============*/}
            <ul className="flex ms-3 w-full text-xs md:text-sm lg:text-[14px] font-sans items-center justify-between">
              <li className="w-24">{item.TransactionID}</li>
              <li className="w-24  break-words whitespace-normal">
                {item.CustomerName}
              </li>
              <li className="w-20 ml-3">{item.Type}</li>
              <li className="w-24 ml-5 break-words whitespace-normal">
                {item.Items}
              </li>
              <li className="w-24">{item.PaymentMethod}</li>
              <li className="w-24">{item.TotalPaid}</li>
              <li className="w-24  pl-3">{item.Status}</li>
              <li className="w-24 pl-4 break-words whitespace-normal">
                {item.Date_Time}
              </li>
              <li className="w-24 pl-4 break-words whitespace-normal">
                {item.StaffName}
              </li>

              {/* More Options Icon */}
              <li className="cursor-pointer">
                <span className="text-lg">
                  <TfiMoreAlt />
                </span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Payment;