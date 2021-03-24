import { Link } from "react-router-dom";
import { Navbar, Nav, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import style from "../../App.module.css";
import styles from "./Navigation.module.css";

const Navigation = ({ totalBooks, children }) => {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
      <Link className={style.link} to="/"><Navbar.Brand><span className={styles.title}><span className={styles.titleGradient}>Book</span>'arnia</span></Navbar.Brand>
      </Link>
        <Nav className="mr-auto">
          
          
        </Nav>
        <Nav>
          <Link to="/cart">
            {!!totalBooks && (
              <Badge style={{ marginRight: "-2.7rem" }} variant="light">
                {totalBooks}
              </Badge>
            )}
            <img
              className={styles.cartIcon}
              src="images/shopping-cart.svg"
              alt="cart"
              height="21"
              width="24"
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
