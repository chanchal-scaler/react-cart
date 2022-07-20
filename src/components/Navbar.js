import { useState, useEffect, useCallback } from "react";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
import { getCategories, pages } from "../utils";

function Navbar() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const isProductPage = location.pathname.split("/")[1] === pages.PRODUCTS;
  const category = location.pathname.split("/")[2].replace("%20", " ");
  const page = location.pathname.split("/")[1];

  const fetchCategories = useCallback(async () => {
    const data = await getCategories();
    setCategories(data);
    if (location.pathname === "/") navigate(`/${pages.PRODUCTS}/${data[0]}`);
  }, [location.pathname]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="nav">
      <span className="nav__title">React Cart</span>
      {isProductPage && (
        <Link className="nav__btn" to={`/${pages.CART}/${category}`}>
          Cart
        </Link>
      )}
      {!isProductPage && (
        <Link className="nav__btn" to={`/${pages.PRODUCTS}/${category}`}>
          Products
        </Link>
      )}
      {categories.map((item, key) => (
        <NavLink
          key={key}
          className={`nav__link ${item === category && "nav__link--active"}`}
          to={`/${page}/${item}`}
        >
          {item}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
