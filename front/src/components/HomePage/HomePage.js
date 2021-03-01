import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import fetchBooks from "../../state/books/actions";
import Search from "./Search";
import BookCard from "./BookCard";
import style from "./HomePage.module.css";

const HomePage = (props) => {
  const {fetchBooks, books, isLoading} = props;

  const [bookList, setBookList] = useState([])
  const [searchTerm, setSearchTerm] = useState("");

  const onValueChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchTermInBookList = (searchTerm) => {
    fetch(`http://localhost:3001/api/book?search[title]=${searchTerm}`)
    .then((res) => res.json())
    .then((bookData) => {
      console.log(bookData.data[2])
      const booksList = Object.keys(bookData.data).map((key) => books.data[key]);
        setBookList(booksList)
    })
  }

  useEffect(() => {
    if (searchTerm !== ""){
    searchTermInBookList(searchTerm)}
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm === ""){
    setBookList(books)}
  })

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Search onValueChange={onValueChange} />
      <div className={style.bookCards}>
        {!isLoading && searchTerm !== "" && bookList.length === 0 ? (
          <div style={{ fontSize: 20 }}>
            Niestety w naszej ofercie nie mamy takiej książki
          </div>
        ) : (
          bookList.map((book) => <BookCard book={book} />)
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  books: state.books.booksList,
  isLoading: state.books.isLoading,
});

const mapDispatchToProps = {
  fetchBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
