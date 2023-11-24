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
    <div>
      {orders.map((order) => (
        <Order
          key={order.id}
          orderData={order}
          onDeleteOrder={() => deleteOrderHandler(order.id)}
          setOrderData={(newOrderData) => {
            // Example: Update order data in the state
            const updatedOrders = orders.map((o) =>
              o.id === order.id ? { ...o, ...newOrderData } : o
            );
            setOrders(updatedOrders);
          }}
        />
      ))}
    </div>
  );
}

export default ParentComponent;
