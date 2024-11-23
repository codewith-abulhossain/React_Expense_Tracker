import { useForm } from "react-hook-form";

export default function ExpenseForm({ onSubmit }) {
  const categories = [
    "Food",
    "Transport",
    "Entertainment",
    "Utilities",
    "Shopping",
    "Health",
    "Education",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <>
      <div className="max-w-5xl mx-auto border-4 border-green-800 p-6 rounded-2xl">
        <div className="text-3xl text-center font-semibold mb-6">
          <h2>ADD Your Expense</h2>
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label
            htmlFor="Categories"
            className="flex justify-start py-2 text-xl font-medium"
          >
            {" "}
            Choose Categories
          </label>
          <select
            className="select select-bordered w-full mb-4"
            {...register("Category")}
          >
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
            {...register("description", {
              required: true,
              minLength: 12,
              maxLength: 120,
            })}
          />
          {errors.description?.type === "required" && (
            <div className="text-red-500 text-sm mb-2">
              This field is required
            </div>
          )}
          {errors.description?.type === "minLength" && (
            <div className="text-red-500 text-sm mb-2">
              Description should be at least 12 characters long.
            </div>
          )}
          {errors.description?.type === "maxLength" && (
            <div className="text-red-500 text-sm mb-2">
              Description should not exceed 25 characters.
            </div>
          )}
          <input
            type="number"
            placeholder="Amount"
            className="input input-bordered input-primary w-full mb-3"
            {...register("amount", {
              required: true,
              min: 1,
            })}
          />
          {errors.amount?.type === "required" && (
            <div className="text-red-500 text-sm mb-2">
              This field is required
            </div>
          )}
          {errors.amount?.type === "min" && (
            <div className="text-red-500 text-sm mb-2">
              Amount should be greater than 0.
            </div>
          )}
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
