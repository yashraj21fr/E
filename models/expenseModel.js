const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
  expense: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model("Expense", expenseSchema);
