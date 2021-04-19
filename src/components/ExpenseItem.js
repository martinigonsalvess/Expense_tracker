import "./ExpenseItem.css";
function ExpenseItem({ title, amount, date }) {
  const expenseDate = new Date(2021, 3, 19);
  const expenseTitle = "Car Insurances";
  const expenseAmount = 301;

  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">€ {amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
