// ProjectsSection.jsx
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import NavProject from "../components/project/NavProject";
import Project from "../components/project/Project";
import { domain } from "../utils/stn";

const ProjectsSection = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // جلب التصنيفات
  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data } = await axios.get(`${domain}/api/project/categories`);
        setCategories(["All", ...data]);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    }
    fetchCategories();
  }, []);

  // جلب المشاريع
  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data } = await axios.get(`${domain}/api/project`);
        setProjects(data);
        setFilteredProjects(data); // عرض كل المشاريع مبدئيًا
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  // فلترة المشاريع حسب التصنيف المحدد
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filtered);
    }
  };

  // Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const headerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const navbarVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -2,
      scale: 1.03,
      boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.2,
      },
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

  return (
    <motion.section
      className="ProjectsSection"
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Container className="ProjectsContainer">
        {/* العناوين + النص + الزر */}
        <motion.div
          className="mainTitle2"
          variants={headerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <motion.h5 variants={fadeUp}>Our project</motion.h5>
            <motion.h1 variants={fadeUp} transition={{ delay: 0.05 }}>
              <span>Take</span> a look at some of our past work
            </motion.h1>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ delay: 0.15 }}>
            <motion.p variants={fadeUp}>
              We create and develop customized digital projects that reflect
              each client's needs. Browse samples of our previous work.
            </motion.p>
            <motion.a
              href="#contact"
              className="mainButton1"
              variants={buttonVariant}
              whileHover="hover"
              whileTap="tap"
            >
              Let's start now
            </motion.a>
          </motion.div>
        </motion.div>

        {/* التصنيفات */}
        <motion.div
          className="projectNavbar"
          variants={navbarVariants}
          initial="hidden"
          animate="visible"
        >
        <NavProject
  showCategory={handleCategorySelection}
  allCat={categories}
  selectedCategory={selectedCategory}
/>

        </motion.div>

        {/* المشاريع */}
        <div className="projectHolder">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.p
                key="loading"
                className="loadingText"
                variants={loadingVariant}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                Loading projects...
              </motion.p>
            ) : (
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {/* يفضل لاحقاً تضيف أنيميشن داخل كومبوننت Project لكل كارت بشكل منفصل */}
                <Project project={filteredProjects} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </motion.section>
  );
};

export default ProjectsSection;
