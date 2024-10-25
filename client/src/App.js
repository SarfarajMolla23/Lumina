import React from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; // Removed .js extension
import Home from "./components/Home/Home"; // Removed .js extension
import Auth from "./components/Auth/Auth"; // Removed .js extension


const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
