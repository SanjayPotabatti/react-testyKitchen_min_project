import {Link} from 'react-router-dom'

import './index.css'

const EmptyCartView = () => (
  <div className="emptyCartContainer">
    <img
      src="https://res.cloudinary.com/dm4o2tuyu/image/upload/v1639643993/cooking_1_ilsanp.png"
      className="emptyCartImage"
      alt="empty cart"
    />
    <h1 className="noOrderHeading">No Order Yet!</h1>
    <p className="noOrderText">
      Your cart is empty. Add something from the menu.
    </p>
    <Link to="/">
      <button type="button" className="orderOtn">
        Order Now
      </button>
    </Link>
  </div>
)

export default EmptyCartView
