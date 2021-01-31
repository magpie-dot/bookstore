import React from "react";
import { connect } from "react-redux";
import fetchBooks from "../../state/books/actions";
import BookCard from "./BookCard";
import style from "./HomePage.module.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    return (
      <>
        <div className={style.bookCards}>
          <BookCard />
        </div>
      </>
    );
  }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = {
  fetchBooks,
}

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)