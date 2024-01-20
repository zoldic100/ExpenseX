import React, { createContext, useState } from 'react'

 const ExpenseContext = createContext()
 
export const ExpenseProvider = ({children}) => {
const [item , setItem] =useState(0);

const hundleIncrement =()=>{
    setItem((prev) => prev + 1);
}
  return (
    <ExpenseContext.Provider value={{item,hundleIncrement}}>
        {children }
    </ExpenseContext.Provider>
  )
}

export default ExpenseContext
