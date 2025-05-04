// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
    }
  }

  handleNext = () => {
    const {reviewsList} = this.props
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % reviewsList.length,
    }))
  }

  handlePrevious = () => {
    const {currentIndex} = this.state
    if (currentIndex > 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {currentIndex} = this.state
    const currentItem = reviewsList[currentIndex]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <img
          src={currentItem.imgUrl}
          className="image-url"
          alt={currentItem.username}
        />
        <div className="arrows-container">
          <button data-testid="leftArrow" onClick={this.handlePrevious}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow-icon"
              alt="left arrow"
            />
          </button>
          <p className="person-name">{currentItem.username}</p>
          <button data-testid="rightArrow" onClick={this.handleNext}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow-icon"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company-name">{currentItem.companyName}</p>
        <p className="person-description">{currentItem.description}</p>
      </div>
    )
  }
}
export default ReviewsCarousel
