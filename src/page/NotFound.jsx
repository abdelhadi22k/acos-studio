import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="notFoundWrapper">
      {/* Background Effects */}
      <div className="notFoundBg">
        <motion.div 
          className="bgOrb bgOrb1"
          animate={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
        <motion.div 
          className="bgOrb bgOrb2"
          animate={{
            x: mousePosition.x * -1.5,
            y: mousePosition.y * -1.5,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
        <div className="bgGrid" />
      </div>

      <div className="notFoundContainer">
        <motion.div
          className="notFoundContent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated 404 Number */}
          <div className="errorNumberWrapper">
            <motion.div
              className="errorNumber"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                type: "spring", 
                stiffness: 100 
              }}
            >
              <span className="digit">4</span>
              <motion.span 
                className="digit digitCenter"
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                0
              </motion.span>
              <span className="digit">4</span>
            </motion.div>
            
            {/* Glitch Effect Lines */}
            <div className="glitchLines">
              <motion.div 
                className="glitchLine"
                animate={{ 
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
            </div>
          </div>

          {/* Main Content */}
          <motion.div
            className="errorContent"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1 className="errorTitle">Page Not Found</h1>
            <p className="errorDescription">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, let's get you back on track.
            </p>
          </motion.div>

          {/* Search Bar */}
 

          {/* Action Buttons */}
          <motion.div
            className="actionButtons"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link to="/" className="primaryBtn">
              <i className="fas fa-home"></i>
              <span>Back to Home</span>
            </Link>
            <Link to="/blog" className="secondaryBtn">
         <i className="fas fa-blog"></i>
              <span>Check our Blog</span>
            </Link>
          </motion.div>

          {/* Quick Links Grid */}
         

          {/* Error Code */}
          <motion.div
            className="errorCode"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span>ERROR CODE: 404</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
