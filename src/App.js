
import React from "react"
import Layout from "./components/layout";
import Home from "./pages/home";
import Details from "./pages/productDetails";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
            <Route
              path="/:slug"
              element={<Details />}
            />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
