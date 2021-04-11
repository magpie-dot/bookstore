import { useState, useEffect } from "react";
import { connect } from "react-redux";
import fetchBooks from "../../state/books/actions";
import BookCard from "./BookCard";
import Input from "../../components/Input";
import style from "./HomePage.module.css";
import "./homepage.scss";

const HomePage = (props) => {
  const { fetchBooks, books, isLoading } = props;

  const [bookList, setBookList] = useState(books);
  const [searchTerm, setSearchTerm] = useState("");

  const onValueChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase().trim());
  };

  useEffect(() => {
    if (searchTerm !== "") {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm)
      );
      setBookList(filteredBooks);
    } else setBookList(books); // eslint-disable-next-line
  }, [searchTerm]);

  useEffect(() => {
    setBookList(books); // eslint-disable-next-line
  }, [isLoading]);

  useEffect(() => {
    fetchBooks(); // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="search-bar-container">
        <Input
          variant="search-bar"
          onChange={onValueChange}
          placeholderText="Wpisz tytuł książki, której szukasz..."
        />
      </div>
      <div className="homepage-container">
        <div className="homepage-cards-container">
          {searchTerm !== "" && bookList.length === 0 ? (
            <div style={{ fontSize: 20 }}>
              Niestety w naszej ofercie nie mamy takiej książki
            </div>
          ) : (
            bookList.map((book, key) => <BookCard key={key} book={book} />)
          )}
        </div>
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
