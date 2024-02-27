import "./App.css";
import React from "react";
import NavBarComponents from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Store from '../src/pages/Store'
import Cancel from '../src/pages/Cancel'
import Success from '../src/pages/Success'
import CartProvider from "./CartContext";

function App() {
  return (
    <CartProvider>

    
    <Container>
      <NavBarComponents>

      </NavBarComponents>
      <BrowserRouter>
        <Routes>
          <Route index element={<Store/>}/>
          <Route path="success" element={<Success/>}/>
          <Route path="cancel" element={<Cancel/>}/>
        </Routes>
      </BrowserRouter>
    </Container>
    </CartProvider>
  );
}

export default App;
