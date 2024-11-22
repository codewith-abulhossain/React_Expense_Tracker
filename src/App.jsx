import { useState } from "react";
import "./App.css";
import { ExpensesList } from "./component/ExpensesList";
import { ExpenseCategory } from "./component/ExpenseCategory";
import ExpenseForm from "./component/ExpenseForm";

function App() {
  const categories = [
    "Food",
    "Transport",
    "Entertainment",
    "Utilities",
    "Shopping",
    "Health",
    "Education",
  ];

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: "2024-11-22",
      category: "Food",
      description: "Groceries at supermarket",
      amount: 50.25,
    },
    {
      id: 2,
      date: "2024-11-21",
      category: "Transport",
      description: "Monthly metro pass",
      amount: 40.0,
    },
    {
      id: 3,
      date: "2024-11-20",
      category: "Entertainment",
      description: "Movie tickets",
      amount: 25.0,
    },
    {
      id: 4,
      date: "2024-11-19",
      category: "Utilities",
      description: "Electricity bill",
      amount: 75.5,
    },
    {
      id: 5,
      date: "2024-11-18",
      category: "Food",
      description: "Lunch at a restaurant",
      amount: 15.75,
    },
    {
      id: 6,
      date: "2024-11-17",
      category: "Shopping",
      description: "Clothing purchase",
      amount: 120.0,
    },
    {
      id: 7,
      date: "2024-11-16",
      category: "Health",
      description: "Pharmacy supplies",
      amount: 30.0,
    },
    {
      id: 8,
      date: "2024-11-15",
      category: "Transport",
      description: "Gas refill for car",
      amount: 60.0,
    },
    {
      id: 9,
      date: "2024-11-14",
      category: "Education",
      description: "Online course subscription",
      amount: 100.0,
    },
    {
      id: 10,
      date: "2024-11-13",
      category: "Food",
      description: "Dinner at a restaurant",
      amount: 35.5,
    },
    {
      id: 11,
      date: "2024-11-12",
      category: "Entertainment",
      description: "Concert tickets",
      amount: 150.0,
    },
    {
      id: 12,
      date: "2024-11-11",
      category: "Health",
      description: "Doctor's consultation fee",
      amount: 80.0,
    },
    {
      id: 13,
      date: "2024-11-10",
      category: "Shopping",
      description: "Gadget accessories",
      amount: 45.0,
    },
    {
      id: 14,
      date: "2024-11-09",
      category: "Utilities",
      description: "Water bill",
      amount: 20.75,
    },
    {
      id: 15,
      date: "2024-11-08",
      category: "Food",
      description: "Coffee and snacks",
      amount: 10.5,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  // remove cost
  const handleRemoveCost = (id) => {
    setExpenses(expenses.filter((exp) => exp.id != id));
  };

  // filter expenses based on selected category
  const filterExpense = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      <div className="max-w-6xl mx-auto mt-20">
        <div className="mb-4">
          <ExpenseForm />
        </div>
        <div className="max-w-5xl mx-auto border-4 border-purple-800 p-6 rounded-2xl">
          {expenses.length !== 0 && (
            <div className="mb-4 flex justify-end">
              <ExpenseCategory
                setSelectedCategory={setSelectedCategory}
                categories={categories}
              />
            </div>
          )}

          <ExpensesList
            expenses={filterExpense}
            handleRemoveCost={handleRemoveCost}
          />
        </div>
      </div>
    </>
  );
}

export default App;
