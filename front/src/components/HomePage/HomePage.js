import React from "react";
import BookCard from "./BookCard";
import style from "./HomePage.module.css";

class HomePage extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    fetch(`http://localhost:3001/api/book`)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          books: data.data,
        })
      );
  }

  render() {
    return (
      <>
        <div className={style.bookCards}>
          <BookCard books={this.state.books} />
        </div>
      </>
    );
  }
}

export default HomePage;
