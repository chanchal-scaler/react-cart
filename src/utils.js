const getProductsData = async (category) => {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    return await res.json();
  } catch (error) {
    console.log("Something went wrong!");
  }
};

const getCategories = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    return await res.json();
  } catch (error) {
    console.log("Something went wrong!");
  }
};

const pages = {
  PRODUCTS: "PRODUCTS",
  CART: "CART",
};

export { getProductsData, getCategories, pages };
