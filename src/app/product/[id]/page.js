"use client";

import { clearSelectedProduct, setSelectedProduct, fetchProducts } from "@/redux/actions/productActions";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { products, selectedProduct } = useSelector(
        (state) => state.productData || {}
    );

    // 1️⃣ Ensure products are available (refresh-safe)
    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products.length]);

    // Handle refresh case 
    useEffect(() => {
        console.log("producst", products)
        if (!selectedProduct && products.length > 0) {
            const product = products.find((item) => item.id === Number(id));
            if (product) {
                dispatch(setSelectedProduct(product));
            }
        }
    }, [dispatch, id, products, selectedProduct])

    // 2️⃣ Clear selected product ONLY on unmount
    useEffect(() => {
        return () => {
            dispatch(clearSelectedProduct());
        };
    }, [dispatch]);

    if (!selectedProduct) {
        return <p>Loading product...</p>
    }
    return (
        <div>
            <h1>{selectedProduct.title}</h1>
            <img src={selectedProduct.image} alt="200" />
        </div>
    )
}