import React from "react";
import ProductItem from "./ProductItem";

const ProductsSection = () => {
  return (
    <div>
      <h2 className="text-3xl text-center py-5">Featured Products</h2>
      <div className="grid grid-cols-4 justify-items-center max-w-screen-2xl mx-auto gap-x-2 px-10 gap-y-5 max-lg:grid-cols-3 max-sm:grid-cols-2 max-[400px]:grid-cols-1">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  );
};

export default ProductsSection;