import {
  FaInstagram,
  FaPinterestSquare,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'
import './index.css'

export default function Footer() {
  return (
    <div className="footer-bg-container fixed-bottom">
      <div className="d-flex flex-row justify-content-center pt-4">
        <img
          src="https://res.cloudinary.com/dlhxfaljh/image/upload/v1642240095/testyKitchen/Group_7420_1_usf85n.png"
          alt="website-footer-logo"
          className="footer-image"
        />
        <p className="footer-heading">Tasty Kitchens</p>
      </div>
      <p className="footer-para">
        The only thing we are serious about is food.
      </p>
      <div>
        <p className="footer-para">Contact us on</p>
        <div className="d-flex flex-row justify-content-center pt-4 pb-3">
          <FaInstagram
            color="#ffffff"
            className="m-2"
            testid="nstagram-social-icon"
          />
          <FaPinterestSquare
            color="#ffffff"
            className="m-2"
            testid="pintrest-social-icon"
          />
          <FaTwitter
            color="#ffffff"
            className="m-2"
            testid="twitter-social-icon"
          />
          <FaFacebookSquare
            color="#ffffff"
            className="m-2"
            testid="facebook-social-icon"
          />
        </div>
      </div>
    </div>
  )
}
