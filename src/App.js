import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Signup, TailorProfile } from "./Pages/index";
export default function App() {
  const [location, setLocation] = useState("");
  const User = localStorage.getItem("UserName");
  const Getlocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      try {
        const userAddress = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
        fetch(userAddress)
          .then((res) => res.json())
          .then((response) => {
            setLocation(response.address.county);
            console.log(response.address.county);
          });
      } catch (error) {
        console.log(error);
      }
    });
  };
  useEffect(() => {
    Getlocation();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {User ? <Route path="/profile/:id" element={<TailorProfile />} /> : null}
      <Route path="/sign-up" element={<Signup location={location} />} />
    </Routes>
  );
}
