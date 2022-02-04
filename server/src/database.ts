import mysql from 'mysql2';
import 'dotenv/config';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: process.env.DB_PW,
});

export default pool.promise();
