import { useState } from "react";
import { Navbar } from "./components";
import { Cart, Products } from "./pages";
import { pages } from "./utils";

const App = () => {
  const [page, setPage] = useState(pages.PRODUCTS);
  const [category, setCategory] = useState("");
  const [carts, setCarts] = useState({});

  return (
    <div className="App">
      <Navbar
        page={page}
        setPage={setPage}
        category={category}
        setCategory={setCategory}
      />
      {page === pages.PRODUCTS ? (
        <Products
          category={category}
          setCarts={setCarts}
          carts={carts}
          setPage={setPage}
        />
      ) : (
        <Cart
          category={category}
          carts={carts}
          setCarts={setCarts}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default App;
