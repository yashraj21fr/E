import React, { useState, useEffect } from "react";
import axios from "axios";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/expenses/view"
      );
      setExpenses(data);
    };
    fetchExpenses();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Expense</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.expense}</td>
            <td>{expense.category}</td>
            <td>{expense.amount}</td>
            <td>{expense.date}</td>
            <td>{expense.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
