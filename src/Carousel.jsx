import { Component } from "react";

class Carousel extends Component {
  // class comp must have extends
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    // arrow function doesnt create new scope
    this.setState({
      active: +event.target.dataset.index, // (+event) is a unary plus-> turns string to a number, everyting in dom is a string
    });
  };

  render() {
    // + must have render function
    const { active } = this.state;
    const { images } = this.props; // context important for this keyword
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
