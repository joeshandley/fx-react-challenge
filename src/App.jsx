import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Show from "./pages/Show/Show";
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
                <Route path={"show/:id"} element={<Show />} />
              </Routes>
            </section>
          </main>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
