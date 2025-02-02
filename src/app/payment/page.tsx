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
    { TransactionID: "TXN 1", CustomerName: "Vanna Soeun", Type: "Sale", Items: "Evening Gown", PaymentMethod: "Credit Card", TotalPaid: "$200.00", Status: "Paid", Date_Time: "2025-01-01 10:00:00", StaffName: "Linda Heng" },
    { TransactionID: "TXN 2", CustomerName: "Sokha Kim", Type: "Sale", Items: "Cocktail Dress", PaymentMethod: "Cash", TotalPaid: "$100.00", Status: "Paid", Date_Time: "2025-01-02 11:15:00", StaffName: "Nita Heng" },
    { TransactionID: "TXN 3", CustomerName: "John Doe", Type: "Sale", Items: "Product 1", PaymentMethod: "Credit Card", TotalPaid: "$150.00", Status: "Paid", Date_Time: "2025-01-03 12:30:00", StaffName: "Jane Doe" },
    { TransactionID: "TXN 4", CustomerName: "Sophea Chheng", Type: "Sale", Items: "Tuxedo", PaymentMethod: "Debit Card", TotalPaid: "$250.00", Status: "Paid", Date_Time: "2025-01-04 14:00:00", StaffName: "Pov Ly" },
    { TransactionID: "TXN 5", CustomerName: "Rithy Chao", Type: "Sale", Items: "Bridal Veil", PaymentMethod: "Cash", TotalPaid: "$50.00", Status: "Paid", Date_Time: "2025-01-05 15:45:00", StaffName: "Sopheap Kim" },
    { TransactionID: "TXN 6", CustomerName: "Mony Dara", Type: "Sale", Items: "Prom Dress", PaymentMethod: "Credit Card", TotalPaid: "$120.00", Status: "Paid", Date_Time: "2025-01-06 16:10:00", StaffName: "Sothy Ny" },
    { TransactionID: "TXN 7", CustomerName: "Chan Rith", Type: "Sale", Items: "Formal Suit", PaymentMethod: "Credit Card", TotalPaid: "$200.00", Status: "Paid", Date_Time: "2025-01-07 17:25:00", StaffName: "Kanika Sar" },
    { TransactionID: "TXN 8", CustomerName: "Pov Lek", Type: "Sale", Items: "Jumpsuit", PaymentMethod: "Cash", TotalPaid: "$110.00", Status: "Paid", Date_Time: "2025-01-08 18:00:00", StaffName: "Veasna Vong" },
    { TransactionID: "TXN 9", CustomerName: "Vireak Prak", Type: "Sale", Items: "Casual Dress", PaymentMethod: "Debit Card", TotalPaid: "$80.00", Status: "Paid", Date_Time: "2025-01-09 19:20:00", StaffName: "Rin Mo" },
    { TransactionID: "TXN 10", CustomerName: "Narin Keo", Type: "Sale", Items: "Ball Gown", PaymentMethod: "Credit Card", TotalPaid: "$300.00", Status: "Paid", Date_Time: "2025-01-10 20:30:00", StaffName: "Sophal Ying" },
    { TransactionID: "TXN 11", CustomerName: "Phearom Sok", Type: "Sale", Items: "Shirt and Tie Set", PaymentMethod: "Cash", TotalPaid: "$70.00", Status: "Paid", Date_Time: "2025-01-11 21:15:00", StaffName: "Vannak Ny" },
    { TransactionID: "TXN 12", CustomerName: "Ratanak Im", Type: "Sale", Items: "Suit Jacket", PaymentMethod: "Debit Card", TotalPaid: "$180.00", Status: "Paid", Date_Time: "2025-01-12 22:00:00", StaffName: "Sovath Kim" },
    { TransactionID: "TXN 13", CustomerName: "Leakhena Chhouk", Type: "Sale", Items: "Skirt Set", PaymentMethod: "Credit Card", TotalPaid: "$90.00", Status: "Paid", Date_Time: "2025-01-13 10:45:00", StaffName: "Mony Nha" },
    { TransactionID: "TXN 14", CustomerName: "Borey Thun", Type: "Sale", Items: "Blazer", PaymentMethod: "Cash", TotalPaid: "$150.00", Status: "Paid", Date_Time: "2025-01-14 11:30:00", StaffName: "Thida Keo" },
    { TransactionID: "TXN 15", CustomerName: "Sreypov Sovann", Type: "Sale", Items: "Wedding Veil", PaymentMethod: "Credit Card", TotalPaid: "$50.00", Status: "Paid", Date_Time: "2025-01-15 12:00:00", StaffName: "Kosal Yi" },
    { TransactionID: "TXN 16", CustomerName: "Malis Sem", Type: "Sale", Items: "Evening Dress", PaymentMethod: "Debit Card", TotalPaid: "$180.00", Status: "Paid", Date_Time: "2025-01-16 13:00:00", StaffName: "Kiry Vong" },
    { TransactionID: "TXN 17", CustomerName: "Vandy Sour", Type: "Sale", Items: "Summer Dress", PaymentMethod: "Credit Card", TotalPaid: "$120.00", Status: "Paid", Date_Time: "2025-01-17 14:25:00", StaffName: "Sok Heng" },
    { TransactionID: "TXN 18", CustomerName: "Chheang Vong", Type: "Sale", Items: "Casual Shirt", PaymentMethod: "Cash", TotalPaid: "$60.00", Status: "Paid", Date_Time: "2025-01-18 15:00:00", StaffName: "Sopheak Lim" },
    { TransactionID: "TXN 19", CustomerName: "Sothea Kim", Type: "Sale", Items: "Blouse", PaymentMethod: "Credit Card", TotalPaid: "$70.00", Status: "Paid", Date_Time: "2025-01-19 16:10:00", StaffName: "Vanna Kim" },
    { TransactionID: "TXN 20", CustomerName: "Dara Tith", Type: "Sale", Items: "Suit", PaymentMethod: "Debit Card", TotalPaid: "$200.00", Status: "Paid", Date_Time: "2025-01-20 17:30:00", StaffName: "Vathana Keo" }
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
