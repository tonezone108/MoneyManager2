const mysql = require("mysql");
//HELLO THIS IS THE NEW APP TEST

//OLD CONNECTION DATA
// // host: "34.66.38.33",
// user: "root",
// password: "SQLMAMA",
// database: "MoneyManager",

//NEW CONNECTION DATA
// host: "den1.mysql6.gear.host",
// user: "newappdatabase",
// password: "Ab6wguJ~W_71",
// database: "newappdatabase",
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
