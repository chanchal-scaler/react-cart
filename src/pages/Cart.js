import { ProductCard } from "../components";

function Cart({ category, carts, setCarts, setPage }) {
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
            setPage={setPage}
          />
        ))}
      {!cartHasData && "Nothing here Yet!"}
    </div>
  );
}

export default Cart;
