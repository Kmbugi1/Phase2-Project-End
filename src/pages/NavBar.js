import Cart from "../components/Cart";
import { NavLink } from "react-router-dom";
import FoodCourtLogo from "../assets/FoodCourtLogo.jpeg";

function NavBar({ orderData, setOrderData }) {
  return (
    <>
      <nav className="navbar navbar-light bg-light justify-content-around ">
        
        <NavLink to="/welcome" className="logo">
          <img src={FoodCourtLogo} alt="" className="nav-logo" />
        </NavLink>
{/* 
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/login">Login</NavLink> */}

        <Cart setOrderData={setOrderData} orderData={orderData} />
      </nav>

    
    </>
  );
}
export default NavBar;

