import React, { useEffect, useState } from "react";

import ExpenseForm from "./ExpenseForm/ExpenseForm";
const CreateExpense = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {

        setUserId(window.localStorage.getItem('user_id'));

 
}, []);
  return (
    <div>
      {userId !== null && <ExpenseForm userId={userId} />}
    </div>
  );
};

export default CreateExpense;
