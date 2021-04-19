import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>April 19 2021</div>
      <div className="expens-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">euro 301</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
