import { useState, useEffect } from "react";
import { getData, pages } from "../utils";

const Navbar = ({ page, setPage, setCategory, category }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategores = async () => {
      const data = await getData(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(data);
      setCategory(data[0]);
    };
    fetchCategores();
  }, [setCategory]);

  return (
    <div className="nav">
      <span className="nav__title">React Cart</span>
      {page === pages.PRODUCTS ? (
        <span className="nav__btn" onClick={() => setPage(pages.CART)}>
          Cart
        </span>
      ) : (
        <span className="nav__btn" onClick={() => setPage(pages.PRODUCTS)}>
          Products
        </span>
      )}
      {categories.map((categori, key) => (
        <span
          key={key}
          className={`nav__link ${
            category === categori ? "nav__link--active" : ""
          }`}
          onClick={() => setCategory(categori)}
        >
          {categori}
        </span>
      ))}
    </div>
  );
};

export default Navbar;
