import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { domain } from "../utils/stn";
import { Container, Image } from "react-bootstrap";
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
      } catch (err) {}
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

  return (
    <div className="categoryContainer">
      <Container className="categoryContainer">
        <div>
          <NavBlog />
          <Row>
            <Col md={3} className="categorySection">
              <h3>Category</h3>
              <div>
                <ul>
                  <li>
                    <Link
                      className="allCategory"
                      to={getFilterUrl({ category: "all" })}
                    >
                      Any
                    </Link>
                  </li>
                  {categories.map((c) => (
                    <li key={c}>
                      <Link
                        className="allCategory"
                        to={getFilterUrl({ category: c })}
                      >
                        {c}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div></div>
            </Col>
            <Col md={9} className="searchSection">
              {loading ? (
                <h1>loading </h1>
              ) : error ? (
                <h1 variant="danger">{error}</h1>
              ) : (
                <>
                  <Row className="justify-content-between mb-3">
                    <Col md={6}>
                      <div>
                        <h5> {countBlog === 0 ? "No" : countBlog} Results</h5>
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
                    {blogs.map((blog) => (
                      <Col sm={6} lg={4} className="mb-3" key={blog._id}>
                        <Link to={`/Blog/${blog.slug}`}>
                          <Image
                            className="SearchBlogImg"
                            src={blog.image}
                            alt={blog.title}
                            fluid
                          />
                        </Link>
                        <h4>{blog.title}</h4>
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
                          className={Number(page) === x + 1 ? "text-bold" : ""}
                          variant="light"
                        >
                          {x + 1}
                        </Button>
                      </LinkContainer>
                    ))}
                  </div>
                </>
              )}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
