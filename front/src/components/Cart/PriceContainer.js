import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import styles from "./Cart.module.css";
import { connect } from "react-redux";
import { increaseAmountOfProduct, decreaseAmountOfProduct } from "../../state/cart/actions";

const PriceContainer = (props) => {
    const { booksInCart, amount, price, id, increaseAmountOfProduct, decreaseAmountOfProduct} = props

    return (
        console.log(booksInCart),
      <div className={styles.priceContainer}>
        <ButtonGroup variant="outline-secondary">
          <Button
            variant="outline-secondary"
            onClick={() => decreaseAmountOfProduct(id, booksInCart)}
          >
            -
          </Button>
          <div className={styles.priceButton}>{amount}</div>
          <Button
            variant="outline-secondary"
            onClick={() => increaseAmountOfProduct(id, booksInCart)}
          >
            +
          </Button>
        </ButtonGroup>
        <p className={styles.price}>{(price / 100 * amount).toFixed(2) } zł</p>
      </div>
    );
  }

const mapStateToProps = (state) => ({
    booksInCart: state.cart.booksInCart
})

const mapDispatchToProps = {
increaseAmountOfProduct,
decreaseAmountOfProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceContainer);
