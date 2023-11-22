import { Link } from "react-router-dom";

function Restaurant({ restaurant }) {
  return (
    <div className="col restaurant-content">
      <Link
        style={{ textDecoration: "none" }}
        to={`/menu/${restaurant.id}`}
        className="logo"
      >
        <div className="restaurant-image-container">
          <img className="" src={restaurant.photo} alt={restaurant.name} />
        </div>
        <h5 style={{ color: "black" }}> {restaurant.name}</h5>
      </Link>
    </div>
  );
}

export default Restaurant;