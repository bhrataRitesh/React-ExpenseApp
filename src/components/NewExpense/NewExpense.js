import React,{useState} from 'react';
import './NewExpense.css';
import  ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }
  
  const [formStatus, setFormStatus] = useState(false);
    
    const showForm = () => {
        setFormStatus(true);
    }
    const hideForm = () => {
        setFormStatus(false);
    }
  
  return (
    <div className="new-expense">
       {!formStatus && (
        <button onClick={showForm}>Add New Expense</button>
      )}
      
      {formStatus && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideForm} />
      )}
    </div>
  );
};

export default NewExpense;
