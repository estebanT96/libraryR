import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./pages/Books.jsx";
import { books } from "./data.js";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="books" element={<Books books={books} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
