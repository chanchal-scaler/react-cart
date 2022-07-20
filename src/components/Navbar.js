import { useState, useEffect, useCallback } from "react";
import { getCategories, pages } from "../utils";

function Navbar({ page, setPage, setCategory, category }) {
  const [categories, setCategories] = useState([]);
  const isProductsPage = page === pages.PRODUCTS;

  const fetchCategories = useCallback(async () => {
    const data = await getCategories();
    setCategories(data);
    setCategory(data[0]);
  }, [setCategory]);

  useEffect(() => {
    fetchCategories();
  }, [setCategory, fetchCategories]);

  return (
    <div className="nav">
      <span className="nav__title">React Cart</span>
      {isProductsPage && (
        <span className="nav__btn" onClick={() => setPage(pages.CART)}>
          Cart
        </span>
      )}
      {!isProductsPage && (
        <span className="nav__btn" onClick={() => setPage(pages.PRODUCTS)}>
          Products
        </span>
      )}
      {categories.map((item, key) => (
        <span
          key={key}
          className={`nav__link ${category === item && "nav__link--active"}`}
          onClick={() => setCategory(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default Navbar;
