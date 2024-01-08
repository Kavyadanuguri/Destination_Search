// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails

  return (
    <div>
      <li className="list-container">
        <img alt={name} className="image" src={imgUrl} />
        <p className="text">{name}</p>
      </li>
    </div>
  )
}

export default DestinationItem
