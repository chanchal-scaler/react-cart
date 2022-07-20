import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, pages } from "../utils";

const Products = ({ carts, setCarts }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const isProductInCart = (carts[product.category] ?? []).filter(
    (item) => item.id === product.id
  ).length;

  const addToCart = useCallback(() => {
    let newCart = { ...carts };
    if (!newCart[product.category]) {
      newCart[product.category] = [];
    }
    newCart[product.category].push(product);
    setCarts(newCart);
    navigate(`/${pages.CART}/${product.category}`);
  }, [carts, product, setCarts, navigate]);

  const removeFromCart = useCallback(() => {
    let newCart = { ...carts };
    const index = newCart[product.category]
      ?.map((item) => item.id)
      .indexOf(product?.id);
    if (index !== -1) newCart[product.category].splice(index, 1);
    setCarts(newCart);
  }, [carts, product, setCarts]);

  const fetchProduct = useCallback(async () => {
    setLoading(true);
    const data = await getProductById(id);
    setProduct(data);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div className="product">
      {loading ? (
        "Loading..."
      ) : (
        <div className="product__product-card product-card">
          <img src={product.image} alt={product.title} />
          <div className="product-card__description product-description">
            <span className="product-description__title">{product.title}</span>
            <div className="product-description__description">
              Features:
              {product.description?.split(";").map((point, key) => (
                <li key={key}>{point}</li>
              ))}
            </div>
            <div className="product-description__rating product-rating">
              <span className="product-rating__rate">
                &#11088; {product.rating.rate}/5
              </span>
              <span className="product-rating__count">
                {product.rating.count} votes
              </span>
            </div>
            <div>
              <span className="product-description__price">
                &#65284; {product.price}
              </span>
              {isProductInCart && (
                <button
                  className="product-description__remove-btn"
                  onClick={removeFromCart}
                >
                  Remove
                </button>
              )}
              {!isProductInCart && (
                <button
                  className="product-description__add-btn"
                  onClick={addToCart}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
