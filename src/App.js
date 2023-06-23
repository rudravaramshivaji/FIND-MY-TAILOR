import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Signup } from "./Pages/index";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<Signup />} />
    </Routes>
  );
}
