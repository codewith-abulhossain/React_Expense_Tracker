export const ExpenseCategory = ({ categories, setSelectedCategory }) => {
  return (
    <select
      className="select w-full max-w-xs"
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option disabled selected>
        Filter By Category
      </option>
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
};
