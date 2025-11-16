// HomeSection.jsx
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";

const HomeSection = () => {
  // إعدادات الـ typewriter
  const words = ["Welcome to", "acos", "studio"];
  const loop = true;
  const typeSpeed = 50;
  const deleteSpeed = 100;
  const delay = 5000;
  const cursor = true;
  const cursorChar = "";
  const gradientWords = ["acos"];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      if (text !== currentWord) {
        timer = setTimeout(
          () => setText(currentWord.substring(0, text.length + 1)),
          typeSpeed
        );
      } else {
        // انتظر قبل البدء بالحذف
        timer = setTimeout(() => setIsDeleting(true), delay);
      }
    } else {
      if (text !== "") {
        timer = setTimeout(
          () => setText(currentWord.substring(0, text.length - 1)),
          deleteSpeed
        );
      } else {
        // انتهى الحذف -> الانتقال للكلمة التالية
        setIsDeleting(false);
        setWordIndex((prev) => {
          const next = prev + 1;
          if (next >= words.length) return loop ? 0 : prev; // لو no loop نثبت على الأخيرة
          return next;
        });
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  const needsGradient = gradientWords.includes(words[wordIndex]);

  // Variants للأنيميشن
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariantLeft = {
    hidden: { opacity: 0, x: -60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  const imageVariantRight = {
    hidden: { opacity: 0, x: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.4,
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -3,
      scale: 1.03,
      boxShadow: "0 18px 45px rgba(0,0,0,0.25)",
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.97,
      y: 0,
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    },
  };

  const typewriterWrapperVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="homePage" id="home">
      <Container>
        <motion.div
          className="mainTextContainer"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* الكتلة اليسار: النص + الصورة */}
          <motion.div className="imgText" variants={fadeUpVariant}>
            <motion.p
              className="paragraphB1"
              variants={fadeUpVariant}
              transition={{ delay: 0.1 }}
            >
              Who are we? , a creative team specializing <br />
              in SEO, Web Design, UI/UX, and Business Automation.
            </motion.p>

            <motion.img
              variants={imageVariantRight}
              alt="homePageImg"
              loading="lazy"
              src="sources/website img/home page img 1.webp"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
          </motion.div>

          {/* النص الرئيسي مع تأثير التايب رايتر */}
          <motion.div className="mainText" variants={fadeUpVariant}>
            <motion.h1
              className="heroTitle"
              variants={fadeUpVariant}
              transition={{ delay: 0.2 }}
            >
              <motion.h1
                className="typewriter-wrapper"
                aria-live="polite"
                variants={typewriterWrapperVariant}
              >
                {needsGradient ? (
                  <span className="gradient-text">{text}</span>
                ) : (
                  <span>{text}</span>
                )}

                {cursor && (
                  <motion.span
                    className="tw-cursor"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {cursorChar}
                  </motion.span>
                )}
              </motion.h1>
            </motion.h1>
          </motion.div>

          {/* الكتلة اليمين: الصورة + النص */}
          <motion.div className="imgText" variants={fadeUpVariant}>
            <motion.img
              variants={imageVariantLeft}
              alt="homePageImg"
              loading="lazy"
              src="sources/website img/home page img 2.webp"
              whileHover={{ scale: 1.03, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            />
            <motion.p
              className="paragraphB1"
              variants={fadeUpVariant}
              transition={{ delay: 0.1 }}
            >
              We're here to make your digital growth <br />
              happen through strategy, creativity, and technology.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* الزر الرئيسي */}
        <motion.div
          className="ButtonHolder"
          variants={buttonVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="#contact"
            className="mainButton1"
            variants={buttonVariant}
            whileHover="hover"
            whileTap="tap"
          >
            Start your project now
          </motion.a>
        </motion.div>

      </Container>
    </section>
  );
};

export default HomeSection;
