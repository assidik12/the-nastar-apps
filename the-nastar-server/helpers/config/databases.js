import dotenv from "dotenv";
import mysql from "mysql";
import util from "util";
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.query = util.promisify(connection.query).bind(connection);

connection.end = util.promisify(connection.end).bind(connection);

connection.connect(function (err) {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected");
});

export default connection;
