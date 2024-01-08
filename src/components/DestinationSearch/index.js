import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResult = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="container1">
          <input
            value={searchInput}
            type="search"
            onChange={this.onInput}
            placeholder="Search"
          />
          <img
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="image"
          />
        </div>
        <ul>
          {searchResult.map(each => (
            <DestinationItem destinationDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
