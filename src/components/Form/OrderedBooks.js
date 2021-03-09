import React from "react";
import { connect } from "react-redux";
import { ListGroup, Image } from "react-bootstrap";
import style from "./Form.module.css";

const OrderedBooks = ({ books, booksInCart }) => {
  const showPrice = (price, quantity) => {
    return ((price / 100) * quantity).toFixed(2);
  };

  return (
    <>
      <ListGroup variant="flush">
        {books
          .filter((book) => Object.keys(booksInCart).includes(`${book.id}`))
          .map((book) => (
            <ListGroup.Item style={{ margin: "1rem" }} key={book.id}>
              <div className={style.listGroup}>
                <div className={style.listItem}>
                  <Image className={style.image} src={book.cover_url} />
                  <div className={style.smallContainer}>
                    <p className={style.title}>{book.title}</p>
                    <p className={style.smallText}>{book.author}</p>
                  </div>
                </div>
                <div className={style.priceGroup}>
                <p>Ilość: {booksInCart[book.id].quantity}</p>
                <p>{`Wartość: ${showPrice(book.price, booksInCart[book.id].quantity)} zł`}</p>
                </div>
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </>
  );
};

const mapStateToProps = (state) => ({
  booksInCart: state.cart.booksInCart,
  books: state.books.booksList,
});

export default connect(mapStateToProps, {})(OrderedBooks);
