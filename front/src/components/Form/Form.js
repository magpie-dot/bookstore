import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { connect } from "react-redux";
import style from "./Form.module.css";
import { clearCart } from "../../state/cart/actions";
import checkValidation from "./utils";

const initialState = {
    order: [],
    first_name: "",
    last_name: "",
    city: "",
    zip_code: "",
}

class Formular extends React.Component {
  state = initialState;

  prepareBooksInCartToPost = (booksInCart) => {
    const idsArray = Object.keys(booksInCart);
    const orderToPost = idsArray.map((id) => {
      return { id: Number(id), quantity: booksInCart[id].quantity };
    });
    this.setState({
      order: orderToPost,
    });
  };


  handleSubmit = () => {
    checkValidation(this.state)
    // fetch("http://localhost:3001/api/order", {
    //   method: "POST",
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(this.state),
    // }).then(() => { this.props.clearCart();
    //   this.setState(initialState)})
    //   .catch((err) => { console.log("Coś nie wyszło", err);
    //   })
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidMount() {
    this.prepareBooksInCartToPost(this.props.booksInCart);
  }

  render() {
    return (
      <div className={style.formularBox}>
        <Form>
          <Form.Group>
            <Form.Control
              placeholder="Imię"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleOnChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              placeholder="Nazwisko"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleOnChange}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control
                placeholder="Miejscowość"
                name="city"
                value={this.state.city}
                onChange={this.handleOnChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                placeholder="Kod pocztowy"
                name="zip_code"
                value={this.state.zip_code}
                onChange={this.handleOnChange}
              />
            </Form.Group>
          </Form.Row>

          <Button variant="secondary" onClick={this.handleSubmit}>
            Zamawiam i płacę
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  booksInCart: state.cart.booksInCart,
});

const mapDispatchToProps = {
  clearCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Formular);
