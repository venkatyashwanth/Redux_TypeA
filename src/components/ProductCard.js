export default function ProductCard({ product }) {
    return (
        <div>
            <img src={product.image} width="120" />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
        </div>
    )
}