import React, { useContext } from "react";
import { Hero } from "../../components";
import { motion } from "framer-motion";
import ExpenseContext from "../../Api/ExpenseApi/ContextProduct/ExpenseContext";



const Home = () => {
  const {item ,hundleIncrement} = useContext(ExpenseContext)

 
  const containerVariants = {

    exit:{
      x:'-120vw',
      transition: {ease: 'easeInOut'}
    }
  }
  return (
    
    <motion.div
    variants={containerVariants}
    exit='exit'
    
    >
      <h1 onClick={hundleIncrement}  className=" text-6xl">{item}</h1>
      <Hero />
    </motion.div>
  );
};

export default Home;
