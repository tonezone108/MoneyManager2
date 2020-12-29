const mysql = require("mysql");

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating mysql connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
 host: "den1.mysql6.gear.host",
 user: "newappdatabase",
 password: "Ab6wguJ~W_71",
 database: "newappdatabase",
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
