import logo from "./logo.svg";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
