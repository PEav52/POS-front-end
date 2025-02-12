"use client";
import React, { useEffect, useState } from "react";
import { FaCreditCard } from "react-icons/fa";
import { TfiMoreAlt } from "react-icons/tfi";
import { MdDelete, MdReviews } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { EntityValue, NavMenubar, atrituteTitle, menuIcon } from "../Data/data";

const Payment = () => {
  const [activeNav, setActiveMenu] = useState<string>("All");
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [toggle, setToggle] = useState<number | null>(null);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(EntityValue.length).fill(false)
  );

  // ========= Pagination and Toggle Logic =========>
  const handleClick = (event: React.MouseEvent<HTMLDivElement>, id: number) => {
    event.stopPropagation();
    setToggle((prev) => (prev === id ? null : id));
  };

  // ========= Filter Logic =========>
  const filteredData =
    activeNav === "All"
      ? EntityValue
      : EntityValue.filter((item) => item.Status === activeNav);
  const handleFillter = (item: string) => {
    setActiveMenu(item);
    setIsAllChecked(false);
    setCheckedItems(new Array(filteredData.length).fill(false)); // Reset checked state
  };
  // Handle "Select All" checkbox change
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

  // ========= Search Logic =========
  const fillteredData = filteredData.filter((item) =>
    Object.values(item).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // ================ Dropdown Handling =================
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
  // =====================================================>
  return (
    <section className="mx-5">
      <div className="font-inter flex flex-col">
        {/* Header */}
        <div className="flex items-center my-6 pl-2 text-xl md:text-2xl">
          <FaCreditCard />
          <h4 className="font-bold ms-3">Payment</h4>
        </div>

        {/* Navigation Menu & Icons */}
        <nav className="flex gap-2 justify-between items-start lg:items-center">
          <div className="bg-gray-300 bg-opacity-70 w-[200px] lg:w-[661px] rounded">
            <ul className="listMenu">
              {NavMenubar.map((item, index) => (
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

          <div className="flex items-center relative space-x-2 mt-3 lg:mt-0">
            {/* Search Input */}
            <div className={`${toggle === 0 ? "block" : "hidden"}`}>
              <input
                type="text"
                placeholder="Search item"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-2 py-[5px] text-sm border border-gray-400 rounded w-52"
              />
            </div>

            {menuIcon.map((Icon, id) => (
              <div
                key={id}
                className="iconMenu"
                onClick={(e) => handleClick(e, id)}
              >
                <Icon className="text-lg cursor-pointer" />
              </div>
            ))}
            <div
              className={`${
                toggle === 3 ? "flex absolute right-0 -bottom-8" : "hidden"
              }`}
            >
              <ul className="absolute right-0 -top-6 bg-gray-200 font-bold text-xs text-gray-700 z-10 shadow-md rounded p-2 w-32 ">
                <li className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between">
                  View <MdReviews className="text-sm" />
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between">
                  Edit
                  <LuPencil className="text-sm" />
                </li>
                <li
                  onClick={() => {}}
                  className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between"
                >
                  Delete
                  <MdDelete className="text-sm" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Attribute Section */}
        <div className="mt-3 p-4 lg:p-5 bg-gray-300 bg-opacity-70 rounded-t-md">
          <div className="grid grid-cols-[auto_1fr_30px] items-center">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-5 h-5 border-2 border-gray-500 rounded-md cursor-pointer"
                checked={isAllChecked}
                onChange={handleSelectAllChange}
              />
            </label>
            <ul className="flex ms-3 w-full text-xs md:text-sm lg:text-[14px] font-sans items-center justify-between mr-14">
              {atrituteTitle.map((title, index) => (
                <li key={index} className="w-auto lg:w-auto xl:w-28">
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="scrollbar h-[550px] lg:h-[485px] overflow-y-scroll">
        {fillteredData.map((item, index) => (
          <div
            key={index}
            className="flex p-4 lg:h-[4.5rem] lg:px-5 mb-2 items-center border border-gray-400 shadow-md shadow-gray-300"
          >
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="item"
                className="w-5 h-5 border-2 border-gray-500 rounded-md cursor-pointer"
                checked={checkedItems[index] || false}
                onChange={() => handleCheckboxChange(index)}
              />
            </label>
            <ul className="flex ms-3 w-full text-xs md:text-sm lg:text-[14px] font-sans items-center justify-between">
              <li className="w-24">{index + 1}</li>
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
                  <ul className="absolute right-0 top-5 bg-gray-200 font-bold text-xs text-gray-700 z-10 shadow-md rounded p-2 w-32 dropdown-menu">
                    <li className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between">
                      View <MdReviews className="text-sm" />
                    </li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between">
                      Edit
                      <LuPencil className="text-sm" />
                    </li>
                    <li
                      onClick={() => {}}
                      className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between"
                    >
                      Delete
                      <MdDelete className="text-sm" />
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
