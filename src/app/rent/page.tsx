"use client";
import React, { useEffect, useState } from "react";

import { TfiMoreAlt } from "react-icons/tfi";
import { MdDelete, MdReviews } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { RentData } from "../constants/data";
import { FaSort } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { FaPercentage } from "react-icons/fa";
import { MdMore } from "react-icons/md";
import { menuIcon } from "../constants/data";

//============icon=========>
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const Rent = () => {
  const [activeNav, setActiveMenu] = useState<string>("All");
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [toggle, setToggle] = useState<number | null>(null);
  const [sort, setsort] = useState<string>("");

  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(RentData.EntityValueReturnRent.length).fill(false)
  );
  //============Refresh page=========>
  const handleRefresh = () => {
    window.location.reload();
  };
  // ===Filter Manu=================>
  const filteredData =
    activeNav === "All"
      ? RentData.EntityValueReturnRent
      : RentData.EntityValueReturnRent.filter(
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
      RentData.EntityValueReturnRent.sort((a, b) =>
        (typeof b.Status === "string" ? b.Status : "").localeCompare(
          typeof a.Status === "string" ? a.Status : ""
        )
      );
      setsort("desc");
    } else {
      RentData.EntityValueReturnRent.sort((a, b) =>
        (typeof a.Status === "string" ? a.Status : "").localeCompare(
          typeof b.Status === "string" ? b.Status : ""
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
      <div className="font-inter flex flex-col ">
        {/* Header */}
        <div className="flex items-center my-6 pl-2 text-xl md:text-2xl">
          <FaShoppingCart />
          <h4 className="font-bold ms-3 ">Reat</h4>
        </div>
        {/* Navigation Menu & Icons */}
        <nav className="Rent-navbar">
          <div className="Rent-menubar">
            <ul className="listMenu">
              {RentData.NavMenubarRent.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleFillter(item)}
                  className="cursor-pointer"
                >
                  <span
                    className={`block px-2 md:px-6 py-[6px] text-sm rounded transition ${
                      activeNav === item ? "bg-white" : "hover:bg-gray-100"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="Rent-menuicon">
            {/* Search Input */}
            <div className={`${toggle === 1 ? "block" : "hidden"}`}>
              <input
                type="text"
                placeholder="Search item"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="Rent-searChmenu"
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
                <ul className="Rent-drop-sort">
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
                <ul className="Rent-drop-more">
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
        <div className="Rent-at-main">
          <div className="Rent-at-content">
            <label className="Rent-at-label">
              <input
                type="checkbox"
                className="Rent-at-check"
                checked={isAllChecked}
                onChange={handleSelectAllChange}
              />
            </label>
            <ul className="Rent-at-list">
              {RentData.atrituteTitleRent.map((title, index) => (
                <li key={""} className="w-auto lg:w-auto xl:w-28">
                  {""}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="scrollbar Rent-tab-main">
        {getData.map((item, index) => {
          let totalAmount = 0;

          let totalDeposit = 0;
          let totalLateFee = 0;
          item.Products.forEach((product) => {
            let deposit =
              typeof product["Deposit"] === "string"
                ? parseFloat(product["Deposit"].replace("$", ""))
                : 0;
            let lateFee =
              typeof product["Late Fee"] === "string"
                ? parseFloat(product["Late Fee"].replace("$", ""))
                : 0;
            totalDeposit += deposit;
            totalLateFee += lateFee;
          });

          return (
            <div key={index} className="Rent-tab-content">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="item"
                  className="Rent-tab-check"
                  checked={checkedItems[index] || false}
                  onChange={() => handleCheckboxChange(index)}
                />
              </label>

              <ul className="Rent-tab-list" style={{ fontSize: "14px" }}>
                <li
                  key={index}
                  className="w-1/1 mr-9 font-semibold"
                  style={{ marginRight: "4rem" }}
                >
                  <span className="font-semibold">Rent ID:</span>{" "}
                  {item["Rent ID"]}
                </li>
                <li
                  key={index}
                  className="w-1/1 mr-9"
                  style={{ marginRight: "4rem" }}
                >
                  <span className="font-semibold">Customer Name:</span>{" "}
                  {item["Customer Name"]}
                </li>
                <li
                  key={index}
                  className="w-1/1 mr-9"
                  style={{ marginRight: "4rem" }}
                >
                  <span className="font-semibold">Rental Date:</span>{" "}
                  {item["Rental Date"]}
                </li>
                <li
                  key={index}
                  className="w-1/1 mr-9"
                  style={{ marginRight: "4rem" }}
                >
                  <span className="font-semibold">Due Date:</span>{" "}
                  {item["Due Date"]}
                </li>
                <li
                  key={index}
                  className="w-1/1 mr-9"
                  style={{ marginRight: "11rem" }}
                >
                  <span className="font-semibold">Return Date:</span>{" "}
                  {item["Return Date"]}
                </li>

                <li
                  className="relative cursor-pointer dropdown-menu"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownIndex(dropdownIndex === index ? null : index);
                  }}
                >
                  <TfiMoreAlt className="text-lg" />
                  {dropdownIndex === index && (
                    <ul className="Rent-drop-list dropdown-menu">
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
                <br />
                <br />

                <li className="w-full" style={{ gridColumn: "1 / -1" }}>
                  {item.Products.map((product, productIndex) => {
                    totalAmount += parseFloat(product.Amount.replace("$", ""));
                    return (
                      <div key={productIndex} className="flex flex-col mb-2">
                        <div className="flex flex-wrap">
                          <div className="w-1/9 mr-6">
                            <span className="font-semibold">Product Name:</span>{" "}
                            {product["Product Name"]}
                          </div>
                          <div className="w-1/9 mr-6">
                            <span className="font-semibold">Category:</span>{" "}
                            {product["Category"]}
                          </div>
                          <div className="w-1/9 mr-6">
                            <span className="font-semibold">Size:</span>{" "}
                            {product["Size"]}
                          </div>
                          <div className="w-1/9 mr-6">
                            <span className="font-semibold">Color:</span>{" "}
                            {product["Color"]}
                          </div>
                          <div className="w-1/9 mr-6">
                            <span className="font-semibold">Quantity:</span>{" "}
                            {product["Quantity"]}
                          </div>
                          <div className="w-1/9 mr-6">
                            <span className="font-semibold">Rental Fee:</span>{" "}
                            {product["Rental Fee"]}
                          </div>
                          <div className="w-1/9 mr-6">
                            <span className="font-semibold">Duration:</span>{" "}
                            {product["Duration"]}
                          </div>
                          <div className="w-1/9 mr-6">
                            <span className="font-semibold">Discount (%):</span>{" "}
                            {product["Discount (%)"]}
                          </div>
                          <div className="w-1/9">
                            <span className="font-semibold">Amount:</span>{" "}
                            {product["Amount"]}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </li>

                <li
                  className="w-auto lg:w-auto xl:w-48"
                  style={{ marginRight: "3rem" }}
                >
                  <span className="font-bold">Deposit:</span>
                  <span className="ms-2 font-bold">
                    ${totalDeposit.toFixed(1)}
                  </span>
                </li>

                <li
                  className="w-auto lg:w-auto xl:w-48"
                  style={{ marginRight: "3rem" }}
                >
                  <span className="font-bold">Late Fee:</span>
                  <span className="ms-2 font-bold">
                    ${totalLateFee.toFixed(1)}
                  </span>
                </li>
                <li
                  className="w-auto lg:w-auto xl:w-48"
                  style={{ marginRight: "3rem" }}
                >
                  <span className="font-bold">Cashier Name:</span>{" "}
                  {item["Cashier Name"]}
                </li>
                <li
                  className="w-auto lg:w-auto xl:w-48"
                  style={{ marginRight: "7rem", color: "green" }}
                >
                  <span className="font-bold">Status:</span> {item["Status"]}
                </li>

                <div className="flex justify-end" style={{ fontSize: "17px" }}>
                  <span className="font-bold">Total Paid:</span>
                  <span className="ms-2 font-bold">
                    ${totalAmount.toFixed(1)}
                  </span>
                </div>
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Rent;
