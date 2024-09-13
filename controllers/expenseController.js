const Expense = require("../models/expenseModel");

// Add expense
const addExpense = async (req, res) => {
  const { expense, category, amount, date, time } = req.body;
  if (!expense || !category || !amount || !date || !time) {
    res.status(400).json({ message: "All fields are required" });
  }
  const newExpense = new Expense({ expense, category, amount, date, time });
  const savedExpense = await newExpense.save();
  res.status(201).json(savedExpense);
};

// Get expenses
const getExpenses = async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
};

module.exports = { addExpense, getExpenses };
