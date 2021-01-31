import React from "react";
import { Button, ListGroup, Image, ButtonGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const { isEmpty, books } = props;
  return (
    <>
      {!isEmpty ? (
        <>
          <ListGroup className={styles.container} variant="flush">
            {books.map((book) => (
              <ListGroup.Item style={{ margin: "1rem" }} key={book.id}>
                <div className={styles.listItem}>
                  <Image className={styles.image} src={book.cover_url} />
                  <div className={styles.smallContainer}>
                    <p className={styles.title}>{book.title}</p>
                    <p className={styles.smallText}>{book.author}</p>
                  </div>
                  <div className={styles.priceContainer}>
                    <ButtonGroup variant="outline-secondary">
                      <Button variant="outline-secondary">-</Button>
                        <div className={styles.priceButton}>1</div>
                      <Button variant="outline-secondary">+</Button>
                    </ButtonGroup>
                    <p className={styles.price}>
                      {(book.price / 100).toFixed(2)} zł
                    </p>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button variant="secondary">
            <Link to="/formular">Dalej</Link>
          </Button>
        </>
      ) : (
        <div>Jeszcze nie dodałeś nic do koszyka</div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isEmpty: state.cart.isEmpty,
  booksInCart: state.cart.booksListId,
  books: state.books.booksList,
});

export default connect(mapStateToProps, {})(Cart);
