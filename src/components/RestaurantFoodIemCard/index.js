import {Component} from 'react'

import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {ImStarFull} from 'react-icons/im'
import {FaRupeeSign} from 'react-icons/fa'

import CartContext from '../../Context/CartContext'

import './index.css'

class RestaurantFoodIemCard extends Component {
  state = {
    quantity: 0,
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {
            addCartItem,
            incrementCartItemQuantity,
            decrementCartItemQuantity,
          } = value

          const {foodItem} = this.props
          const {id, imageUrl, name, cost, rating} = foodItem
          const {quantity} = this.state

          const onClickAdd = () => {
            this.setState(
              prevState => ({
                quantity: prevState.quantity + 1,
              }),
              addCartItem({...foodItem, quantity: quantity + 1}),
            )
          }

          const onDecreaseQuantity = () => {
            this.setState(prevState => ({quantity: prevState.quantity - 1}))
            decrementCartItemQuantity(id)
          }

          const onIncreaseQuantity = () => {
            this.setState(prevState => ({quantity: prevState.quantity + 1}))
            incrementCartItemQuantity(id)
          }

          return (
            <li testid="foodItem" className="foodItem">
              <img src={imageUrl} alt="food item" className="foodItemImage" />
              <div className="foodItemInfo">
                <h1 className="foodItemName m-0">{name}</h1>
                <div className="costCont">
                  <FaRupeeSign size={14} color="#334155" />
                  <p className="foodItemCost m-0">{cost}</p>
                </div>
                <div className="ratingCont">
                  <ImStarFull size={14} color="#FFCC00" />
                  <p className="foodItemRating">{rating}</p>
                </div>
                {quantity === 0 ? (
                  <button type="button" className="addBtn" onClick={onClickAdd}>
                    Add
                  </button>
                ) : (
                  <div className="cartBtnQtyCont">
                    <button
                      testid="decrement-count"
                      type="button"
                      className="decrementCount"
                      onClick={onDecreaseQuantity}
                    >
                      <BsDashSquare className="iconBtn" />
                    </button>
                    <p testid="active-count" className="activeCount">
                      {quantity}
                    </p>
                    <button
                      testid="increment-count"
                      type="button"
                      className="incrementCount"
                      onClick={onIncreaseQuantity}
                    >
                      <BsPlusSquare className="iconBtn" />
                    </button>
                  </div>
                )}
              </div>
            </li>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default RestaurantFoodIemCard
