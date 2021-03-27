import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addProductToCart } from "../../state/cart/actions";
import style from "./HomePage.module.css";
import Button from "../../components/Button";


const BookCard = ({ book, addProductToCart }) => {
  return (
    <>
      <Card style={{ width: "18rem", margin: "1rem" }} key={book.id}>
        <Card.Img variant="top" src={book.cover_url} />

        <Card.Body className={style.container}>
          <div className={style.smallContainer}>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>Autor: {book.author}</Card.Text>
            <Card.Text>Liczba stron: {book.pages}</Card.Text>
          </div>
          <Button buttonName="Dodaj do koszyka" styleButton="primary" handleOnClick={() => addProductToCart(book.id)}>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

const mapDispatchToProps = {
  addProductToCart,
};

export default connect(null, mapDispatchToProps)(BookCard);
