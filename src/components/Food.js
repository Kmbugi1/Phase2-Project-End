import { useState, useEffect } from "react";
import Order from "./Order";

function Food({ food, setOrderData, orderData }) {
  console.log(food)
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(food.price);

  function handleOnAddQuantity() {
    setQuantity((q) => q + 1);
  }

  function handleOnReduceQuantity() {
    if (quantity >= 2) setQuantity((q) => q - 1);
  }

  useEffect(() => {
    setTotalPrice(food.price * quantity);
  }, [food.price, quantity]);

  function handleAddOrder(e) {
    e.preventDefault();

    let newOrderData = {
      orderQuantity: quantity,
      orderTotalPrice: totalPrice,
      orderFoodImage: food.photoName,
      orderFoodName: food.name,
    };

    setOrderData((orderData) => [...orderData, newOrderData]);

    console.log(orderData);
  }
  const handleOnPay = (e) => {
    e.preventDefault();
    alert("Your payment has been requested.");
  };

  return (
    <div className=" food-container shadow p-2 d-flex flex-column">
      <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 p-2">
        <div className="image-container">
          <img className="" src={food.PhotoName} alt={food.name} />
        </div>

        <div className="col d-flex flex-column">
          <div className="food-details-container d-flex flex-column">
            <h5 className="">{food.name}</h5>

            <div className="quantity-price-container ">
              <span>Ksh {totalPrice}</span>

              <div className="quantity-btn mt-auto">
                <button
                  className="btn-quantity-reduce btn-quantity"
                  onClick={handleOnReduceQuantity}
                >
                  -
                </button>
                <span className="btn">{quantity}</span>
                <button
                  className="btn-quantity-add btn-quantity"
                  onClick={handleOnAddQuantity}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="order-btn w-100 shadow mt-auto"
        // class="cart-btn"
        data-toggle="modal"
        data-target="#exampleModalLong"
        onClick={handleAddOrder}
      >
        Add to Order
      </button>

      <div
        class="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Your Orders
              </h5>
              <button
                type="button"
                class="close"
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
                    <Order orderData={order} />
                  ))}
                </div>
              </div>
            </div>

            <span className="order-total">
              Total: KSH{" "}
              {orderData.reduce(
                (acc, orderData) => acc + orderData.orderTotalPrice,
                0
              )}
            </span>

            <div class="modal-footer ">
              <button type="button" className="btn-buy" onClick={handleOnPay}>
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Food;