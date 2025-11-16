// NavBlog.jsx
import { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function NavBlog() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : "/search");
  };

  const wrapperVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const hoverVariants = {
    hover: {
      boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
      y: -2,
      transition: { duration: 0.18, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={wrapperVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={hoverVariants} whileHover="hover">
        <Form className="d-flex me-auto" onSubmit={submitHandler}>
          <InputGroup>
            <FormControl
              type="text"
              name="q"
              id="q"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="search blogs..."
              aria-label="Search blogs..."
              aria-describedby="button-search"
            />
            <Button
              className="searchColor"
              variant="outline-primary"
              type="submit"
              id="button-search"
            >
              <i className="fas fa-search "></i>
            </Button>
          </InputGroup>
        </Form>
      </motion.div>
    </motion.div>
  );
}

export default NavBlog;
