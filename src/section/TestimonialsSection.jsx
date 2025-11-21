// TestimonialsSection.jsx
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import OpinionsClient from "../components/OpinionsClient";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { domain } from "../utils/stn";

const itemsPerPage = 3; // عدد الآراء في كل صفحة

const TestimonialsSection = () => {
  const [opinions, setOpinions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchOpinions = async () => {
      try {
        const { data } = await axios.get(`${domain}/api/opinion`);
        setOpinions(data);
      } catch (err) {
        setError(err.message || "Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };
    fetchOpinions();
  }, []);

  // حساب البيانات الظاهرة في الصفحة الحالية
  const totalPages = Math.ceil(opinions.length / itemsPerPage) || 1;
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentOpinions = opinions.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

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

  const gridWrapperVariant = {
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

  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: "easeOut",
        delay: index * 0.08,
      },
    }),
    hover: {
      y: -6,
      scale: 1.02,
      boxShadow: "0 18px 45px rgba(0,0,0,0.25)",
      transition: { duration: 0.2, ease: "easeOut" },
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

  return (
    <motion.section
      className="testimonialsSection"
      id="testimonials"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Container className="testimonialsContainer">
        {/* العنوان + النص + زر إضافة رأي */}
        <motion.div
          className="mainTitle2"
          variants={headerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <h5>testimonials</h5>
            <h1>
              <span>Some</span> of our customers' opinions and testimonials
            </h1>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ delay: 0.15 }}>
            <p>
              We believe every successful project is a collaboration — here's
              what our clients say about working with us. What’s your take?
            </p>
            <motion.a
              href="#contact"
              className="mainButton1"
              variants={buttonVariant}
              whileHover="hover"
              whileTap="tap"
            >
              Add your Opinions
            </motion.a>
          </motion.div>
        </motion.div>

        {/* الحالة: Loading / Error / Testimonials */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.h1
              key="loading"
              className="testimonialsLoading"
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
              className="testimonialsError"
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
              key={currentPage}
              className="opinionsGridWrapper"
              variants={gridWrapperVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="opinionsGrid">
                {currentOpinions.map((opinion, index) => (
                  <motion.div
                    key={opinion._id || index}
                    className="opinionCardMotion"
                    variants={cardVariant}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    {/* الكارت الأصلي */}
                    <OpinionsClient opinionClient={opinion} />
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <Stack spacing={2} mt={3} alignItems="center">
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  size="small"
                  sx={{
                    "& .MuiPaginationItem-root": { color: "white" },
                    "& .Mui-selected": {
                      backgroundColor: "white",
                      color: "#888",
                    },
                  }}
                />
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.section>
  );
};

export default TestimonialsSection;
