import { useEffect, useState, useCallback } from "react";
import { ProductCard } from "../components";
import { getProductsData } from "../utils";

function Products({ category, carts, setCarts, setPage }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const data = await getProductsData(category);
    setProducts(data);
    setLoading(false);
  }, [category]);

  useEffect(() => {
    if (category) fetchProducts();
  }, [category, fetchProducts]);

  return (
    <div className="products">
      {loading && "Loading..."}
      {!loading &&
        products?.map((product, key) => (
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
}

export default Products;
