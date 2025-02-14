"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdReviews, MdDelete } from "react-icons/md";
import { LuPencil } from "react-icons/lu";

interface Category {
  id: string;
  name: string;
  description: string;
}

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([
    { id: "CAT1", name: "Casual Wear", description: "T-shirts, jeans, hoodies, polo shirts, shorts" },
    { id: "CAT2", name: "Formal Wear", description: "Suits, blazers, dress shirts, gowns, skirts" },
    { id: "CAT3", name: "Streetwear", description: "Graphic tees, joggers, oversized hoodies, sneakers" },
    { id: "CAT4", name: "Sportswear", description: "Leggings, tank tops, tracksuits, gym shorts" },
    { id: "CAT5", name: "Ethnic & Traditional Wear", description: "Cambodian Sampot, Vietnamese Áo dài, Indian Saree" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

  const [newCategory, setNewCategory] = useState({ name: "", description: "" });

  // Handle Form Submission
  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newCategory.name || !newCategory.description) return;

    const newEntry: Category = {
      id: `CAT${categories.length + 1}`,
      name: newCategory.name,
      description: newCategory.description,
    };

    setCategories([...categories, newEntry]); // Add new category
    setNewCategory({ name: "", description: "" }); // Reset form
    setIsOpen(false); // Close modal
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg me-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 ">
        <h2 className="text-lg font-semibold">Categories List ({categories.length})</h2>
        <button
          className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          onClick={() => setIsOpen(true)}
        >
          + Add
        </button>
      </div>

      {/* 🔥 Modal for Adding Category */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg w-96"
            >
              <h2 className="text-lg font-bold mb-4 text-center">Add New Category</h2>

              <form onSubmit={handleAddCategory} className="space-y-4">
                {/* Category Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category Name:</label>
                  <input
                    type="text"
                    value={newCategory.name}
                    onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                    required
                    className="mt-1 block w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
                    placeholder="Enter category name"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description:</label>
                  <textarea
                    value={newCategory.description}
                    onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                    rows={4}
                    placeholder="Enter category description..."
                    required
                  ></textarea>
                </div>

                {/* Submit & Close Buttons */}

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition me-2"
                  >
                    Add Category
                  </button>
                
              </form>
              <button
                    className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition mt-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Table Header */}
      <div className="border-b border-gray-300 py-2 flex justify-between font-medium text-gray-700">
        <div className="w-1/6 text-center">
          <input type="checkbox" className="w-4 h-4 rounded border-gray-400" />
        </div>
        <div className="w-1/6">CID</div>
        <div className="w-1/3">Categories name</div>
        <div className="w-1/3">Description</div>
        <div className="w-1/6 text-center">Action</div>
      </div>

      {/* Category Items */}
      <div className="scrollbar h-[550px] lg:h-[485px] overflow-y-scroll divide-y divide-gray-200">
        {categories.map((category, index) => (
          <div key={category.id} className="relative flex items-center py-4 bg-white rounded-lg shadow-sm my-2">
            <div className="w-1/6 text-center">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-400" />
            </div>
            <div className="w-1/6 text-gray-500 text-sm">CID: {category.id}</div>
            <div className="w-1/3 font-medium">{category.name}</div>
            <div className="w-1/3 text-gray-600">{category.description}</div>

            {/* Action Button with Dropdown */}
            <div className="w-1/6 text-center relative">
              <button
                className="text-gray-500 hover:text-gray-700 text-lg"
                onClick={() => setDropdownIndex(dropdownIndex === index ? null : index)} // Toggle dropdown
              >
                •••
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {dropdownIndex === index && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-6 bg-white font-medium text-sm text-gray-700 z-10 shadow-md rounded p-2 w-32 border"
                  >
                    <li className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between">
                      View <MdReviews className="text-lg" />
                    </li>
                    <li className="hover:bg-gray-100 p-2 cursor-pointer flex justify-between">
                      Edit <LuPencil className="text-lg" />
                    </li>
                    <li
                      onClick={() => alert(`Deleting ${category.name}`)}
                      className="hover:bg-red-100 p-2 cursor-pointer flex justify-between text-red-600"
                    >
                      Delete <MdDelete className="text-lg" />
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}