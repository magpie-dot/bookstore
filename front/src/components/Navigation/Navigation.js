import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { connect } from "react-redux";

const Navigation = (props) => {
  const { cart } = props;
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Navbar.Brand>Księgarnia</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">Strona główna</Link>
        </Nav>
        <Nav>
          <Link to="/cart">
            {cart.bookIdList.length === 0 ? null : (
              <Badge style={{ marginRight: "-0.7rem" }} variant="light">
                {cart.bookIdList.length}
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
      <main>{props.children}</main>
    </>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {})(Navigation);
