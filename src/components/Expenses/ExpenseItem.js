import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  
  // let[title,setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle('Resting Name');
    
  // }
  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Tiltle</button> */}
      </Card>
      </li>
  );
}

export default ExpenseItem;