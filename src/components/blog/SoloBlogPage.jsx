// SoloBlogPage.jsx
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SoloBlogPage = ({ blog }) => {
  const gridVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut", staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35, ease: "easeOut" },
    },
    hover: {
      y: -6,
      scale: 1.02,
      boxShadow: "0px 14px 40px rgba(0,0,0,0.15)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <div>
      <motion.div
        className="blogContainers2"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {blog.length !== 0 ? (
          blog.map((Blog, index) => (
            <motion.div
              key={Blog._id || index}
              className="mb-2 blogBox3"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="blogBox2">
                <Link to={`/Blog/${Blog.slug}`}>
                  <Image
                    className="blogImg"
                    src={Blog.image}
                    alt={Blog.title}
                    fluid
                    loading="lazy"
                  />
                </Link>
                <h5>{Blog.title}</h5>
                <span className="b111">{Blog.category}</span>
              </div>
            </motion.div>
          ))
        ) : (
          <h3>No Blogs</h3>
        )}
      </motion.div>
    </div>
  );
};

export default SoloBlogPage;
