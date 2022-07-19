import { ProductCard } from "../components";
import { useParams } from "react-router-dom";

const Cart = ({ carts, setCarts }) => {
  const { category } = useParams();
  return (
    <div className="cart">
      {carts[category]?.length
        ? carts[category].map((product, key) => (
            <ProductCard
              product={product}
              key={key}
              carts={carts}
              setCarts={setCarts}
            />
          ))
        : "Nothing here Yet!"}
    </div>
  );
};

export default Cart;
