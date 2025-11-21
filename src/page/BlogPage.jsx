// BlogPage.jsx
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import SoloBlogPage from "../components/blog/SoloBlogPage";
import axios from "axios";
import { domain } from "../utils/stn";
import NavBlog from "../components/blog/NavBlog";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBlog() {
      try {
        const { data } = await axios.get(`${domain}/api/blog`);
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, []);

  // Framer Motion variants
  const pageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const navVariant = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const contentVariant = {
    hidden: { opacity: 0, y: 15, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" },
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

  return (
    <motion.div
      className="blogPage"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container>
        <motion.div
          className="blog_nav"
          variants={navVariant}
          initial="hidden"
          animate="visible"
        >
          <NavBlog />
        </motion.div>
      </Container>

      <Container className="blogPageContainer">
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
              loading
            </motion.h1>
          ) : error ? (
            <motion.h1
              key="error"
              className="blogError"
              variants={loadingVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {error}
            </motion.h1>
          ) : (
            <motion.div
              key="content"
              variants={contentVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* SoloBlogPage داخلياً يستخدم .blogPage_grid / blogContainers2 من CSS */}
              <SoloBlogPage blog={blog} />
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.div>
  );
};

export default BlogPage;
