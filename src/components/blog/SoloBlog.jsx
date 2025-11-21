// SoloBlog.jsx
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SoloBlog = ({ blog }) => {
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
      boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="blog_grid"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {blog.length !== 0 ? (
        blog.map((Blog, index) => (
          <motion.div
            key={Blog._id || index}
            className="blog_card"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="blog_image_wrapper">
              <Image
                loading="lazy"
                className="blog_image"
                src={Blog.image}
                alt={Blog.title}
                fluid
              />
            </div>

            <div className="blog_content">
              <h6 className="blog_category">{Blog.category}</h6>
              <h3 className="blog_title">{Blog.title}</h3>

              <div className="blog_footer">
                <span className="blog_date">
                  {Blog.createdAt?.slice(0, 10)}
                </span>
                <Link className="blog_read_more" to={`/Blog/${Blog.slug}`}>
                  Read More →
                </Link>
              </div>
            </div>
          </motion.div>
        ))
      ) : (
        <h3>No blogs</h3>
      )}
    </motion.div>
  );
};

export default SoloBlog;
