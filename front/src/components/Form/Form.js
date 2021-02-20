import React, {useState, useEffect} from "react";
import { Form, Button, Col } from "react-bootstrap";
import { connect } from "react-redux";
import style from "./Form.module.css";
import { clearCart } from "../../state/cart/actions";
import checkValidation from "./utils";
import EndOfOrder from "./EndOfOrder";

const POST_URL = "http://localhost:3001/api/order";

const initialState = {
  order: [],
  first_name: "",
  last_name: "",
  city: "",
  zip_code: "",
  validation: true,
  isOrder: false,
};

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
    let validationElements = checkValidation(this.state);
    let valueValidationElementsArray = Object.values(validationElements).filter(
      (element) => element === false
    );
    if (valueValidationElementsArray.length > 0) {
      this.setState({ ...this.state, validation: false });
    } else {
      const dataToPost = {
        order: this.state.order,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        city: this.state.city,
        zip_code: this.state.zip_code,
      };
      fetch(POST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToPost),
      })
        .then(() => {
          this.props.clearCart();
          this.setState({...initialState, isOrder:true});
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  checkElementValidation = (element) => {
    let validationElements = checkValidation(this.state);
    return validationElements[element];
  };

  componentDidMount() {
    this.prepareBooksInCartToPost(this.props.booksInCart);
  }

  render() {
    return (
      !this.state.isOrder ?
      <div className={style.formularBox}>
        <Form>
          <Form.Group>
            <Form.Control
              isInvalid={
                this.state.validation
                  ? false
                  : !this.checkElementValidation("firstNameValidation")
              }
              placeholder="Imię"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleOnChange}
            />
            <Form.Control.Feedback type="invalid">
              Wymagane 4 - 50 znaków
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Control
              isInvalid={
                this.state.validation
                  ? false
                  : !this.checkElementValidation("lastNameValidation")
              }
              placeholder="Nazwisko"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleOnChange}
            />
            <Form.Control.Feedback type="invalid">
              Wymagane 5 - 50 znaków
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control
                isInvalid={
                  this.state.validation
                    ? false
                    : !this.checkElementValidation("cityValidation")
                }
                placeholder="Miejscowość"
                name="city"
                value={this.state.city}
                onChange={this.handleOnChange}
              />
              <Form.Control.Feedback type="invalid">
                Pole wymagane
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Control
                isInvalid={
                  this.state.validation
                    ? false
                    : !this.checkElementValidation("zipCodeValidation")
                }
                placeholder="Kod pocztowy"
                name="zip_code"
                value={this.state.zip_code}
                onChange={this.handleOnChange}
              />
              <Form.Control.Feedback type="invalid">
                Wymagany format _ _ - _ _ _
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Button variant="secondary" onClick={this.handleSubmit}>
            Zamawiam i płacę
          </Button>
        </Form>
      </div>
      : <EndOfOrder/>
    );
  }
}

const mapStateToProps = (state) => ({
  booksInCart: state.cart.booksInCart,
});

const mapDispatchToProps = {
  clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Formular);
