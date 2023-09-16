import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import './App.css';
import ContrPage from "./pages/ContrPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContrPage />} />
        </Routes>
      
    </BrowserRouter>
  );
  
}

export default App;
