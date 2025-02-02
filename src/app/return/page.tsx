"use client";
import React, { useState } from "react";
import { IoIosMore, IoIosSearch } from "react-icons/io";
import { FaHome, FaChartBar, FaBox, FaTags, FaShoppingCart, FaCreditCard, FaUndo, FaFileInvoice, FaBell, FaComments, FaCog } from "react-icons/fa"; // Import icons from react-icons
import { IoFilterSharp } from "react-icons/io5";
import { LuArrowDownUp } from "react-icons/lu";
import { TfiMoreAlt } from "react-icons/tfi";
import { BiPaperclip } from "react-icons/bi";

const Return = () => {
  const [activeNav, setActiveMenu] = useState<string>("All");
  const NavMenubar = ["All", "Pending", "Completed", "Refunded", "Rejected"];
  const menuIcon = [IoIosSearch, IoFilterSharp, LuArrowDownUp, IoIosMore];

  const atrituteTitle = [
    "ReturnID",
    "Transaction",
    "Customer",
    "Items",
    "ReturnType",
    "ReturnDate",
    "Condition",
    "Status",
    "RefundAmount",
    "Staff Name",
  ];

  const EntityValue = [
    { id: "RET-001", transaction: "TXN-003", customer: "Vanna Soeun", item: "Evening Gown", transactionType: "Rental Return", date: "2025-01-20", condition: "Good", status: "Completed", amount: "$0.00", staff: "Linda Heng" },
    { id: "RET-002", transaction: "TXN-004", customer: "John Doe", item: "Wedding Dress", transactionType: "Rental Return", date: "2025-01-21", condition: "Excellent", status: "Completed", amount: "$50.00", staff: "Jane Doe" },
    { id: "RET-003", transaction: "TXN-005", customer: "Sokha Kim", item: "Cocktail Dress", transactionType: "Rental Return", date: "2025-01-22", condition: "Good", status: "Completed", amount: "$30.00", staff: "Nita Heng" },
    { id: "RET-004", transaction: "TXN-006", customer: "Sophea Chheng", item: "Tuxedo", transactionType: "Rental Return", date: "2025-01-23", condition: "Excellent", status: "Completed", amount: "$60.00", staff: "Pov Ly" },
    { id: "RET-005", transaction: "TXN-007", customer: "Rithy Chao", item: "Bridal Veil", transactionType: "Rental Return", date: "2025-01-24", condition: "Good", status: "Completed", amount: "$15.00", staff: "Sopheap Kim" },
    { id: "RET-006", transaction: "TXN-008", customer: "Mony Dara", item: "Prom Dress", transactionType: "Rental Return", date: "2025-01-25", condition: "Fair", status: "Completed", amount: "$20.00", staff: "Sothy Ny" },
    { id: "RET-007", transaction: "TXN-009", customer: "Chan Rith", item: "Formal Suit", transactionType: "Rental Return", date: "2025-01-26", condition: "Excellent", status: "Completed", amount: "$45.00", staff: "Kanika Sar" },
    { id: "RET-008", transaction: "TXN-010", customer: "Pov Lek", item: "Jumpsuit", transactionType: "Rental Return", date: "2025-01-27", condition: "Good", status: "Completed", amount: "$35.00", staff: "Veasna Vong" },
    { id: "RET-009", transaction: "TXN-011", customer: "Vireak Prak", item: "Casual Dress", transactionType: "Rental Return", date: "2025-01-28", condition: "Fair", status: "Completed", amount: "$25.00", staff: "Rin Mo" },
    { id: "RET-010", transaction: "TXN-012", customer: "Narin Keo", item: "Ball Gown", transactionType: "Rental Return", date: "2025-01-29", condition: "Good", status: "Completed", amount: "$75.00", staff: "Sophal Ying" },
    { id: "RET-011", transaction: "TXN-013", customer: "Phearom Sok", item: "Shirt and Tie Set", transactionType: "Rental Return", date: "2025-01-30", condition: "Excellent", status: "Completed", amount: "$40.00", staff: "Vannak Ny" },
    { id: "RET-012", transaction: "TXN-014", customer: "Ratanak Im", item: "Suit Jacket", transactionType: "Rental Return", date: "2025-01-31", condition: "Good", status: "Completed", amount: "$55.00", staff: "Sovath Kim" },
    { id: "RET-013", transaction: "TXN-015", customer: "Leakhena Chhouk", item: "Skirt Set", transactionType: "Rental Return", date: "2025-02-01", condition: "Excellent", status: "Completed", amount: "$50.00", staff: "Mony Nha" },
    { id: "RET-014", transaction: "TXN-016", customer: "Borey Thun", item: "Blazer", transactionType: "Rental Return", date: "2025-02-02", condition: "Good", status: "Completed", amount: "$60.00", staff: "Thida Keo" },
    { id: "RET-015", transaction: "TXN-017", customer: "Sreypov Sovann", item: "Wedding Veil", transactionType: "Rental Return", date: "2025-02-03", condition: "Fair", status: "Completed", amount: "$20.00", staff: "Kosal Yi" },
    { id: "RET-016", transaction: "TXN-018", customer: "Malis Sem", item: "Evening Dress", transactionType: "Rental Return", date: "2025-02-04", condition: "Good", status: "Completed", amount: "$40.00", staff: "Kiry Vong" },
    { id: "RET-017", transaction: "TXN-019", customer: "Vandy Sour", item: "Summer Dress", transactionType: "Rental Return", date: "2025-02-05", condition: "Excellent", status: "Completed", amount: "$35.00", staff: "Sok Heng" },
    { id: "RET-018", transaction: "TXN-020", customer: "Chheang Vong", item: "Casual Shirt", transactionType: "Rental Return", date: "2025-02-06", condition: "Good", status: "Completed", amount: "$25.00", staff: "Sopheak Lim" },
    { id: "RET-019", transaction: "TXN-021", customer: "Sothea Kim", item: "Blouse", transactionType: "Rental Return", date: "2025-02-07", condition: "Fair", status: "Completed", amount: "$15.00", staff: "Vanna Kim" },
    { id: "RET-020", transaction: "TXN-022", customer: "Dara Tith", item: "Suit", transactionType: "Rental Return", date: "2025-02-08", condition: "Excellent", status: "Completed", amount: "$65.00", staff: "Vathana Keo" }
  ];

  return (
    <section className="mx-5">
      <div className="font-inter flex flex-col">
        {/* Header */}
        <div className="flex items-center my-7 pl-2 text-xl md:text-2xl">
          <FaUndo className="text-3xl" />
          <h4 className="font-bold ms-3">Return</h4>
        </div>
        {/* Navigation Menu & Icons */}
        <nav className="flex gap-2 justify-between items-start lg:items-center">
          {/* Navigation Tabs */}
          <div className="bg-gray-300 bg-opacity-70 w-[200px] lg:w-[573px] rounded-lg">
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
                  <ul className="flex ms-1 w-full text-xs md:text-sm lg:text-[14px] font-sans items-center justify-between">
                    {atrituteTitle.map((title, index) => (
                      <li key={index} className="w-auto lg:w-auto xl:w-28">
                        {title}
                      </li>
                    ))}
                  </ul>
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
      
                  {/*============ Return Data ==============*/}
                  <ul className="flex ms-3 w-full text-xs md:text-sm lg:text-[14px] font-sans items-center justify-between">
                    <li className="w-24">{item.id}</li>
                    <li className="w-24  break-words whitespace-normal">
                      {item.transaction}
                    </li>
                    <li className="w-20 ml-3">{item.customer}</li>
                    <li className="w-24 ml-5 break-words whitespace-normal">
                      {item.item}
                    </li>
                    <li className="w-24">{item.transactionType}</li>
                    <li className="w-24">{item.date}</li>
                    <li className="w-24  pl-3">{item.condition}</li>
                    <li className="w-24 pl-4 break-words whitespace-normal">
                      {item.status}
                    </li>
                    <li className="w-24 pl-4 break-words whitespace-normal">
                      {item.amount}
                    </li>
                    <li className="w-24 pl-4 break-words whitespace-normal">
                      {item.staff}
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

      <div className="mt-4 flex space-x-4">Header</div>
    </section>
  );
};

export default Return;
