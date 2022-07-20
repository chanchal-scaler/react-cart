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
  PRODUCTS: "products",
  PRODUCT: "product",
  CART: "cart",
};

export { getProductsData, getCategories, pages };
