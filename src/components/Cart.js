import Order from "./Order";

function Cart({ orderData, setOrderData }) {
  const handleOnPay = (e) => {
    e.preventDefault();
    prompt(
      "Once last step! Select the number of tables you want and the Table Number. We have up to 10 tables. Use format: No of tables, (Table No, TableNo......)"
    );
    alert(
      "Your order has been confirmed. You will receive a notification on your order details"
    );
  };

  function handleDeleteOrder() {
    // Update logic to delete the specific order
    // const filteredOrderData = orderData.filter(
    //   (order) => order.id !== orderToDelete.id
    // );
    // setOrderData(filteredOrderData);
    alert("Order deleted");
  }

  return (
    <>
      <button
        type="button"
        className="cart-btn"
        data-toggle="modal"
        data-target="#exampleModalLong"
      >
        <span className="cart-icon-box">
          <i className="bx bx-shopping-bag" id="cart-icon" data-quantity=""></i>
          <span className="number-of-orders">{orderData.length}</span>
        </span>
      </button>

      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Your Orders
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="cart">
              <div className="cart-content">
                <div className="orders-container">
                  {orderData.map((order) => (
                    <Order
                      key={order.id}
                      onDeleteOrder={() => handleDeleteOrder(order)}
                      orderData={order}
                    />
                  ))}
                </div>
              </div>
            </div>

            <span className="order-total">
              Total: KSH{" "}
              {orderData.reduce(
                (acc, order) => acc + order.orderTotalPrice,
                0
              )}
            </span>

            <div className="modal-footer">
              <button type="button" className="btn-buy" onClick={handleOnPay}>
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
