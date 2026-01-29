"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "@/redux/actions/productActions";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.productData)

  useEffect(() => {
    dispatch(fetchProducts)
  }, [dispatch])
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
}
