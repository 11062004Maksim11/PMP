import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("cryptos.db");

export const createTable = (name) => {
  db.transaction((tx) => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS ${name} (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          amountToBuy REAL,
          src NUMBER,
          name TEXT,
          checked INTEGER,
          dollarCurrency REAL
        )`,
      [],
      (_, result) => {
        console.log("Таблиця успішно створена");
      },
      (_, error) => {
        console.error("Помилка створення таблиці:", error);
      }
    );
  });
};

export const insertData = (dataArr) => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO crypto (amountToBuy, src, name, checked, dollarCurrency) VALUES (?, ?, ?, ?, ?)",
      dataArr,
      (_, result) => {
        console.log("Запис успішно доданий");
      },
      (_, error) => {
        console.error("Помилка додавання запису:", error);
      }
    );
  });
};

export const fetchData = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM crypto",
        [],
        (_, { rows: { _array } }) => {
          resolve(_array);
        },
        (_, error) => {
          // Query failed, reject with an error
          reject(error);
        }
      );
    });
  });
};

export const deleteTable = (name) => {
  db.transaction((tx) => {
    tx.executeSql(
      `DROP TABLE IF EXISTS ${name}`,
      [],
      (_, result) => {
        console.log("Table deleted successfully.");
      },
      (_, error) => {
        console.error("Error deleting table:", error);
      }
    );
  });
};
