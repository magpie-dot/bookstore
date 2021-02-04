import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import style from "../../App.module.css";

const Navigation = ({ totalBooks, children }) => {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand>Księgarnia</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className={style.link} to="/">Strona główna</Link>
        </Nav>
        <Nav>
          <Link to="/cart">
            {!!totalBooks && (
              <Badge style={{ marginRight: "-0.7rem" }} variant="light">
                {totalBooks}
              </Badge>
            )}
            <img
              src="images/shopping-cart.svg"
              alt="cart"
              height="43"
              width="50"
            />
          </Link>
        </Nav>
      </Navbar>
      <main>{children}</main>
    </>
  );
};

const mapStateToProps = (state) => ({
  totalBooks: state.cart.totalBooks,
});

export default connect(mapStateToProps, {})(Navigation);
