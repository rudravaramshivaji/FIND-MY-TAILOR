import { useEffect, useState } from "react";
import { Card, Navbar } from "../components/index";
import Carousel from "../components/Carousel";

export default function Home() {
  const [location, setLocation] = useState("");
  const Getlocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      try {
        const userAddress = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
        fetch(userAddress)
          .then((res) => res.json())
          .then((response) => {
            setLocation(response.address.county);
            console.log(response);
          });
      } catch (error) {
        console.log(error);
      }
    });
  };
  useEffect(() => {
    if (location === "") {
      Getlocation();
    }
  }, []);
  return (
    <>
      <Navbar />
      <Carousel/>
      <Card location={location} />
    </>
  );
}
