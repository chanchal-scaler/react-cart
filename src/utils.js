const getData = async (url) => {
  try {
    const res = await fetch(url, {
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

export { getData, pages };
