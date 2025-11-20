import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { books } from "./data.js";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Books from "./pages/Books.jsx";
import BookPage from "./components/BookPage.jsx";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books books={books} />} />
            <Route path="/books/:id" element={<BookPage books={books}/>}/>
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
