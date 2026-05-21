import { useState } from "react";

import { motion } from "framer-motion";

import {
  FaWallet,
  FaMoon,
  FaSun,
  FaTrash,
} from "react-icons/fa";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function App() {

  const [darkMode, setDarkMode] = useState(true);

  const [title, setTitle] = useState("");

  const [amount, setAmount] = useState("");

  const [category, setCategory] = useState("Food");

  const [date, setDate] = useState("");

  const [expenses, setExpenses] = useState([]);

  // ADD EXPENSE
  const addExpense = () => {

    if (!title || !amount || !date) {
      alert("Fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date,
    };

    setExpenses([...expenses, newExpense]);

    setTitle("");
    setAmount("");
    setDate("");
  };

  // DELETE EXPENSE
  const deleteExpense = (id) => {

    setExpenses(
      expenses.filter((item) => item.id !== id)
    );
  };

  // TOTAL
  const totalExpense = expenses.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  // CHART DATA
  const chartData = [
    {
      name: "Food",
      value: expenses
        .filter((e) => e.category === "Food")
        .reduce((a, b) => a + b.amount, 0),
    },
    {
      name: "Travel",
      value: expenses
        .filter((e) => e.category === "Travel")
        .reduce((a, b) => a + b.amount, 0),
    },
    {
      name: "Shopping",
      value: expenses
        .filter((e) => e.category === "Shopping")
        .reduce((a, b) => a + b.amount, 0),
    },
  ];

  const COLORS = [
    "#8b5cf6",
    "#06b6d4",
    "#f59e0b",
  ];

  return (

    <div
      className={`min-h-screen overflow-x-hidden transition-all duration-500 px-4 sm:px-6 lg:px-10 py-6 ${
        darkMode
          ? "bg-gradient-to-br from-black via-zinc-900 to-purple-950 text-white"
          : "bg-gradient-to-br from-purple-100 to-white text-black"
      }`}
    >

      {/* GLOW EFFECTS */}

      <div className="fixed w-60 h-60 sm:w-72 sm:h-72 bg-purple-500 blur-[120px] opacity-20 top-0 left-0"></div>

      <div className="fixed w-60 h-60 sm:w-72 sm:h-72 bg-cyan-500 blur-[120px] opacity-20 bottom-0 right-0"></div>

      {/* HEADER */}

      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 mb-10 relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold flex items-center gap-3 text-center sm:text-left"
        >

          <FaWallet className="text-purple-400" />

          Finance Tracker

        </motion.h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-3 sm:p-4 rounded-2xl hover:scale-105 transition-all"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

      </div>

      {/* DASHBOARD CARDS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 relative z-10">

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-3xl shadow-2xl"
        >

          <h2 className="text-lg sm:text-xl mb-3">
            Total Expenses
          </h2>

          <p className="text-3xl sm:text-4xl font-bold text-red-400">
            ₹ {totalExpense}
          </p>

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-3xl shadow-2xl"
        >

          <h2 className="text-lg sm:text-xl mb-3">
            Budget
          </h2>

          <p className="text-3xl sm:text-4xl font-bold text-cyan-400">
            ₹ 50,000
          </p>

        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 rounded-3xl shadow-2xl"
        >

          <h2 className="text-lg sm:text-xl mb-3">
            Remaining
          </h2>

          <p className="text-3xl sm:text-4xl font-bold text-green-400">
            ₹ {50000 - totalExpense}
          </p>

        </motion.div>

      </div>

      {/* FORM */}

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 sm:p-8 rounded-3xl shadow-2xl mb-10 relative z-10">

        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Add Expense
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          <input
            type="text"
            placeholder="Expense Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-4 rounded-2xl bg-black/20 border border-white/20 outline-none"
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-4 rounded-2xl bg-black/20 border border-white/20 outline-none"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-4 rounded-2xl bg-black/20 border border-white/20 outline-none"
          >

            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>

          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="p-4 rounded-2xl bg-black/20 border border-white/20 outline-none"
          />

        </div>

        <button
          onClick={addExpense}
          className="w-full sm:w-auto mt-6 bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-semibold"
        >
          Add Expense
        </button>

      </div>

      {/* EXPENSE LIST */}

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 sm:p-8 rounded-3xl shadow-2xl mb-10 relative z-10">

        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Expense History
        </h2>

        <div className="space-y-4">

          {expenses.map((item) => (

            <motion.div
              key={item.id}
              whileHover={{ scale: 1.01 }}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-black/20 p-5 rounded-2xl"
            >

              <div>

                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm opacity-70">
                  {item.category} • {item.date}
                </p>

              </div>

              <div className="flex items-center gap-4">

                <p className="text-xl sm:text-2xl font-bold text-red-400">
                  ₹ {item.amount}
                </p>

                <button
                  onClick={() => deleteExpense(item.id)}
                  className="bg-red-500 hover:bg-red-600 p-3 rounded-xl transition-all"
                >
                  <FaTrash />
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* CHART */}

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-5 sm:p-8 rounded-3xl shadow-2xl relative z-10">

        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Expense Analytics
        </h2>

        <div className="h-[300px] sm:h-[400px]">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={chartData}
                dataKey="value"
                outerRadius={window.innerWidth < 640 ? 80 : 140}
                label
              >

                {chartData.map((entry, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}