import { setSelectedProduct } from "@/redux/actions/productActions";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
    const dispatch = useDispatch();
    const router = useRouter();
    const handleClick = () => {
        dispatch(setSelectedProduct(product));
        router.push(`/product/${product.id}`)
    }
    return (
        <>
            <div onClick={handleClick} className="productCard">
                <img src={product.image} width="120" />
                <h3>{product.title}</h3>
                <p>{product.price}</p>
            </div>
        </>
    )
}