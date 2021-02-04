import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import styles from "./Cart.module.css";
import { connect } from "react-redux";
import {
  increaseAmountOfProduct,
  decreaseAmountOfProduct,
} from "../../state/cart/actions";

const PriceContainer = ({
  booksInCart,
  amount,
  price,
  id,
  increaseAmountOfProduct,
  decreaseAmountOfProduct,
}) => {
  const showPrice = (price) => {
    return ((price / 100) * amount).toFixed(2);
  };

  return (
    <div className={styles.priceContainer}>
      <ButtonGroup variant="outline-secondary">
        <Button
          variant="outline-secondary"
          onClick={() => decreaseAmountOfProduct(id)}
        >
          -
        </Button>
        <div className={styles.priceButton}>{amount}</div>
        <Button
          variant="outline-secondary"
          onClick={() => increaseAmountOfProduct(id)}
        >
          +
        </Button>
      </ButtonGroup>
      <p className={styles.price}>{showPrice(price)} zł</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  booksInCart: state.cart.booksInCart,
});

const mapDispatchToProps = {
  increaseAmountOfProduct,
  decreaseAmountOfProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(PriceContainer);
