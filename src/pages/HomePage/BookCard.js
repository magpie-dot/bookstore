import { connect } from "react-redux";
import { addProductToCart } from "../../state/cart/actions";
import style from "./HomePage.module.css";
import Button from "../../components/Button";


const BookCard= ({book, addProductToCart}) => {

    const showPrice = (price) => {
        return ((price / 100)).toFixed(2);
      };
    return (
        <div style={{ width: "18rem", margin: "1rem" }} className="container" key={book.id}>
            <img src="images/info.jpg"/>
            <div> <img src={book.cover_url}/></div>
            <div>
                <p>{book.category}</p>
                <p>{book.title}</p>
                <p>{book.author}</p>
                <p>{showPrice(book.price)} zł</p>
            </div>
            <Button buttonName="Dodaj do koszyka" variant="primary" handleOnClick={() => addProductToCart(book.id)}/>
        </div>
    )
}

// const BookCard = ({ book, addProductToCart }) => {
//   return (
//     <>
//       <Card style={{ width: "18rem", margin: "1rem" }} key={book.id}>
//         <Card.Img variant="top" src={book.cover_url} />

//         <Card.Body className={style.container}>
//           <div className={style.smallContainer}>
//             <Card.Title>{book.title}</Card.Title>
//             <Card.Text>Autor: {book.author}</Card.Text>
//             <Card.Text>Liczba stron: {book.pages}</Card.Text>
//           </div>
//           <Button buttonName="Dodaj do koszyka" variant="primary" handleOnClick={() => addProductToCart(book.id)}>
//           </Button>
//         </Card.Body>
//       </Card>
//     </>
//   );
// };

const mapDispatchToProps = {
  addProductToCart,
};

export default connect(null, mapDispatchToProps)(BookCard);
