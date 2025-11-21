// SearchPage.jsx
import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Image } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { domain } from "../utils/stn";
import NavBlog from "../components/blog/NavBlog";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        blogs: action.payload.blogs,
        page: action.payload.page,
        pages: action.payload.pages,
        countBlog: action.payload.countBlog,
        loading: false,
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function SearchPage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const category = sp.get("category") || "all";
  const query = sp.get("query") || "all";
  const page = sp.get("page") || 1;

  const [{ loading, error, blogs, pages, countBlog }, dispatch] = useReducer(
    reducer,
    {
      loading: true,
      error: "",
      blogs: [],
      pages: 0,
      countBlog: 0,
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const { data } = await axios.get(
          `${domain}/api/blog/search?page=${page}&query=${query}&category=${category}`
        );
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: err.message,
        });
      }
    };
    fetchData();
  }, [category, page, query]);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`${domain}/api/blog/categories`);
        setCategories(data);
      } catch (err) {
        // optional: handle silently
      }
    };
    fetchCategories();
  }, []);

  const getFilterUrl = (filter, skipPathname) => {
    const filterPage = filter.page || page;
    const filterCategory = filter.category || category;
    const filterQuery = filter.query || query;
    return `${
      skipPathname ? "" : "/search?"
    }category=${filterCategory}&query=${filterQuery}&page=${filterPage}`;
  };

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

  const sidebarVariant = {
    hidden: { opacity: 0, x: -25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const contentVariant = {
    hidden: { opacity: 0, x: 25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const blogsWrapperVariant = {
    hidden: { opacity: 0, y: 15, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const blogCardVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: "easeOut",
        delay: index * 0.06,
      },
    }),
    hover: {
      y: -4,
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" },
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
    <motion.div
      className="categoryPageWrapper"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container className="categoryContainer">
        <div>
          <NavBlog />

          <Row>
            {/* Sidebar: Categories */}
            <Col md={3}>
              <motion.div
                className="categorySection"
                variants={sidebarVariant}
                initial="hidden"
                animate="visible"
              >
                <h3>Category</h3>
                <div>
                  <ul>
                    <li>
                      <Link
                        className={`allCategory ${
                          category === "all" ? "activeCategory" : ""
                        }`}
                        to={getFilterUrl({ category: "all" })}
                      >
                        Any
                      </Link>
                    </li>
                    {categories.map((c) => (
                      <li key={c}>
                        <Link
                          className={`allCategory ${
                            category === c ? "activeCategory" : ""
                          }`}
                          to={getFilterUrl({ category: c })}
                        >
                          {c}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Col>

            {/* Content: Results */}
            <Col md={9}>
              <motion.div
                className="searchSection"
                variants={contentVariant}
                initial="hidden"
                animate="visible"
              >
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.h1
                      key="loading"
                      variants={loadingVariant}
                      initial="initial"
                      animate="animate"
                      exit="exit"
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
                    >
                      {error}
                    </motion.h1>
                  ) : (
                    <motion.div
                      key="content"
                      variants={blogsWrapperVariant}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <Row className="justify-content-between mb-3">
                        <Col md={6}>
                          <div>
                            <h5>
                              {countBlog === 0 ? "No" : countBlog} Results
                            </h5>
                            {query !== "all" && " : " + query}
                            {category !== "all" && " : " + category}
                            {query !== "all" || category !== "all" ? (
                              <Button
                                variant="light"
                                onClick={() => navigate("/search")}
                              >
                                <i className="fas fa-times-circle"></i>
                              </Button>
                            ) : null}
                          </div>
                        </Col>
                      </Row>

                      {blogs.length === 0 && <h1>No blog Found</h1>}

                      <Row>
                        {blogs.map((blog, index) => (
                          <Col sm={6} lg={4} className="mb-3" key={blog._id}>
                            <motion.div
                              variants={blogCardVariant}
                              custom={index}
                              initial="hidden"
                              animate="visible"
                              whileHover="hover"
                            >
                              <Link to={`/Blog/${blog.slug}`}>
                                <Image
                                  className="SearchBlogImg"
                                  src={blog.image}
                                  alt={blog.title}
                                  fluid
                                />
                              </Link>
                              <h4>{blog.title}</h4>
                            </motion.div>
                          </Col>
                        ))}
                      </Row>

                      <div className="pagination">
                        {[...Array(pages).keys()].map((x) => (
                          <LinkContainer
                            key={x + 1}
                            className="mx-1"
                            to={{
                              pathname: "/search",
                              search: getFilterUrl({ page: x + 1 }, true),
                            }}
                          >
                            <Button
                              className={
                                Number(page) === x + 1 ? "text-bold" : ""
                              }
                              variant="light"
                            >
                              {x + 1}
                            </Button>
                          </LinkContainer>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Container>
    </motion.div>
  );
}
