"use client";
import React, { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
  category: string;
}

const sampleProducts: Product[] = [
  { id: "PR178-001", name: "Classic White T-Shirt", price: 15.99, stock: 15, image: "/tshirt.png", category: "T-Shirt" },
  { id: "PR178-002", name: "Classic Black T-Shirt", price: 15.99, stock: 10, image: "/tshirt.png", category: "T-Shirt" },
  { id: "PR178-003", name: "Casual Blue Jeans", price: 25.99, stock: 5, image: "/jeans.png", category: "Pants" },
  { id: "PR178-004", name: "Sports Joggers", price: 29.99, stock: 8, image: "/joggers.png", category: "Pants" },
  { id: "PR178-001", name: "Classic White T-Shirt", price: 15.99, stock: 15, image: "/tshirt.png", category: "T-Shirt" },
  { id: "PR178-002", name: "Classic Black T-Shirt", price: 15.99, stock: 10, image: "/tshirt.png", category: "T-Shirt" },
  { id: "PR178-003", name: "Casual Blue Jeans", price: 25.99, stock: 5, image: "/jeans.png", category: "Pants" },
  { id: "PR178-004", name: "Sports Joggers", price: 29.99, stock: 8, image: "/joggers.png", category: "Pants" },
  { id: "PR178-001", name: "Classic White T-Shirt", price: 15.99, stock: 15, image: "/tshirt.png", category: "T-Shirt" },
  { id: "PR178-002", name: "Classic Black T-Shirt", price: 15.99, stock: 10, image: "/tshirt.png", category: "T-Shirt" },
  { id: "PR178-003", name: "Casual Blue Jeans", price: 25.99, stock: 5, image: "/jeans.png", category: "Pants" },
  { id: "PR178-004", name: "Sports Joggers", price: 29.99, stock: 8, image: "/joggers.png", category: "Pants" },
];

export default function OutOfStockList() {
  const [selectedProduct, setSelectedProduct] = useState("All Products");
  const [selectedType, setSelectedType] = useState("All Types");

  return (
    <div className="p-4 bg-gray-100 rounded-lg me-4">
      {/* Header & Filters */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Out of Stock List ({sampleProducts.length})</h2>
        <div className="flex space-x-4">
          {/* Product Filter */}
          <select
            className="border border-gray-300 p-2 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
          >
            <option>All Products</option>
            <option>T-Shirts</option>
            <option>Pants</option>
          </select>

          {/* Type Filter */}
          <select
            className="border border-gray-300 p-2 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option>All Types</option>
          </select>
        </div>
      </div>

      {/* Table Header */}
      <div className="border-b border-gray-300 py-2 flex justify-between font-medium text-gray-700">
        <div className="w-1/6 text-center">
          <input type="checkbox" className="w-4 h-4 rounded border-gray-400" />
        </div>
        <div className="w-1/6">PID</div>
        <div className="w-1/6">IMAGE</div>
        <div className="w-1/3">PRODUCT NAME</div>
        <div className="w-1/6">PRICE</div>
        <div className="w-1/6">STOCK</div>
        <div className="w-1/6 text-center">Action</div>
      </div>

      {/* Product Rows */}
      <div className="scrollbar h-[550px] lg:h-[485px]  overflow-y-scroll max divide-y divide-gray-200">
        
  {sampleProducts.map((product, index) => (
    <div key={`${product.id}-${index}`} className="flex items-center py-4 bg-white rounded-lg shadow-sm my-2">
      <div className="w-1/6 text-center">
        <input type="checkbox" className="w-4 h-4 rounded border-gray-400" />
      </div>

      <div className="w-1/6">
        <span className="block font-medium">{product.category}</span>
        <span className="block text-gray-500 text-sm">PID: {product.id}</span>
      </div>

      <div className="w-1/6">
        <img src={product.image} alt={product.name} className="w-12 h-12 rounded-lg" />
      </div>

      <div className="w-1/3 font-medium">{product.name}</div>
      <div className="w-1/6">${product.price.toFixed(2)}</div>
      <div className="w-1/6">{product.stock}</div>
      <div className="w-1/6 text-center">
        <button className="text-gray-500 hover:text-gray-700 text-lg">•••</button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}