const sqlite3 = require("sqlite3").verbose();

const dbName = "testDatabase.db";

const db = new sqlite3.Database(dbName, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("DB Connected");
    db.run(
      `
          CREATE TABLE IF NOT EXISTS
          items (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          given_name TEXT,
          last_name TEXT,
          email TEXT,
          phone TEXT,
          house_number TEXT,
          street TEXT,
          suburb TEXT,
          state TEXT,
          postcode TEXT,
          country TEXT,
        )
      `,
      (err) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log("Table Exist");
        }
      }
    );
  }
});

module.exports = db;
