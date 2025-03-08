"use client";
import React, { useEffect, useState } from "react";
import { TfiMoreAlt } from "react-icons/tfi";
import { MdDelete, MdReviews } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { FeedbackData } from "../constants/data";
import { FaSort } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { FaPercentage } from "react-icons/fa";
import { MdMore } from "react-icons/md";
import { menuIcon } from "../constants/data";
import { FaComments } from "react-icons/fa6";
import Rating from "../components/Rating/Rating";
const Return = () => {
  const [activeNav, setActiveMenu] = useState<string>("All");
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [desc, setDecc] = useState<number | null>(null);
  const [sort, setsort] = useState<string>("");
  const [dropNave, setDropnav] = useState<string>("");

  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(FeedbackData.EntityValueFeedback.length).fill(false)
  );
  //============Refresh page=========>
  const handleRefresh = () => {
    window.location.reload();
  };
  // ===Filter Manu=================>
  const filteredData =
    activeNav === "All"
      ? FeedbackData.EntityValueFeedback
      : FeedbackData.EntityValueFeedback.filter(
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
        (typeof b.Status === "string" ? b.Status : "").localeCompare(
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
          <FaComments />
          <h4 className="font-bold ms-3">Feedback</h4>
        </div>
        {/* Navigation Menu & Icons */}
        <nav className="Retern-navbar">
          <div className="Feed-menubar ">
            <ul className="listMenu">
              {FeedbackData.NavMenuFeedback.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleFillter(item)}
                  className="cursor-pointer"
                >
                  <span
                    className={`block px-3 md:px-7 py-[6px] text-sm rounded transition ${
                      activeNav === item ? "bg-white" : "hover:bg-gray-100"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="Retern-menuicon">
            {/* Search Input */}
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
        <div className="Retern-at-main ">
          <div className=" Retern-at-content">
            <label className="Retern-at-label">
              <input
                type="checkbox"
                className="Retern-at-check  "
                checked={isAllChecked}
                onChange={handleSelectAllChange}
              />
            </label>
            <ul className="Retern-at-list">
              {FeedbackData.atrituteTitleFeedback.map((title, index) => (
                <li key={index} className="w-auto lg:w-auto xl:w-28">
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="Retern-tab-main scrollbar">
        {getData.map((item, index) => (
          <div key={index} className="Retern-tab-content ">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="item"
                className="Retern-tab-check "
                checked={checkedItems[index] || false}
                onChange={() => handleCheckboxChange(index)}
              />
            </label>
            <ul className="Retern-tab-list  ">
              <li className="w-16">{item.Feedback_ID}</li>
              <li className="w-24 ml-[75px]  break-words whitespace-normal">
                {item.Customer_Name}
              </li>
              <li className="w-24 ml-9  break-words whitespace-normal">
                {item.Type}
              </li>
              <li className="w-28 ml-[45px]  break-words whitespace-normal">
              <Rating rating={item.Rating || 0}/>
              </li>
              <li className="w-36 h-9 overflow-hidden ml-[30px]   break-words whitespace-normal">
                {item.Comment}
              </li>
              <li className="w-32 break-words whitespace-normal">
                {item.Date}
              </li>
              <li className="w-20   pl-2  break-words whitespace-normal">
                {item.Status}
              </li>
              {/* More Options Dropdown */}
              <li
                className="relative cursor-pointer  dropdown-menu"
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownIndex(dropdownIndex === index ? null : index);
                }}
              >
                <TfiMoreAlt className="text-lg" />
                {dropdownIndex === index && (
                  <ul className="Retern-drop-list  dropdown-menu">
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
export default Return;
