export const ExpensesList = ({ expenses, handleRemoveCost }) => {
  if (expenses.length === 0) {
    return <p>No expenses found.</p>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra  border-y-4  border-green-600">
        {/* head */}
        <thead>
          <tr className="text-2xl text-purple-500">
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Description</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.id}</td>
              <td>{expense.category}</td>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>
                <button
                  className="btn btn-outline btn-warning"
                  onClick={() => handleRemoveCost(expense.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className="font-bold text-xl">Total</td>
            <td className="font-bold text-xl">
              TK:{" "}
              {expenses
                .reduce((total, exp) => total + parseInt(exp.amount), 0)
                .toFixed(2)}{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
