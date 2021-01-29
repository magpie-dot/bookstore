import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";

function BookCard({ books, addToCart }) {
  return (
    <>
      {Object.keys(books).map((key) => (
          <Card style={{ width: "18rem", margin: "1rem"}} key={books[key].id}>
            <Card.Img variant="top" src={books[key].cover_url} />
            <Card.Body>
              <Card.Title>{books[key].title}</Card.Title>
              <Card.Text>
                Autor: {books[key].author}
                </Card.Text>
                <Card.Text>
                Liczba stron: {books[key].pages}
              </Card.Text>
              <Button onClick={addToCart} variant="primary">Dodaj do koszyka</Button>
            </Card.Body>
          </Card>
      ))}
    </>
  );
}

export default connect()(BookCard)
