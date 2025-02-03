"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
];

export default function EditProduct({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const foundProduct = sampleProducts.find((p) => p.id === params.id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [params.id]);

  if (!product) return <p className="text-center mt-10 text-red-500">Product not found</p>;

  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-red-500">Edit Product: {product.name}</h1>

      <div className="bg-white p-6 rounded-lg shadow mt-4">
        <label className="block text-gray-700">Product Name</label>
        <input
          type="text"
          defaultValue={product.name}
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />

        <label className="block text-gray-700">Price</label>
        <input
          type="text"
          defaultValue={product.price}
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />

        <label className="block text-gray-700">Stock</label>
        <input
          type="number"
          defaultValue={product.stock}
          className="w-full p-2 border border-gray-300 rounded mb-3"
        />

        <div className="mt-4 flex justify-end">
          <button 
            onClick={() => router.push("/products")}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded ml-3">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}