import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="py-10 px-16 ">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">PRODUCTS</h1>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid ss:grid-cols-2 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
