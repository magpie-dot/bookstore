import React from "react";
import { Button, ListGroup, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import PriceContainer from "./PriceContainer"

const Cart = (props) => {
  const { totalBooks, books, booksInCart } = props;
  return (
    (
      <>
        {totalBooks ? (
          <>
            <ListGroup className={styles.container} variant="flush">
              {books
                .filter((book) => Object.keys(booksInCart).includes(`${book.id}`))
                .map((book) => (
                  <ListGroup.Item style={{ margin: "1rem" }} key={book.id}>
                    <div className={styles.listItem}>
                      <Image className={styles.image} src={book.cover_url} />
                      <div className={styles.smallContainer}>
                        <p className={styles.title}>{book.title}</p>
                        <p className={styles.smallText}>{book.author}</p>
                      </div>
                      <PriceContainer price={book.price} id={book.id} amount={booksInCart[book.id].amount}/>
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
    )
  );
};

const mapStateToProps = (state) => ({
  totalBooks: state.cart.totalBooks,
  booksInCart: state.cart.booksInCart,
  books: state.books.booksList,
});

export default connect(mapStateToProps, {})(Cart);
