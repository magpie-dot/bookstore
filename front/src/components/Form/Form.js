import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import { connect } from "react-redux";
import style from "./Form.module.css";

class Formular extends React.Component {
  state = {
    order: this.props.booksInCart,
    first_name: "",
    last_name: "",
    city: "",
    zip_code:"",
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className={style.formularBox}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control placeholder="Imię" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control placeholder="Nazwisko" />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formBasicPassword">
              <Form.Control placeholder="Miejscowość" />
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicPassword">
              <Form.Control placeholder="Kod pocztowy" />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  booksInCart: state.cart.booksInCart
});

export default connect(mapStateToProps, {})(Formular);
