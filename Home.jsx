import { useEffect, useState } from "react";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setBooks(data.slice(0, 5)));
  }, []);

  return (
    <div className="container">
      <h1>Welcome to Our Online Bookstore</h1>
      <h2>Your one-stop shop for books</h2>

      <p>Discover, learn, and enjoy reading.</p>

      <h3>Book Categories</h3>
      <ul>
        <li>Fiction</li>
        <li>Programming</li>
        <li>Science</li>
      </ul>

      <h3>Featured Books</h3>

      <img src="/book1.jpg" className="book-img" alt="Book 1" />
      <img src="/book2.jpg" className="book-img" alt="Book 2" />
      <img src="/book3.jpg" className="book-img" alt="Book 3" />

      <h3>Latest Books (API Data)</h3>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
