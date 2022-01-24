import {FaStar, FaRupeeSign} from 'react-icons/fa'

import './index.css'

const RestaurantBanner = props => {
  const {restaurantData} = props
  const {
    name,
    imageUrl,
    cuisine,
    location,
    rating,
    costForTwo,
    reviewsCount,
  } = restaurantData

  return (
    <div className="banner-bg">
      <div className="banner-container">
        <img src={imageUrl} alt="restaurant" className="res-image" />
        <div className="res-info">
          <h1 className="res-name m-0">{name}</h1>
          <p className="res-cuisine m-0">{cuisine}</p>
          <p className="res-location m-0">{location}</p>
          <div className="rating-rate-container m-0">
            <div className="rating-container m-0">
              <p className="rating m-0">
                <FaStar />
                {rating}
              </p>
              <p className="sub-text m-0">{reviewsCount}+ Ratings</p>
            </div>
            <hr className="separation-line" />
            <div className="rating-container m-0">
              <p className="rating m-0">
                <FaRupeeSign />
                {costForTwo}
              </p>
              <p className="sub-text m-0">Cost for two</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantBanner
