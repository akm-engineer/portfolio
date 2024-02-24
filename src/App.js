import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Exprience from "./components/Exprience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Exprience />
      <Contact />
      <SocialLinks />
    </>
  );
}

export default App;
