import express from "express";
import { successResponse, errorResponse } from "../helpers/utils/responses.js";
import { getAllProductsService, getProductByIdService, createProductService, updateProductService, deleteProductService } from "../services/product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const datas = await getAllProductsService();
  let result = { status: datas.status, message: datas.message || datas.error, data: datas.products };
  if (result.status === 200) {
    successResponse(result, res);
  } else {
    errorResponse(result, res);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const datas = await getProductByIdService(id);
  let result = { status: datas.status, message: datas.message || datas.error, data: datas.product };
  if (result.status === 200) {
    successResponse(result, res);
  } else {
    errorResponse(result, res);
  }
});

router.post("/", async (req, res) => {
  const datas = await createProductService(req.body);
  let result = { status: datas.status, message: datas.message || datas.error, data: datas.product };
  if (result.status === 201) {
    successResponse(result, res);
  } else {
    errorResponse(result, res);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const datas = await updateProductService({ ...req.body, id });
  let result = { status: datas.status, message: datas.message || datas.error, data: datas.product };
  if (result.status === 200) {
    successResponse(result, res);
  } else {
    errorResponse(result, res);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const datas = await deleteProductService(id);
  let result = { status: datas.status, message: datas.message || datas.error, data: datas.product };
  if (result.status === 200) {
    successResponse(result, res);
  } else {
    errorResponse(result, res);
  }
});

export default router;
