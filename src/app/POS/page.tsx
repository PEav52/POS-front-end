"use client";
import React, { useState } from "react";
import Layout from "./_layout"; // Import the layout
import "../globals.css"; // Style
import Image from "next/image"; // Import Next.js Image component
import {
  FaGlobe,
  FaShoppingCart,
  FaCreditCard,
  FaQrcode,
} from "react-icons/fa"; // Import FontAwesome icons

const Page = () => {
  // 5 boxes
  const categories = [
    { title: "All", count: "123 items" },
    { title: "Example 1", count: "33 items", price: "82" },
    { title: "Example 2", count: "44 items", price: "199" },
    { title: "Example 3", count: "12 items", price: "50" },
    { title: "Example 4", count: "25 items", price: "77" },
  ];

  // 8 products
  const products = [
    { name: "Item 1", code: "001", price: 82, image: "/assets/clotheTest.png" },
    {
      name: "Item 2",
      code: "002",
      price: 199,
      image: "/assets/clotheTest.png",
    },
    { name: "Item 3", code: "003", price: 50, image: "/assets/clotheTest.png" },
    { name: "Item 4", code: "004", price: 77, image: "/assets/clotheTest.png" },
    {
      name: "Item 5",
      code: "005",
      price: 120,
      image: "/assets/clotheTest.png",
    },
    { name: "Item 6", code: "006", price: 45, image: "/assets/clotheTest.png" },
    { name: "Item 7", code: "007", price: 99, image: "/assets/clotheTest.png" },
    { name: "Item 8", code: "008", price: 60, image: "/assets/clotheTest.png" },
  ];

  const [cart, setCart] = useState<any[]>([]); // State to manage cart items
  const [isCartVisible, setCartVisible] = useState(false); // State for cart visibility
  const [action, setAction] = useState<string>("Buy"); // State to track if user selected 'Buy' or 'Rent'

  const handleAddToCart = (product: any, action: string) => {
    const newCart = [...cart];
    const existingItem = newCart.find(
      (item) => item.code === product.code && item.action === action
    );

    if (existingItem) {
      // If item exists, increment the quantity
      existingItem.quantity += 1;
    } else {
      // Otherwise, add new item with quantity 1
      const cartItem = {
        ...product,
        action, // 'Buy' or 'Rent'
        quantity: 1, // Initialize quantity
      };
      newCart.push(cartItem);
    }

    setCart(newCart);
  };

  const toggleCart = () => {
    setCartVisible(!isCartVisible); // Toggle the cart visibility
  };

  // Calculate Subtotal, Tax (0), and Total
  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const tax = 0; // Tax is 0 for this example
  const subtotal = calculateSubtotal();
  const total = subtotal + tax;

  // Filter cart items based on action ('Buy' or 'Rent')
  const filteredCart = cart.filter((item) => item.action === action);

  return (
    <Layout>
      {/* Button to open/close the cart */}
      <button
        onClick={toggleCart}
        className="absolute top-16 right-4 bg-blue-500 text-white my-5 px-5 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center"
      >
        <FaShoppingCart className=" text-2xl text-black mx-10 font-bold " />
        {cart.length > 0 && (
          <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs absolute -top-2 -right-2">
            {cart.length}
          </span>
        )}
      </button>

      {/* Categories Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-10 py-20">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-lg"
          >
            <FaGlobe className="text-blue-500 text-4xl mb-4" />
            <p className="text-lg font-semibold">{item.title}</p>
            <span className="text-sm text-gray-600">{item.count}</span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex min-h-screen justify-between px-10 py-8">
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
          {products.map((product, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={300}
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-4">
                Item code: {product.code}
              </p>
              <p className="text-lg font-bold text-blue-500 mb-4">
                ${product.price.toFixed(2)}{" "}
                <span className="line-through text-red-500">
                  ${(product.price + 20).toFixed(2)}
                </span>
              </p>
              <div className="flex space-x-4">
                <button
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
                  onClick={() => handleAddToCart(product, "Buy")}
                >
                  Buy
                </button>
                <button
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
                  onClick={() => handleAddToCart(product, "Rent")}
                >
                  Rent
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar (Cart) */}
        <div
          className={`w-1/4 h-full bg-white p-6 fixed top-0 right-0 overflow-y-auto shadow-xl rounded-lg transition-all duration-300 ease-in-out transform border border-gray-300 ${
            isCartVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={toggleCart}
            className="absolute top-3 left-4 m text-xl text-gray-600 focus:outline-none"
          >
            <i className="font-bold">X</i>
          </button>

          <h2 className="text-xl font-bold mt-8 mb-6">
            <div className="flex w-full space-x-2">
              <button
                className={`flex-1 border border-black p-2 rounded-lg ${
                  action === "Buy"
                    ? "bg-blue-600 text-white"
                    : "bg-transparent text-gray-600"
                }`}
                onClick={() => setAction("Buy")}
              >
                Buy
              </button>
              <button
                className={`flex-1 border border-black p-2 rounded-lg ${
                  action === "Rent"
                    ? "bg-green-600 text-white"
                    : "bg-transparent text-gray-600"
                }`}
                onClick={() => setAction("Rent")}
              >
                Rent
              </button>
            </div>
          </h2>

          <div className="space-y-4">
            {filteredCart.length > 0 ? (
              filteredCart.map((item, index) => (
                <div
                  key={index}
                  className="border-b  border-gray-300 pb-4 mb-4 flex items-center space-x-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md shadow-md"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-lg">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Item Code: {item.code}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-lg font-bold">
                        {item.action} - ${item.price}
                      </p>
                      <p className="text-md text-gray-700">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No items in the cart.</p>
            )}
          </div>

          {/* Subtotal, Tax, Total */}
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Tax:</p>
              <p>${tax.toFixed(2)}</p>
            </div>
            <hr />
            <div className="flex justify-between font-bold">
              <p>Total:</p>
              <p>${total.toFixed(2)}</p>
            </div>
          </div>

          {/* Payment Options */}
          <div className="mt-4 grid grid-cols-3 gap-4">
            <h3 className="text-lg font-semibold col-span-3 mb-4">
              Payment Options
            </h3>

            {/* Credit/Debit Card */}
            <button className="w-full border border-black py-4 px-4 rounded-lg flex flex-col items-center justify-center space-y-2">
              <FaCreditCard className="text-2xl" />
            </button>

            {/* QR Code */}
            <button className="w-full border border-black py-4 px-4 rounded-lg flex flex-col items-center justify-center space-y-2">
              <FaQrcode className="text-2xl" />
            </button>

            {/* Cash on Delivery */}
            <button className="w-full border border-black py-4 px-4 rounded-lg flex flex-col items-center justify-center space-y-2">
              <span className="text-2xl">💵</span>
            </button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {/* Credit/Debit Card */}
            <button className="w-full  font-bold pb-10 rounded-lg flex flex-col items-center justify-center space-y-2">
              <span className="text-sm">Credit/Debit</span>
            </button>

            {/* QR Code */}
            <button className="w-full font-bold pb-10 rounded-lg flex flex-col items-center justify-center space-y-2">
              <span className="text-sm">QR Code</span>
            </button>

            {/* Cash on Delivery */}
            <button className="w-full font-bold  pb-10 rounded-lg flex flex-col items-center justify-center space-y-2">
              <span className="text-sm">Cash</span>
            </button>
          </div>
          <button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700"
            onClick={() => alert("Order Placed!")}
          >
            Place Order
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
