import React from "react";
import { animate, motion } from "framer-motion";

const transition = { duration: 0.6, ease: "easeIn" };
const letterTransition = { duration: 0.4, ease: "easeIn" };

const productName = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.07,
      staggerDirection: 1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
};

const letter = {
  initial: {
    opacity: 0,
    y: 150,
  },
  animate: {
    opacity: 1,
    y: [150, -150, 0],
    transition: letterTransition,
  },
  exit: {
    y: 150,
    opacity: 0,
    transition: letterTransition,
  },
};

const Product = () => {
  return (
    <div className="product">
      <motion.div className="content">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={productName}
          className="productName"
        >
          <motion.span variants={letter} >
            N
          </motion.span>
          <motion.span variants={letter} >
            i
          </motion.span>
          <motion.span variants={letter} >
            k
          </motion.span>
          <motion.span variants={letter} >
            e
          </motion.span>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ width: "320px", height: "380px", y: "-50%" }}
        animate={{
          width: "100%",
          height: "50vh",
          y: 0,
          transition: { delay: 0.2, ...transition },
        }}
        exit={{
          width: "320px",
          height: "380px",
          y: "-50%",
          transition: { delay: 0.4, ...transition },
        }}
        className="image"
      >
        <motion.img src="images/image.jpg" alt="productImage" />
      </motion.div>
    </div>
  );
};

export default Product;
