import db from "../helpers/config/databases.js";

export const LoginController = async (username) => {
  const user = await db.query("SELECT * FROM users WHERE username = ?", [username]);
  if (user.length) {
    return user[0];
  }
  return false;
};

export const registerController = async (data) => {
  const { username, password, address, phone, role } = data;
  const user = await db.query("SELECT * FROM users WHERE username = ?", [username]);
  if (user.length) {
    return {
      status: 400,
      error: "username already exists",
    };
  }
  await db.query("INSERT INTO users SET ?", { username, password, address, phone, role });
  return {
    status: 201,
    message: "user created",
  };
};
