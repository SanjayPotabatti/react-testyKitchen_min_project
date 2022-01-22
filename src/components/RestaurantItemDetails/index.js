import {Link} from 'react-router-dom'
import {ImStarFull} from 'react-icons/im'

import './index.css'

const RestaurantItemDetails = props => {
  const {restaurant} = props
  const {id, cuisine, imageUrl, name, rating, totalReviews} = restaurant

  return (
    <Link to={`/restaurant/${id}`} className="restaurant-link">
      <li testid="restaurant-item" className="restaurant-card">
        <img src={imageUrl} alt="restaurant" className="restaurant-img" />
        <div className="restaurant-information">
          <h1 className="restaurant-name">{name}</h1>
          <p className="restaurant-cuisine">{cuisine}</p>
          <div className="star-rating">
            <ImStarFull className="star" />
            <p className="total-rating">{rating}</p>
            <p className="user-total-reviews">({totalReviews} rating)</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default RestaurantItemDetails
