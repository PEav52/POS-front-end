"use client";
import React, { useState } from "react";
import { FaFileInvoice } from "react-icons/fa";
import { IoIosMore, IoIosSearch } from "react-icons/io";
import { IoFilterSharp } from "react-icons/io5";
import { LuArrowDownUp } from "react-icons/lu";
import { TfiMoreAlt } from "react-icons/tfi";
const invoice = () => {

  const [activeNav, setActiveMenu] = useState<string>("All");

  const NavMenubar = ["All", "Paid", "Pending", "Overdue", "Partially Paid"];

  const menuIcon = [IoIosSearch, IoFilterSharp, LuArrowDownUp, IoIosMore];

  const atrituteTitle = [
    "InvoiceID",
    "Transaction",
    "Customer",
    "Type",
    "TotalAmount",
    "PaidAmount",
    "DueAmount",
    "Status",
    "Date_Time",
    "StaffName",
  ];

  const EntityValue = [
    { InvoiceID: "INV-001", TransactionID: "TXN 1", CustomerName: "Vanna Soeun", Type: "Sale", TotalAmount: "$200.00", PaidAmount: "$200.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-01 10:00:00", StaffName: "Linda Heng" },
    { InvoiceID: "INV-002", TransactionID: "TXN 2", CustomerName: "Sokha Kim", Type: "Sale", TotalAmount: "$100.00", PaidAmount: "$100.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-02 11:15:00", StaffName: "Nita Heng" },
    { InvoiceID: "INV-003", TransactionID: "TXN 3", CustomerName: "John Doe", Type: "Sale", TotalAmount: "$150.00", PaidAmount: "$150.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-03 12:30:00", StaffName: "Jane Doe" },
    { InvoiceID: "INV-004", TransactionID: "TXN 4", CustomerName: "Sophea Chheng", Type: "Sale", TotalAmount: "$250.00", PaidAmount: "$250.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-04 14:00:00", StaffName: "Pov Ly" },
    { InvoiceID: "INV-005", TransactionID: "TXN 5", CustomerName: "Rithy Chao", Type: "Sale", TotalAmount: "$50.00", PaidAmount: "$50.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-05 15:45:00", StaffName: "Sopheap Kim" },
    { InvoiceID: "INV-006", TransactionID: "TXN 6", CustomerName: "Mony Dara", Type: "Sale", TotalAmount: "$120.00", PaidAmount: "$120.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-06 16:10:00", StaffName: "Sothy Ny" },
    { InvoiceID: "INV-007", TransactionID: "TXN 7", CustomerName: "Chan Rith", Type: "Sale", TotalAmount: "$200.00", PaidAmount: "$200.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-07 17:25:00", StaffName: "Kanika Sar" },
    { InvoiceID: "INV-008", TransactionID: "TXN 8", CustomerName: "Pov Lek", Type: "Sale", TotalAmount: "$110.00", PaidAmount: "$110.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-08 18:00:00", StaffName: "Veasna Vong" },
    { InvoiceID: "INV-009", TransactionID: "TXN 9", CustomerName: "Vireak Prak", Type: "Sale", TotalAmount: "$80.00", PaidAmount: "$80.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-09 19:20:00", StaffName: "Rin Mo" },
    { InvoiceID: "INV-010", TransactionID: "TXN 10", CustomerName: "Narin Keo", Type: "Sale", TotalAmount: "$300.00", PaidAmount: "$300.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-10 20:30:00", StaffName: "Sophal Ying" },
    { InvoiceID: "INV-011", TransactionID: "TXN 11", CustomerName: "Phearom Sok", Type: "Sale", TotalAmount: "$70.00", PaidAmount: "$70.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-11 21:15:00", StaffName: "Vannak Ny" },
    { InvoiceID: "INV-012", TransactionID: "TXN 12", CustomerName: "Ratanak Im", Type: "Sale", TotalAmount: "$180.00", PaidAmount: "$180.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-12 22:00:00", StaffName: "Sovath Kim" },
    { InvoiceID: "INV-013", TransactionID: "TXN 13", CustomerName: "Leakhena Chhouk", Type: "Sale", TotalAmount: "$90.00", PaidAmount: "$90.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-13 10:45:00", StaffName: "Mony Nha" },
    { InvoiceID: "INV-014", TransactionID: "TXN 14", CustomerName: "Borey Thun", Type: "Sale", TotalAmount: "$150.00", PaidAmount: "$150.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-14 11:30:00", StaffName: "Thida Keo" },
    { InvoiceID: "INV-015", TransactionID: "TXN 15", CustomerName: "Sreypov Sovann", Type: "Sale", TotalAmount: "$50.00", PaidAmount: "$50.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-15 12:00:00", StaffName: "Kosal Yi" },
    { InvoiceID: "INV-016", TransactionID: "TXN 16", CustomerName: "Malis Sem", Type: "Sale", TotalAmount: "$180.00", PaidAmount: "$180.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-16 13:00:00", StaffName: "Kiry Vong" },
    { InvoiceID: "INV-017", TransactionID: "TXN 17", CustomerName: "Vandy Sour", Type: "Sale", TotalAmount: "$120.00", PaidAmount: "$120.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-17 14:25:00", StaffName: "Sok Heng" },
    { InvoiceID: "INV-018", TransactionID: "TXN 18", CustomerName: "Chheang Vong", Type: "Sale", TotalAmount: "$60.00", PaidAmount: "$60.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-18 15:00:00", StaffName: "Sopheak Lim" },
    { InvoiceID: "INV-019", TransactionID: "TXN 19", CustomerName: "Sothea Kim", Type: "Sale", TotalAmount: "$70.00", PaidAmount: "$70.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-19 16:10:00", StaffName: "Vanna Kim" },
    { InvoiceID: "INV-020", TransactionID: "TXN 20", CustomerName: "Dara Tith", Type: "Sale", TotalAmount: "$200.00", PaidAmount: "$200.00", DueAmount: "$0.00", Status: "Paid", Date_Time: "2025-01-20 17:30:00", StaffName: "Vathana Keo" }
  ];
  

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
                        <ul className="flex w-full text-xs md:text-sm lg:text-[14px] font-sans items-center justify-between">
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
                          <li className="w-24">{item.InvoiceID}</li>
                          <li className="w-24  break-words whitespace-normal">
                            {item.TransactionID}
                          </li>
                          <li className="w-20 ml-3">{item.CustomerName}</li>
                          <li className="w-24 ml-5 break-words whitespace-normal">
                            {item.Type}
                          </li>
                          <li className="w-24">{item.TotalAmount}</li>
                          <li className="w-24">{item.PaidAmount}</li>
                          <li className="w-24  pl-3">{item.DueAmount}</li>
                          <li className="w-24 pl-4 break-words whitespace-normal">
                            {item.Status}
                          </li>
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

      <div className="mt-4 flex space-x-4">Header</div>
    </section>
  );
};

export default invoice;
