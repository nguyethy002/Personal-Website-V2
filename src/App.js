import React from "react";

import { Header, Footer } from "components";
import { HomePage } from "pages";
import "App.css";
import "styles/general.style.sass";
import "styles/App.style.sass";

function App() {
  return (
    <div className="app">
      <Header />

      <HomePage />

      <Footer/>
    </div>
  );
}

export default App;
