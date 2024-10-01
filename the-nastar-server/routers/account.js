import express from "express";
import { successResponse, errorResponse } from "../helpers/utils/responses.js";
import { registerServices, loginServices } from "../services/account.js";

const router = express.Router();
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      status: 400,
      error: "username and password are required",
    });
  }

  const login = await loginServices(username, password);
  if (login.status === 200) {
    successResponse(login, res);
  } else {
    errorResponse(login, res);
  }
});

router.post("/register", async (req, res) => {
  const { username, password, address, phone } = req.body;
  if (!username || !password) {
    return res.status(400).json({
      status: 400,
      error: "username and password are required",
    });
  }
  const resgister = await registerServices({ username, password, address, phone });
  if (resgister.status === 201) {
    successResponse(
      {
        status: true,
        message: "user created",
      },
      res
    );
  } else {
    errorResponse(resgister, res);
  }
});

export default router;
