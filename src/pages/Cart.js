import { ProductCard } from "../components";
import { useParams } from "react-router-dom";

function Cart({ carts, setCarts }) {
  const { category } = useParams();
  const cartHasData = carts[category]?.length;

  return (
    <div className="cart">
      {cartHasData &&
        carts[category].map((product, key) => (
          <ProductCard
            product={product}
            key={key}
            carts={carts}
            setCarts={setCarts}
          />
        ))}
      {!cartHasData && "Nothing here Yet!"}
    </div>
  );
}

export default Cart;
