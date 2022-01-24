import {Component} from 'react'

import Payment from '../Payment'
import CartItem from '../CartItem'
import CartTotal from '../CartTotal'

import CartContext from '../../Context/CartContext'

import './index.css'

class CartListView extends Component {
  state = {
    isOrderPlaced: false,
  }

  orderPlaced = () => {
    this.setState(prevState => ({isOrderPlaced: !prevState.isOrderPlaced}))
  }

  render() {
    const {isOrderPlaced} = this.state
    return (
      <CartContext.Consumer>
        {value => {
          const stringifiedCartList = localStorage.getItem('cartData')
          const parsedCartList = JSON.parse(stringifiedCartList)
          return isOrderPlaced ? (
            <Payment />
          ) : (
            <div className="cartListContainer">
              <div className="cartHeadersCont">
                <p className="cartTitleItem">Item</p>
                <div className="qunatityAndPrice">
                  <p className="cartHeaderQunatity">Quantity</p>
                  <p className="cartPrice">Price</p>
                </div>
              </div>
              <ul className="cartList">
                {parsedCartList.map(eachItem => (
                  <CartItem
                    key={eachItem.id}
                    cartItem={eachItem}
                    value={value}
                  />
                ))}
              </ul>
              <CartTotal orderPlaced={this.orderPlaced} />
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default CartListView
