import {MdSort} from 'react-icons/md'
import './index.css'

const RestaurantHeading = () => (
  <div>
    <h1 className="restHeading">Popular Restaurants</h1>
    <p className="restPara">
      Select Your favourite restaurant special dish and make your day happy...
    </p>
    <div>
      <MdSort className="sortIcon" />
      <select className="sortByOptions">
        <option>Sort by Lowest</option>
        <option>Sort by Highest</option>
      </select>
    </div>
  </div>
)
export default RestaurantHeading
