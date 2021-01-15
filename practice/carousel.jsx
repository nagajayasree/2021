import React, { Component } from "react";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          src:
            "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg",
          alt: "Hong Kong",
        },
        {
          src:
            "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp",
          alt: "Singapore",
        },
        {
          src:
            "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp",
          alt: "Japan",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <h1>Carousel Component</h1>
        <Arrow direction="left" position="relative" left="-300px" top="200px" />
        <div>
          {this.state.images.map((img) => (
            <div key={img.alt}>
              <img src={img.src} alt={img.alt} />
              <p className="legend">{img.alt}</p>
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
