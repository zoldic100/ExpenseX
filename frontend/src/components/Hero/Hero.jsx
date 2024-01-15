import { motion } from "framer-motion";
import "./Hero.css";
const Hero = () => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      transition: {
        repeat: Infinity,
        repeatType: "reverse", // This will make it yoyo-like
      },
    },
  };
  return (
    <div className="hero flex h-fit py-5 px-12 justify-center items-center rounded-[25px]  leading-4">
      <div className="hero-text  text-center">
        <motion.h1
          animate={{ x: 0, y: 0 }}
          initial={{ x: 100, y: 100 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className="text-4xl sm:text-4xl lg:text-5xl  uppercase font-meduim leading-8"
        >
          track your
          <br />
          expenses easily
        </motion.h1>
        <p className="text-sm font-light pt-4">
          track your expenses easily track your expenses easily track your
          expenses easily track your expenses easily
        </p>
        <motion.div
          initial={{ y: 250 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: "150" }}
          className="flex justify-center items-center gap-8 pt-5 pb-2"
        >
          <motion.button
            whileHover="hover"
            variants={buttonVariants}
            className="gray-button btn"
          >
            Descover
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
function animate() {
  return (
    <>
      <motion.div
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{ delay: 1.5, duration: 4 }}
      >
        {/* Your hero section content goes here */}
        <div className="bg-indigo-500 rounded-md">hero</div>
      </motion.div>
      <motion.button
        className="logoutButton"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        click
      </motion.button>
      <motion.div
        className="bg-white w-fit cursor-grab"
        drag
        dragConstraints={{
          top: "-50vw",
          left: "-50vw",
          right: " 300vw",
          bottom: " 50vw",
        }}
      >
        drag
      </motion.div>
      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        dddddddddddddddddddddddd
      </motion.div>
      <motion.h2
        initial={{
          opacity: 0,
          y: 100,
          x: 0,
        }}
        animate={{
          fontSize: 50,
          opacity: 1,
          y: 5,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{ rotate: 360 }}
        className="text-2xl p-3 mt-5 "
      >
        Welcome to ExpenseX
      </motion.h2>
    </>
  );
}
