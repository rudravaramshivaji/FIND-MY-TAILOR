import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Signup, TailorProfile } from "./Pages/index";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/profile/:id" element={<TailorProfile />} />
    </Routes>
  );
}
