import { createContext, useContext, useState } from 'react';

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([
    { id: '1', title: 'Groceries', amount: 45 },
    { id: '2', title: 'Transport', amount: 20 },
    { id: '3', title: 'Coffee', amount: 5 },
  ]);

  const addExpense = (title, amount) => {
    setExpenses((current) => [
      ...current,
      { id: Date.now().toString(), title, amount: parseFloat(amount) },
    ]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpenses() {
  return useContext(ExpenseContext);
}
