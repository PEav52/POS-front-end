import Layout from "./_layout"; 
import "../globals.css"; 
import Image from "next/image"; 
import { FaGlobe } from "react-icons/fa"; 


const Page = () => {
  //5 boxes
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
    { name: "Item 2", code: "002", price: 199, image: "/assets/clotheTest.png" },
    { name: "Item 3", code: "003", price: 50, image: "/assets/clotheTest.png" },
    { name: "Item 4", code: "004", price: 77, image: "/assets/clotheTest.png" },
    { name: "Item 5", code: "005", price: 120, image: "/assets/clotheTest.png" },
    { name: "Item 6", code: "006", price: 45, image: "/assets/clotheTest.png" },
    { name: "Item 7", code: "007", price: 99, image: "/assets/clotheTest.png" },
    { name: "Item 8", code: "008", price: 60, image: "/assets/clotheTest.png" },
  ];

  return (
    <Layout>

      {/* line Categories jah */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-10 py-8">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-4 shadow-md rounded-lg"
          >
            <FaGlobe className="text-blue-500 text-3xl mb-4" />
            <p className="text-lg font-semibold">{item.title}</p>
            <span className="text-sm text-gray-600">{item.count}</span>
          </div>
        ))}
      </div>

      <div className="flex min-h-screen justify-between px-10 py-8">
        {/* Product Cards jah*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
          {products.map((product, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white"
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
              <p className="text-sm text-gray-500 mb-4">Item code: {product.code}</p>
              <p className="text-lg font-bold text-blue-500 mb-4">
                ${product.price.toFixed(2)}{" "}
                <span className="line-through text-red-500">
                  ${(product.price + 20).toFixed(2)}
                </span>
              </p>
              <div className="flex space-x-4">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                  Buy
                </button>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
                  Rent
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Page;
