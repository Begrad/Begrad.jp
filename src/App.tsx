import React from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Mission from "./components/Mission";
import About from "./components/About";
import Products from "./components/Products";
import Support from "./components/Support";
import Member from "./components/Member";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Mission />
      <About />
      <Products />
      <Support />
      <Member />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
