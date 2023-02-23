import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = { duration: 0.6, ease: "easeOut" };

const Home = () => {
  return (
    <div className="home">
      <motion.div className="content" drag dragConstraints={{left: 0, top:0, right:0, bottom:0}} >
        <Link to="/nike">
          <div
            className="image"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition}
              exit={{ scale: 1 }}
              src="images/image.jpg"
              alt="heroImage"
            />
          </div>
        </Link>
        <motion.p
          exit={{ opacity: 0, x: 20 }}
          transition={transition}
          className="productText"
        >
          Nike.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Home;
