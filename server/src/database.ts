import mysql from 'mysql2';
import 'dotenv/config';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete',
  password: process.env.DB_PW,
});

interface Contacts {
  viewAll: () => Promise<
    | mysql.RowDataPacket[]
    | mysql.RowDataPacket[][]
    | mysql.OkPacket
    | mysql.OkPacket[]
    | mysql.ResultSetHeader
  >;

  addContact: (
    email: string
  ) => Promise<
    | mysql.RowDataPacket[]
    | mysql.RowDataPacket[][]
    | mysql.OkPacket
    | mysql.OkPacket[]
    | mysql.ResultSetHeader
  >;
}

const contacts: Contacts = {
  viewAll: () => {
    return new Promise((resolve, reject) => {
      pool.query(`SELECT * FROM contacts`, (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      });
    });
  },
  addContact: (email: string) => {
    return new Promise((resolve, reject) => {
      pool.query(
        `
        INSERT INTO contacts (email)
        VALUES(?);
        `,
        email,
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
