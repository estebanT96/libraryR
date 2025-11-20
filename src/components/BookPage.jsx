import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Book from "./ui/Book.jsx";

export default function BookPage({ books }) {
  const { id } = useParams();
  const [bookId, setBookId] = useState(id - 1);
  console.log(id);
  return (
    <>
      <div>{books[bookId].id}</div>
      <div>{books[bookId].title}</div>
      <div>Rating: {books[bookId].rating}</div>
      <button>Add to Cart</button>
      <h2>Recommended books</h2>
      {books
        .map((book) => <Book book={book} key={book.id} />)
        .slice(0, 4)}
    </>
  );
}
