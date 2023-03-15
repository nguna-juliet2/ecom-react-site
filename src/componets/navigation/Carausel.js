import { useState, useEffect } from "react";
import classes from './Carasel.module.css';
import CarouselData from "./CoraselData";
const Carousel = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="carousel-container">
    <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
      {CarouselData.map((item) => (
        <div key={item.id}>
          <img src={item.image_url} alt={item.id} />
        </div>
      ))}
    </Carousel>
  </div>
  );
};

const MyComponent = () => {
    return (
      <div className={classes.container}>
        <div className={classes.row}>
          <aside className={classes.cartegories}>
            <ul>
              <li>Women's Clothes</li>
              <li>Lifestyle</li>
              <li>Cultural Dresses</li>
            </ul>
          </aside>
          <div className="col-md-8">
            <Carousel />
          </div>
        </div>
      </div>
    );
  };
  
  export default MyComponent;
