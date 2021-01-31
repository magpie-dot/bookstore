import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import styles from "./Cart.module.css";

const PriceContainer = props => {
  return (
    <div className={styles.priceContainer}>
      <ButtonGroup variant="outline-secondary">
        <Button variant="outline-secondary">-</Button>
        <div className={styles.priceButton}>1</div>
        <Button variant="outline-secondary">+</Button>
      </ButtonGroup>
      <p className={styles.price}>{(props.price / 100).toFixed(2)} zł</p>
    </div>
  );
};

export default PriceContainer;
