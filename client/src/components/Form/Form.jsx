import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransactions } from "../../features/transaction/transactionSlice";

const Form = () => {
  // use selector
  const { isLoading, isError } = useSelector(state => state.transaction);

  // dispatch
  const dispatch = useDispatch();

  // use State
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [editMode, setEditMode] = useState(false);

  // reset handler
  const reset = () => {
    setName("");
    setType("");
    setAmount("");
  };

  // handle submit
  const handleCreate = e => {
    e.preventDefault();
    dispatch(
      createTransactions({
        name,
        type,
        amount: Number(amount),
      })
    );
    reset();
  };

  // Cancel mode handle
  const cancelEditMode = () => {
    reset();
    setEditMode(false);
  };

  return (
    <div className='form'>
      <h3>Add new transaction</h3>

      <form onSubmit={handleCreate}>
        <div className='form-group'>
          <label htmlFor='transaction_name'>Name</label>
          <input
            type='text'
            name='transaction_name'
            placeholder='Enter My Salary'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <div className='form-group radio'>
          <label htmlFor='transaction_type'>Type</label>
          <div className='radio_group'>
            <input
              type='radio'
              value='income'
              name='type'
              checked={type === "income"}
              onChange={e => setType("income")}
              required
            />
            <label htmlFor='transaction_type'>Income</label>
          </div>
          <div className='radio_group'>
            <input
              type='radio'
              value='expense'
              name='type'
              placeholder='Expense'
              checked={type === "expense"}
              onChange={e => setType("expense")}
            />
            <label htmlFor='transaction_type'>Expense</label>
          </div>
        </div>

        <div className='form-group'>
          <label htmlFor='transaction_amount'>Amount</label>
          <input
            type='number'
            placeholder='Enter Your Amount'
            name='amount'
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
          />
        </div>

        <button disabled={isLoading} className='btn' type='submit'>
          Add Transaction
        </button>

        {!isLoading && isError && (
          <p className='error'>There was an error occured</p>
        )}
      </form>

      {editMode && (
        <button className='btn cancel_edit' onClick={cancelEditMode}>
          Cancel Edit
        </button>
      )}
    </div>
  );
};

export default Form;
