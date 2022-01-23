import {MdSort} from 'react-icons/md'
import './index.css'

const RestaurantHeading = props => {
  const {activeOptionId, sortByOptions, changeSortby} = props

  const onChangeSortby = event => {
    changeSortby(event.target.value)
  }

  return (
    <div>
      <h1 className="restHeading">Popular Restaurants</h1>
      <p className="restPara">
        Select Your favourite restaurant special dish and make your day happy...
      </p>
      <div>
        <MdSort className="sortIcon" />
        <select
          className="sortByOptions"
          onChange={onChangeSortby}
          value={activeOptionId}
        >
          {sortByOptions.map(eachOption => (
            <option value={eachOption.value}>
              Sort by {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
export default RestaurantHeading
