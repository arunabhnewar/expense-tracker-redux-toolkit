import React from "react";
import deleteImage from "../../assets/images/delete.svg";
import editImage from "../../assets/images/edit.svg";

const Transaction = () => {
  return (
    <>
      <li className='transaction income'>
        <p>Earned this month</p>
        <div className='right'>
          <p>৳ 100</p>
          <button className='link'>
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
