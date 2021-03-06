import { connect } from "react-redux";
import { addProductToCart } from "../../state/cart/actions";
import Button from "../../components/Button";
import "./homepage.scss";

const BookCard = ({ book, addProductToCart }) => {
  const showPrice = (price) => {
    return (price / 100).toFixed(2);
  };
  return (
    <div className="card-container" key={book.id}>
      <img className="card-info-icon" src="images/info-icon.svg" alt="info icon"/>
      <div>
        <div className="image-container">
          <img className="book-cover-image" src={book.cover_url} alt="book cover"/>
        </div>
        <hr className="card-first-line" />
      </div>
      <div className="card-small-container">
        <p className="book-category">{book.category}</p>
        <p className="book-title">{book.title}</p>
        <p className="book-author">{book.author}</p>
      </div>
      <div>
        <p className="book-price">{showPrice(book.price)} zł</p>
        <hr className="card-second-line" />
        <Button
          buttonName="Dodaj do koszyka"
          variant="primary"
          handleOnClick={() => addProductToCart(book.id)}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addProductToCart,
};

export default connect(null, mapDispatchToProps)(BookCard);
