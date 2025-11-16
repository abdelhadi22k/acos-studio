// NavProject.jsx
import React from "react";
import { motion } from "framer-motion";

const NavProject = ({ allCat, showCategory, selectedCategory }) => {
  const navVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      y: -4,
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      className="navProject"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {allCat.map((category, index) => {
        const categoryClass = `category-${category
          .replace(/\s+/g, "-")
          .toLowerCase()}`;

        const isActive = selectedCategory === category;

        return (
          <motion.div
            className="navButton_box"
            key={index}
            variants={itemVariants}
            whileHover="hover"
            onClick={() => showCategory(category)}
          >
            <button
              className={`navButton ${categoryClass} ${
                isActive ? "all" : ""
              }`}
            >
              {category}
            </button>
          </motion.div>
        );
      })}
    </motion.nav>
  );
};

export default NavProject;
