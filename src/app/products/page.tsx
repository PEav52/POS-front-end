"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter
import CategoryList from "./CategoryList";
import OutOfStockList from "./OutOfStockList";
import { Pencil } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: string;
  stock: number;
  image: string;
}

const sampleProducts: Product[] = [
  { id: "1", name: "Classic White T-Shirt", price: "$15.99", stock: 50, image: "/tshirt.png" },
  { id: "2", name: "Black Hoodie", price: "$35.99", stock: 30, image: "/hoodie.png" },
  { id: "3", name: "Black Hoodie", price: "$35.99", stock: 30, image: "/hoodie.png" },
  { id: "4", name: "Black Hoodie", price: "$35.99", stock: 30, image: "/hoodie.png" },
  { id: "5", name: "Black Hoodie", price: "$35.99", stock: 30, image: "/hoodie.png" },
  { id: "6", name: "Black Hoodie", price: "$35.99", stock: 30, image: "/hoodie.png" },
  { id: "7", name: "Black Hoodie", price: "$35.99", stock: 30, image: "/hoodie.png" },
];

export default function Products() {
  const router = useRouter(); // ✅ Define router

  const [activeTab, setActiveTab] = useState("Products");

  const handleEditProduct = (id: string) => {
    router.push(`/products/${id}/edit`); // ✅ Navigate to correct path
  };

  return (
    <div className="bg-gray-100 pl-8">
      {/* Navigation Bar */}
      <div className="w-full border-b bg-white relative">
        <div className="flex">
          {["Products", "Category", "Stock Controller"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition ${
                activeTab === tab ? "bg-white border-t-2 border-black font-bold" : "bg-gray-100 text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Product Table */}
      {activeTab === "Products" && (
        <div className="mt-6 bg-white rounded-lg shadow overflow-hidden me-8">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr className="text-left">
                <th className="p-3"><input type="checkbox" className="w-4 h-4 rounded border-gray-400" /></th>
                <th className="p-3">PID</th>
                <th className="p-3">IMAGE</th>
                <th className="p-3">PRODUCT NAME</th>
                <th className="p-3">PRICE</th>
                <th className="p-3">STOCK</th>
                <th className="p-3">EDIT</th>
              </tr>
            </thead>
            <tbody>
              {sampleProducts.map((product) => (
                <tr key={product.id} className="border-t hover:bg-gray-100">
                  <td className="p-3"><input type="checkbox" className="w-4 h-4 rounded border-gray-400" /></td>
                  <td className="p-3">{product.id}</td>
                  <td className="p-3">
                    <img src={product.image} alt={product.name} className="w-12 h-12 rounded" />
                  </td>
                  <td className="p-3">{product.name}</td>
                  <td className="p-3">{product.price}</td>
                  <td className="p-3">{product.stock}</td>
                  <td className="p-3">
                    <button
                      className="flex items-center text-red-500 hover:text-red-700" // ✅ Red Button
                      onClick={() => handleEditProduct(product.id)}
                    >
                      <Pencil className="w-4 h-4 mr-2" /> Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Category Section */}
      {activeTab === "Category" && <CategoryList />}

      {/* Stock Controller Section */}
      {activeTab === "Stock Controller" && <OutOfStockList />}
    </div>
  );
}