import React, { useState } from "react";
import Order from "./Order";

function ParentComponent() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderFoodImage: "food1.jpg",
      orderFoodName: "Burger",
      orderTotalPrice: 10,
      orderQuantity: 2,
    },
    {
      id: 2,
      orderFoodImage: "food2.jpg",
      orderFoodName: "Pizza",
      orderTotalPrice: 15,
      orderQuantity: 1,
    },
    // Add more orders as needed
  ]);

  const deleteOrderHandler = (orderId) => {
    // Implement your delete logic here
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <div className="cart-box">
      <img src={orderData.orderFoodImage} alt="" className="cart-img" />
      <div className="detail-box">
        <div className="food-title">{orderData.orderFoodName}</div>
        <div className="food-price">Ksh {orderData.orderTotalPrice}</div>
        <span>{orderData.orderQuantity}</span>
      </div>
      <button onClick={() => onDeleteOrder(orderData)} style={{borderRadius: "25px"}}>
        <span>
          <i className="bx bxs-trash cart-remove m-2"></i>
        </span>
      </button>
    </div>     

  );
}

export default ParentComponent;
