// OpinionsClient.jsx
import React from "react";
import { motion } from "framer-motion";
import Rating from "./Rating";

const OpinionsClient = ({ opinionClient }) => {
  const cardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
    hover: {
      y: -6,
      scale: 1.02,
      boxShadow: "0 18px 45px rgba(0,0,0,0.22)",
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="opinionBox"
      variants={cardVariant}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="opinionCard">
        <p className="opinionText">“{opinionClient.opinion}”</p>

        <div className="opinionFooter">
          <div className="clientInfo">
            <h4 className="clientName">{opinionClient.clientName}</h4>
          </div>

          <div className="opinionLine"></div>

          <div className="ratingWrapper">
            <Rating rating={opinionClient.ratings} />
            <span className="clientJob">{opinionClient.JobTitle}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OpinionsClient;
