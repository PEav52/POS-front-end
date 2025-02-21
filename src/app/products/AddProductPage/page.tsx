"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PlusCircle, Save, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AddProductPage() {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState("M");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto md:p-6 bg-gray-100">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
        <h1 className="text-xl md:text-2xl font-bold flex items-center">
          <span className="mr-2">📦</span> Add New Product
        </h1>
        <div className="flex space-x-3">
          <button className="border px-4 py-2 rounded-3xl flex items-center bg-zinc-400 text-lime-50 border-2 border-black">
            <Save size={16} className="mr-2" /> Save Draft
          </button>
          <button className="bg-green-400 text-white px-4 py-2 rounded-3xl flex items-center border-2 border-black">
            ✅ Add Product
          </button>
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="px-3 flex items-center rounded-3xl bg-zinc-500 text-violet-50"
          >
            <ArrowLeft size={18} className="" />
          </button>
        </div>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-5">
        {/* Left Column */}
        <div className="lg:col-span-4 space-y-6">
          {/* General Information */}
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">General Information</h2>
            <h3 className="font-thin mb-1 text-[12px]">Name Product</h3>
            <input
              type="text"
              placeholder="Slim Fit Jeans"
              className="w-full p-2 border rounded-md mb-3 bg-gray-300"
            />
            <h3 className="font-thin mb-1 text-[13px]">Description Product</h3>
            <textarea
              placeholder="Enter product description..."
              className="w-full p-2 border rounded-md h-32 bg-gray-300"
            />

                {/* Size & Gender */}
                <div className="rounded-lg flex flex-wrap justify-between">
                  <div className="w-full sm:w-1/2">
                    <h2 className="font-semibold mb-1 text-[14px]">Size</h2>
                    <h3 className="font-thin mb-1 text-[10px]">Pick Available Size</h3>
                    <div className="flex space-x-2">
                      {["XS", "S", "M", "XL", "XXL"].map((size) => (
                        <button
                          key={size}
                          className={`px-3 py-1 rounded-lg border ${selectedSize === size ? "bg-green-100" : ""}`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 mt-3 sm:mt-0">
                    <h2 className="font-semibold mb-1 text-[14px]">Gender</h2>
                    <h3 className="font-thin mb-1 text-[10px]">Pick Available Gender</h3>
                    <div className="flex space-x-8">
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="gender" value="man" /> <span>Man</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="gender" value="woman" /> <span>Woman</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input type="radio" name="gender" value="unisex" /> <span>Unisex</span>
                      </label>
                    </div>
                  </div>
                </div>
          </div>

          {/* Pricing and Stock */}
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-2">Pricing And Stock</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="pricing-stock">
                <h4 className="font-semibold text-[12px]">Base Pricing</h4>
                <input type="text" placeholder="Enter your base pricing" className="p-2 border rounded-md w-full bg-gray-300" />
              </div>
              <div className="pricing-stock">
              <h4 className="font-semibold text-[12px]">Stock</h4>
                <input type="text" placeholder="Enter your stock" className="p-2 border rounded-md w-full bg-gray-300" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
              <div className="pricing-discount">
              <h4 className="font-semibold text-[12px]">Discount</h4>
                <input type="text" placeholder="Enter your discount" className="p-2 border rounded-md w-full bg-gray-300" />
              </div>
              <div className="pricing-discount">
              <h4 className="font-semibold text-[12px]">Discount Type</h4>
                <select name="discount_type" id="discount_type" className="w-full p-2 border rounded-md bg-gray-300">
                  <option value="" hidden>Select your type discount</option>
                  <option value="">Chinese New Year Discount</option>
                  <option value="">Khmer New Year Discount</option>
                  <option value="">Last Year</option>
                  <option value="">Last Weeked</option>
                  <option value="">Last Hour</option>
                </select>
              </div>
            </div>
          </div>
        </div>


        {/* Right Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Image Upload */}
          <div className="bg-gray-100 p-5 rounded-lg shadow text-center">
            <h2 className="font-semibold mb-3">Upload Img</h2>
            <div className="border rounded-lg p-3 flex justify-center">
              <img
                src="/assets/Radaa.png"
                alt="Product"
                className="w-40 h-56 object-cover"
              />
            </div>
            <div className="flex justify-center mt-3 space-x-2">
              <div className="w-10 h-1/2 border-2 rounded">
                <img
                  src="/assets/Radaa.png"
                  className="img-fluid rounded-top"
                  alt=""
                />
              </div>
              <div className="w-10 h-1/2 border-2 rounded">
              <img
                  src="/assets/Radaa.png"
                  className="img-fluid rounded-top"
                  alt=""
                />
              </div>
              <div className="w-10 h-1/2 border-2 rounded">
              <img
                  src="/assets/Radaa.png"
                  className="img-fluid rounded-top"
                  alt=""
                />
              </div>
              <div className="rounded">
                <button className="w-10 h-full border-2 rounded flex justify-center items-center">
                  <PlusCircle size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-3">Category</h2>
            <h3 className="font-semibold mb-1 text-[12px]">Product Category</h3>
            <select className="bg-gray-300 w-full p-2 border rounded-md">
              <option value="">Casual Wear</option>
              <option value="">Testing</option>
              <option value="">White T-Shirt</option>
            </select>
            <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-3xl" onClick={() => setIsOpen(true)}>
              Add Category
            </button>

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
              <form className="space-y-4">
                  <h2 className="text-lg font-bold mb-4 text-center">Add New Category</h2>
              <div>
                  <label className="block text-sm font-medium text-gray-700">Category Name:</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
                    placeholder="Enter category name"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description:</label>
                  <textarea
                    className="mt-1 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                    rows={4}
                    placeholder="Enter category description..."
                    required
                  ></textarea>
                </div>

              <button
                    className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition mt-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                  
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}