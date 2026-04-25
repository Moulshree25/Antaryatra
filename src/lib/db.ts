import { Pool } from "pg";

const pool = new Pool({
  user: "Samruddhi",
  host: "localhost",
  database: "antaryatra",
  password: "postgres",
  port: 5432,
});

export default pool;