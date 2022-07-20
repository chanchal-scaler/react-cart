import classNames from "classnames";
import { useCallback, useState } from "react";
import { pages } from "../utils";

function ProductCard({ product, carts, setCarts, setPage }) {
  const { title, price, description, image, rating, category } = product;

  const [describe, setDescribe] = useState(false);
  const isProductInCart = (carts[category] ?? []).filter(
    (item) => item.id === product.id
  ).length;

  const productDescription = classNames("product-description__description", {
    "product-description__description--active": describe,
  });

  const addToCart = useCallback(() => {
    let newCart = { ...carts };
    if (!newCart[category]) {
      newCart[category] = [];
    }
    newCart[category].push(product);
    setCarts(newCart);
    setPage(pages.CART);
  }, [carts, category, product, setCarts, setPage]);

  const removeFromCart = useCallback(() => {
    let newCart = { ...carts };
    const index = newCart[category]
      ?.map((item) => item.id)
      .indexOf(product?.id);
    if (index !== -1) {
      newCart[category].splice(index, 1);
    }
    setCarts(newCart);
    setPage(pages.CART);
  }, [carts, category, product, setCarts, setPage]);

  return (
    <div className="products__product-card product-card">
      <img src={image} alt={title} />
      <div className="product-card__description product-description">
        <span className="product-description__title">{title}</span>
        <div className={productDescription}>{description}</div>
        <small
          onClick={() => setDescribe(!describe)}
          className="product-description__describe"
        >
          {describe && "Less"}
          {!describe && "More"}
        </small>
        <div className="product-description__rating product-rating">
          <span className="product-rating__rate">&#11088; {rating.rate}/5</span>
          <span className="product-rating__count">{rating.count} votes</span>
        </div>
        <div>
          <span className="product-description__price">&#65284; {price}</span>
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
  );
}

export default ProductCard;
