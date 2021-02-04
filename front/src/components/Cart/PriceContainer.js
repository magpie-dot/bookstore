import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import styles from "./Cart.module.css";
import { connect } from "react-redux";
import {
  increaseQuantityOfProduct,
  decreaseQuantityOfProduct,
} from "../../state/cart/actions";

const PriceContainer = ({
  quantity,
  price,
  id,
  increaseQuantityOfProduct,
  decreaseQuantityOfProduct,
}) => {
  const showPrice = (price) => {
    return ((price / 100) * quantity).toFixed(2);
  };

  return (
    <div className={styles.priceContainer}>
      <ButtonGroup variant="outline-secondary">
        <Button
          variant="outline-secondary"
          onClick={() => decreaseQuantityOfProduct(id)}
        >
          -
        </Button>
        <div className={styles.priceButton}> {quantity} </div>
        <Button
          variant="outline-secondary"
          onClick={() => increaseQuantityOfProduct(id)}
        >
          +
        </Button>
      </ButtonGroup>
      <p className={styles.price}>{showPrice(price)} zł</p>
    </div>
  );
};

const mapDispatchToProps = {
  increaseQuantityOfProduct,
  decreaseQuantityOfProduct,
};

export default connect(null, mapDispatchToProps)(PriceContainer);
