const express = require("express");
const {
  // auth
  userRegister,
  userLogin,
  // incomes CRUD
  getIncomeByUser,
  incomeAdd,
  incomeDelete,
  // expenses CRUD
  getExpenseByUser,
  expenseAdd,
  expenseDelete,
  // summary
  getSummaryReport
} = require("../controllers/controller");

const router = express.Router();

router.post("/users/register", userRegister);
router.post("/users/login", userLogin);

// Income Routes
router.post("/income/all", getIncomeByUser);
router.post("/income/add", incomeAdd);
router.delete("/income/delete/:incomeId", incomeDelete);

// Expense Routes
router.post("/expense/all", getExpenseByUser);
router.post("/expense/add", expenseAdd);
router.delete("/expense/delete/:expenseId", expenseDelete);

// Summary Routes
router.post("/summary", getSummaryReport);

module.exports = router;
