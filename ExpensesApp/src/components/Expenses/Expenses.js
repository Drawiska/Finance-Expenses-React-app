import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesDiagram from './ExpensesDiagram';
import './Expenses.css';


const previouslyClickedFilter = localStorage.getItem('savedFilter')
  const parsedFilter = JSON.parse(previouslyClickedFilter)  
  console.log(parsedFilter);

const Expenses = (props) => {
  const[filteredYear, setFilteredYear] = useState(parsedFilter);
  


  let filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  let filteredYearStringed = JSON.stringify(filteredYear);
  localStorage.setItem("savedFilter", filteredYearStringed);

  let filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <React.Fragment>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesDiagram expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </React.Fragment>
  );
}

export default Expenses;