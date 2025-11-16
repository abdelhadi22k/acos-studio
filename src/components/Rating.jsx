// Rating.jsx
import React from "react";
import { motion } from "framer-motion";

function Rating(props) {
  const { rating, caption } = props;

  const starVariant = {
    hidden: { opacity: 0, scale: 0.6, y: -5 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
        delay: index * 0.05,
      },
    }),
    hover: {
      scale: 1.1,
      rotate: -5,
      transition: { duration: 0.15, ease: "easeOut" },
    },
  };

  const wrapperVariant = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const getStarClass = (value) =>
    rating >= value
      ? "fas fa-star"
      : rating >= value - 0.5
      ? "fas fa-star-half-alt"
      : "far fa-star";

  return (
    <motion.div
      className="rating"
      variants={wrapperVariant}
      initial="hidden"
      animate="visible"
    >
      {[1, 2, 3, 4, 5].map((value, index) => (
        <motion.span
          key={value}
          variants={starVariant}
          custom={index}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <i className={getStarClass(value)} />
        </motion.span>
      ))}

      {caption ? <span className="ratingCaption">{caption}</span> : <span></span>}
    </motion.div>
  );
}

export default Rating;
