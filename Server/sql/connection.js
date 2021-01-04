const mysql = require("mysql");

class Connection {
  constructor() {
    if (!this.pool) {
      console.log("creating mysql connection...");
      this.pool = mysql.createPool({
        connectionLimit: 100,
<<<<<<< HEAD
 host: "den1.mysql6.gear.host",
 user: "newappdatabase",
 password: "Ab6wguJ~W_71",
 database: "newappdatabase",
=======
        host: "00.00.00.00",
        user: "root",
        password: "0000",
        database: "0000",
>>>>>>> 169bcc13f89f05967e8c2309c7e6020173933810
      });

      return this.pool;
    }

    return this.pool;
  }
}

const instance = new Connection();

module.exports = instance;
