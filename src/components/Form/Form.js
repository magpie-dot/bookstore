import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { connect } from "react-redux";
import style from "./Form.module.css";
import { clearCart } from "../../state/cart/actions";
import checkValidation from "./utils";
import EndOfOrder from "./EndOfOrder";

const initialFormData = {
  first_name: "",
  last_name: "",
  city: "",
  zip_code: "",
};

const Formular = ({ clearCart }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [validation, setValidation] = useState(true);
  const [isOrder, setIsOrder] = useState(false);

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
          setIsOrder(true);      
    }
  };

  const handleOnChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const checkElementValidation = (element) => {
    let validationElements = checkValidation(formData);
    return validationElements[element];
  };

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
            Wymagane 4 - 50 znaków
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
            Wymagane 5 - 50 znaków
          </Form.Control.Feedback>
        </Form.Group>
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
