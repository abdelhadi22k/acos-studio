// BlogSection.jsx
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SoloBlog from "../components/blog/SoloBlog";
import axios from "axios";
import { domain } from "../utils/stn";

const BlogSection = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const { data } = await axios.get(`${domain}/api/blog`);
        setBlog(data);
      } catch (err) {
        setError(err.message || "Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, []);

  // Framer Motion variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const headerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -2,
      scale: 1.03,
      boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.96,
      y: 0,
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    },
  };

  const loadingVariant = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const errorVariant = loadingVariant;

  const listWrapperVariant = {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -15,
      filter: "blur(4px)",
      transition: { duration: 0.25, ease: "easeIn" },
    },
  };

  return (
    <motion.section
      className="blogSection"
      id="blog"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Container className="blogContainer">
        {/* العنوان + النص + زر الذهاب للمدونة */}
        <motion.div
          className="mainTitle3"
          variants={headerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <h5>our blog</h5>
            <h1>
              <span>Our</span> blog features some important news.
            </h1>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ delay: 0.15 }}>
            <p>
              Watch the latest developments in the world of digital collage
              development exclusively on our blog.
            </p>

            <motion.div variants={buttonVariant}>
              <motion.div whileHover="hover" whileTap="tap" variants={buttonVariant}>
                <Link to="/Blog" className="mainButton1">
                  Check out our blog
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* قائمة البوستات أو حالة التحميل / الخطأ */}
        <div className="blogHolder">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.h1
                key="loading"
                className="blogLoading"
                variants={loadingVariant}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                Loading...
              </motion.h1>
            ) : error ? (
              <motion.h1
                key="error"
                className="blogError"
                style={{ color: "red" }}
                variants={errorVariant}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {error}
              </motion.h1>
            ) : (
              <motion.div
                key="list"
                className="blogHolderInner"
                variants={listWrapperVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* SoloBlog داخلياً ممكن يكون grid/cards، هنا نمرر 3 بوستات فقط */}
                <SoloBlog blog={blog.slice(0, 3)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </motion.section>
  );
};

export default BlogSection;
