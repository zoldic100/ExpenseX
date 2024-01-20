import React, { createContext, useState } from 'react';

// Create context with a default value
const FetchExpByUserIdContext = createContext('naim');

const FetchExpByUserId = ({ children }) => {
  // You can use useState if you want to dynamically change the context value
  const [myTest, setMyTest] = useState('naim');
  const [boom, setBoom] = useState('boom');

  return (
    <FetchExpByUserIdContext.Provider value={{myTest,boom}}>
      {children}
    </FetchExpByUserIdContext.Provider>
  );
};

// Export the context itself
export { FetchExpByUserIdContext };

// Export the component as the default export
export default FetchExpByUserId;
