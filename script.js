export default function RoyalFinanceTracker() {
  const expenses = [
    { title: 'Netflix', amount: '₹799', category: 'Entertainment' },
    { title: 'Flight Ticket', amount: '₹12,500', category: 'Travel' },
    { title: 'Shopping', amount: '₹5,400', category: 'Lifestyle' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-yellow-950 text-white p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold tracking-wide text-yellow-400">
            Royal Finance
          </h1>
          <p className="text-zinc-400 mt-2">
            Smart wealth tracking dashboard
          </p>
        </div>

        <button className="bg-yellow-500 hover:bg-yellow-400 transition px-5 py-2 rounded-xl text-black font-semibold shadow-lg shadow-yellow-500/30">
          + Add Expense
        </button>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-2xl hover:scale-105 transition duration-300">
          <p className="text-zinc-400">Total Balance</p>
          <h2 className="text-3xl font-bold mt-3 text-green-400">₹1,25,000</h2>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-2xl hover:scale-105 transition duration-300">
          <p className="text-zinc-400">Monthly Spending</p>
          <h2 className="text-3xl font-bold mt-3 text-red-400">₹35,400</h2>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-2xl hover:scale-105 transition duration-300">
          <p className="text-zinc-400">Savings</p>
          <h2 className="text-3xl font-bold mt-3 text-yellow-300">₹89,600</h2>
        </div>
      </div>

      {/* Expense Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Expense List */}
        <div className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/10 shadow-2xl">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-yellow-400">
              Recent Expenses
            </h2>

            <input
              placeholder="Search expense..."
              className="bg-black/30 border border-zinc-700 px-4 py-2 rounded-xl outline-none"
            />
          </div>

          <div className="space-y-4">
            {expenses.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-black/20 border border-white/5 rounded-2xl p-4 hover:bg-yellow-500/10 transition duration-300"
              >
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.category}</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-yellow-300">
                    {item.amount}
                  </span>

                  <button className="bg-yellow-500 text-black px-3 py-1 rounded-lg hover:bg-yellow-400 transition">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/10 shadow-2xl">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-6">
            Quick Analytics
          </h2>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span>Travel</span>
                <span>70%</span>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-3">
                <div className="bg-yellow-400 h-3 rounded-full w-[70%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Shopping</span>
                <span>45%</span>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-3">
                <div className="bg-green-400 h-3 rounded-full w-[45%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span>Food</span>
                <span>30%</span>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-3">
                <div className="bg-red-400 h-3 rounded-full w-[30%]"></div>
              </div>
            </div>
          </div>

          {/* Premium Card */}
          <div className="mt-10 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black rounded-3xl p-6 shadow-2xl">
            <p className="font-semibold">Premium Account</p>
            <h3 className="text-2xl font-bold mt-2">Royal Gold Member</h3>
            <p className="mt-3 text-sm opacity-80">
              Unlock advanced insights & financial reports.
            </p>

            <button className="mt-5 bg-black text-white px-4 py-2 rounded-xl hover:bg-zinc-900 transition">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
