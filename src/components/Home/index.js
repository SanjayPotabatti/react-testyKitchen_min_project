import {Component} from 'react'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {MdArrowForwardIos, MdArrowBackIosNew} from 'react-icons/md'

import Header from '../Header'
import RestaurantHeading from '../RestaurantHeading'
import RestaurantItemDetails from '../RestaurantItemDetails'

import Footer from '../Footer'
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

class Home extends Component {
  state = {isLoading: false, activePage: 1, restaurantsList: []}

  componentDidMount() {
    this.getRestaurants()
  }

  getRestaurants = async () => {
    this.setState({isLoading: true})
    const {activePage, restaurantsList} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const LIMIT = 9
    const offset = (activePage - 1) * LIMIT
    const apiUrl = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${LIMIT}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const totalRestaurants = data.total
    const totalPages = Math.ceil(totalRestaurants / LIMIT)

    if (response.ok) {
      const updatedData = data.restaurants.map(eachRest => ({
        id: eachRest.id,
        cuisine: eachRest.cuisine,
        imageUrl: eachRest.image_url,
        name: eachRest.name,
        rating: eachRest.user_rating.rating,
        totalReviews: eachRest.user_rating.total_reviews,
      }))
      this.setState({
        restaurantsList: updatedData,
        isLoading: false,
        totalPages,
      })
    }
  }

  renderLoadingView = () => (
    <div className="products-loader-container" testid="restaurants-list-loader">
      <Loader type="Oval" color="#F7931E" height="50" width="50" />
    </div>
  )

  onDecrement = () => {
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

  onIncrement = () => {
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

  renderRestaurantList = () => {
    const {restaurantsList, activePage, totalPages} = this.state
    return (
      <div className="restBg">
        <RestaurantHeading />
        <ul>
          {restaurantsList.map(eachItem => (
            <RestaurantItemDetails
              restaurantDetails={eachItem}
              key={eachItem.id}
            />
          ))}
        </ul>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <button
            type="button"
            className="buttonStyle m-3"
            onClick={this.onDecrement}
          >
            <MdArrowBackIosNew />
          </button>
          <p className="paginationText mt-3">
            {activePage} of {totalPages}
          </p>
          <button
            type="button"
            className="buttonStyle m-3"
            onClick={this.onIncrement}
          >
            <MdArrowForwardIos />
          </button>
        </div>

        <Footer />
      </div>
    )
  }

  renderRestaurantDetails = () => {
    const {isLoading} = this.state

    switch (isLoading) {
      case true:
        return this.renderLoadingView()
      case false:
        return this.renderRestaurantList()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="homeBg">
        <Header />
        <div>{this.renderRestaurantDetails()}</div>
      </div>
    )
  }
}

export default Home
