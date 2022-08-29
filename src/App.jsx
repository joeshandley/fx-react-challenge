import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./global.css";

/**
 * The starting page for your App
 */

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <main>
            <section>
              <Routes>
                <Route path={"/"} element={<Home />} />
<<<<<<< HEAD
=======
                <Route path={"show"} element={<div>Show</div>} />
>>>>>>> fix-routing
              </Routes>
            </section>
          </main>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
