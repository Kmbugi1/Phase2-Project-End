import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Food from "../components/Food";
import NavBar from "./NavBar";


function Menu() {
  const [food, setFood] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const [searchMenuTerm, setSearchMenuTerm] = useState("");

  const { restaurantId } = useParams();

  useEffect(() => {
    fetch("https://project-be-g6ag.onrender.com/food")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);

  function handleOnSearchMenu(e) {
    setSearchMenuTerm(e.target.value);
  }

  const foodBasedOnRestaurant = food.filter((foodItem) => {
    return foodItem.restaurantId === parseInt(restaurantId);
  });

  const filteredFood = foodBasedOnRestaurant.filter((foodItem) => {
    return searchMenuTerm.toLowerCase() === ""
      ? foodItem
      : foodItem.name.toLowerCase().includes(searchMenuTerm);
  });

  useEffect(() => {}, [food]);

  return (
    <div className="container">
      <NavBar orderData={orderData} />
      <div className="menu-container">
        <h2 className="restaurant-browse">Our Menu</h2>
        <Link to="/home">
          <button className="return-btn ">Restaurants</button>
        </Link>
        <form className="d-flex my-4">
          <input
            className="form-control me-2 search-box"
            type="search"
            placeholder="Search For Your Favorite Meal"
            aria-label="Search"
            value={searchMenuTerm}
            onChange={handleOnSearchMenu}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="container-fluid menu p-5 shadow">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
            {filteredFood.map((foodItem) => (
              <Food
                key={foodItem.id}
                food={foodItem}
                orderData={orderData}
                setOrderData={setOrderData}
              />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Menu;