const mysql = require("mysql");
//HELLO THIS IS THE NEW APP TEST


class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating mysql connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: "d000",
        user: "0000",
        password: "0001",
        database: "0000",
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
