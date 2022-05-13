import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import AddLocation from "./AddLocation";
import Map from "./Map";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Nav />

          <Routes>
            <Route path="/" element={<Map />}></Route>
            <Route path="addlocation" element={<AddLocation />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
