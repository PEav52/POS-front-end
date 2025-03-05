"use client";
import React, { useEffect, useState } from "react";
import { TfiMoreAlt } from "react-icons/tfi";
import { MdDelete, MdReviews } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { FaCreditCard, FaSort } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { FaPercentage } from "react-icons/fa";
import { MdMore } from "react-icons/md";
import { menuIcon } from "../constants/data";
import { PaymentData } from "../constants/data";
const Payment = () => {
    const [activeNav, setActiveMenu] = useState<string>("All");
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [desc, setDecc] = useState<number | null>(null);
    const [sort, setsort] = useState<string>("");
    const [dropNave, setDropnav] = useState<string>("");
  
    const [checkedItems, setCheckedItems] = useState<boolean[]>(
      new Array(PaymentData.EntityValuePayment.length).fill(false)
    );
    //============Refresh page=========>
    const handleRefresh = () => {
      window.location.reload();
    };
    // ===Filter Manu=================>
    const filteredData =
      activeNav === "All"
        ? PaymentData.EntityValuePayment
        : PaymentData.EntityValuePayment.filter(
            (item) => item.Status === activeNav
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
      setDecc((prev) => (prev === id ? null : id));
    };
    // ========= filter Search status and revers======>
    let getData = filteredData.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    // ====>
    if (desc === 3) {
      let sortedData = [...filteredData];
      sortedData.sort((a, b) =>
        JSON.stringify(b).localeCompare(JSON.stringify(a))
      );
      getData = sortedData;
    }
    //== Sort Data ==>
    const handleSort = () => {
      if (sort === "asc") {
        filteredData.sort((a, b) =>
          (typeof b.Status === "string" ? b.Status: "").localeCompare(
            typeof a.Status === "string" ? a.Status : ""
          )
        );
        setsort("desc");
      } else {
        filteredData.sort((a, b) =>
          (typeof a.Status === "string" ? a.Status : "").localeCompare(
            typeof b.Status === "string" ? b.Status : ""
          )
        );
      setsort("asc");
      }
      setDecc(null);
    };
    // ========= Dropdown Handling =======>
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (!(event.target as Element).closest(".dropdown-menu")) {
          setDropdownIndex(null);
          setDropnav("");
        }
        if ((event.target as Element).matches(".scope-input")) {
          setDropnav("search");
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
          <FaCreditCard />
          <h4 className="font-bold ms-3">Payment</h4>
        </div>

        {/* Navigation Menu & Icons */}
        <nav className="Pay-navbar">
          <div className="Pay-menubar">
            <ul className="listMenu">
              {PaymentData.NavMenubarPayment.map((item, index) => (
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
          <div className="Pay-menuicon">
            {/* Search Input */}
          {dropNave === "search" && (
                <div className="block">
                  <input
                    type="text"
                    placeholder="Search item"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="In-searChmenu scope-input"
                  />
                </div>
              )}
              <div
                className="iconMenu dropdown-menu"
                onClick={(e) => {
                  e.stopPropagation();
                  setDropnav(dropNave === "search" ? "" : "search");
                }}
              >
                <menuIcon.IoIosSearch className="text-lg cursor-pointer" />
              </div>
            <div
              className="iconMenu dropdown-menu"
              onClick={(e) => {
                e.stopPropagation();
                setDropnav(dropNave === "filter" ? "" : "filter");
              }}
            >
              <menuIcon.IoFilterSharp className="text-lg cursor-pointer" />
              {dropNave === "filter" && (
                <div className="flex absolute  right-[105px] -bottom-8 dropdown-menu">
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
              )}
            </div>

            <div className="iconMenu" onClick={(e) => handleClick(e, 3)}>
              <menuIcon.LuArrowDownUp className="text-lg cursor-pointer" />
            </div>

            <div
              className="iconMenu dropdown-menu"
              onClick={(e) => {
                e.stopPropagation();
                setDropnav(dropNave === "more" ? "" : "more");
              }}
            >
              <menuIcon.TfiMoreAlt className="text-lg cursor-pointer" />
              {dropNave === "more" && (
                <div className="flex absolute right-0 -bottom-8 dropdown-menu">
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
              )}
            </div>




          </div>
        </nav>
        {/* Attribute Section */}
        <div className="Pay-at-main">
          <div className="Pay-at-content">
            <label className=" Pay-at-label">
              <input
                type="checkbox"
                className="Pay-at-check"
                checked={isAllChecked}
                onChange={handleSelectAllChange}
              />
            </label>
            <ul className="Pay-at-list">
              {PaymentData.atrituteTitlePayment.map((title, index) => (
                <li key={index} className="w-auto lg:w-auto xl:w-28">
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="Pay-tab-main">
      {getData.map((item, index) => (
          <div key={index} className="Pay-tab-content">
            <label className=" flex items-center space-x-2">
              <input
                type="checkbox"
                name="item"
                className="Pay-tab-check "
                checked={checkedItems[index] || false}
                onChange={() => handleCheckboxChange(index)}
              />
            </label>
            <ul className="Pay-tab-list ">
              <li className="w-24">{item.TransactionID}</li>
              <li className="w-24 break-words whitespace-normal">
                {item.CustomerName}
              </li>
              <li className="w-20 ml-3">{item.Type}</li>
              <li className="w-24 ml-5 break-words whitespace-normal">
                {item.Items}
              </li>
              <li className="w-24">{item.PaymentMethod}</li>
              <li className="w-24">{item.TotalPaid}</li>
              <li className="w-24 pl-3">{item.Status}</li>
              <li className="w-24 pl-4 break-words whitespace-normal">
                {item.Date_Time}
              </li>
              <li className="w-24 pl-4 break-words whitespace-normal">
                {item.StaffName}
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
                  <ul className="Pay-drop-list  dropdown-menu">
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
