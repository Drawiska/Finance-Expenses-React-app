import React, { useState } from 'react';

import './ExpenseForm.css';



const ExpenseForm = (props) => {
    const[newTitle, setNewTitle] = useState('');
    const[newAmount, setNewAmount] = useState('');
    const[newDate, setNewDate] = useState('');

//    const [userInput, setUserInput] = useState({
//        newTitle: '',
//       newAmount: '',
//        newDate: ''
//    });

   // const [aktivni, nastavitAktivni] = useState(false)
   // const [prepnuti, prepnout] = useState(false)
  //  const [pocet, zvysitPocet] = useState(0)

   // console.log(aktivni) // false

   // nastavitAktivni(true)
   // prepnout((prevState) => !prevState)
   // zvysitPocet((prevState) => prevState + 1)

    

    const titleChangeHandler = (event) => {
        setNewTitle(event.target.value);
        //setNewTitle(event.target.value);
        //setUserInput({
        //    ...userInput, //other inputed values are also part of the state
        //    newTitle: event.target.value,
        };

    //     setUserInput((prevState) => {
    //         return{ ...prevState,  newTitle: event.target.value };
    //     });

    //     setUserInput(() => {
    //         return{ ...userInput,  newTitle: event.target.value };
    //     });
    //     console.log(userInput)
    // };

    const amountChangeHandler = (event) => {
        setNewAmount(event.target.value);
        // setUserInput((prevState) => {
        //     return{ ...prevState, newAmount: event.target.value };
        // });
    };

    const dateChangeHandler = (event) => {
        setNewDate(event.target.value);
        // setUserInput((prevState) => {
        //     return{ ...prevState, newDate: event.target.value };
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: newTitle,
            amount: +newAmount,
            date: new Date(newDate),
        };
        props.onSaveExpenseData(expenseData);
        setNewTitle('');
        setNewAmount('');
        setNewDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text' 
                        value={newTitle} 
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number' 
                        min='0.01' 
                        step='0.01' 
                        value={newAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date' 
                        min='2020-01-01' 
                        max='2030-12-31'
                        value={newDate} 
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type='submit' >Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;