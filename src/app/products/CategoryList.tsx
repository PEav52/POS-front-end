"use client";
import React from "react";

interface Category {
  id: string;
  name: string;
  description: string;
}

const categories: Category[] = [
  { id: "CAT1", name: "Casual Wear", description: "T-shirts, jeans, hoodies, polo shirts, shorts" },
  { id: "CAT2", name: "Formal Wear", description: "Suits, blazers, dress shirts, gowns, skirts" },
  { id: "CAT3", name: "Streetwear", description: "Graphic tees, joggers, oversized hoodies, sneakers" },
  { id: "CAT4", name: "Sportswear (Athleisure)", description: "Leggings, tank tops, tracksuits, gym shorts" },
  { id: "CAT5", name: "Ethnic & Traditional Wear", description: "Cambodian Sampot, Vietnamese Áo dài, Indian Saree" },
];

export default function CategoryList() {
  return (
    <div className="p-4 bg-gray-100 rounded-lg me-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Categories List ({categories.length})</h2>
        <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-300">
          + Add
        </button>
      </div>

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
      <div className="scrollbar h-[550px] lg:h-[485px]  overflow-y-scroll divide-y divide-gray-200">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center py-4 bg-white rounded-lg shadow-sm my-2">
            <div className="w-1/6 text-center">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-400" />
            </div>
            <div className="w-1/6 text-gray-500 text-sm">CID: {category.id}</div>
            <div className="w-1/3 font-medium">{category.name}</div>
            <div className="w-1/3 text-gray-600">{category.description}</div>
            <div className="w-1/6 text-center">
              <button className="text-gray-500 hover:text-gray-700 text-lg">•••</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}