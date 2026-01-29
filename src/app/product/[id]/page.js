"use client";

import { clearSelectedProduct, setSelectedProduct } from "@/redux/actions/productActions";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { products = [], selectedProduct } = useSelector(
        (state) => state.productData || {}
    );
    // Handle refresh case 
    useEffect(() => {
        console.log(products)
        if (!selectedProduct && products.length > 0) {
            const product = products.find((item) => item.id === Number(id));
            if (product) {
                dispatch(setSelectedProduct(product));
            }
        }

        return () => {
            dispatch(clearSelectedProduct());
        }
    }, [dispatch, id, products, selectedProduct])

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