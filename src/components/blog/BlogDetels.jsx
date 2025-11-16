// BlogDetels.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { domain } from "../../utils/stn";

const BlogDetels = () => {
  const params = useParams();
  const { slug } = params;
  const [blog, setBlog] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${domain}/api/blog/slug/${slug}`);
        setBlog(result.data);
      } catch (err) {
        setError(err.message || "Failed to load blog");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

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

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.96, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contentContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const blockVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
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
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.h1
          key="loading"
          variants={loadingVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-center mt-5"
        >
          loading
        </motion.h1>
      ) : error ? (
        <motion.h1
          key="error"
          variants={loadingVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-center mt-5"
        >
          {error}
        </motion.h1>
      ) : (
        <motion.div
          key={slug}
          className="BlogDetels"
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Container className="Blog_Container">
            <motion.div variants={imageVariant} initial="hidden" animate="visible">
              <Image
                loading="lazy"
                className="blogImg"
                src={blog.image}
                alt={blog.title}
                fluid
              />
            </motion.div>

            <motion.div
              variants={contentContainer}
              initial="hidden"
              animate="visible"
            >
              <div className="blogInfos">
                <motion.div variants={blockVariant}>
                  <span className="b111">{blog.category}</span>
                  <h1 className="mainTitle">{blog.title}</h1>
                  <p>{blog.description.descriptionDetails}</p>
                </motion.div>

                {/* تفاصيل (details) */}
                <motion.div variants={blockVariant}>
                  {blog.details.map((el, index) => (
                    <motion.div key={index} variants={blockVariant}>
                      <h1 className="mainTitle">{el.detailsTitle}</h1>
                      <p>{el.detailsContent}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* محتوى (content) */}
                <motion.div variants={blockVariant}>
                  {blog.content.map((el, index) => (
                    <motion.div key={index} variants={blockVariant}>
                      <h1 className="mainTitle">{el.contentTitle}</h1>
                      <p>{el.contentDetails}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* الكاتب والتاريخ */}
                <motion.div className="BlogWriter" variants={blockVariant}>
                  <div>
                    <div></div> {blog.writer}
                  </div>
                  <div>
                    <div></div> {blog.createdAt.substring(0, 10)}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BlogDetels;
