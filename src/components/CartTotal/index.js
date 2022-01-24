import {FaRupeeSign} from 'react-icons/fa'

import CartContext from '../../Context/CartContext'

import './index.css'

const CartTotal = props => {
  const {orderPlaced} = props

  return (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value

        let totalOrderCost = 0
        cartList.forEach(eachCartItem => {
          totalOrderCost += eachCartItem.cost * eachCartItem.quantity
        })
        const onClickPlaceOrder = () => {
          orderPlaced()
        }

        return (
          <>
            <hr className="cartHrLine" />
            <div className="cartTotalContainer">
              <h1 className="totalText">Order Total:</h1>
              <div className="totalContainer">
                <p testid="total-price" className="totalPrice">
                  <FaRupeeSign size={18} /> {totalOrderCost}
                </p>
                <button
                  type="button"
                  className="orderButton"
                  onClick={onClickPlaceOrder}
                >
                  Place Order
                </button>
              </div>
            </div>
          </>
        )
      }}
    </CartContext.Consumer>
  )
}

export default CartTotal
