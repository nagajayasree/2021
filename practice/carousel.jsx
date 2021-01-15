import React, { Component } from "react";
import "./carousel.css";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  currentSlide(index) {
    this.setState({ activeIndex: index });
  }

  toPrevSlide(e) {
    e.preventDefault();
    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;
    if (index < 1) {
      index = slidesLength;
    }
    --index;
    this.setState({ activeIndex: index });
  }

  toNextSlide(e) {
    e.preventDefault();
    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;
    if (index === slidesLength) {
      index = -1;
    }
    ++index;
    this.setState({ activeIndex: index });
  }

  render() {
    return (
      <>
        <Arrow direction="left" position="relative" left="-300px" top="200px" />
        <div className="carousel-container">
          {this.props.slides.map((slide) => (
            <div key={slide.alt}>
              <img src={slide.src} alt={slide.alt} />
              <p className="legend">{slide.alt}</p>
            </div>
          ))}
        </div>
        <Arrow
          direction="right"
          position="relative"
          right="-300px"
          top="120px"
        />
      </>
    );
  }
}

export default Carousel;

const Arrow = ({ direction, position, left, right, top }) => {
  return (
    <div>
      <i
        className={`fas fa-arrow-alt-circle-${direction}`}
        style={{
          position: `${position}`,
          left: `${left}`,
          top: `${top}`,
          right: `${right}`,
        }}
      ></i>
    </div>
  );
};
