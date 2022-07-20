import { useState } from "react";
import { Navbar } from "./components";
import { Cart, Products, Product } from "./pages";
import { pages } from "./utils";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [carts, setCarts] = useState({});

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path={`/${pages.PRODUCTS}/:category`}
          element={<Products setCarts={setCarts} carts={carts} />}
        />
        <Route
          path={`/${pages.PRODUCTS}/:category/:id`}
          element={<Product setCarts={setCarts} carts={carts} />}
        />
        <Route
          path={`/${pages.CART}/:category`}
          element={<Cart carts={carts} setCarts={setCarts} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
