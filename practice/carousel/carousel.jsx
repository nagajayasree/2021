import React, { Component } from "react";

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
      <div>
        <Arrow
          direction="left"
          onclick={(e) => this.toPrevSlide(e)}
          style={{
            position: "absolute",
            top: "195px",
            left: "360px",
            cursor: "pointer",
          }}
        />
        <img src={this.props.slides[this.state.activeIndex].src} />
        <p>{this.props.slides[this.state.activeIndex].alt}</p>
        <Arrow
          direction="right"
          onclick={(e) => this.toNextSlide(e)}
          style={{
            position: "absolute",
            top: "200px",
            right: "370px",
            cursor: "pointer",
          }}
        />
      </div>
    );
  }
}

export default Carousel;

const Arrow = ({ direction, onclick, style }) => {
  return (
    <div>
      <i
        className={`fas fa-arrow-alt-circle-${direction}`}
        style={style}
        onClick={onclick}
      />
    </div>
  );
};
