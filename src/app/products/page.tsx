"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter
import CategoryList from "./CategoryList";
import OutOfStockList from "./OutOfStockList";
import { Pencil } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  // For when click model taiwind and upload image = null
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState<string>("/assets/image-emtry/product-emtry.png"); // ✅ Default image

  // Function HandleImageChangd to display image input file
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
              <select className="border border-gray-300 p-2 rounded-lg bg-white shadow-sm focus:ring-blue-500 focus:outline-none"
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
              <button
                className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
                onClick={() => setIsOpen(true)} // ✅ Correct placement of onClick
              >
                + Add
              </button>

            </div>

            {/* For Show model animationPresence */}
           {/* AnimatePresence wraps the modal to ensure smooth exit animation */}
            <AnimatePresence>
              {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }} // 🔥 Exit animation
                    transition={{ duration: 0.2 }}
                    className="bg-white p-6 rounded-lg shadow-lg w-96"
                  >
                    <h2 className="text-lg font-bold mb-4 text-center">Add New Product</h2>

                    {/* onSubmit={handleSubmit}  */}
                              <form className="space-y-4">
                        {/* Image Upload */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Product Image</label>

                          {/* HandleImageChange */}
                          <input type="file" accept="image/*" onChange={handleImageChange} // ✅ Fix: Added onChange event
                          className="mt-1 block w-full border rounded-lg p-2 cursor-pointer"
                        />
                          {/* Image Preview */}
                          {image ? (
                            <img src={image} alt="Preview" className="mt-2 w-100 24 h-24 object-cover rounded border"/>
                          ) : (
                            <p className="mt-2 text-gray-500 text-sm">No image selected</p>
                          )}

                        </div>
                        

                        {/* Product Name */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Product Name:</label>

                          <input
                            type="text" required
                            className="mt-1 block w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
                            placeholder="Enter product name"
                          />
                        </div>

                        {/* Price */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Price ($):</label>

                          <input
                            type="number" required
                            className="mt-1 block w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
                            placeholder="Enter price"
                          />
                        </div>

                        {/* Stock */}
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Stock:</label>
                          <input
                            type="number" required
                            className="mt-1 block w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
                            placeholder="Enter stock quantity"
                          />
                        </div>

                        {/* Submit Button */}
                            <button type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition me-2"
                          >
                            Add Product
                            </button>

                      </form>
                       {/* Functon call SetIsOpen clode false */}
                       <button
                            className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition mt-2"
                            // Functon call SetIsOpen clode false
                            onClick={() => setIsOpen(false)}>
                            Close
                          </button>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>

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