import React from "react";

export default function Cart() {
  return (
    <div className="books_body">
      <div className="books__main">
        <div className="books__container">
          <div className="row">
            <div className="books__selected--top">
              <h2 className="cart__title">Cart</h2>
              <div className="cart">
                <div className="cart__header">
                  <div className="cart__book">Book</div>
                  <div className="cart__quantity">Quantity</div>
                  <div className="cart__total">Price</div>
                </div>
                <div className="cart__body">
                  <div className="cart__item">
                    <div className="cart__book">
                      <img
                        src="https://m.media-amazon.com/images/I/81gTRv2HXrL._AC_UF1000,1000_QL80_.jpg"
                        alt=""
                        className="cart__book--img"
                      />
                      <div className="cart__book--info">
                        <span className="cart__book--title"></span>
                        <span className="cart__book--price">$10.00</span>
                        <button className="cart__book--remove">Remove</button>
                      </div>
                    </div>
                    <div className="cart__quantity">
                      <input
                        type="number"
                        min={0}
                        max={99}
                        className="cart__input"
                      />
                    </div>
                    <div className="cart__total">$10.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>$9.00</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>$1.00</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>$10.00</span>
              </div>
              <button className="btn btn__checkout no-cursor">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
