import {Link} from 'react-router-dom'

import CartContext from '../../Context/CartContext'

import './index.css'

const Payment = () => (
  <CartContext.Consumer>
    {value => {
      const {removeAllCartItems} = value

      const clearCart = () => {
        removeAllCartItems()
      }

      return (
        <>
          <div className="paymentContainer">
            <div className="paymentCard">
              <img
                src="https://res.cloudinary.com/dkobk5oao/image/upload/v1633712753/Vector_1_rjhmoy.png"
                alt="success"
                className="paymentImage"
              />
              <h1 className="paymentHeading">Payment Successful</h1>
              <p className="paymentText">
                Thank you for ordering Your payment is successfully completed.
              </p>
              <Link to="/">
                <button type="button" className="homeBtn" onClick={clearCart}>
                  Go To Home Page
                </button>
              </Link>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Payment
