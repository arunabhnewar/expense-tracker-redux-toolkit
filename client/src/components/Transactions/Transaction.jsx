import React from "react";
import { useDispatch } from "react-redux";
import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";
import {
  editActive,
  removeTransaction,
} from "../../features/transaction/transactionSlice";

const Transaction = ({ transaction }) => {
  // dispatch
  const dispatch = useDispatch();

  // destructure the transaction
  const { name, amount, type, id } = transaction || {};

  //edit handler
  const handleEdit = () => {
    dispatch(editActive(transaction));
  };

  // handle delete
  const handleDelete = () => {
    dispatch(removeTransaction(id));
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
          <button className='link' onClick={handleDelete}>
            <img className='icon' src={deleteImage} />
          </button>
        </div>
      </li>
    </>
  );
};

export default Transaction;
