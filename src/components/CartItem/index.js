import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {FaRupeeSign} from 'react-icons/fa'
import CartContext from '../../Context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {incrementCartItemQuantity, decrementCartItemQuantity} = value
      const {cartItem} = props
      const {id, name, quantity, cost, imageUrl} = cartItem

      const decreaseQuantity = () => {
        decrementCartItemQuantity(id)
      }

      const increaseQuantity = () => {
        incrementCartItemQuantity(id)
      }

      return (
        <li testid="cart-item" className="cartItem">
          <div className="cartItemInfo">
            <img src={imageUrl} alt={name} className="cartItemImage" />
            <h1 className="cartItemDesktopName">{name}</h1>
          </div>
          <div className="cartQtyPriceCont">
            <h1 className="cartItemMobileName">{name}</h1>
            <div className="cartQtyContainer">
              <button
                className="decrementQuantity"
                type="button"
                onClick={decreaseQuantity}
                testid="decrement-quantity"
              >
                <BsDashSquare size={16} />
              </button>
              <p testid="item-quantity" className="itemQuantity">
                {quantity}
              </p>
              <button
                className="incrementQuantity"
                type="button"
                onClick={increaseQuantity}
                testid="increment-quantity"
              >
                <BsPlusSquare size={16} />
              </button>
            </div>

            <p className="price">
              <FaRupeeSign /> {cost * quantity}/-
            </p>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
