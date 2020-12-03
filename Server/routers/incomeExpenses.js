const express = require("express");
const incomeExpenses = require("../controllers/incomeExpenses");
const { authenticate } = require("../middleware");
const router = express.Router();

router.get("/",  incomeExpenses.getAllEntries);

router.get("/:id", incomeExpenses.getEntryById);

router.post("/", incomeExpenses.createEntry);

router.put("/:id", incomeExpenses.updateEntryById);

router.delete(
  "/:expensesId",
  incomeExpenses.deleteUserByExpensesId
);

module.exports = router;
