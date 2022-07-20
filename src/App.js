import { useState } from "react";
import { Navbar } from "./components";
import { Cart, Products } from "./pages";
import { pages } from "./utils";

function App() {
  const [page, setPage] = useState("PRODUCTS");
  const [category, setCategory] = useState("");
  const [carts, setCarts] = useState({});

  const isProductsPage = page === pages.PRODUCTS;

  return (
    <div className="App">
      <Navbar
        page={page}
        setPage={setPage}
        category={category}
        setCategory={setCategory}
      />
      {isProductsPage && (
        <Products
          category={category}
          setCarts={setCarts}
          carts={carts}
          setPage={setPage}
        />
      )}
      {!isProductsPage && (
        <Cart
          category={category}
          carts={carts}
          setCarts={setCarts}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default App;
