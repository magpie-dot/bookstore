import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import fetchBooks from "../../state/books/actions";
import Search from "./Search";
import BookCard from "./BookCard";
import style from "./HomePage.module.css";

const HomePage = (props) => {
  const { fetchBooks, books } = props;

  const [filteredBooks, setFilteredBooks] = useState({
    filteredTitles: [],
    filter: "",
  });

  const onValueChange = (event) => {
    let filteredTitles = books.filter((book) =>
      book.title.toLowerCase().includes(event.target.value.toLowerCase().trim())
    );
    setFilteredBooks({ filteredTitles, filter: event.target.value });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Search onValueChange={onValueChange} />
      <div className={style.bookCards}>
        {filteredBooks.filter === "" ? (
          books.map((book) => <BookCard book={book} />)
        ) : filteredBooks.filteredTitles.length === 0 ? (
          <div style={{fontSize: 20}}>Niestety w naszej ofercie nie mamy takiej książki</div>
        ) : (
          filteredBooks.filteredTitles.map((book) => <BookCard book={book} />)
        )}
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
