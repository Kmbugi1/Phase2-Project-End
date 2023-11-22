import Cart from "../components/Cart";
import { Link } from "react-router-dom";
import FoodCourtLogo from "../assets/FoodCourtLogo.jpeg";

function NavBar({ orderData, setOrderData }) {
  return (
    <>
      <nav className="navbar navbar-light bg-light justify-content-around ">
        <Link to="/welcome" className="logo">
          <img src={FoodCourtLogo} alt="" className="nav-logo" />
        </Link>

        <Cart setOrderData={setOrderData} orderData={orderData} />
      </nav>

    
    </>
  );
}

export default NavBar;