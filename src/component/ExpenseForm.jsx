export default function ExpenseForm() {
  const categories = [
    "Food",
    "Transport",
    "Entertainment",
    "Utilities",
    "Shopping",
    "Health",
    "Education",
  ];
  return (
    <>
      <div className="max-w-5xl mx-auto border-4 border-green-800 p-6 rounded-2xl">
        <div className="text-3xl text-center font-semibold mb-6">
          <h2>ADD Your Expense</h2>
        </div>
        <form action="">
          <input
            type="date"
            placeholder="Date"
            className="input input-bordered input-primary w-full mb-3"
          />
          <label
            htmlFor="Categories"
            className="flex justify-start py-2 text-xl font-medium"
          >
            {" "}
            Choose Categories
          </label>
          <select className="select select-bordered w-full mb-4">
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Description"
            className="input input-bordered input-primary w-full mb-3"
          />
          <input
            type="number"
            placeholder="Amount"
            className="input input-bordered input-primary w-full mb-3"
          />
          <input
            type="submit"
            value={"Add Expense"}
            className="btn btn-success w-full"
          />
        </form>
      </div>
    </>
  );
}
