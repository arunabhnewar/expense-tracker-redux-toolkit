import React from "react";
import { useDispatch } from "react-redux";
import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";
import { editActive } from "../../features/transaction/transactionSlice";

const Transaction = ({ transaction }) => {
  // dispatch
  const dispatch = useDispatch();

  // destructure the transaction
  const { name, amount, type } = transaction || {};

  //edit handler
  const handleEdit = () => {
    dispatch(editActive(transaction));
  };

  return (
    <>
      <li className={`transaction ${type}`}>
        <p>{name}</p>
        <div className='right'>
          <p>৳ {amount}</p>
          <button className='link' onClick={handleEdit}>
            <img className='icon' src={editImage} />
          </button>
          <button className='link'>
            <img className='icon' src={deleteImage} />
          </button>
        </div>
      </li>
    </>
  );
};

export default Transaction;
