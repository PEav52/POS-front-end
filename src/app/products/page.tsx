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

  const router = useRouter(); // ✅ Define 

  // For Display Selected All Products / All Types / Product Types
  const [selectedProduct, setSelectedProduct] = useState("All Products");
  const [selectedType, setSelectedType] = useState("All Types");
  const [activeTab, setActiveTab] = useState("Products");

  // Function HandleEidtProduct To Direc to file Page Edit Product
  const handleEditProduct = (id: string) => {
    router.push(`/products/${id}/edit`); // ✅ Navigate to correct path
  };

  // To Display at all Table list
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
        <div className="mt-6 rounded-lg overflow-hidden me-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Product List({sampleProducts.length})</h2>
            
            <div className="flex space-x-4">

              {/* Product Filter */}
              <select className="border border-gray-300 p-2 px-2 rounded-lg bg-white shadow-sm focus:ring-blue-500 focus:outline-none"
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
              >
                <option>All Products</option>
                <option>T-Shirts</option>
                <option>Pants</option>
              </select>

              {/* Type Filter */}
              <select
                className="border border-gray-300 p-2 rounded-lg bg-white shadow-sm focus:ring-blue-500 focus:outline-none"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option>All Types</option>
              </select>
              {/* Button for add product details */}
              <button
                  className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
                  onClick={() => router.push("/products/AddProductPage")                  } // ✅ Use router.push()
                >
                  + Add
                </button>

            </div>

            {/* For Show model animationPresence */}
           {/* AnimatePresence wraps the modal to ensure smooth exit animation */}
            

      </div>
          <table className="table-auto border-collapse border border-gray-300 w-full">
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
            <tbody className="">
              {sampleProducts.map((product) => (
                <tr key={product.id} className="hover:bg-green-200">
                  <td className="p-3"><input type="checkbox" className="w-4 h-4 rounded border-gray-400" /></td>
                  <td className="p-3">{product.id}</td>
                  <td className="p-3">
                    <img src="/assets/Radaa.png" alt={product.name} className="w-12 h-12 rounded" />
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