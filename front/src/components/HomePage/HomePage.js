import React from "react";
import { connect } from "react-redux";
import fetchBooks from "../../state/books/actions";
import BookCard from "./BookCard";
import style from "./HomePage.module.css";

class HomePage extends React.Component {

  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    return (
      <>
        <div className={style.bookCards}>
          {this.props.books.map((book) => (<BookCard book={book} />))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books.booksList,
})

const mapDispatchToProps = {
  fetchBooks,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)