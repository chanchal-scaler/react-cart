import { useEffect, useState, useCallback } from "react";
import { ProductCard } from "../components";
import { getData } from "../utils";

const Products = ({ category, carts, setCarts, setPage }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const data = await getData(
      `https://fakestoreapi.com/products/category/${category}`
    );
    setProducts(data);
    setLoading(false);
  }, [category]);

  useEffect(() => {
    if (category) fetchProducts();
  }, [category, fetchProducts]);

  return (
    <div className="products">
      {loading
        ? "Loading..."
        : products?.map((product, key) => (
            <ProductCard
              key={key}
              product={product}
              carts={carts}
              setCarts={setCarts}
              setPage={setPage}
            />
          ))}
    </div>
  );
};

export default Products;
