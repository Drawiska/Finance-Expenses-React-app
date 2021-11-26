import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {

  // const zparsovanaHodnotaZeStringu = 
  // 3 kontrola, jestli ta hodnota je pole Array.isArray tak použít ji, jinak dát prázdné pole
  // const data = Array.isArray(zparsovanaHodnotaZeStringu) ? ... : ...
  // 4 výslednou hodnotu použít pro ten setState místo DUMMY_EXPENSES (tohle už v App)

  const DUMMY_EXPENSES = [];
  // 1 getItem z sessionStorage
  const previouslyStoredDataString = localStorage.getItem('savedExpenses')
  // 2 JSON.parse té hodnoty
  const parsedData = previouslyStoredDataString ? JSON.parse(previouslyStoredDataString) : DUMMY_EXPENSES //to know that the previouslyStoreDataString is defined => když undefined tak spadne
  // 3 kontrola, jestli ta hodnota je pole Array.isArray tak použít ji, jinak dát prázdné pole
  const storedExpensesWithDateStrings = Array.isArray(parsedData) ? parsedData : DUMMY_EXPENSES
  //condition ? exprIfTrue : exprIfFalse (
  //  condition = expression whose value is used as a condition)
  

  const storedExpenses = storedExpensesWithDateStrings.map(({ amount, date, id, title }) => {
    return {
      amount: amount,
      id: id,
      title: title,
      date: new Date(date),
    }
  })


  const [expenses, setExpenses] = useState(storedExpenses);

  let addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      let newExpenses = [expense, ...prevExpenses];
      console.log(newExpenses)
      // newExpenses uložit do localStorage / JSON.stringify
      let newExpensesStringed = JSON.stringify(newExpenses);
      localStorage.setItem("savedExpenses", newExpensesStringed);

      //let newExpensesUnStringed = JSON.parse(localStorage.getItem("savedExpenses"));
      //console.log(newExpensesUnStringed);

      //let arrDataCheck = Array.isArray(newExpensesUnStringed) ?  JSON.parse(newExpensesStringed) : [] ;
      //console.log(arrDataCheck);

      return newExpenses;
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <React.Fragment>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </React.Fragment>
  );
}

export default App;