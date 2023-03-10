const DATABASE = {
  host: process.env.HOST || "localhost",
  user: process.env.USERDB || "postgres",
  password: process.env.PASSWORD || "root",
  database: process.env.DATABASE || "bienes",
  port: process.env.PORTDB || 5432,
};
const JWT_SECRET_KEY = process.env.JWT_SECRET || "mysecret";
export { DATABASE, JWT_SECRET_KEY };
