import { genSalt, hash } from "bcrypt";
import { registerController, LoginController } from "../controller/account.js";
import jsonwebtoken from "jsonwebtoken";

export const loginServices = async (username, password) => {
  if (!username || !password) return { status: 400, message: "username and password are required", token: null };

  const user = await LoginController(username);

  if (!user) return { status: 404, message: "user not found", token: null };

  const validPassword = await hash(password, user.password);

  if (validPassword === user.password) {
    const token = jsonwebtoken.sign({ id: user.id, username: user.username, address: user.address, phone: user.phone }, "secret", { expiresIn: "1h" });
    return {
      status: 200,
      message: "user successfully logged in",
      token,
    };
  } else {
    return {
      status: 401,
      message: "invalid credentials",
      token: null,
    };
  }
};

export const registerServices = async (data) => {
  let { username, password, address, phone } = data;
  if (!username && !password) {
    return {
      status: 400,
      error: "username and password are required",
    };
  }

  const salt = await genSalt(10);
  password = await hash(password, salt);
  let role = "user";

  const res = await registerController({ username, password, address, phone, role });
  if (res.status === 201) {
    return {
      status: 201,
      message: "user created",
    };
  } else {
    return {
      status: 400,
      error: res.error,
    };
  }
};
