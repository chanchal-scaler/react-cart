import { ProductCard } from "../components";

const Cart = ({ category, carts, setCarts, setPage }) => {
  return (
    <div className="cart">
      {carts[category]?.length
        ? carts[category].map((product, key) => (
            <ProductCard
              product={product}
              key={key}
              carts={carts}
              setCarts={setCarts}
              setPage={setPage}
            />
          ))
        : "Nothing here Yet!"}
    </div>
  );
};

export default Cart;
