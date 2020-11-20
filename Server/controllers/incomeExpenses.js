const mysql = require("mysql");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getAllEntries = (req, res) => {
  pool.query("SELECT * FROM income_expenses", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEntryById = (req, res) => {
  let sql =
    "SELECT regularIncome, taxes, insurance, debts, housing, investing, remainingIncome FROM income_expenses WHERE userName = ?";
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);

    return res.json(rows[0]);
  });
};

const createEntry = (req, res) => {
  const {
    regularIncome,
    taxes,
    insurance,
    debts,
    housing,
    investing,
    remainingIncome,
    userName,
  } = req.body;

  let sql =
    "INSERT INTO income_expenses (regularIncome, taxes, insurance, debts, housing, investing, remainingIncome, userName) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, [
    regularIncome,
    taxes,
    insurance,
    debts,
    housing,
    investing,
    remainingIncome,
    userName,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

const updateEntryById = (req, res) => {
  const {
    regularIncome,
    taxes,
    insurance,
    debts,
    housing,
    investing,
    remainingIncome,
    userName,
  } = req.body;
  let sql =
    "UPDATE income_expenses SET regularIncome = ?, taxes = ?, insurance = ?, debts = ?, housing = ?, investing = ?, remainingIncome = ? WHERE userName = ? ";
  sql = mysql.format(sql, [
    regularIncome,
    taxes,
    insurance,
    debts,
    housing,
    investing,
    remainingIncome,
    userName,
    req.params.id,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.status(204).json();
  });
};

const deleteUserByExpensesId = (req, res) => {
  let sql = "DELETE FROM income_expenses WHERE expensesId = ?";
  sql = mysql.format(sql, [req.params.expensesId]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
  });
};

module.exports = {
  createEntry,
  getAllEntries,
  getEntryById,
  updateEntryById,
  deleteUserByExpensesId,
};
