"use client";
import React, { useEffect, useState } from "react";

import { TfiMoreAlt } from "react-icons/tfi";
import { MdDelete, MdReviews } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { SaleData } from "../constants/data";
import { FaSort } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { FaPercentage } from "react-icons/fa";
import { MdMore } from "react-icons/md";
import { menuIcon } from "../constants/data";

//============icon=========>
import { FaTags } from "react-icons/fa";

const Sale = () => {
  const [activeNav, setActiveMenu] = useState<string>("All");
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [toggle, setToggle] = useState<number | null>(null);
  const [sort, setsort] = useState<string>("");

  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(SaleData.EntityValueReturnSale.length).fill(false)
  );
  //============Refresh page=========>
  const handleRefresh = () => {
    window.location.reload();
  };
  // ===Filter Manu=================>
  const filteredData =
    activeNav === "All"
      ? SaleData.EntityValueReturnSale
      : SaleData.EntityValueReturnSale.filter(
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
      SaleData.EntityValueReturnSale.sort((a, b) =>
        (typeof b.Status === "string" ? b.Status : "").localeCompare(
          typeof a.Status === "string" ? a.Status : ""
        )
      );
      setsort("desc");
    } else {
      SaleData.EntityValueReturnSale.sort((a, b) =>
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
          <FaTags />
          <h4 className="font-bold ms-3 ">Sale</h4>

          <p className="ms-[440px] text-gray-900 text-sm ">
            In a POS (Point of Sale) system for a fashion shop, the sales list
            should display key transaction details for easy tracking.
          </p>
        </div>
        {/* Navigation Menu & Icons */}
        <nav className="Sale-navbar">
          <div className="Sale-menubar">
            <ul className="listMenu">
              {SaleData.NavMenubarSale.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleFillter(item)}
                  className="cursor-pointer"
                >
                  <span
                    className={`block px-2 md:px-7 py-[6px] text-sm rounded transition ${
                      activeNav === item ? "bg-white" : "hover:bg-gray-100"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="Sale-menuicon">
            {/* Search Input */}
            <div className={`${toggle === 1 ? "block" : "hidden"}`}>
              <input
                type="text"
                placeholder="Search item"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="Sale-searChmenu"
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
                <ul className="Sale-drop-sort">
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
                <ul className="Sale-drop-more">
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
        <div className="Sale-at-main">
          <div className="Sale-at-content">
            <label className="Sale-at-label">
              <input
                type="checkbox"
                className="Sale-at-check"
                checked={isAllChecked}
                onChange={handleSelectAllChange}
              />
            </label>
            <ul className="Sale-at-list">
              {SaleData.atrituteTitleSale.map((title, index) => (
                <li key={""} className="w-auto lg:w-auto xl:w-28">
                  {""}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="scrollbar Sale-tab-main">
        {getData.map((item, index) => {
          let totalAmount = 0; // គណនា Total Amount
          return (
            <div key={index} className="Sale-tab-content">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="item"
                  className="Sale-tab-check"
                  checked={checkedItems[index] || false}
                  onChange={() => handleCheckboxChange(index)}
                />
              </label>

              <ul className="Sale-tab-list" style={{ fontSize: "14px" }}>
                <li key={index} className="w-1/5 mr-4 font-semibold">
                  <span className="font-semibold">Sale ID:</span>{" "}
                  {item["Sale ID"]}
                </li>
                <li key={index} className="w-1/5 mr-4">
                  <span className="font-semibold">Customer ID:</span>{" "}
                  {item["Customer ID"]}
                </li>
                <li key={index} className="w-1/5 mr-4">
                  <span className="font-semibold">Customer Name:</span>{" "}
                  {item["Customer Name"]}
                </li>
                <li
                  key={index}
                  className="w-1/5 mr-4"
                  style={{ marginRight: "10rem" }}
                >
                  <span className="font-semibold">Date & Time:</span>{" "}
                  {item["Date & Time"]}
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
                    <ul className="Sale-drop-list dropdown-menu">
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
                            <span className="font-semibold">Unit Price:</span>{" "}
                            {product["Unit Price"]}
                          </div>
                          <div className="w-1/9 mr-6">
                            <span className="font-semibold">Total Price:</span>{" "}
                            {product["Total Price"]}
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
                  style={{ marginRight: "5rem" }}
                >
                  <span className="font-bold">Payment Method:</span>{" "}
                  {item["Payment Method"]}
                </li>
                <li
                  className="w-auto lg:w-auto xl:w-48"
                  style={{ marginRight: "5rem" }}
                >
                  <span className="font-bold">Cashier Name:</span>{" "}
                  {item["Cashier Name"]}
                </li>
                <li
                  className="w-auto lg:w-auto xl:w-48"
                  style={{ marginRight: "18em" }}
                >
                  <span className="font-bold">Status:</span> {item["Status"]}
                </li>

                <div className="flex justify-end" style={{ fontSize: "17px" }}>
                  <span className="font-bold">Total Amount:</span>
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
export default Sale;
