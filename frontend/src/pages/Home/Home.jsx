import React from "react";
import { Hero } from "../../components";
import { motion } from "framer-motion";


const Home = () => {
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
      <Hero />
    </motion.div>
  );
};

export default Home;
