import React from "react";
import Data from "../Data/Data";
import classes from './Imagecard.module.css';
const  ImageCard=({ image }) =>{
  return (
    <div className={classes.gridcontainer}>
    {Data.map((image) => (
      <div key={image.id} className={classes.griditem}   >
        <div className={classes.imagewrapper} >
          <img src={image.image} alt={image.title} />
           
          <h3>{image.title}</h3>
           
        </div>
      </div>
    ))}
  </div>
    
  );
  
}
 
export default ImageCard;

 




 