import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controller/product.js";

export const getAllProductsService = async () => {
  const products = await getProducts();
  if (products.status !== 200) return { status: products.status, error: products.message, products: null };
  return products;
};

export const getProductByIdService = async (id) => {
  const product = await getProductById(id);
  if (product.status !== 200) return { status: product.status, error: product.message, product: null };
  return product;
};

export const createProductService = async (data) => {
  if (Object.keys(data).length === 0) return { status: 404, error: "harap masukan data product", product: null };
  const product = await createProduct(data);
  if (product.status !== 201) return { status: product.status, error: product.message, product: null };
  return product;
};

export const updateProductService = async (data) => {
  if (Object.keys(data).length === 0) return { status: 404, error: "harap masukan data product", product: null };
  const product = await updateProduct(data);
  if (product.status !== 200) return { status: product.status, error: product.message, product: null };
  return product;
};

export const deleteProductService = async (id) => {
  const product = await deleteProduct(id);
  if (product.status !== 200) return { status: product.status, error: product.message, product: null };
  return product;
};
