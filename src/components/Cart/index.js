import {Component} from 'react'

import Header from '../Header'
import Footer from '../Footer'

import CartContext from '../../Context/CartContext'
import EmptyCart from '../EmptyCart'
import CartListView from '../CartListView'

import './index.css'

class Cart extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          const isCartEmpty = cartList.length === 0

          return (
            <>
              <Header />
              <div className="cartContainer">
                {isCartEmpty ? <EmptyCart /> : <CartListView />}
              </div>
              <Footer />
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Cart
