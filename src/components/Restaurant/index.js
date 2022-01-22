import {Component} from 'react'

import {RiArrowDropLeftLine, RiArrowDropRightLine} from 'react-icons/ri'
import {BsFilterLeft} from 'react-icons/bs'

import Cookies from 'js-cookie'
import RestaurantItemDetails from '../RestaurantItemDetails'

import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

class Restaurant extends Component {
  state = {
    isLoadingRestaurants: false,
    restaurantsList: [],
    activePage: 1,
    sortOption: sortByOptions[1].value,
    totalPages: 0,
  }

  componentDidMount() {
    this.getRestaurants()
  }

  getRestaurants = async () => {
    this.setState({isLoadingRestaurants: true})
    const {activePage, sortOption} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const limit = 9
    const offset = (activePage - 1) * limit
    const url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=${sortOption}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const totalRestaurants = data.total
    const totalPages = Math.ceil(totalRestaurants / limit)
    const updatedData = data.restaurants.map(eachRest => ({
      id: eachRest.id,
      cuisine: eachRest.cuisine,
      imageUrl: eachRest.image_url,
      name: eachRest.name,
      rating: eachRest.rating,
      totalReviews: eachRest.each_reviews,
    }))
    this.setState({
      restaurantsList: updatedData,
      isLoading: false,
      totalPages,
    })
  }

  updateOption = option => {
    this.setState({sortOption: option}, this.getRestaurants)
  }

  decrementPage = () => {
    const {activePage} = this.state
    if (activePage > 1) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage - 1,
        }),
        this.getRestaurants,
      )
    }
  }

  incrementPage = () => {
    const {activePage} = this.state
    if (activePage < 4) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage + 1,
        }),
        this.getRestaurants,
      )
    }
  }

  onChangeSort = option => {
    this.setState({sortOption: option}, this.getRestaurants)
  }

  render() {
    const {restaurantsList, sortOption, activePage, totalPages} = this.state
    return (
      <>
        <div className="restaurant-header">
          <h1 className="popular-heading">Popular Restaurants</h1>
          <div className="select-container">
            <p className="select-text">
              Select Your favourite restaurant special dish and make your day
              happy...
            </p>
            <div className="sort-container">
              <BsFilterLeft size={20} />
              <p className="sorted-text">Sort By</p>
              <select
                value={sortOption}
                className="select-options"
                onChange={this.updateOption}
              >
                {sortByOptions.map(eachOption => (
                  <option
                    key={eachOption.id}
                    value={eachOption.value}
                    className="option"
                  >
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <ul className="restaurants-list">
          {restaurantsList.map(eachItem => (
            <RestaurantItemDetails restaurant={eachItem} key={eachItem.id} />
          ))}
        </ul>
        <div className="pagination-container">
          <button
            type="button"
            className="pagination-button"
            onClick={this.decrementPage}
            testid="pagination-left-button"
          >
            <RiArrowDropLeftLine size={20} />
          </button>
          <p testid="active-page-number" className="page-count">
            {activePage}
          </p>
          <span
            className="page-count"
            style={{marginLeft: '5px', marginRight: '5px'}}
          >
            of
          </span>
          <p className="page-count"> {totalPages}</p>
          <button
            type="button"
            className="pagination-button"
            onClick={this.incrementPage}
            testid="pagination-right-button"
          >
            <RiArrowDropRightLine size={20} />
          </button>
        </div>
      </>
    )
  }
}

export default Restaurant
