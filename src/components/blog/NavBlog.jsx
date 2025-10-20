import { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function NavBlog() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search/?query=${query}` : "/search");
  };

  return (
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
        ></FormControl>
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
  );
}

export default NavBlog;