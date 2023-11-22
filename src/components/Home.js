import { useEffect, useState } from "react";
import NavBar from "../pages/NavBar";

import Restaurants from "./Restaurants";
export default function Home() {
  const [orderData, setOrderData] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <>
      <NavBar orderData={orderData} setOrderData={setOrderData} />

      <div className="container">
        <div className="main-container">
          <Restaurants
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            restaurants={restaurants}
          />
        </div>
      </div>
    </>
  );
}