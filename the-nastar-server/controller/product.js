import db from "../helpers/config/databases.js";

export const getProducts = async () => {
  let products = await db.query("SELECT * FROM products");

  if (!products) return { status: 500, products: null, message: "internal server error" };
  if (products.length === 0) return { status: 404, products: null, message: "products not found" };

  products = products.map(({ id, name, description, price, image }) => ({ id, name, description, price, image }));

  return { status: 200, products, message: "products found" };
};

export const getProductById = async (id) => {
  const product = await db.query("SELECT * FROM products WHERE id = ?", [id]);
  if (!product) return { status: 500, product: null, message: "internal server error" };
  if (product.length === 0) return { status: 404, product: null, message: "product not found" };

  return { status: 200, product: product[0], message: "product found" };
};

export const createProduct = async (data) => {
  const { name, description, price, image, stock } = data;
  const product = await db.query("INSERT INTO products SET ?", { name, description, price, image, stock });
  if (!product) return { status: 500, product: null, message: "internal server error" };
  return {
    status: 201,
    product,
    message: "product created",
  };
};

export const updateProduct = async (data) => {
  const { id, name, description, price, image, stock } = data;
  const product = await db.query("UPDATE products SET name = ?, description = ?, price = ?, image = ?, stock = ? WHERE id = ?", [name, description, price, image, stock, id]);
  if (!product) return { status: 500, product: null, message: "internal server error" };
  return {
    status: 200,
    product,
    message: "product updated",
  };
};

export const deleteProduct = async (id) => {
  const product = await db.query("DELETE FROM products WHERE id = ?", [id]);
  if (!product) return { status: 500, product: null, message: "internal server error" };
  return {
    status: 200,
    product,
    message: "product deleted",
  };
};
