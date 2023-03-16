import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderData from './SliderData';
import Products from './Product';
import classes from './Slider.module.css';

const Slider=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 465 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const product = SliderData.map((item)=>(
        <Products
        id={item.id}
        name={item.name}
        image_url={item.image_url}
        price={item.price}
        />
      ))
      return(

        <Carousel responsive={responsive}>
             {product}
         </Carousel>
      )
}
 

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
          <div >
             <Slider/>
          </div>
        </div>
      </div>
    );
  };
  
  export default MyComponent;