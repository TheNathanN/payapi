import mysql from 'mysql2';
import 'dotenv/config';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PW,
});

interface Contacts {
  addDemo: (
    email: string
  ) => Promise<
    | mysql.RowDataPacket[]
    | mysql.RowDataPacket[][]
    | mysql.OkPacket
    | mysql.OkPacket[]
    | mysql.ResultSetHeader
  >;

  addContact: (
    name: string,
    email: string,
    company: string,
    marketing: boolean,
    title?: string,
    message?: string
  ) => Promise<
    | mysql.RowDataPacket[]
    | mysql.RowDataPacket[][]
    | mysql.OkPacket
    | mysql.OkPacket[]
    | mysql.ResultSetHeader
  >;
}

const contacts: Contacts = {
  addDemo: email => {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO demo_form (email) 
        VALUES (?);`,
        [email],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  },

  addContact: (name, email, company, marketing, title?, message?) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO contact_form (name, email, company, marketing, title, message) 
        VALUES (?, ?, ?, ?, ?, ?);
        `,
        [name, email, company, marketing, title, message],
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    });
  },
};

export default contacts;
