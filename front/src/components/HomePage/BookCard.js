import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";

const BookCard = (props) => {
  const { books } = props
  return (
    <>
      {books.map((book) => (
          <Card style={{ width: "18rem", margin: "1rem"}} key={book.id}>
            <Card.Img variant="top" src={book.cover_url} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                Autor: {book.author}
                </Card.Text>
                <Card.Text>
                Liczba stron: {book.pages}
              </Card.Text>
              <Button variant="primary">Dodaj do koszyka</Button>
            </Card.Body>
          </Card>
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({
  books: state.books.booksList,
});


export default connect(mapStateToProps,{})(BookCard)
