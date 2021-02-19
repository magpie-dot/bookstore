import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchBooks from "../../state/books/actions";
import BookCard from "./BookCard";
import style from "./HomePage.module.css";

const HomePage = (props) => {
  const { fetchBooks, books } = props;

  useEffect(() => {
    fetchBooks();
  },[]);

  return (
    <>
      <div className={style.bookCards}>
        {books.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  books: state.books.booksList,
});

const mapDispatchToProps = {
  fetchBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
