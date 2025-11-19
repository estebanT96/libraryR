import "./App.css";
import Nav from "./components/Nav.jsx";
import Landing from "./components/Landing.jsx";
import Highlights from "./components/Highlights.jsx";
import Featured from "./components/Featured.jsx";
import Discounted from "./components/Discounted.jsx";
import Explore from "./components/Explore.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
      <Footer />
    </>
  );
}

export default App;
