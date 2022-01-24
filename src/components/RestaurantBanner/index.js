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
    <div className="bannerBg d-flex align-items-center">
      <div className="bannerContainer d-flex flex-row p-2">
        <img src={imageUrl} alt="restaurant" className="resImage" />
        <div className="d-flex flex-column justify-content-center m-2">
          <h1 className="resName">{name}</h1>
          <p className="resCuisine">{cuisine}</p>
          <p className="resLocation">{location}</p>
          <div className="ratingRateContainer">
            <div className="ratingContainer">
              <p className="rating">
                <FaStar />
                {rating}
              </p>
              <p className="subText m-0">{reviewsCount}+ Ratings</p>
            </div>
            <hr className="separationLine" />
            <div className="ratingContainer m-0">
              <p className="rating m-0">
                <FaRupeeSign />
                {costForTwo}
              </p>
              <p className="subText m-0">Cost for two</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantBanner
