import React from "react";

import { Header } from "components";
import { HomePage } from "pages";
import "App.css";
import "styles/general.style.sass";
import "styles/App.style.sass";

function App() {
  return (
    <div className="app">
      <Header />

      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
