"use client";
import React, { useEffect, useState } from "react";
import { FaFileInvoice } from "react-icons/fa";
import { TfiMoreAlt } from "react-icons/tfi";
import { MdDelete, MdReviews } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { InvoiceData } from "../Data/data";
import { FaSort } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { FaPercentage } from "react-icons/fa";
import { MdMore } from "react-icons/md";
import { menuIcon } from "../Data/data";
const Payment = () => {
  const [activeNav, setActiveMenu] = useState<string>("All");
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [toggle, setToggle] = useState<number | null>(null);
  const [sort, setsort] = useState<string>("");

  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(InvoiceData.EntityValueReturnInvoice.length).fill(false)
  );
  //============Refresh page=========>
  const handleRefresh = () => {
    window.location.reload();
  };
  // ===Filter Manu=================>
  const filteredData =
    activeNav === "All"
      ? InvoiceData.EntityValueReturnInvoice
      : InvoiceData.EntityValueReturnInvoice.filter(
          (item) => item.status === activeNav
        );
  const handleFillter = (item: string) => {
    setActiveMenu(item);
    setIsAllChecked(false);
    setCheckedItems(new Array(filteredData.length).fill(false));
  };
  // ==== Select checkbox All =======>
  const handleSelectAllChange = () => {
    if (filteredData.length) {
      const updatedCheckedItems = new Array(filteredData.length).fill(
        !isAllChecked
      );
      setCheckedItems(updatedCheckedItems);
      setIsAllChecked(!isAllChecked);
    }
  };
  const handleCheckboxChange = (index: number) => {
    setCheckedItems((prev) => {
      const updatedCheckedItems = [...prev];
      updatedCheckedItems[index] = !updatedCheckedItems[index];
      return updatedCheckedItems;
    });
  };
  // =====Pagination and Toggle========>
  const handleClick = (event: React.MouseEvent<HTMLDivElement>, id: number) => {
    event.stopPropagation();
    setToggle((prev) => (prev === id ? null : id));
  };
  // ========= filter Search status and revers======>
  let getData = filteredData.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  if (toggle === 3) {
    let sortedData = [...filteredData];
    sortedData.sort((a, b) =>
      JSON.stringify(b).localeCompare(JSON.stringify(a))
    );
    getData = sortedData;
  }
  //== Sort Data ==>
  const handleSort = () => {
    if (sort === "asc") {
      InvoiceData.EntityValueReturnInvoice.sort((a, b) =>
        (typeof b.status === "string" ? b.status : "").localeCompare(
          typeof a.status === "string" ? a.status : ""
        )
      );
      setsort("desc");
    } else {
      InvoiceData.EntityValueReturnInvoice.sort((a, b) =>
        (typeof a.status === "string" ? a.status : "").localeCompare(
          typeof b.status === "string" ? b.status : ""
        )
      );
      setsort("asc");
    }
  };
  // ========= Dropdown Handling =======>
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest(".dropdown-menu")) {
        setDropdownIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  // ====================================>
  return (
    <section className="mx-5">
      <div className="font-inter flex flex-col">
        {/* Header */}
        <div className="flex items-center my-6 pl-2 text-xl md:text-2xl">
          <FaFileInvoice />
          <h4 className="font-bold ms-3">Invoice</h4>
        </div>
        {/* Navigation Menu & Icons */}
        <nav className="In-navbar">
          <div className="In-menubar">
            <ul className="listMenu">
              {InvoiceData.NavMenubarInvoice.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleFillter(item)}
                  className="cursor-pointer"
                >
                  <span
                    className={`block px-4 md:px-7 py-[6px] text-sm rounded transition ${
                      activeNav === item ? "bg-white" : "hover:bg-gray-100"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="In-menuicon">
            {/* Search Input */}
            <div className={`${toggle === 1 ? "block" : "hidden"}`}>
              <input
                type="text"
                placeholder="Search item"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="In-searChmenu"
              />
            </div>
            <div className="iconMenu" onClick={(e) => handleClick(e, 1)}>
              <menuIcon.IoIosSearch className="text-lg cursor-pointer" />
            </div>
            <div className="iconMenu" onClick={(e) => handleClick(e, 2)}>
              <menuIcon.IoFilterSharp className="text-lg cursor-pointer" />
              <div
                className={`${
                  toggle === 2
                    ? "flex absolute  right-[105px] -bottom-8"
                    : "hidden"
                }`}
              >
                <ul className="In-drop-sort">
                  <li onClick={handleSort}>
                    <a
                      href="#"
                      className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between"
                    >
                      A-Z <FaSort className="text-sm" />
                    </a>
                  </li>
                  <li onClick={handleRefresh}>
                    <a
                      href="#"
                      className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between"
                    >
                      Refresh
                      <HiRefresh className="text-sm" />
                    </a>
                  </li>
                  <li onClick={() => {}}>
                    <a
                      href="#"
                      className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between"
                    >
                      More
                      <MdMore className="text-sm" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="iconMenu" onClick={(e) => handleClick(e, 3)}>
              <menuIcon.LuArrowDownUp className="text-lg cursor-pointer" />
            </div>
            <div className="iconMenu" onClick={(e) => handleClick(e, 4)}>
              <menuIcon.TfiMoreAlt className="text-lg cursor-pointer" />
              <div
                className={`${
                  toggle === 4 ? "flex absolute right-0 -bottom-8" : "hidden"
                }`}
              >
                <ul className="In-drop-more">
                  <li onClick={() => {}}>
                    <a
                      href="#"
                      className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between"
                    >
                      Estimation <FaPercentage className="text-sm" />
                    </a>
                  </li>
                  <li onClick={() => {}}>
                    <a
                      href="#"
                      className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between"
                    >
                      Summary
                      <LuPencil className="text-sm" />
                    </a>
                  </li>
                  <li onClick={() => {}}>
                    <a
                      href="#"
                      className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between"
                    >
                      Delete All
                      <MdDelete className="text-sm" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        {/* Attribute Section */}
        <div className="In-at-main">
          <div className="In-at-content">
            <label className="In-at-label">
              <input
                type="checkbox"
                className="In-at-check"
                checked={isAllChecked}
                onChange={handleSelectAllChange}
              />
            </label>
            <ul className="In-at-list">
              {InvoiceData.atrituteTitleInvoice.map((title, index) => (
                <li key={index} className="w-auto lg:w-auto xl:w-28">
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Table Section */}
      <div className="scrollbar tab-sect-main">
        {getData.map((item, index) => (
          <div key={index} className="tab-sect-content">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="item"
                className="tab-sect-check"
                checked={checkedItems[index] || false}
                onChange={() => handleCheckboxChange(index)}
              />
            </label>
            <ul className="tab-sect-list">
              <li className="w-24">{item.id}</li>
              <li className="w-24 break-words whitespace-normal">
                {item.transaction}
              </li>
              <li className="w-20 break-words whitespace-normal">
                {item.customer}
              </li>
              <li className="w-24 break-words whitespace-normal">
                {item.transactionType}
              </li>
              <li className="w-24 break-words whitespace-normal">
                {item.amount}
              </li>
              <li className="w-24 break-words whitespace-normal">
                {item.amount}
              </li>
              <li className="w-24 pl-3 break-words whitespace-normal">
                {item.amount}
              </li>
              <li className="w-24 pl-4 break-words whitespace-normal">
                {item.status}
              </li>
              <li className="w-24 pl-4 break-words whitespace-normal">
                {item.date}
              </li>
              <li className="w-24 pl-4 break-words whitespace-normal">
                {item.staff}
              </li>

              {/* More Options Dropdown */}
              <li
                className="relative cursor-pointer dropdown-menu"
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownIndex(dropdownIndex === index ? null : index);
                }}
              >
                <TfiMoreAlt className="text-lg" />
                {dropdownIndex === index && (
                  <ul className="tab-drop-list dropdown-menu">
                    <li className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between">
                      View <MdReviews className="text-sm" />
                    </li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between">
                      Edit
                      <LuPencil className="text-sm" />
                    </li>
                    <li onClick={() => {}}>
                      <a
                        href={String(index)}
                        className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between"
                      >
                        Delete
                        <MdDelete className="text-sm" />
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Payment;
