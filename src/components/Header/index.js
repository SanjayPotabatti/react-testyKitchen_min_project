import {HiViewList} from 'react-icons/hi'
import './index.css'

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="d-flex flex-row align-items-center p-1">
      <img
        src="https://res.cloudinary.com/dlhxfaljh/image/upload/v1642240090/testyKitchen/Group_7420_2_x9ybhz.png"
        className="logo-image-header"
        alt="website logo"
      />
      <h1 className="header-heading ml-2">Tasty Kitchen</h1>
    </div>
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
      <ul className="navbar-nav pr-5">
        <li className="nav-item active navItemsHeading p-2">Home</li>
        <li className="nav-item navItemsHeading p-2">Cart</li>
        <li className="nav-item">
          <button className="logout-button p-2" type="button">
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
