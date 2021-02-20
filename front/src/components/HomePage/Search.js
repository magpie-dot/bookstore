import React from "react";
import { Col, Form, FormControl, Button } from "react-bootstrap";
import style from "./HomePage.module.css";

const Search = ({onValueChange}) => {
    return(
        <div className={style.searchContainer}>
        <Form>
          <Form.Row className="justify-content-center">
              <img src="images/search-icon.svg" alt="search icon" style={{marginRight: "1rem"}}/>
            <Col xs={5}>
              <FormControl type="text" placeholder="Wpisz tytuł książki, której szukasz..." onChange={onValueChange} />
            </Col>
          </Form.Row>
        </Form>
      </div>
    )
}

export default Search