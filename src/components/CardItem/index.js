// Write your code here.

import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} bg_container`}>
      <h1 className="card_heading">{title}</h1>
      <p className="card_description">{description}</p>
      <div className="pictures_alignment">
        <img className="images_picture" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
