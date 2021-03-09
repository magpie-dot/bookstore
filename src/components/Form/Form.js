import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { connect } from "react-redux";
import style from "./Form.module.css";
import { clearCart } from "../../state/cart/actions";
import checkValidation from "./utils";
import EndOfOrder from "./EndOfOrder";

const initialFormData = {
  first_name: "",
  last_name: "",
  street: "",
  houseNumber: "",
  local: "",
  city: "",
  zip_code: "",
  phone: "",
  mail: "",
};

const Formular = ({ booksInCart, clearCart }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [validation, setValidation] = useState(true);
  const [isOrder, setIsOrder] = useState(false);
  const [order, setOrder] = useState([]);

  const prepareBooksInCartToPost = (booksInCart) => {
    const idsArray = Object.keys(booksInCart);
    const orderToPost = idsArray.map((id) => {
      return { id: Number(id), quantity: booksInCart[id].quantity };
    });
    setOrder(orderToPost);
  };

  const handleSubmit = () => {
    let validationElements = checkValidation(formData);
    let valueValidationElementsArray = Object.values(validationElements).filter(
      (element) => element === false
    );
    if (valueValidationElementsArray.length > 0) {
      setValidation(false);
    } else {
      clearCart();
      setFormData(initialFormData);
      setValidation(true);
      setOrder([]);
      setIsOrder(true);
    }
  };

  const handleOnChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData)
  };

  const checkElementValidation = (element) => {
    let validationElements = checkValidation(formData);
    console.log(validationElements[element])
    return validationElements[element];
  };

  useEffect(() => {
    prepareBooksInCartToPost(booksInCart);
  }, []);

  return !isOrder ? (
    <div className={style.formularBox}>
      <Form>

        <Form.Group>
          <Form.Control
            isInvalid={
              validation
                ? false
                : !checkElementValidation("firstNameValidation")
            }
            placeholder="Imię"
            name="first_name"
            value={formData.first_name}
            onChange={handleOnChange}
          />
          <Form.Control.Feedback type="invalid">
            Pole wymagane
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Control
            isInvalid={
              validation ? false : !checkElementValidation("lastNameValidation")
            }
            placeholder="Nazwisko"
            name="last_name"
            value={formData.last_name}
            onChange={handleOnChange}
          />
          <Form.Control.Feedback type="invalid">
            Pole wymagane
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Row>

          <Form.Group as={Col} md="6">
            <Form.Control
              isInvalid={
                validation ? false : !checkElementValidation("streetValidation")
              }
              placeholder="Ulica"
              name="street"
              value={formData.street}
              onChange={handleOnChange}
            />
            <Form.Control.Feedback type="invalid">
              Pole wymagane
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Control
              isInvalid={
                validation ? false : !checkElementValidation("houseNumberValidation")
              }
              placeholder="Numer"
              name="houseNumber"
              value={formData.houseNumber}
              onChange={handleOnChange}
            />
            <Form.Control.Feedback type="invalid">
              Pole wymagane
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Control
              isInvalid = {false}
              placeholder="Lokal"
              name="local"
              value={formData.local}
              onChange={handleOnChange}
            />
          </Form.Group>

        </Form.Row>

        <Form.Row>

          <Form.Group as={Col}>
            <Form.Control
              isInvalid={
                validation ? false : !checkElementValidation("cityValidation")
              }
              placeholder="Miejscowość"
              name="city"
              value={formData.city}
              onChange={handleOnChange}
            />
            <Form.Control.Feedback type="invalid">
              Pole wymagane
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control
              isInvalid={
                validation
                  ? false
                  : !checkElementValidation("zipCodeValidation")
              }
              placeholder="Kod pocztowy"
              name="zip_code"
              value={formData.zip_code}
              onChange={handleOnChange}
            />
            <Form.Control.Feedback type="invalid">
              Wymagany format _ _ - _ _ _
            </Form.Control.Feedback>
          </Form.Group>

        </Form.Row>

        <Form.Group>
          <Form.Control
            isInvalid={
              validation ? false : !checkElementValidation("phoneValidation")
            }
            placeholder="Numer telefonu"
            name="phone"
            value={formData.phone}
            onChange={handleOnChange}
          />
          <Form.Control.Feedback type="invalid">
            Pole wymagane
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Control
            isInvalid={
              validation ? false : !checkElementValidation("mailValidation")
            }
            placeholder="Adres e-mail"
            name="mail"
            value={formData.mail}
            onChange={handleOnChange}
          />
          <Form.Control.Feedback type="invalid">
            Pole wymagane
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="secondary" onClick={handleSubmit}>
          Zamawiam i płacę
        </Button>
      </Form>
    </div>
  ) : (
    <EndOfOrder />
  );
};

const mapStateToProps = (state) => ({
  booksInCart: state.cart.booksInCart,
});

const mapDispatchToProps = {
  clearCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Formular);
