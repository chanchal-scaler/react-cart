import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components";
import { getData } from "../utils";

const Products = ({ carts, setCarts }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

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
            />
          ))}
    </div>
  );
};

export default Products;
