import {Link, withRouter} from 'react-router-dom'
import {HiViewList} from 'react-icons/hi'
import Cookies from 'js-cookie'
import CartContext from '../../Context/CartContext'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props

    history.replace('/login')
  }

  const renderCartItemsCount = () => (
    <CartContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length

        return (
          <>
            {cartItemsCount > 0 ? (
              <span className="cart-count-badge">{cartList.length}</span>
            ) : null}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbarBg">
      <Link to="/" className="nav-link">
        <div className="d-flex flex-row align-items-center p-1">
          <img
            src="https://res.cloudinary.com/dlhxfaljh/image/upload/v1642240090/testyKitchen/Group_7420_2_x9ybhz.png"
            className="logo-image-header"
            alt="website logo"
          />
          <h1 className="header-heading ml-2">Tasty Kitchen</h1>
        </div>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <HiViewList />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul className="navbar-nav d-flex flex-row align-items-center pr-5">
          <Link to="/" className="nav-link">
            <li className="nav-item active navItemsHeading p-2">Home</li>
          </Link>
          <Link to="/cart">
            <li className="nav-item navItemsHeading p-2">
              Cart
              {renderCartItemsCount()}
            </li>
          </Link>
          <li className="nav-item">
            <button
              className="logout-button p-2"
              type="button"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Header)
