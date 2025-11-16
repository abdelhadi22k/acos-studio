// ContactSection.jsx
import { Container } from "react-bootstrap";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { domain } from "./../utils/stn";

const ContactSection = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [err, setErr] = useState("");

  const sanitizeInput = (input) => {
    return input.replace(/[#$<>&*()][{}]/g, "");
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErr("");
    setSuccess("");

    try {
      const response = await fetch(`${domain}/api/message/addMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          subject,
          message,
        }),
      });

      const contentType = response.headers.get("Content-Type");
      let data;

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (response.ok) {
        setSuccess("Your message has been sent");
        // ممكن هنا تمسح الفورم بعد الإرسال لو تحب
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setSubject("");
        setMessage("");

        setTimeout(() => {
          setSuccess("");
        }, 3500);
      } else {
        setErr(data.message || data || "An error occurred, please try again");
        setTimeout(() => {
          setErr("");
        }, 3500);
      }
    } catch (error) {
      setErr("An error occurred, please try again");
      setTimeout(() => {
        setErr("");
      }, 3500);
    } finally {
      setIsSubmitting(false);
    }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariant = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    hover: {
      y: -2,
      scale: 1.03,
      boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.96,
      y: 0,
      boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
    },
  };

  const feedbackVariant = {
    hidden: { opacity: 0, y: 6 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -4,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <motion.section
      className="contactSection"
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <Container className="contactMeContainer">
        {/* Left info */}
        <motion.div
          className="ContactInfo"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="infoHolder" variants={fadeLeft}>
            <div className="info_Box_holder">
              <div className="mainTitle4">
                <div>
                  <h5>Chat to us </h5>
                  <h1>
                    <span className="contactSpan">Start</span> Contact us now to
                    grow your business
                  </h1>
                </div>
              </div>

              <div className="infoBox">
                <div className="iconInfo">
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/cjhlqtae.json"
                    stroke="bold"
                    trigger="hover"
                    colors="primary:#dc5f00,secondary:#dc5f00"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                  <h2>Chat to us</h2>
                </div>

                <span className="iconInfoSpan">Our geographical location</span>
                <p className="iconInfoP">
                  Location Algeria - Algeria (UTC+01:00)
                </p>

                <div className="iconInfo">
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/lzhauhfx.json"
                    stroke="bold"
                    trigger="hover"
                    colors="primary:#dc5f00,secondary:#dc5f00"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                  <h2>Our whatsApp</h2>
                </div>

                <span className="iconInfoSpan">
                  WhatsApp number is available to serve you
                </span>
                <p className="iconInfoP">+213 774823948 </p>

                <div className="iconInfo">
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/acydszgh.json"
                    stroke="bold"
                    trigger="hover"
                    colors="primary:#dc5f00,secondary:#dc5f00"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                  <h2>Contact us via our official email</h2>
                </div>

                <span className="iconInfoSpan">
                  Our friendly team is here to help you.
                </span>
                <p className="iconInfoP">acos.studioo@gmail.com</p>
              </div>
            </div>

            <h2 className="icons_holder">
              <span>
                <a
                  target="blank"
                  href="https://www.facebook.com/profile.php?id=100091746498169"
                >
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/lplofcfe.json"
                    stroke="bold"
                    trigger="hover"
                    colors="primary:#dc5f00,secondary:#dc5f00"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                </a>

                <a
                  target="blank"
                  href="https://www.instagram.com/acos.studio/?hl=ar"
                >
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/cuwcpyqc.json"
                    stroke="bold"
                    trigger="hover"
                    colors="primary:#dc5f00,secondary:#dc5f00"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                </a>

                <a
                  target="blank"
                  href="https://www.linkedin.com/in/acos-web-studio-701331300/"
                >
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/euybrknk.json"
                    stroke="bold"
                    trigger="hover"
                    colors="primary:#dc5f00,secondary:#dc5f00"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                </a>

                <a target="blank" href="https://dribbble.com/acos_web_designer">
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/sbhkbqnq.json"
                    stroke="bold"
                    trigger="hover"
                    colors="primary:#dc5f00,secondary:#dc5f00"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                </a>

                <a target="blank" href="https://www.behance.net/cosx">
                  <script src="https://cdn.lordicon.com/lordicon.js"></script>
                  <lord-icon
                    src="https://cdn.lordicon.com/hdmufqcq.json"
                    stroke="bold"
                    trigger="hover"
                    colors="primary:#dc5f00,secondary:#dc5f00"
                    style={{ width: "40px", height: "40px" }}
                  ></lord-icon>
                </a>
              </span>
            </h2>
          </motion.div>
        </motion.div>

        {/* Right form */}
        <motion.div
          className="ContactForm"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <form className="froms" onSubmit={submitHandler}>
            <div>
              <input
                className="mainForm"
                required
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(sanitizeInput(e.target.value))}
                placeholder="First Name"
              />
              <input
                className="mainForm"
                required
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(sanitizeInput(e.target.value))}
                placeholder="Last Name"
              />
            </div>

            <div>
              <input
                className="mainForm"
                required
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(sanitizeInput(e.target.value))}
                placeholder="Email"
              />
              <input
                className="mainForm"
                required
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) =>
                  setPhoneNumber(sanitizeInput(e.target.value))
                }
                placeholder="Phone Number"
              />
            </div>

            <div>
              <input
                className="mainForm1"
                required
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(sanitizeInput(e.target.value))}
                placeholder="Subject"
              />
            </div>

            <div>
              <textarea
                className="mainForm2"
                required
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(sanitizeInput(e.target.value))}
                placeholder="Message"
              />
            </div>

            <AnimatePresence>
              {err && (
                <motion.span
                  className="errorM"
                  variants={feedbackVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {err}
                </motion.span>
              )}
            </AnimatePresence>
            <br />
            <AnimatePresence>
              {success && (
                <motion.span
                  className="successM"
                  variants={feedbackVariant}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {success}
                </motion.span>
              )}
            </AnimatePresence>
            <br />

            <motion.button
              disabled={isSubmitting}
              className="cta_2"
              type="submit"
              variants={buttonVariant}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
            >
              {isSubmitting
                ? "Your message is being sent..."
                : "Send your message here now"}
            </motion.button>
          </form>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default ContactSection;
