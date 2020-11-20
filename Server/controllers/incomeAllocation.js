const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getAllAllocations = (req, res) => {
  pool.query("SELECT * FROM income_allocation", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getAllocationById = (req, res) => {
  let sql =
    "SELECT earnedIncome, savings, groceries, transport, leisure, luxuries FROM income_allocation WHERE userName = ?";
  sql = mysql.format(sql, [req.params.id]);
  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows[0]);
  });
};

const createAllocation = (req, res) => {
  const {
    earnedIncome,
    savings,
    groceries,
    transport,
    leisure,
    luxuries,
    userName,
  } = req.body;
  let sql =
    "INSERT INTO income_allocation (earnedIncome, savings, groceries, transport, leisure, luxuries, userName  ) VALUES (?, ?, ?, ?, ?, ?, ?)";
  sql = mysql.format(sql, [
    earnedIncome,
    savings,
    groceries,
    transport,
    leisure,
    luxuries,
    userName,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

const updateAllocationById = (req, res) => {
  const {
    earnedIncome,
    savings,
    groceries,
    transport,
    leisure,
    luxuries,
    userName,
  } = req.body;
  let sql =
    "UPDATE income_allocation SET earnedIncome = ?, savings = ?, groceries = ?, transport = ?, leisure = ?, luxuries = ?  WHERE userName = ?";
  sql = mysql.format(sql, [
    earnedIncome,
    savings,
    groceries,
    transport,
    leisure,
    luxuries,
    req.params.id,
    userName,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
  });
};

const deleteALlocationByAllocationId = (req, res) => {
  let sql = "DELETE FROM income_allocation WHERE allocationId = ?";
  sql = mysql.format(sql, [req.params.userName]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  });
};

module.exports = {
  getAllAllocations,
  getAllocationById,
  createAllocation,
  updateAllocationById,
  deleteALlocationByAllocationId,
};
