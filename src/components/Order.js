import React from "react";

function Order({ orderData, onDeleteOrder, setOrderData }) {
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
<<<<<<< HEAD
=======

>>>>>>> 6ace65bdac6b3834de8b9b7a517c248eab2ee306
  );
}

export default Order;