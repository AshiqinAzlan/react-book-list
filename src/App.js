import React, { useEffect, useState } from "react";

function App() {
  // hook for getting P
  const [books, setData] = useState([]);

  useEffect(() => {
    fetch("http://books.cloudfoundry.com/data/books/")
      .then((response) => response.json())
      .then((books) => {
        setData(books);
      })
      .catch((e) => {
        console.log("There is something wrong");
      });
  }, []);
  return (
    <div>
      <h1 class="header mt-4" style={{ textAlign: "center" }}>
        List of Books
      </h1>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Summary</th>
            <th scope="col">Genre</th>
            <th scope="col">Cover Image</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publication_year}</td>
              <td>{book.genre}</td>
              <td>
                <img
                  src={book.cover_image}
                  style={{ width: "100px" }}
                  alt="Book Cover"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
