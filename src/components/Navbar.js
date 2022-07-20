import { useState, useEffect, useCallback } from "react";
import { useNavigate, NavLink, Link, useLocation } from "react-router-dom";
import { getCategories, pages } from "../utils";

function Navbar() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

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
      {location.pathname.split("/")[1] === pages.PRODUCTS ? (
        <Link
          className="nav__btn"
          to={`/${pages.CART}/${location.pathname.split("/")[2]}`}
        >
          Cart
        </Link>
      ) : (
        <Link
          className="nav__btn"
          to={`/${pages.PRODUCTS}/${location.pathname.split("/")[2]}`}
        >
          Products
        </Link>
      )}
      {categories.map((category, key) => (
        <NavLink
          key={key}
          className={({ isActive }) =>
            `nav__link ${isActive ? "nav__link--active" : ""}`
          }
          to={`/${location.pathname.split("/")[1]}/${category}`}
        >
          {category}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
