import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Badge from "../Badge"
import "./nav.scss"
import style from "../../App.module.css";

const Navigation = ({ totalBooks }) => {
  return (
      <nav className="nav-background">
        <div className="nav">
      <Link className={style.link} to="/"><span className="title"><span className="titleGradient">Book</span>'arnia</span>
      </Link>
          <Link to="/cart">
            {!!totalBooks && (
              <Badge children={totalBooks}/>
            )}
            <img
              className="cartIcon"
              src="images/shopping-cart.svg"
              alt="cart"/>
          </Link>
          </div>
      </nav>
  );
};

const mapStateToProps = (state) => ({
  totalBooks: state.cart.totalBooks,
});

export default connect(mapStateToProps, {})(Navigation);
